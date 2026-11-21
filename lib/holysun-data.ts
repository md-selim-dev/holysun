export interface VentureItem {
  id: string;
  indexNumber: string;
  slug: string;
  name: string;
  tagline: string;
  sectorBn: string;
  filterKey: 'commerce' | 'agro' | 'service' | 'social' | 'education' | 'tech';
  shortDescriptionBn: string;
  detailedOverviewBn: string;
  plannedActivitiesBn: string[];
  ecosystemRoleBn: string;
  participationScopeBn: string[];
  statusLabelBn: string;
  imageUrl: string;
  imageAltBn: string;
  imageCreditNote: string;
  accentTone: 'sunshine' | 'sky' | 'green' | 'navy';
}

export const GENERATED_ASSETS = {
  heroEcosystem: '/src/assets/images/hero_holysun_ecosystem_1795265885484.jpg',
  agroGreen: '/src/assets/images/venture_agro_green_1795265885269.jpg',
  healthcareFamily: '/src/assets/images/venture_healthcare_family_1795265886084.jpg',
  educationTraining: '/src/assets/images/venture_education_training_1795265886127.jpg',
  commerceLogistics: '/src/assets/images/venture_commerce_logistics_1795265885873.jpg',
};

export const COMPANY_INFO = {
  name: 'HOLYSUN OPC LIMITED',
  chairman: 'Md. Abdul Mannan (Milon)',
  chairmanRole: 'Chairman, HOLYSUN OPC LIMITED',
  tagline: 'Together for a Better Tomorrow.',
  brandConceptBn: 'একটি উদ্যোগ, অসংখ্য সম্ভাবনা, সবার জন্য একটি সুন্দর ভবিষ্যৎ।',
  phone: '01613-239133',
  address: 'House 21/A, Road 2, Block A, Aftabnagar, Dhaka-1212, Bangladesh.',
  addressBn: 'বাড়ি ২১/এ, রোড ২, ব্লক এ, আফতাবনগর, ঢাকা-১২১২, বাংলাদেশ।',
  plannedMembersCap: '১০,০০০',
  plannedExecutiveBodyCap: '১০৫',
  plannedClassificationTiers: '৫টি',
};

export const CORE_PHILOSOPHIES = [
  {
    id: 'opportunity-for-all',
    number: '০১',
    titleBn: 'সবার জন্য সুযোগ',
    subtitleEn: 'Opportunity for Every Individual',
    descriptionBn:
      'প্রত্যেক মানুষের যোগ্যতা, দক্ষতা ও আগ্রহ অনুযায়ী এগিয়ে যাওয়ার সুযোগ তৈরি করা। ধর্ম, বর্ণ, পেশা বা সামাজিক অবস্থান নির্বিশেষে প্রতিটি মানুষকে মানুষ হিসেবে মূল্যায়ন করা আমাদের মৌলিক অঙ্গীকার।',
  },
  {
    id: 'collective-effort',
    number: '০২',
    titleBn: 'সম্মিলিত প্রচেষ্টা',
    subtitleEn: 'Collaborative Ecosystem',
    descriptionBn:
      'মানুষ, উদ্যোক্তা, কর্মী এবং বিভিন্ন খাতের ব্যবসায়িক ও সামাজিক উদ্যোগকে একটি সমন্বিত কাঠামোর মধ্যে নিয়ে আসা—যাতে পারস্পরিক সহযোগিতার মাধ্যমে টেকসই অগ্রগতি নিশ্চিত হয়।',
  },
  {
    id: 'human-development',
    number: '০৩',
    titleBn: 'মানবিক উন্নয়ন',
    subtitleEn: 'Human-Centered Welfare',
    descriptionBn:
      'ব্যবসায়িক অগ্রগতির পাশাপাশি মানসম্মত শিক্ষা, কারিগরি দক্ষতা উন্নয়ন, কর্মসংস্থান, পারিবারিক স্বাস্থ্যসেবা ও মানবকল্যাণে দীর্ঘমেয়াদি অবদান রাখা।',
  },
];

