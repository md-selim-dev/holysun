const rateLimitMap = new Map<string, { count: number; timestamp: number }>();
const WINDOW_MS = 60 * 1000;
const MAX_REQUESTS = 5;
const MAX_TRACKED_IPS = 500;

const ALLOWED_INQUIRY_TYPES = new Set([
  'ব্যবসায়িক উদ্যোগ ও প্রস্তাবনা (Business Proposal)',
  'উদ্যোক্তা ও কর্মী হিসেবে যুক্ত হওয়ার আগ্রহ',
  'HOLYSUN Lifetime Membership তথ্য অনুসন্ধান',
  'শিক্ষা ও কারিগরি প্রশিক্ষণ বিষয়ে জিজ্ঞাসা',
  'সাধারণ যোগাযোগ ও কর্পোরেট তথ্য',
]);

const ALLOWED_ROLES = new Set([
  'উদ্যোক্তা হিসেবে',
  'কর্মী হিসেবে',
  'উদ্যোক্তা ও কর্মী উভয় হিসেবে',
  'আজীবন সদস্যপদ আগ্রহী',
  'সাধারণ তথ্য অনুসন্ধানকারী',
]);

function sanitizeText(input: unknown, maxLength = 1000): string {
  if (typeof input !== 'string') return '';
  return input
    .replace(/[<>]/g, '')
    .trim()
    .slice(0, maxLength);
}

function pruneRateLimitMap(now: number) {
  if (rateLimitMap.size <= MAX_TRACKED_IPS) return;
  for (const [key, val] of rateLimitMap.entries()) {
    if (now - val.timestamp >= WINDOW_MS) {
      rateLimitMap.delete(key);
    }
  }
  if (rateLimitMap.size > MAX_TRACKED_IPS) {
    const oldestKey = rateLimitMap.keys().next().value;
    if (oldestKey) rateLimitMap.delete(oldestKey);
  }
}

function jsonResponse(payload: Record<string, unknown>, status = 200): Response {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  });
}

export async function onRequestPost(context: { request: Request }): Promise<Response> {
  const req = context.request;

  try {
    const contentType = req.headers.get('content-type') || '';
    if (!contentType.includes('application/json')) {
      return jsonResponse({ ok: false, errorBn: 'অবৈধ অনুরোধ ফরম্যাট।' }, 415);
    }

    const clientIp =
      req.headers.get('cf-connecting-ip') ||
      req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      'anonymous-client';
    const now = Date.now();
    pruneRateLimitMap(now);
    const record = rateLimitMap.get(clientIp);

    if (record && now - record.timestamp < WINDOW_MS) {
      if (record.count >= MAX_REQUESTS) {
        return jsonResponse(
          {
            ok: false,
            errorBn:
              'অতিরিক্ত অনুরোধ পাঠানো হয়েছে। অনুগ্রহ করে এক মিনিট অপেক্ষা করে আবার চেষ্টা করুন।',
          },
          429
        );
      }
      record.count += 1;
    } else {
      rateLimitMap.set(clientIp, { count: 1, timestamp: now });
    }

    const body = (await req.json()) as Record<string, unknown>;

    // Honeypot spam protection
    if (body.websiteUrl && String(body.websiteUrl).trim().length > 0) {
      return jsonResponse({
        ok: true,
        referenceId: 'HS-FILTERED',
        messageBn: 'আপনার বার্তাটি গ্রহণ করা হয়েছে।',
      });
    }

    const fullName = sanitizeText(body.fullName, 120);
    const phone = sanitizeText(body.phone, 30);
    const email = sanitizeText(body.email, 120);
    const rawInquiryType = sanitizeText(body.inquiryType, 100);
    const inquiryType = ALLOWED_INQUIRY_TYPES.has(rawInquiryType)
      ? rawInquiryType
      : 'সাধারণ যোগাযোগ ও কর্পোরেট তথ্য';
    const ventureSlug = sanitizeText(body.ventureSlug, 100);
    const rawRole = sanitizeText(body.participationRole, 80);
    const participationRole = ALLOWED_ROLES.has(rawRole)
      ? rawRole
      : 'সাধারণ তথ্য অনুসন্ধানকারী';
    const message = sanitizeText(body.message, 2500);

    if (!fullName || fullName.length < 2) {
      return jsonResponse(
        { ok: false, errorBn: 'অনুগ্রহ করে আপনার সম্পূর্ণ নাম লিখুন।' },
        400
      );
    }

    const bdPhoneRegex = /^[0-9+\-\s()]{7,20}$/;
    if (!phone || !bdPhoneRegex.test(phone)) {
      return jsonResponse(
        { ok: false, errorBn: 'অনুগ্রহ করে একটি সঠিক ফোন বা মোবাইল নম্বর প্রদান করুন।' },
        400
      );
    }

    if (email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return jsonResponse(
          { ok: false, errorBn: 'অনুগ্রহ করে একটি সঠিক ইমেইল ঠিকানা প্রদান করুন।' },
          400
        );
      }
    }

    if (!message || message.length < 10) {
      return jsonResponse(
        {
          ok: false,
          errorBn:
            'অনুগ্রহ করে আপনার প্রস্তাবনা বা বার্তার সংক্ষিপ্ত বিবরণ লিখুন (কমপক্ষে ১০ অক্ষর)।',
        },
        400
      );
    }

    const referenceId = `HS-${new Date().getFullYear()}-${Math.floor(
      100000 + Math.random() * 900000
    )}`;

    return jsonResponse({
      ok: true,
      referenceId,
      submittedAt: new Date().toISOString(),
      summary: {
        fullName,
        phone,
        email: email || 'প্রদান করা হয়নি',
        inquiryType,
        ventureSlug: ventureSlug || 'সামগ্রিক ইকোসিস্টেম',
        participationRole,
      },
      messageBn:
        'আপনার বার্তা ও প্রস্তাবনা সফলভাবে HOLYSUN OPC LIMITED-এর পর্যালোচনা তালিকায় সংরক্ষিত হয়েছে। প্রয়োজন অনুযায়ী আমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবেন।',
    });
  } catch {
    return jsonResponse(
      {
        ok: false,
        errorBn: 'ফর্ম জমা দেওয়ার সময় একটি কারিগরি ত্রুটি হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।',
      },
      500
    );
  }
}