export const INITIAL_VENTURES: VentureItem[] = [
  {
    id: 'holysun-e-mart',
    indexNumber: '01',
    slug: 'holysun-e-mart',
    name: 'Holysun E-Mart',
    tagline: 'Online Shopping & Retail Solutions',
    sectorBn: 'বাণিজ্য, রিটেইল ও উদ্যোক্তা বিকাশ',
    filterKey: 'commerce',
    shortDescriptionBn:
      'উদ্যোক্তা তৈরি, নতুন ব্যবসায়িক ধারণা এবং ব্যবসায়িক উদ্যোগের বিকাশে সহযোগিতার একটি পরিকল্পিত প্ল্যাটফর্ম ও রিটেইল ইকোসিস্টেম।',
    detailedOverviewBn:
      'Holysun E-Mart শুধুমাত্র একটি অনলাইন শপিং বা রিটেইল সলিউশন হিসেবে পরিকল্পিত নয়; এটি নতুন উদ্যোক্তা তৈরি এবং সৃজনশীল ব্যবসায়িক ধারণার বিকাশে সহযোগিতার একটি উন্মুক্ত প্ল্যাটফর্ম। এখানে আগ্রহী ব্যক্তিরা তাদের ব্যবসায়িক ধারণা বা বিদ্যমান উদ্যোগ উপস্থাপন করতে পারবেন। যাচাই-বাছাই ও উপযুক্ত মূল্যায়নের ভিত্তিতে সম্ভাব্য বিনিয়োগ, ব্যবসায়িক সহযোগিতা এবং কার্যক্রম পরিচালনায় সহায়তার পরিকল্পনা রয়েছে।',
    plannedActivitiesBn: [
      'নতুন ও সম্ভাবনাময় ব্যবসায়িক ধারণা গ্রহণ এবং কাঠামোগত মূল্যায়ন',
      'উপযুক্ত উদ্যোগে ব্যবসায়িক সহযোগিতা, দিকনির্দেশনা ও পরিচালনাগত সহায়তা',
      'অনলাইন ও অফলাইন রিটেইল চেইনের মাধ্যমে মানসম্মত পণ্য সরবরাহের পরিকল্পনা',
      'ক্ষুদ্র ও মাঝারি উদ্যোক্তাদের পণ্য বিপণনের জন্য সমন্বিত প্ল্যাটফর্ম তৈরি',
    ],
    ecosystemRoleBn:
      'HOLYSUN ইকোসিস্টেমের প্রধান উদ্যোক্তা ইনকিউবেশন ও রিটেইল সংযোগ কেন্দ্র হিসেবে কাজ করার পরিকল্পনা।',
    participationScopeBn: [
      'নতুন ব্যবসায়িক ধারণা বা প্রপোজাল উপস্থাপনকারী উদ্যোক্তা হিসেবে',
      'ই-কমার্স অপারেশন, সাপ্লাই চেইন ও কাস্টমার সার্ভিস কর্মী হিসেবে',
      'পণ্য সরবরাহকারী বা মার্চেন্ট পার্টনার হিসেবে',
    ],
    statusLabelBn: 'পরিকল্পিত উদ্যোগ • ধারণা ও কাঠামো উন্নয়ন পর্যায়',
    imageUrl: GENERATED_ASSETS.commerceLogistics,
    imageAltBn: 'Holysun E-Mart পরিকল্পিত রিটেইল ও উদ্যোক্তা সহযোগিতা প্ল্যাটফর্মের প্রতীকী ছবি',
    imageCreditNote: 'প্রতীকী আলোকচিত্র (Representative Editorial Visual)',
    accentTone: 'sunshine',
  },
  {
    id: 'holysun-agro-industries',
    indexNumber: '02',
    slug: 'holysun-agro-industries',
    name: 'Holysun Agro & Industries',
    tagline: 'Modern Agriculture for a Greener Future',
    sectorBn: 'আধুনিক কৃষি ও কৃষিভিত্তিক শিল্প',
    filterKey: 'agro',
    shortDescriptionBn:
      'আধুনিক কৃষি, কৃষিভিত্তিক উদ্যোগ, উৎপাদন এবং শিল্পের সম্ভাবনাকে কাজে লাগিয়ে টেকসই উন্নয়নে অবদান রাখার পরিকল্পনা।',
    detailedOverviewBn:
      'বাংলাদেশের কৃষি ঐতিহ্য ও আধুনিক প্রযুক্তির সমন্বয়ে নিরাপদ খাদ্য উৎপাদন, কৃষিভিত্তিক শিল্পায়ন এবং গ্রামীণ কর্মসংস্থান বৃদ্ধির লক্ষ্যে Holysun Agro & Industries-এর পরিকল্পনা গ্রহণ করা হয়েছে। টেকসই চাষাবাদ ও প্রক্রিয়াজাতকরণের মাধ্যমে কৃষক ও ভোক্তার মধ্যে আস্থার সেতুবন্ধন গড়ে তোলাই এই উদ্যোগের উদ্দেশ্য।',
    plannedActivitiesBn: [
      'আধুনিক ও পরিবেশবান্ধব কৃষি উৎপাদন প্রকল্প পরিচালনা',
      'কৃষিজাত পণ্যের মানসম্মত প্রক্রিয়াজাতকরণ ও সংরক্ষণ ব্যবস্থা',
      'কৃষি উদ্যোক্তা তৈরি ও স্থানীয় পর্যায়ে কর্মসংস্থানের সুযোগ সৃষ্টি',
      'নিরাপদ ও পুষ্টিকর খাদ্যশস্য এবং কৃষিপণ্য সরবরাহ চেইন গড়ে তোলা',
    ],
    ecosystemRoleBn:
      'ইকোসিস্টেমের খাদ্য নিরাপত্তা, কাঁচামাল উৎপাদন এবং গ্রামীণ অর্থনৈতিক অন্তর্ভুক্তির ভিত্তি।',
    participationScopeBn: [
      'কৃষি প্রকল্প ও এগ্রো-প্রসেসিং উদ্যোক্তা হিসেবে',
      'কৃষিবিদ, মাঠকর্মী ও উৎপাদন ব্যবস্থাপনা কর্মী হিসেবে',
    ],
    statusLabelBn: 'পরিকল্পিত উদ্যোগ • সম্ভাব্যতা ও পরিকল্পনা পর্যায়',
    imageUrl: GENERATED_ASSETS.agroGreen,
    imageAltBn: 'Holysun Agro & Industries আধুনিক কৃষি ও সবুজ মাঠের প্রতীকী ছবি',
    imageCreditNote: 'প্রতীকী আলোকচিত্র (Representative Editorial Visual)',
    accentTone: 'green',
  },
  {
    id: 'holysun-consultancy-firm',
    indexNumber: '03',
    slug: 'holysun-consultancy-firm',
    name: 'Holysun Consultancy Firm',
    tagline: 'Your Growth, Our Consultancy',
    sectorBn: 'ব্যবসায়িক পরামর্শ ও পেশাগত ব্যবস্থাপনা',
    filterKey: 'service',
    shortDescriptionBn:
      'ব্যবসায়িক পরিকল্পনা, পরামর্শ, ব্যবস্থাপনা এবং পেশাগত উন্নয়নের মাধ্যমে ব্যক্তি ও প্রতিষ্ঠানের অগ্রযাত্রায় সহযোগিতা করার উদ্যোগ।',
    detailedOverviewBn:
      'সঠিক পরিকল্পনা ও পেশাদার দিকনির্দেশনার অভাবে অনেক সম্ভাবনাময় উদ্যোগ মাঝপথে থেমে যায়। Holysun Consultancy Firm-এর লক্ষ্য হলো নতুন ও বিদ্যমান উদ্যোক্তা, কর্পোরেট প্রতিষ্ঠান এবং পেশাজীবীদের জন্য বাস্তবসম্মত ব্যবসায়িক পরামর্শ, ব্যবস্থাপনা কৌশল ও প্রাতিষ্ঠানিক উন্নয়ন সেবা প্রদান করা।',
    plannedActivitiesBn: [
      'নতুন ব্যবসায়িক উদ্যোগের সম্ভাব্যতা যাচাই ও বিজনেস প্ল্যান প্রস্তুতকরণে সহায়তা',
      'প্রাতিষ্ঠানিক ব্যবস্থাপনা, অপারেশন ও মানবসম্পদ উন্নয়ন পরামর্শ',
      'উদ্যোক্তা ও পেশাজীবীদের জন্য কৌশলগত মেন্টরশিপ ও দিকনির্দেশনা',
      'আইনি, কর্পোরেট কমপ্লায়েন্স ও ডকুমেন্টেশন বিষয়ে সহায়ক পরামর্শ সেবা',
    ],
    ecosystemRoleBn:
      'HOLYSUN-এর সকল Venture এবং সংযুক্ত উদ্যোক্তাদের কৌশলগত ও ব্যবস্থাপনাগত পরামর্শ কেন্দ্র।',
    participationScopeBn: [
      'বিশেষজ্ঞ পরামর্শক, বিশ্লেষক ও বিজনেস মেন্টর হিসেবে',
      'উদ্যোক্তা হিসেবে নিজস্ব ব্যবসার জন্য পরামর্শ ও সহযোগিতা গ্রহণে',
    ],
    statusLabelBn: 'পরিকল্পিত উদ্যোগ • কাঠামো বিন্যাস পর্যায়',
    imageUrl: GENERATED_ASSETS.heroEcosystem,
    imageAltBn: 'Holysun Consultancy Firm পেশাদার পরামর্শ ও সভার প্রতীকী ছবি',
    imageCreditNote: 'প্রতীকী আলোকচিত্র (Representative Editorial Visual)',
    accentTone: 'sky',
  },
  {
    id: 'holysun-family-care-hospital',
    indexNumber: '04',
    slug: 'holysun-family-care-hospital',
    name: 'Holysun Family Care Hospital',
    tagline: 'Better Health, Brighter Future',
    sectorBn: 'স্বাস্থ্যসেবা ও পারিবারিক চিকিৎসা',
    filterKey: 'social',
    shortDescriptionBn:
      'মানুষের স্বাস্থ্যসেবা, পারিবারিক সুস্থতা এবং প্রয়োজনভিত্তিক চিকিৎসাসেবা সহজলভ্য করার লক্ষ্যে একটি পরিকল্পিত স্বাস্থ্যসেবা উদ্যোগ।',
    detailedOverviewBn:
      'মানবিক সহমর্মিতা ও মানসম্মত চিকিৎসাসেবাকে সাধারণ মানুষের নাগালে পৌঁছে দেওয়ার প্রত্যয়ে Holysun Family Care Hospital-এর পরিকল্পনা করা হয়েছে। হাসপাতালের নিয়মিত সেবার পাশাপাশি অনুমোদিত নীতিমালা অনুযায়ী সদস্য ও পরিবারের জন্য প্রয়োজনভিত্তিক স্বাস্থ্যসেবা সহজলভ্য করার দীর্ঘমেয়াদি লক্ষ্য রয়েছে।',
    plannedActivitiesBn: [
      'পারিবারিক ও প্রাথমিক স্বাস্থ্যসেবা এবং বিশেষায়িত চিকিৎসা পরামর্শের পরিকল্পনা',
      'আধুনিক ডায়াগনস্টিক ও প্রতিরোধমূলক স্বাস্থ্য পরীক্ষা কার্যক্রম',
      'পরিকল্পিত নীতিমালা অনুযায়ী সদস্যদের জন্য প্রয়োজন সাপেক্ষে হোম-কেয়ার চিকিৎসা সহায়তা',
      'স্বাস্থ্য সচেতনতা ও মানবিক মেডিকেল ক্যাম্প পরিচালনার উদ্যোগ',
    ],
    ecosystemRoleBn:
      'HOLYSUN পরিবার, সদস্য ও সর্বসাধারণের জন্য মানবিক ও নির্ভরযোগ্য স্বাস্থ্যসেবা স্তম্ভ।',
    participationScopeBn: [
      'চিকিৎসক, নার্স, প্যারামেডিক ও হাসপাতাল ব্যবস্থাপনা কর্মী হিসেবে',
      'স্বাস্থ্যসেবা সংশ্লিষ্ট সহায়ক উদ্যোগ ও সরবরাহকারী হিসেবে',
    ],
    statusLabelBn: 'পরিকল্পিত উদ্যোগ • নীতিমালা ও রূপরেখা প্রণয়ন পর্যায়',
    imageUrl: GENERATED_ASSETS.healthcareFamily,
    imageAltBn: 'Holysun Family Care Hospital পারিবারিক স্বাস্থ্যসেবার প্রতীকী ছবি',
    imageCreditNote: 'প্রতীকী আলোকচিত্র (Representative Editorial Visual)',
    accentTone: 'sky',
  },
  {
    id: 'holysun-trust-welfare-foundation',
    indexNumber: '05',
    slug: 'holysun-trust-welfare-foundation',
    name: 'Holysun Trust & Welfare Foundation',
    tagline: 'Serving Humanity, Building Hope',
    sectorBn: 'মানবকল্যাণ ও সামাজিক উন্নয়ন',
    filterKey: 'social',
    shortDescriptionBn:
      'অসহায় ও সুবিধাবঞ্চিত মানুষের পাশে দাঁড়ানো, শিক্ষা ও স্বাস্থ্যসেবায় সহযোগিতা এবং মানবিক সহায়তার মাধ্যমে সমাজকল্যাণে অবদান রাখার উদ্যোগ।',
    detailedOverviewBn:
      'HOLYSUN বিশ্বাস করে, মানুষকে তার ধর্ম, বর্ণ, সামাজিক অবস্থান বা পেশা দিয়ে নয়—মানুষ হিসেবে মূল্যায়ন করা উচিত। এই মৌলিক মানবিক দর্শনের আলোকে সমাজের অসহায় ও সুবিধাবঞ্চিত মানুষের পাশে দাঁড়াতে Holysun Trust & Welfare Foundation পরিকল্পিত হয়েছে।',
    plannedActivitiesBn: [
      'সুবিধাবঞ্চিত ও মেধাবী শিক্ষার্থীদের শিক্ষা সহায়তা প্রদানের পরিকল্পনা',
      'অসহায় মানুষের জন্য প্রাথমিক স্বাস্থ্যসেবা ও জরুরি চিকিৎসা সহযোগিতা',
      'দুর্যোগকালীন ও মৌসুমি মানবিক সহায়তা কার্যক্রম পরিচালনা',
      'স্বাবলম্বীকরণ ও সামাজিক উন্নয়নমূলক দীর্ঘমেয়াদি উদ্যোগ গ্রহণ',
    ],
    ecosystemRoleBn:
      'HOLYSUN-এর মানবিক দায়বদ্ধতা ও অন্তর্ভুক্তিমূলক সমাজ গঠনের মূল চালিকাশক্তি।',
    participationScopeBn: [
      'সমাজকল্যাণ কর্মী, স্বেচ্ছাসেবক ও উন্নয়ন সমন্বয়কারী হিসেবে',
      'মানবিক উদ্যোগে সহযোগী ও অংশীজন হিসেবে',
    ],
    statusLabelBn: 'পরিকল্পিত উদ্যোগ • মানবিক কার্যক্রম রূপরেখা পর্যায়',
    imageUrl: GENERATED_ASSETS.agroGreen,
    imageAltBn: 'Holysun Trust & Welfare Foundation মানবিক ও সামাজিক উন্নয়নের প্রতীকী ছবি',
    imageCreditNote: 'প্রতীকী আলোকচিত্র (Representative Editorial Visual)',
    accentTone: 'sunshine',
  },
  {
    id: 'holysun-tv',
    indexNumber: '06',
    slug: 'holysun-tv',
    name: 'Holysun TV',
    tagline: 'News • Entertainment • Education • Lifestyle',
    sectorBn: 'গণমাধ্যম, শিক্ষা ও জীবনধারা কনটেন্ট',
    filterKey: 'tech',
    shortDescriptionBn:
      'সংবাদ, বিনোদন, শিক্ষা এবং জীবনধারাভিত্তিক তথ্য ও কনটেন্ট মানুষের কাছে পৌঁছে দেওয়ার লক্ষ্যে একটি পরিকল্পিত মিডিয়া উদ্যোগ।',
    detailedOverviewBn:
      'ইতিবাচক সাংবাদিকতা, শিক্ষামূলক অনুষ্ঠান, সুস্থ বিনোদন এবং গঠনমূলক জীবনধারাভিত্তিক কনটেন্ট প্রচারের লক্ষ্যে Holysun TV একটি আধুনিক মিডিয়া উদ্যোগ হিসেবে পরিকল্পিত। মানুষের চিন্তা, সৃজনশীলতা ও উন্নয়নমূলক গল্পগুলোকে দায়িত্বশীলভাবে তুলে ধরাই এর মূল উদ্দেশ্য।',
    plannedActivitiesBn: [
      'বস্তুনিষ্ঠ সংবাদ ও সমসাময়িক উন্নয়নবিষয়ক প্রতিবেদন প্রকাশ',
      'শিক্ষা, কারিগরি দক্ষতা ও উদ্যোক্তা উন্নয়নভিত্তিক বিশেষ অনুষ্ঠান নির্মাণ',
      'পরিবারবান্ধব সুস্থ বিনোদন ও জীবনধারা কনটেন্ট প্রচার',
      'ডিজিটাল ও ব্রডকাস্ট প্ল্যাটফর্মের মাধ্যমে গঠনমূলক তথ্য প্রবাহ নিশ্চিত করা',
    ],
    ecosystemRoleBn:
      'সচেতনতা, শিক্ষা ও ইতিবাচক সামাজিক বার্তা মানুষের কাছে পৌঁছে দেওয়ার মিডিয়া প্ল্যাটফর্ম।',
    participationScopeBn: [
      'সাংবাদিক, কনটেন্ট নির্মাতা, ভিডিও এডিটর ও মিডিয়া পেশাজীবী হিসেবে',
      'মিডিয়া প্রোডাকশন ও সৃজনশীল উদ্যোগের সহযোগী হিসেবে',
    ],
    statusLabelBn: 'পরিকল্পিত উদ্যোগ • মিডিয়া ও কনটেন্ট পরিকল্পনা পর্যায়',
    imageUrl: GENERATED_ASSETS.educationTraining,
    imageAltBn: 'Holysun TV মিডিয়া প্রোডাকশন ও সম্প্রচারের প্রতীকী ছবি',
    imageCreditNote: 'প্রতীকী আলোকচিত্র (Representative Editorial Visual)',
    accentTone: 'navy',
  },
  {
    id: 'holysun-cafe-halal-bazar',
    indexNumber: '07',
    slug: 'holysun-cafe-halal-bazar',
    name: 'Holysun Cafe & Halal Bazar',
    tagline: 'Fresh Food • Great Taste • Halal Products',
    sectorBn: 'খাদ্য, আতিথেয়তা ও হালাল রিটেইল',
    filterKey: 'commerce',
    shortDescriptionBn:
      'মানসম্মত খাবার, আতিথেয়তা এবং হালাল পণ্যের সমন্বয়ে একটি আধুনিক Food & Retail উদ্যোগ।',
    detailedOverviewBn:
      'স্বাস্থ্যসম্মত পরিবেশে মানসম্মত খাবার পরিবেশন এবং দৈনন্দিন জীবনের বিশুদ্ধ হালাল পণ্য সহজলভ্য করার লক্ষ্যে Holysun Cafe & Halal Bazar-এর পরিকল্পনা করা হয়েছে। এটি একই সঙ্গে সৌহার্দ্যপূর্ণ আতিথেয়তা এবং বিশ্বস্ত পারিবারিক বাজার ব্যবস্থার সমন্বয় ঘটাবে।',
    plannedActivitiesBn: [
      'পরিচ্ছন্ন ও মনোরম পরিবেশে মানসম্মত ক্যাফে ও ফুড সার্ভিস পরিচালনা',
      'যাচাইকৃত হালাল ও বিশুদ্ধ নিত্যপ্রয়োজনীয় খাদ্যপণ্যের রিটেইল বাজার',
      'Holysun Agro ও স্থানীয় উৎপাদকদের কাছ থেকে তাজা পণ্য সংযোগের পরিকল্পনা',
      'খাদ্য ও আতিথেয়তা খাতে তরুণদের কর্মসংস্থান ও উদ্যোক্তা সুযোগ তৈরি',
    ],
    ecosystemRoleBn:
      'কৃষি উৎপাদন থেকে ভোক্তার টেবিল পর্যন্ত বিশুদ্ধ খাদ্য ও আতিথেয়তার সরাসরি সংযোগ।',
    participationScopeBn: [
      'ক্যাফে ও রিটেইল আউটলেট ব্যবস্থাপনা কর্মী, শেফ ও সার্ভিস টিম হিসেবে',
      'বিশুদ্ধ খাদ্যপণ্য সরবরাহকারী ও ফুড-সেক্টর উদ্যোক্তা হিসেবে',
    ],
    statusLabelBn: 'পরিকল্পিত উদ্যোগ • কনসেপ্ট ও সাপ্লাই চেইন পরিকল্পনা পর্যায়',
    imageUrl: GENERATED_ASSETS.commerceLogistics,
    imageAltBn: 'Holysun Cafe & Halal Bazar আধুনিক ফুড ও রিটেইল উদ্যোগের প্রতীকী ছবি',
    imageCreditNote: 'প্রতীকী আলোকচিত্র (Representative Editorial Visual)',
    accentTone: 'sunshine',
  },
  {
    id: 'holysun-school-college',
    indexNumber: '08',
    slug: 'holysun-school-college',
    name: 'Holysun School & College',
    tagline: 'Quality Education for a Brighter Future',
    sectorBn: 'প্রাতিষ্ঠানিক শিক্ষা ও মানবিক বিকাশ',
    filterKey: 'education',
    shortDescriptionBn:
      'মানসম্মত শিক্ষা, জ্ঞানচর্চা এবং শিক্ষার্থীদের ব্যক্তিগত ও সামাজিক বিকাশে অবদান রাখার পরিকল্পনা।',
    detailedOverviewBn:
      'আগামী প্রজন্মকে কেবল পরীক্ষানির্ভর নয়, বরং নৈতিকতা, সৃজনশীলতা ও আধুনিক জ্ঞানসম্পন্ন মানুষ হিসেবে গড়ে তোলার লক্ষ্যে Holysun School & College প্রতিষ্ঠার পরিকল্পনা রয়েছে। শিক্ষার্থীদের মানবিক মূল্যবোধ ও বাস্তব জীবনের দক্ষতা অর্জনে এই উদ্যোগ কাজ করবে।',
    plannedActivitiesBn: [
      'আধুনিক ও আনন্দময় পরিবেশে মানসম্মত স্কুল ও কলেজ পর্যায়ের শিক্ষা কার্যক্রম',
      'পাঠ্যসূচির পাশাপাশি নৈতিক শিক্ষা, যোগাযোগ দক্ষতা ও সহশিক্ষা কার্যক্রম',
      'অভিজ্ঞ ও নিবেদিতপ্রাণ শিক্ষকদের সমন্বয়ে শিক্ষার্থী-বান্ধব পাঠদান পদ্ধতি',
      'প্রযুক্তি ও বিজ্ঞানমনস্ক আগামী প্রজন্ম গড়ে তোলার দীর্ঘমেয়াদি পরিকল্পনা',
    ],
    ecosystemRoleBn:
      'HOLYSUN-এর শিক্ষা ও মানবসম্পদ উন্নয়ন দর্শনের প্রাতিষ্ঠানিক ভিত্তি।',
    participationScopeBn: [
      'শিক্ষক, শিক্ষা প্রশাসক ও একাডেমিক সমন্বয়কারী হিসেবে',
      'শিক্ষা সহায়ক কার্যক্রম ও উন্নয়ন সহযোগী হিসেবে',
    ],
    statusLabelBn: 'পরিকল্পিত উদ্যোগ • একাডেমিক রূপরেখা প্রণয়ন পর্যায়',
    imageUrl: GENERATED_ASSETS.educationTraining,
    imageAltBn: 'Holysun School & College আধুনিক শিক্ষা পরিবেশের প্রতীকী ছবি',
    imageCreditNote: 'প্রতীকী আলোকচিত্র (Representative Editorial Visual)',
    accentTone: 'sky',
  },
  {
    id: 'holysun-housing-builders',
    indexNumber: '09',
    slug: 'holysun-housing-builders',
    name: 'Holysun Housing & Builders',
    tagline: 'Dream Home, Built for Your Future',
    sectorBn: 'আবাসন, নির্মাণ ও অবকাঠামো উন্নয়ন',
    filterKey: 'service',
    shortDescriptionBn:
      'আবাসন, নির্মাণ এবং অবকাঠামোগত উন্নয়নের মাধ্যমে মানুষের বসবাস ও জীবনযাপনের প্রয়োজন পূরণে অবদান রাখার উদ্যোগ।',
    detailedOverviewBn:
      'নিরাপদ, পরিকল্পিত ও আধুনিক আবাসন প্রতিটি পরিবারের অন্যতম মৌলিক স্বপ্ন। Holysun Housing & Builders-এর লক্ষ্য হলো প্রকৌশলগত মান, স্বচ্ছতা ও দীর্ঘস্থায়ী নির্মাণশৈলীর মাধ্যমে আবাসন এবং অবকাঠামোগত উন্নয়নে বিশ্বস্ত অবদান রাখা।',
    plannedActivitiesBn: [
      'পরিকল্পিত আবাসিক ও বাণিজ্যিক ভবন নির্মাণ এবং আবাসন প্রকল্প উন্নয়ন',
      'আধুনিক স্থাপত্য নকশা, মানসম্মত নির্মাণসামগ্রী ও প্রকৌশলগত নিরাপত্তা নিশ্চিতকরণ',
      'নির্মাণ খাতে প্রকৌশলী, স্থপতি ও দক্ষ কারিগরি কর্মীদের কর্মসংস্থান সৃষ্টি',
      'পরিবেশবান্ধব ও টেকসই নগরায়ণ সহায়ক অবকাঠামো পরিকল্পনা',
    ],
    ecosystemRoleBn:
      'টেকসই আবাসন ও প্রাতিষ্ঠানিক অবকাঠামো উন্নয়নের পরিকল্পিত উদ্যোগ।',
    participationScopeBn: [
      'সিভিল ইঞ্জিনিয়ার, স্থপতি, প্রজেক্ট ম্যানেজার ও নির্মাণ কর্মী হিসেবে',
      'নির্মাণ উপকরণ সরবরাহকারী ও রিয়েল এস্টেট সহযোগী উদ্যোক্তা হিসেবে',
    ],
    statusLabelBn: 'পরিকল্পিত উদ্যোগ • প্রাথমিক পরিকল্পনা পর্যায়',
    imageUrl: GENERATED_ASSETS.commerceLogistics,
    imageAltBn: 'Holysun Housing & Builders আধুনিক স্থাপত্য ও আবাসনের প্রতীকী ছবি',
    imageCreditNote: 'প্রতীকী আলোকচিত্র (Representative Editorial Visual)',
    accentTone: 'navy',
  },
  {
    id: 'holysun-export-import',
    indexNumber: '10',
    slug: 'holysun-export-import',
    name: 'Holysun Export and Import',
    tagline: 'Global Trade, Local Trust',
    sectorBn: 'আন্তর্জাতিক বাণিজ্য ও সরবরাহ সংযোগ',
    filterKey: 'commerce',
    shortDescriptionBn:
      'দেশীয় ও আন্তর্জাতিক বাজারের মধ্যে ব্যবসায়িক সংযোগ তৈরি এবং আমদানি-রপ্তানিভিত্তিক বাণিজ্যিক কার্যক্রমের সম্ভাবনা সম্প্রসারণের পরিকল্পনা।',
    detailedOverviewBn:
      'বাংলাদেশের সম্ভাবনাময় উৎপাদিত পণ্য আন্তর্জাতিক বাজারে পৌঁছে দেওয়া এবং দেশের চাহিদা অনুযায়ী মানসম্মত পণ্য ও প্রযুক্তি আমদানির মাধ্যমে বৈশ্বিক বাণিজ্যে অবদান রাখার লক্ষ্যে Holysun Export and Import পরিকল্পিত হয়েছে।',
    plannedActivitiesBn: [
      'দেশীয় কৃষি, হস্তশিল্প ও শিল্পপণ্য আন্তর্জাতিক বাজারে রপ্তানির সংযোগ তৈরি',
      'প্রয়োজনীয় কাঁচামাল, যন্ত্রপাতি ও মানসম্মত ভোগ্যপণ্য আমদানি পরিকল্পনা',
      'আন্তর্জাতিক ট্রেড কমপ্লায়েন্স, লজিস্টিকস ও সাপ্লাই চেইন ব্যবস্থাপনা',
      'স্থানীয় উদ্যোক্তাদের উৎপাদিত পণ্যের বৈশ্বিক বাজার সম্প্রসারণে সহযোগিতা',
    ],
    ecosystemRoleBn:
      'HOLYSUN-এর দেশীয় উৎপাদন ও রিটেইল উদ্যোগগুলোর সাথে আন্তর্জাতিক বাজারের সেতুবন্ধন।',
    participationScopeBn: [
      'ট্রেড স্পেশালিস্ট, লজিস্টিকস ও কমার্শিয়াল অপারেশন কর্মী হিসেবে',
      'রপ্তানিযোগ্য পণ্যের উৎপাদক ও বাণিজ্যিক অংশীদার হিসেবে',
    ],
    statusLabelBn: 'পরিকল্পিত উদ্যোগ • বাণিজ্যিক নেটওয়ার্ক পরিকল্পনা পর্যায়',
    imageUrl: GENERATED_ASSETS.commerceLogistics,
    imageAltBn: 'Holysun Export and Import আন্তর্জাতিক বাণিজ্য ও লজিস্টিকসের প্রতীকী ছবি',
    imageCreditNote: 'প্রতীকী আলোকচিত্র (Representative Editorial Visual)',
    accentTone: 'sky',
  },
  {
    id: 'holysun-tourism',
    indexNumber: '11',
    slug: 'holysun-tourism',
    name: 'Holysun Tourism',
    tagline: 'Explore Bangladesh, Explore the World',
    sectorBn: 'পর্যটন, ভ্রমণ ও আতিথেয়তা',
    filterKey: 'service',
    shortDescriptionBn:
      'দেশীয় ও আন্তর্জাতিক পর্যটন, ভ্রমণ, আতিথেয়তা, হোটেল ও রিসোর্টসহ পর্যটনসংশ্লিষ্ট বিভিন্ন উদ্যোগের বিকাশের পরিকল্পনা।',
    detailedOverviewBn:
      'বাংলাদেশের প্রাকৃতিক সৌন্দর্য ও ঐতিহ্যকে দেশ-বিদেশের ভ্রমণপিপাসুদের কাছে তুলে ধরা এবং মানসম্মত ভ্রমণ ও আতিথেয়তা সেবা প্রদানের লক্ষ্যে Holysun Tourism পরিকল্পিত হয়েছে। এই উদ্যোগ কোনো একটি নির্দিষ্ট স্থান বা একটি রিসোর্টের মধ্যে সীমাবদ্ধ নয়; ভবিষ্যতে দেশের বিভিন্ন সম্ভাবনাময় পর্যটন অঞ্চলে একাধিক হোটেল, রিসোর্ট ও ট্যুরিজম প্রজেক্ট পরিচালনার দীর্ঘমেয়াদি পরিকল্পনা রয়েছে।',
    plannedActivitiesBn: [
      'দেশের বিভিন্ন সম্ভাবনাময় পর্যটন অঞ্চলে পর্যায়ক্রমে হোটেল, রিসোর্ট ও আতিথেয়তা প্রকল্প উন্নয়ন',
      'পরিবারবান্ধব দেশীয় ও আন্তর্জাতিক ট্যুর প্যাকেজ এবং ভ্রমণ ব্যবস্থাপনা সেবা',
      'পরিকল্পিত নীতিমালা অনুযায়ী HOLYSUN সদস্যদের বার্ষিক Family Tour আয়োজন',
      'স্থানীয় সংস্কৃতি সংরক্ষণ ও পর্যটন খাতে নতুন কর্মসংস্থান সৃষ্টি',
    ],
    ecosystemRoleBn:
      'আতিথেয়তা, ভ্রমণ অভিজ্ঞতা এবং সদস্যদের পারিবারিক বিনোদন ও সংযোগের কেন্দ্র।',
    participationScopeBn: [
      'ট্যুরিজম ও হসপিটালিটি ম্যানেজমেন্ট কর্মী এবং ট্যুর গাইড হিসেবে',
      'পর্যটন ও আতিথেয়তা খাতের সহযোগী উদ্যোক্তা হিসেবে',
    ],
    statusLabelBn: 'পরিকল্পিত উদ্যোগ • বহুমুখী পর্যটন প্রকল্প পরিকল্পনা পর্যায়',
    imageUrl: GENERATED_ASSETS.agroGreen,
    imageAltBn: 'Holysun Tourism প্রাকৃতিক সৌন্দর্য ও পর্যটন উদ্যোগের প্রতীকী ছবি',
    imageCreditNote: 'প্রতীকী আলোকচিত্র (Representative Editorial Visual)',
    accentTone: 'green',
  },
  {
    id: 'holysun-technical-training-institute',
    indexNumber: '12',
    slug: 'holysun-technical-training-institute',
    name: 'Holysun Technical Training Institute',
    tagline: 'Empowering Youth with Practical Skills',
    sectorBn: 'কারিগরি শিক্ষা ও কর্মমুখী প্রশিক্ষণ',
    filterKey: 'education',
    shortDescriptionBn:
      'কারিগরি শিক্ষা, হাতে-কলমে প্রশিক্ষণ এবং কর্মমুখী দক্ষতা উন্নয়নের মাধ্যমে তরুণ ও আগ্রহী ব্যক্তিদের কর্মজীবনের জন্য প্রস্তুত করার উদ্যোগ।',
    detailedOverviewBn:
      'শুধুমাত্র তাত্ত্বিক ডিগ্রির পরিবর্তে বাস্তবভিত্তিক ও হাতে-কলমে কারিগরি দক্ষতা অর্জনের মাধ্যমে তরুণদের আত্মনির্ভরশীল করে গড়ে তোলাই Holysun Technical Training Institute-এর লক্ষ্য। দেশীয় শিল্পখাত এবং আন্তর্জাতিক শ্রমবাজারের চাহিদা অনুযায়ী যুগোপযোগী প্রশিক্ষণ প্রদানের পরিকল্পনা রয়েছে।',
    plannedActivitiesBn: [
      'ইলেকট্রিক্যাল, মেকানিক্যাল, কারিগরি ও ভোকেশনাল ট্রেডে হাতে-কলমে প্রশিক্ষণ',
      'কর্মমুখী দক্ষতা উন্নয়ন ও বাস্তব কর্মপরিবেশের উপযোগী ব্যবহারিক ওয়ার্কশপ',
      'প্রশিক্ষণ শেষে HOLYSUN-এর বিভিন্ন Venture বা অন্যান্য কর্মক্ষেত্রে সংযোগের সুযোগ',
      'নতুন উদ্যোক্তা হতে আগ্রহীদের জন্য কারিগরি ও উৎপাদনমুখী দক্ষতা প্রশিক্ষণ',
    ],
    ecosystemRoleBn:
      'দক্ষ কর্মী ও কারিগরি উদ্যোক্তা তৈরির মাধ্যমে পুরো ইকোসিস্টেমের মানবসম্পদ শক্তিশালী করা।',
    participationScopeBn: [
      'কারিগরি প্রশিক্ষক, ইন্সট্রাক্টর ও ল্যাব সমন্বয়কারী হিসেবে',
      'দক্ষতা অর্জনকারী প্রশিক্ষণার্থী ও ভবিষ্যৎ কর্মী/উদ্যোক্তা হিসেবে',
    ],
    statusLabelBn: 'পরিকল্পিত উদ্যোগ • কারিকুলাম ও প্রশিক্ষণ কাঠামো পর্যায়',
    imageUrl: GENERATED_ASSETS.educationTraining,
    imageAltBn: 'Holysun Technical Training Institute হাতে-কলমে কারিগরি প্রশিক্ষণের প্রতীকী ছবি',
    imageCreditNote: 'প্রতীকী আলোকচিত্র (Representative Editorial Visual)',
    accentTone: 'sunshine',
  },
  {
    id: 'hsl-it-digital-solutions',
    indexNumber: '13',
    slug: 'hsl-it-digital-solutions',
    name: 'Holysun IT & Digital Solutions',
    tagline: 'Innovative IT & Digital Solutions',
    sectorBn: 'তথ্যপ্রযুক্তি, সফটওয়্যার ও ডিজিটাল সেবা',
    filterKey: 'tech',
    shortDescriptionBn:
      'তথ্যপ্রযুক্তি, সফটওয়্যার ডেভেলপমেন্ট, ওয়েব সলিউশন, ডিজিটাল সেবা, সাইবার নিরাপত্তা এবং প্রযুক্তিগত দক্ষতা উন্নয়নে কাজ করার পরিকল্পনা।',
    detailedOverviewBn:
      'আধুনিক বিশ্ব ও ব্যবসায়িক ব্যবস্থাপনার কেন্দ্রবিন্দুতে রয়েছে তথ্যপ্রযুক্তি। Holysun IT & Digital Solutions-এর লক্ষ্য হলো সফটওয়্যার ডেভেলপমেন্ট, ওয়েব ও মোবাইল অ্যাপ্লিকেশন, এন্টারপ্রাইজ ডিজিটাল সেবা, সাইবার নিরাপত্তা এবং Holysun IT & Digital Solutions Academy-এর মাধ্যমে তরুণদের প্রযুক্তিগত দক্ষতা উন্নয়নে সমান গুরুত্বের সাথে কাজ করা।',
    plannedActivitiesBn: [
      'কাস্টম সফটওয়্যার ডেভেলপমেন্ট, ওয়েব সলিউশন ও এন্টারপ্রাইজ ডিজিটাল ট্রান্সফরমেশন সেবা',
      'সাইবার নিরাপত্তা, ক্লাউড আর্কিটেকচার ও নিরাপদ তথ্য ব্যবস্থাপনা সলিউশন',
      'Holysun IT & Digital Solutions Academy-এর মাধ্যমে আধুনিক আইটি ও ফ্রিল্যান্সিং/ক্যারিয়ার প্রশিক্ষণ',
      'HOLYSUN-এর সকল Venture-এর ডিজিটাল অবকাঠামো ও প্রযুক্তিগত উদ্ভাবন পরিচালনা',
    ],
    ecosystemRoleBn:
      'HOLYSUN ইকোসিস্টেম এবং বাহ্যিক ক্লায়েন্টদের প্রযুক্তিগত উদ্ভাবন ও ডিজিটাল রূপান্তরের মূল কেন্দ্র।',
    participationScopeBn: [
      'সফটওয়্যার ইঞ্জিনিয়ার, ডিজাইনার, সাইবার সিকিউরিটি বিশেষজ্ঞ ও আইটি প্রশিক্ষক হিসেবে',
      'প্রযুক্তিভিত্তিক স্টার্টআপ বা আইটি প্রজেক্ট উদ্যোক্তা হিসেবে',
    ],
    statusLabelBn: 'পরিকল্পিত উদ্যোগ • ডিজিটাল সার্ভিস ও একাডেমি পরিকল্পনা পর্যায়',
    imageUrl: GENERATED_ASSETS.educationTraining,
    imageAltBn: 'Holysun IT & Digital Solutions সফটওয়্যার ডেভেলপমেন্ট ও প্রযুক্তির প্রতীকী ছবি',
    imageCreditNote: 'প্রতীকী আলোকচিত্র (Representative Editorial Visual)',
    accentTone: 'sky',
  },
];

export const PLANNED_MEMBERSHIP_BENEFITS = [
  {
    id: 'venture-privileges',
    titleBn: 'বিভিন্ন Venture থেকে বিশেষ সুবিধা',
    descriptionBn:
      'HOLYSUN-এর অধীনে পরিচালিত ও ভবিষ্যতে চালু হতে যাওয়া বিভিন্ন Venture-এর পণ্য ও সেবায় অনুমোদিত নীতিমালা অনুযায়ী বিশেষ অগ্রাধিকার ও সদস্য সুবিধা।',
  },
  {
    id: 'home-medical-care',
    titleBn: 'প্রয়োজন অনুযায়ী বাসায় গিয়ে চিকিৎসাসেবা',
    descriptionBn:
      'Holysun Family Care Hospital-এর কার্যক্রম ও সদস্য নীতিমালার আওতায় প্রয়োজন অনুযায়ী বাসায় গিয়ে চিকিৎসাসেবা পাওয়ার পরিকল্পিত ব্যবস্থা।',
  },
  {
    id: 'annual-family-tour',
    titleBn: 'বার্ষিক Family Tour-এর আয়োজন',
    descriptionBn:
      'সদস্য ও তাদের পরিবারের সৌহার্দ্য বৃদ্ধি এবং আনন্দময় সময় কাটানোর লক্ষ্যে বার্ষিক পারিবারিক ভ্রমণ (Annual Family Tour) আয়োজনের পরিকল্পনা।',
  },
  {
    id: 'special-events',
    titleBn: 'বিভিন্ন অনুষ্ঠান ও বিশেষ আয়োজনে আমন্ত্রণ',
    descriptionBn:
      'HOLYSUN-এর কর্পোরেট সম্মেলন, উদ্যোক্তা মিলনমেলা, সামাজিক ও সাংস্কৃতিক আয়োজনে সম্মানিত সদস্য হিসেবে অংশগ্রহণের সুযোগ।',
  },
  {
    id: 'family-employment-priority',
    titleBn: 'পরিবারের সদস্যদের কর্মসংস্থানে অগ্রাধিকারভিত্তিক বিবেচনা',
    descriptionBn:
      'সম্মানিত সদস্যের রেফারেন্সে তাঁর পরিবারের অন্য সদস্যদের কর্মসংস্থানের ক্ষেত্রে যোগ্যতা ও প্রতিষ্ঠানের নিয়োগনীতির শর্তসাপেক্ষে অগ্রাধিকারভিত্তিক বিবেচনা।',
  },
  {
    id: 'future-benefits',
    titleBn: 'ভবিষ্যতে যুক্ত হওয়া অন্যান্য সদস্যসুবিধা',
    descriptionBn:
      'ইকোসিস্টেম সম্প্রসারণের সাথে সাথে নতুন Venture ও সেবাসমূহ যুক্ত হলে সদস্যদের জন্য পর্যায়ক্রমে আরও নতুন সুবিধা অন্তর্ভুক্ত করার পরিকল্পনা রয়েছে।',
  },
];

export const PARTICIPATION_ROLES = [
  {
    id: 'entrepreneur',
    titleBn: 'উদ্যোক্তা হিসেবে',
    subtitleEn: 'As an Entrepreneur',
    descriptionBn:
      'যারা নিজস্ব ব্যবসায়িক ধারণা বা উদ্যোগ নিয়ে এগিয়ে যেতে চান, তারা তাদের পরিকল্পনা উপস্থাপনের মাধ্যমে সম্ভাব্য সহযোগিতা, দিকনির্দেশনা ও ব্যবসায়িক সুযোগ অনুসন্ধান করতে পারবেন।',
    highlightsBn: [
      'নতুন ব্যবসায়িক ধারণা বা বিদ্যমান উদ্যোগের প্রস্তাবনা উপস্থাপন',
      'যাচাই-বাছাই ও উপযুক্ত মূল্যায়নের ভিত্তিতে সম্ভাব্য বিনিয়োগ ও পরিচালনা সহায়তা',
      'ইকোসিস্টেমের অন্যান্য Venture-এর সাথে ব্যবসায়িক সংযোগের সুযোগ',
    ],
  },
  {
    id: 'employee',
    titleBn: 'কর্মী হিসেবে',
    subtitleEn: 'As a Professional / Team Member',
    descriptionBn:
      'যারা নিজের দক্ষতা, অভিজ্ঞতা ও যোগ্যতা অনুযায়ী সম্মানজনক পরিবেশে কাজ করতে চান, তাদের জন্য বিভিন্ন Venture-এ পর্যায়ক্রমে কর্মসংস্থানের সুযোগ তৈরির লক্ষ্য রয়েছে।',
    highlightsBn: [
      'নিজের শিক্ষা, কারিগরি দক্ষতা বা বাস্তব অভিজ্ঞতা অনুযায়ী কাজের সুযোগ',
      'প্রশিক্ষণ ও দক্ষতা উন্নয়নের মাধ্যমে পেশাগত অগ্রগতির পরিবেশ',
      'মানবিক মূল্যবোধ ও পারস্পরিক সম্মানের ভিত্তিতে কর্মপরিবেশ',
    ],
  },
  {
    id: 'dual-role',
    titleBn: 'উদ্যোক্তা ও কর্মী উভয় হিসেবে',
    subtitleEn: 'Dual Role: Entrepreneur & Professional',
    descriptionBn:
      'HOLYSUN ইকোসিস্টেমের অন্যতম বৈশিষ্ট্য হলো নমনীয় অংশগ্রহণ। একজন ব্যক্তি নিজের উদ্যোগ পরিচালনার পাশাপাশি প্রয়োজন ও দক্ষতা অনুযায়ী অন্য Venture-এর কার্যক্রমেও অংশগ্রহণ করতে পারবেন।',
    highlightsBn: [
      'নিজস্ব ব্যবসায়িক উদ্যোগের পাশাপাশি পেশাগত দক্ষতা কাজে লাগানোর সুযোগ',
      'বহুমুখী অভিজ্ঞতা ও আয়ের বৈধ সম্ভাবনা অনুসন্ধান',
      'সমন্বিত ইকোসিস্টেমের ভেতর পারস্পরিক সহযোগিতায় এগিয়ে যাওয়া',
    ],
  },
];

export const EDUCATION_SKILL_PILLARS = [
  {
    id: 'school-college',
    name: 'Holysun School & College',
    focusBn: 'প্রাতিষ্ঠানিক ও নৈতিক শিক্ষা',
    descriptionBn:
      'মানসম্মত সাধারণ শিক্ষা, জ্ঞানচর্চা এবং শিক্ষার্থীদের ব্যক্তিগত, নৈতিক ও সামাজিক বিকাশে দীর্ঘমেয়াদি অবদান রাখার পরিকল্পনা।',
  },
  {
    id: 'technical-institute',
    name: 'Holysun Technical Training Institute',
    focusBn: 'কারিগরি ও হাতে-কলমে প্রশিক্ষণ',
    descriptionBn:
      'কারিগরি শিক্ষা, বাস্তবভিত্তিক ওয়ার্কশপ এবং কর্মমুখী দক্ষতা উন্নয়নের মাধ্যমে তরুণ ও আগ্রহী ব্যক্তিদের কর্মজীবনের জন্য প্রস্তুত করার উদ্যোগ।',
  },
  {
    id: 'it-academy',
    name: 'Holysun IT & Digital Solutions Academy',
    focusBn: 'তথ্যপ্রযুক্তি ও ডিজিটাল দক্ষতা',
    descriptionBn:
      'সফটওয়্যার, ওয়েব প্রযুক্তি, ডিজিটাল সেবা ও সাইবার নিরাপত্তা বিষয়ে আধুনিক প্রশিক্ষণ প্রদানের মাধ্যমে প্রযুক্তিনির্ভর মানবসম্পদ গড়ে তোলার পরিকল্পনা।',
  },
];

export const WELFARE_ACTIVITIES = [
  {
    titleBn: 'স্বাস্থ্যসেবায় সহযোগিতা',
    descriptionBn:
      'অসহায় ও সুবিধাবঞ্চিত মানুষের জন্য প্রাথমিক চিকিৎসা পরামর্শ ও প্রয়োজনীয় স্বাস্থ্যসেবা সহায়তা পৌঁছে দেওয়ার পরিকল্পনা।',
  },
  {
    titleBn: 'শিক্ষা সহায়তা',
    descriptionBn:
      'অর্থাভাবে পিছিয়ে পড়া ও মেধাবী শিক্ষার্থীদের শিক্ষা উপকরণ এবং পড়াশোনা চালিয়ে যাওয়ার ক্ষেত্রে মানবিক সহযোগিতা।',
  },
  {
    titleBn: 'অসহায় ও সুবিধাবঞ্চিত মানুষের পাশে দাঁড়ানো',
    descriptionBn:
      'সমাজের অবহেলিত মানুষের মৌলিক প্রয়োজন ও সংকটময় মুহূর্তে সহমর্মিতা ও সম্মানের সাথে পাশে দাঁড়ানোর উদ্যোগ।',
  },
  {
    titleBn: 'মানবিক সহায়তা',
    descriptionBn:
      'প্রাকৃতিক দুর্যোগ কিংবা জরুরি মানবিক সংকটে ক্ষতিগ্রস্ত পরিবারের জন্য প্রয়োজনভিত্তিক সহায়তা কার্যক্রম।',
  },
  {
    titleBn: 'সামাজিক উন্নয়নমূলক উদ্যোগ',
    descriptionBn:
      'মানুষকে পরনির্ভরশীল না রেখে দক্ষতা ও সুযোগের মাধ্যমে স্বাবলম্বী করে তোলার দীর্ঘমেয়াদি সামাজিক উদ্যোগ।',
  },
];

export const ASSET_REFERENCE_LIST = [
  {
    id: 'asset-01',
    titleBn: 'HOLYSUN ইকোসিস্টেম ও উদ্যোক্তা কর্মপরিবেশ (Hero Visual)',
    path: GENERATED_ASSETS.heroEcosystem,
    usageBn: 'হোমপেজ হিরো সেকশন ও কনসালট্যান্সি উদ্যোগের প্রতীকী উপস্থাপনা',
    licenseNote: 'HOLYSUN Corporate Website Project Asset • Representative Editorial Photography',
  },
  {
    id: 'asset-02',
    titleBn: 'আধুনিক কৃষি ও সবুজ প্রকৃতি (Agro & Tourism Visual)',
    path: GENERATED_ASSETS.agroGreen,
    usageBn: 'Holysun Agro & Industries এবং Holysun Tourism-এর প্রতীকী উপস্থাপনা',
    licenseNote: 'HOLYSUN Corporate Website Project Asset • Representative Editorial Photography',
  },
  {
    id: 'asset-03',
    titleBn: 'পারিবারিক স্বাস্থ্যসেবা পরিবেশ (Healthcare Visual)',
    path: GENERATED_ASSETS.healthcareFamily,
    usageBn: 'Holysun Family Care Hospital-এর প্রতীকী উপস্থাপনা',
    licenseNote: 'HOLYSUN Corporate Website Project Asset • Representative Editorial Photography',
  },
  {
    id: 'asset-04',
    titleBn: 'শিক্ষা, কারিগরি প্রশিক্ষণ ও প্রযুক্তি ল্যাব (Education & IT Visual)',
    path: GENERATED_ASSETS.educationTraining,
    usageBn: 'School & College, Technical Training Institute ও Holysun IT & Digital Solutions-এর প্রতীকী উপস্থাপনা',
    licenseNote: 'HOLYSUN Corporate Website Project Asset • Representative Editorial Photography',
  },
  {
    id: 'asset-05',
    titleBn: 'বাণিজ্য, রিটেইল ও আন্তর্জাতিক লজিস্টিকস হাব (Commerce Visual)',
    path: GENERATED_ASSETS.commerceLogistics,
    usageBn: 'E-Mart, Cafe & Halal Bazar, Housing এবং Export-Import উদ্যোগের প্রতীকী উপস্থাপনা',
    licenseNote: 'HOLYSUN Corporate Website Project Asset • Representative Editorial Photography',
  },
];
