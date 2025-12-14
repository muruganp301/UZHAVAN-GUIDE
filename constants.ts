import { Vegetable } from './types';

export const VEGETABLES: Vegetable[] = [
  {
    id: 'tomato',
    nameEn: 'Tomato',
    nameTa: 'தக்காளி',
    icon: '🍅',
    color: 'bg-red-100 text-red-800 border-red-200',
    steps: [
      {
        titleEn: 'Seed Selection',
        titleTa: 'விதை தேர்வு',
        descriptionEn: 'Choose high-quality, disease-resistant hybrid seeds suited for your local climate.',
        descriptionTa: 'உங்கள் காலநிலைக்கு ஏற்ற உயர்தர மற்றும் நோய் எதிர்ப்பு சக்தி கொண்ட கலப்பின விதைகளைத் தேர்வுசெய்யவும்.'
      },
      {
        titleEn: 'Nursery Preparation',
        titleTa: 'நாற்றங்கால் தயாரிப்பு',
        descriptionEn: 'Prepare raised beds. Sow seeds in lines. Cover with light soil and straw.',
        descriptionTa: 'மேட்டுப்பாத்திகளை தயார் செய்யவும். வரிசையாக விதைகளை விதைக்கவும். மெல்லிய மண் மற்றும் வைக்கோல் கொண்டு மூடவும்.'
      },
      {
        titleEn: 'Transplanting',
        titleTa: 'நடவு முறை',
        descriptionEn: 'Transplant 25-30 day old seedlings to the main field. Space them 60cm apart.',
        descriptionTa: '25-30 நாட்கள் வயதுடைய நாற்றுகளை முக்கிய நிலத்திற்கு மாற்றவும். செடிகளுக்கு இடையே 60 செ.மீ இடைவெளி விடவும்.'
      },
      {
        titleEn: 'Watering',
        titleTa: 'நீர் மேலாண்மை',
        descriptionEn: 'Water immediately after planting. Thereafter, irrigate once every 5-7 days depending on soil moisture.',
        descriptionTa: 'நடவு செய்தவுடன் நீர் பாய்ச்சவும். அதன் பிறகு, மண்ணின் ஈரப்பதத்தைப் பொறுத்து 5-7 நாட்களுக்கு ஒருமுறை நீர் பாய்ச்சவும்.'
      },
      {
        titleEn: 'Fertilizer & Care',
        titleTa: 'உரம் மற்றும் பராமரிப்பு',
        descriptionEn: 'Apply organic manure initially. Use stakes to support the plants as they grow taller.',
        descriptionTa: 'தொடக்கத்தில் இயற்கை உரத்தை இடவும். செடிகள் வளரும்போது அவற்றைத் தாங்குவதற்கு குச்சிகளைப் பயன்படுத்தவும்.'
      },
      {
        titleEn: 'Harvest',
        titleTa: 'அறுவடை',
        descriptionEn: 'Harvest fruits when they turn pinkish-red. Pick regularly to encourage more production.',
        descriptionTa: 'பழங்கள் இளஞ்சிவப்பு நிறமாக மாறும்போது அறுவடை செய்யவும். அதிக மகசூலுக்கு தொடர்ந்து பழங்களைப் பறிக்கவும்.'
      }
    ]
  },
  {
    id: 'onion_small',
    nameEn: 'Small Onion',
    nameTa: 'சின்ன வெங்காயம்',
    icon: '🧅',
    color: 'bg-purple-50 text-purple-900 border-purple-200',
    steps: [
      {
        titleEn: 'Land Preparation',
        titleTa: 'நிலம் தயாரித்தல்',
        descriptionEn: 'Plough the land 4 times to a fine tilth. Form ridges and furrows.',
        descriptionTa: 'நிலத்தை 4 முறை நன்கு உழுது பொலபொலப்பாக்கவும். பார் மற்றும் சால்கள் அமைக்கவும்.'
      },
      {
        titleEn: 'Seed Treatment',
        titleTa: 'விதை நேர்த்தி',
        descriptionEn: 'Treat bulbs with Trichoderma viride or Pseudomonas to prevent rot.',
        descriptionTa: 'அழுகல் நோயைத் தடுக்க விதைக் கிழங்குகளை டிரைக்கோடெர்மா விரிடி அல்லது சூடோமோனாஸ் கொண்டு நேர்த்தி செய்யவும்.'
      },
      {
        titleEn: 'Planting',
        titleTa: 'நடவு',
        descriptionEn: 'Plant medium-sized bulbs on both sides of ridges at 10cm spacing.',
        descriptionTa: 'பார் வரிசையின் இருபுறமும் 10 செ.மீ இடைவெளியில் நடுத்தர அளவுள்ள கிழங்குகளை நடவும்.'
      },
      {
        titleEn: 'Irrigation & Weeding',
        titleTa: 'நீர் மற்றும் களை',
        descriptionEn: 'Irrigate weekly. Keep the field weed-free during the first 45 days.',
        descriptionTa: 'வாரம் ஒருமுறை நீர் பாய்ச்சவும். முதல் 45 நாட்களுக்கு வயலை களை இல்லாமல் பார்த்துக்கொள்ளவும்.'
      },
      {
        titleEn: 'Harvest',
        titleTa: 'அறுவடை',
        descriptionEn: 'Harvest when 50% of the tops fall over. Cure the bulbs in shade for storage.',
        descriptionTa: 'தாள்கள் 50% சாயும்போது அறுவடை செய்யவும். சேமிப்பிற்கு முன் நிழலில் உலர்த்தவும்.'
      }
    ]
  },
  {
    id: 'brinjal',
    nameEn: 'Brinjal',
    nameTa: 'கத்திரிக்காய்',
    icon: '🍆',
    color: 'bg-purple-100 text-purple-800 border-purple-200',
    steps: [
      {
        titleEn: 'Soil Preparation',
        titleTa: 'நிலம் தயாரித்தல்',
        descriptionEn: 'Plough the land thoroughly 4-5 times. Add farmyard manure to enrich the soil.',
        descriptionTa: 'நிலத்தை 4-5 முறை நன்கு உழவும். மண்ணை வளப்படுத்த தொழு உரம் இடவும்.'
      },
      {
        titleEn: 'Sowing',
        titleTa: 'விதைப்பு',
        descriptionEn: 'Sow seeds in a nursery first. Treat seeds with Trichoderma viride to prevent diseases.',
        descriptionTa: 'முதலில் நாற்றங்காலில் விதைகளை விதைக்கவும். நோய்களைத் தடுக்க டிரைக்கோடெர்மா விரிடி கொண்டு விதைகளை நேர்த்தி செய்யவும்.'
      },
      {
        titleEn: 'Planting',
        titleTa: 'நடவு',
        descriptionEn: 'Transplant seedlings after 30-35 days. Plant them in ridges and furrows.',
        descriptionTa: '30-35 நாட்களுக்குப் பிறகு நாற்றுகளை நடவு செய்யவும். பார் மற்றும் சால்களில் நடவு செய்யவும்.'
      },
      {
        titleEn: 'Weeding',
        titleTa: 'களை எடுத்தல்',
        descriptionEn: 'Remove weeds regularly. Earthing up should be done 30 days after planting.',
        descriptionTa: 'தவறாமல் களைகளை அகற்றவும். நடவு செய்த 30 நாட்களுக்குப் பிறகு மண் அணைக்க வேண்டும்.'
      },
      {
        titleEn: 'Pest Control',
        titleTa: 'பூச்சி கட்டுப்பாடு',
        descriptionEn: 'Watch out for shoot and fruit borers. Use neem oil spray as a natural deterrent.',
        descriptionTa: 'தண்டு மற்றும் காய் துளைப்பான்களைக் கண்காணிக்கவும். இயற்கையான பூச்சி விரட்டியாக வேப்ப எண்ணெய் தெளிக்கவும்.'
      },
      {
        titleEn: 'Harvest',
        titleTa: 'அறுவடை',
        descriptionEn: 'Harvest tender and glossy fruits before they lose their color and become tough.',
        descriptionTa: 'நிறம் மாறுவதற்கு முன்பே, மென்மையான மற்றும் பளபளப்பான காய்களை அறுவடை செய்யவும்.'
      }
    ]
  },
  {
    id: 'ladiesfinger',
    nameEn: "Lady's Finger",
    nameTa: 'வெண்டைக்காய்',
    icon: '🌿',
    color: 'bg-green-100 text-green-800 border-green-200',
    steps: [
      {
        titleEn: 'Seed Preparation',
        titleTa: 'விதை தயாரிப்பு',
        descriptionEn: 'Soak seeds in water for 24 hours before sowing to improve germination.',
        descriptionTa: 'முளைப்புத் திறனை அதிகரிக்க விதைப்பதற்கு முன் விதைகளை 24 மணி நேரம் நீரில் ஊறவைக்கவும்.'
      },
      {
        titleEn: 'Sowing',
        titleTa: 'விதைத்தல்',
        descriptionEn: 'Sow seeds directly in the main field with 45x30 cm spacing.',
        descriptionTa: '45x30 செ.மீ இடைவெளியில் விதைகளை நேரடியாக நிலத்தில் விதைக்கவும்.'
      },
      {
        titleEn: 'Irrigation',
        titleTa: 'நீர்ப்பாசனம்',
        descriptionEn: 'Water immediately after sowing. Irrigate every 5-7 days in summer.',
        descriptionTa: 'விதைத்த உடனே நீர் பாய்ச்சவும். கோடைக்காலத்தில் 5-7 நாட்களுக்கு ஒருமுறை நீர் பாய்ச்சவும்.'
      },
      {
        titleEn: 'Fertilizer Application',
        titleTa: 'உரம் இடுதல்',
        descriptionEn: 'Apply Nitrogen fertilizer 30 days after sowing during flowering stage.',
        descriptionTa: 'பூக்கும் தருணத்தில், விதைத்த 30 நாட்களுக்குப் பிறகு தழைச்சத்து உரம் இடவும்.'
      },
      {
        titleEn: 'Picking',
        titleTa: 'பறித்தல்',
        descriptionEn: 'Harvest tender pods every alternate day. Delay leads to fibrous pods.',
        descriptionTa: 'ஒவ்வொரு இரண்டு நாட்களுக்கு ஒருமுறை மென்மையான காய்களைப் பறிக்கவும். தாமதமானால் காய்கள் நாராகிவிடும்.'
      }
    ]
  },
  {
    id: 'chilli',
    nameEn: 'Chilli',
    nameTa: 'மிளகாய்',
    icon: '🌶️',
    color: 'bg-red-50 text-red-700 border-red-200',
    steps: [
      {
        titleEn: 'Climate',
        titleTa: 'காலநிலை',
        descriptionEn: 'Requires a warm and humid climate. Avoid heavy rains during flowering.',
        descriptionTa: 'வெப்பமான மற்றும் ஈரப்பதமான காலநிலை தேவை. பூக்கும் போது கனமழையைத் தவிர்க்கவும்.'
      },
      {
        titleEn: 'Nursery',
        titleTa: 'நாற்றங்கால்',
        descriptionEn: 'Prepare raised beds. Sow seeds and cover with mulch until germination.',
        descriptionTa: 'மேட்டுப்பாத்திகளை தயார் செய்யவும். விதைகளை விதைத்து முளைக்கும் வரை மூடாக்கு போடவும்.'
      },
      {
        titleEn: 'Transplanting',
        titleTa: 'நடவு',
        descriptionEn: 'Transplant 40-day old seedlings. Dip roots in bio-fertilizer before planting.',
        descriptionTa: '40 நாள் நாற்றுகளை நடவு செய்யவும். நடவு செய்வதற்கு முன் வேர்களை உயிர் உரங்களில் நனைக்கவும்.'
      },
      {
        titleEn: 'Care',
        titleTa: 'பராமரிப்பு',
        descriptionEn: 'Control leaf curl virus by managing whiteflies. Keep the field weed-free.',
        descriptionTa: 'வெள்ளை ஈக்களைக் கட்டுப்படுத்துவதன் மூலம் இலை சுருள் நோயைக் கட்டுப்படுத்தவும். வயலை களை இல்லாமல் வைத்திருக்கவும்.'
      },
      {
        titleEn: 'Harvest',
        titleTa: 'அறுவடை',
        descriptionEn: 'Pick green chillies for cooking or leave them to turn red for drying.',
        descriptionTa: 'சமையலுக்குப் பச்சை மிளகாயைப் பறிக்கவும் அல்லது வற்றலுக்கு சிவப்பு நிறமாக மாற விடவும்.'
      }
    ]
  },
  {
    id: 'banana',
    nameEn: 'Banana',
    nameTa: 'வாழை',
    icon: '🍌',
    color: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    steps: [
      {
        titleEn: 'Variety & Suckers',
        titleTa: 'ரகம் மற்றும் கன்று',
        descriptionEn: 'Select varieties like Poovan or Rasthali. Use sword suckers (1.5-2kg).',
        descriptionTa: 'பூவன் அல்லது ரஸ்தாளி போன்ற ரகங்களைத் தேர்வு செய்யவும். ஈட்டி கன்றுகளைப் (1.5-2 கிலோ) பயன்படுத்தவும்.'
      },
      {
        titleEn: 'Planting',
        titleTa: 'நடவு',
        descriptionEn: 'Dig pits of 1.5 ft cube. Plant suckers and press soil firmly.',
        descriptionTa: '1.5 அடி அளவுள்ள குழிகள் எடுத்து கன்றுகளை நடவும். மண்ணை நன்கு அழுத்தவும்.'
      },
      {
        titleEn: 'Desuckering',
        titleTa: 'பக்க கன்று நீக்கம்',
        descriptionEn: 'Remove side suckers regularly to boost mother plant growth.',
        descriptionTa: 'தாய் மரத்தின் வளர்ச்சியை அதிகரிக்க பக்கக் கன்றுகளை அவ்வப்போது அகற்றவும்.'
      },
      {
        titleEn: 'Propping',
        titleTa: 'முட்டுக் கொடுத்தல்',
        descriptionEn: 'Provide bamboo stakes or casuarina poles to prevent lodging during fruit maturing.',
        descriptionTa: 'காய்கள் முற்றும் போது மரம் சாயாமல் இருக்க மூங்கில் அல்லது சவுக்கு குச்சிகள் கொண்டு முட்டுக் கொடுக்கவும்.'
      },
      {
        titleEn: 'Harvest',
        titleTa: 'அறுவடை',
        descriptionEn: 'Harvest bunches 11-12 months after planting when ridges on fruit disappear.',
        descriptionTa: '11-12 மாதங்களில், காய்களில் உள்ள நரம்புகள் மறையும் போது தார் அறுவடை செய்யவும்.'
      }
    ]
  },
  {
    id: 'drumstick',
    nameEn: 'Drumstick',
    nameTa: 'முருங்கை',
    icon: '🥢',
    color: 'bg-green-50 text-green-900 border-green-200',
    steps: [
      {
        titleEn: 'Planting Method',
        titleTa: 'நடவு முறை',
        descriptionEn: 'Can be grown from seeds (Annual) or limb cuttings (Perennial).',
        descriptionTa: 'விதைகள் (செடி முருங்கை) அல்லது மரக்கிளைகள் (மர முருங்கை) மூலம் வளர்க்கலாம்.'
      },
      {
        titleEn: 'Spacing',
        titleTa: 'இடைவெளி',
        descriptionEn: 'Dig pits at 2.5m x 2.5m spacing. Fill with manure and soil.',
        descriptionTa: '2.5 மீ x 2.5 மீ இடைவெளியில் குழிகள் எடுக்கவும். உரம் மற்றும் மண் கொண்டு நிரப்பவும்.'
      },
      {
        titleEn: 'Pruning',
        titleTa: 'கவாத்து',
        descriptionEn: 'Pinch the main shoot at 75cm height to encourage branching.',
        descriptionTa: 'அதிக கிளைகள் வர 75 செ.மீ உயரத்தில் நுனியை கிள்ளி விடவும்.'
      },
      {
        titleEn: 'Fertilizer',
        titleTa: 'உரம்',
        descriptionEn: 'Apply NPK and compost every 6 months for better yield.',
        descriptionTa: 'நல்ல மகசூலுக்கு 6 மாதங்களுக்கு ஒருமுறை உரம் இடவும்.'
      },
      {
        titleEn: 'Harvest',
        titleTa: 'அறுவடை',
        descriptionEn: 'Harvest fleshy pods 6 months after planting. Pick regularly.',
        descriptionTa: '6 மாதங்களில் சதைப்பற்றான காய்களை அறுவடை செய்யலாம். தொடர்ந்து பறிக்கவும்.'
      }
    ]
  },
  {
    id: 'coconut',
    nameEn: 'Coconut',
    nameTa: 'தென்னை',
    icon: '🥥',
    color: 'bg-stone-100 text-stone-800 border-stone-300',
    steps: [
      {
        titleEn: 'Planting',
        titleTa: 'நடவு',
        descriptionEn: 'Dig large pits (3x3x3 ft). Plant 1-year old vigorous seedlings.',
        descriptionTa: 'பெரிய குழிகள் (3x3x3 அடி) எடுக்கவும். 1 வயதுடைய வீரியமான நாற்றுகளை நடவும்.'
      },
      {
        titleEn: 'Spacing',
        titleTa: 'இடைவெளி',
        descriptionEn: 'Maintain 25ft spacing between trees to ensure sunlight.',
        descriptionTa: 'மரங்களுக்கு இடையே 25 அடி இடைவெளி விடவும்.'
      },
      {
        titleEn: 'Irrigation',
        titleTa: 'பாசனம்',
        descriptionEn: 'Drip irrigation is efficient. Each tree needs ~100L water daily.',
        descriptionTa: 'சொட்டு நீர் பாசனம் சிறந்தது. மரத்திற்கு நாள் ஒன்றுக்கு சுமார் 100 லிட்டர் தண்ணீர் தேவை.'
      },
      {
        titleEn: 'Manuring',
        titleTa: 'உரம் இடுதல்',
        descriptionEn: 'Apply green manure or farmyard manure in basins around the tree.',
        descriptionTa: 'மரத்தைச் சுற்றி வட்ட பாத்திகளில் பசுந்தாள் உரம் அல்லது தொழு உரம் இடவும்.'
      },
      {
        titleEn: 'Harvest',
        titleTa: 'அறுவடை',
        descriptionEn: 'Nuts can be harvested every 30-45 days throughout the year.',
        descriptionTa: 'வருடம் முழுவதும் 30-45 நாட்களுக்கு ஒருமுறை தேங்காய்களை அறுவடை செய்யலாம்.'
      }
    ]
  },
  {
    id: 'mango',
    nameEn: 'Mango',
    nameTa: 'மாம்பழம்',
    icon: '🥭',
    color: 'bg-yellow-50 text-orange-700 border-orange-200',
    steps: [
      {
        titleEn: 'Planting Season',
        titleTa: 'நடவு பருவம்',
        descriptionEn: 'June-December is ideal. Grafted plants are preferred.',
        descriptionTa: 'ஜூன்-டிசம்பர் நடவு செய்ய ஏற்றது. ஒட்டு ரகங்கள் சிறந்தது.'
      },
      {
        titleEn: 'Spacing',
        titleTa: 'இடைவெளி',
        descriptionEn: 'Standard spacing is 10m x 10m. High density planting uses 5m x 5m.',
        descriptionTa: 'வழக்கமான இடைவெளி 10 மீ x 10 மீ. அடர் நடவுக்கு 5 மீ x 5 மீ போதுமானது.'
      },
      {
        titleEn: 'Care',
        titleTa: 'பராமரிப்பு',
        descriptionEn: 'Remove rootstock sprouts below the graft joint regularily.',
        descriptionTa: 'ஒட்டுப் பகுதிக்கு கீழே வரும் வேர் முளைகளை அடிக்கடி அகற்றவும்.'
      },
      {
        titleEn: 'Flowering',
        titleTa: 'பூக்கும் பருவம்',
        descriptionEn: 'Protect flowers from hoppers and powdery mildew using appropriate sprays.',
        descriptionTa: 'தத்துப்பூச்சிகள் மற்றும் சாம்பல் நோயிலிருந்து பூங்கொத்துகளைப் பாதுகாக்கவும்.'
      },
      {
        titleEn: 'Harvest',
        titleTa: 'அறுவடை',
        descriptionEn: 'Harvest mature fruits with stalks to prevent sap injury.',
        descriptionTa: 'பால் வடியாமல் இருக்க முற்றிய பழங்களை காம்புடன் பறிக்கவும்.'
      }
    ]
  },
  {
    id: 'bittergourd',
    nameEn: 'Bitter Gourd',
    nameTa: 'பாகற்காய்',
    icon: '🥒',
    color: 'bg-green-50 text-green-900 border-green-200',
    steps: [
      {
        titleEn: 'Pandal System',
        titleTa: 'பந்தல் முறை',
        descriptionEn: 'Erect a trellis (pandal) using stone pillars and wires for vines to spread.',
        descriptionTa: 'கொடிகள் படர கல் தூண்கள் மற்றும் கம்பிகள் கொண்டு பந்தல் அமைக்கவும்.'
      },
      {
        titleEn: 'Sowing',
        titleTa: 'விதைத்தல்',
        descriptionEn: 'Sow seeds in pits at 2m spacing. 4-5 seeds per pit.',
        descriptionTa: '2 மீ இடைவெளியில் குழிகளில் விதைக்கவும். ஒரு குழிக்கு 4-5 விதைகள்.'
      },
      {
        titleEn: 'Growth',
        titleTa: 'வளர்ச்சி',
        descriptionEn: 'Train the vines to reach the pandal. Remove side shoots until it reaches top.',
        descriptionTa: 'கொடிகளை பந்தலில் ஏற்றி விடவும். பந்தலை அடையும் வரை பக்கக் கிளைகளை அகற்றவும்.'
      },
      {
        titleEn: 'Pest Control',
        titleTa: 'பூச்சி கட்டுப்பாடு',
        descriptionEn: 'Use pheromone traps to control fruit flies which cause rotting.',
        descriptionTa: 'பழ ஈக்களைக் கட்டுப்படுத்த இனக்கவர்ச்சி பொறிகளைப் பயன்படுத்தவும்.'
      },
      {
        titleEn: 'Harvest',
        titleTa: 'அறுவடை',
        descriptionEn: 'Harvest fruits when they are full size but still green and tender.',
        descriptionTa: 'காய்கள் முழு வளர்ச்சியடைந்து, ஆனால் பச்சையாகவும் மென்மையாகவும் இருக்கும்போது அறுவடை செய்யவும்.'
      }
    ]
  },
  {
    id: 'pumpkin',
    nameEn: 'Pumpkin',
    nameTa: 'பூசணிக்காய்',
    icon: '🎃',
    color: 'bg-orange-100 text-orange-800 border-orange-200',
    steps: [
      {
        titleEn: 'Pit Preparation',
        titleTa: 'குழி தயாரித்தல்',
        descriptionEn: 'Dig pits of 60cm x 60cm x 60cm size at 2m spacing. Fill with manure.',
        descriptionTa: '2 மீட்டர் இடைவெளியில் 60x60x60 செ.மீ அளவுள்ள குழிகளைத் தோண்டவும். எரு கொண்டு நிரப்பவும்.'
      },
      {
        titleEn: 'Sowing',
        titleTa: 'விதைத்தல்',
        descriptionEn: 'Sow 5 seeds per pit. Thinning should be done to keep 3 healthy plants per pit.',
        descriptionTa: 'ஒரு குழிக்கு 5 விதைகள் விதைக்கவும். பின்னர் ஒரு குழிக்கு 3 ஆரோக்கியமான செடிகள் மட்டும் இருக்குமாறு கலைக்கவும்.'
      },
      {
        titleEn: 'Vine Management',
        titleTa: 'கொடி பராமரிப்பு',
        descriptionEn: 'Allow vines to spread on the ground. Remove unhealthy branches.',
        descriptionTa: 'கொடிகளைத் தரையில் படர விடவும். ஆரோக்கியமற்ற கிளைகளை அகற்றவும்.'
      },
      {
        titleEn: 'Harvest',
        titleTa: 'அறுவடை',
        descriptionEn: 'Harvest when the skin becomes hard and the color turns fully orange/yellow.',
        descriptionTa: 'தோல் கடினமாகவும், நிறம் முழுமையாக ஆரஞ்சு/மஞ்சள் நிறமாகவும் மாறும்போது அறுவடை செய்யவும்.'
      }
    ]
  },
  {
    id: 'snakegourd',
    nameEn: 'Snake Gourd',
    nameTa: 'புடலங்காய்',
    icon: '🐍',
    color: 'bg-green-50 text-green-700 border-green-200',
    steps: [
      {
        titleEn: 'Sowing',
        titleTa: 'விதைப்பு',
        descriptionEn: 'Soak seeds in water overnight. Sow in pits under pandal.',
        descriptionTa: 'விதைகளை இரவு முழுவதும் நீரில் ஊறவைக்கவும். பந்தலின் கீழ் குழிகளில் விதைக்கவும்.'
      },
      {
        titleEn: 'Flowering',
        titleTa: 'பூக்கும் தருணம்',
        descriptionEn: 'Spray Ethrel 100 ppm to increase female flower production.',
        descriptionTa: 'பெண் பூக்களை அதிகரிக்க எத்ரல் 100 பிபிஎம் தெளிக்கவும்.'
      },
      {
        titleEn: 'Fruit Care',
        titleTa: 'காய் பராமரிப்பு',
        descriptionEn: 'Tie a small stone to the tip of the fruit to prevent curling.',
        descriptionTa: 'காய்கள் வளைவதைத் தடுக்க முனையில் சிறிய கல்லைக் கட்டவும்.'
      },
      {
        titleEn: 'Harvest',
        titleTa: 'அறுவடை',
        descriptionEn: 'Harvest young, fleshy fruits before seeds harden.',
        descriptionTa: 'விதைகள் முற்றுவதற்கு முன், இளமையான சதைப்பற்றான காய்களை அறுவடை செய்யவும்.'
      }
    ]
  },
  {
    id: 'papaya',
    nameEn: 'Papaya',
    nameTa: 'பப்பாளி',
    icon: '🥔',
    color: 'bg-orange-50 text-orange-800 border-orange-200',
    steps: [
      {
        titleEn: 'Variety',
        titleTa: 'ரகம்',
        descriptionEn: 'Red Lady and Co-8 are popular varieties in Tamil Nadu.',
        descriptionTa: 'தமிழ்நாட்டில் ரெட் லேடி மற்றும் கோ-8 ரகங்கள் பிரபலமானவை.'
      },
      {
        titleEn: 'Planting',
        titleTa: 'நடவு',
        descriptionEn: 'Plant seedlings at 1.8m spacing. Avoid areas with water stagnation.',
        descriptionTa: '1.8 மீ இடைவெளியில் நாற்றுகளை நடவும். தண்ணீர் தேங்கும் இடங்களைத் தவிர்க்கவும்.'
      },
      {
        titleEn: 'Nutrients',
        titleTa: 'ஊட்டச்சத்து',
        descriptionEn: 'Apply 50g NPK per plant every 2 months.',
        descriptionTa: 'ஒவ்வொரு 2 மாதங்களுக்கும் ஒரு செடிக்கு 50 கிராம் NPK உரம் இடவும்.'
      },
      {
        titleEn: 'Harvest',
        titleTa: 'அறுவடை',
        descriptionEn: 'Harvest when skin colour changes to yellow. Latex should be watery.',
        descriptionTa: 'தோல் நிறம் மஞ்சளாக மாறும்போது அறுவடை செய்யவும். பால் நீர்த்து இருக்க வேண்டும்.'
      }
    ]
  },
  {
    id: 'turmeric',
    nameEn: 'Turmeric',
    nameTa: 'மஞ்சள்',
    icon: '🟡',
    color: 'bg-yellow-50 text-yellow-900 border-yellow-300',
    steps: [
      {
        titleEn: 'Season',
        titleTa: 'பருவம்',
        descriptionEn: 'May-June (Vaigasi Pattam) is the best season for planting.',
        descriptionTa: 'மே-ஜூன் (வைகாசி பட்டம்) நடவு செய்ய சிறந்த பருவம்.'
      },
      {
        titleEn: 'Rhizome Planting',
        titleTa: 'கிழங்கு நடவு',
        descriptionEn: 'Plant mother or finger rhizomes on ridges. Space them 15cm apart.',
        descriptionTa: 'தாய் அல்லது விரல் கிழங்குகளை பார்களில் 15 செ.மீ இடைவெளியில் நடவும்.'
      },
      {
        titleEn: 'Mulching',
        titleTa: 'மூடாக்கு',
        descriptionEn: 'Apply green leaf mulch immediately after planting to retain moisture.',
        descriptionTa: 'ஈரப்பதத்தைத் தக்கவைக்க நடவு செய்த உடனே பச்சிலைகளைக் கொண்டு மூடவும்.'
      },
      {
        titleEn: 'Harvest',
        titleTa: 'அறுவடை',
        descriptionEn: 'Harvest after 9 months when leaves turn yellow and dry completely.',
        descriptionTa: '9 மாதங்களுக்குப் பிறகு இலைகள் மஞ்சள் நிறமாகி முழுமையாக காய்ந்த பின் அறுவடை செய்யவும்.'
      }
    ]
  },
  {
    id: 'greens',
    nameEn: 'Greens (Keerai)',
    nameTa: 'கீரை வகைகள்',
    icon: '🥬',
    color: 'bg-green-100 text-green-900 border-green-200',
    steps: [
      {
        titleEn: 'Soil Prep',
        titleTa: 'நிலம் தயாரிப்பு',
        descriptionEn: 'Prepare beds with fine tilth soil mixed with compost.',
        descriptionTa: 'மக்கிய உரம் கலந்த மண்ணைக் கொண்டு பாத்திகள் அமைக்கவும்.'
      },
      {
        titleEn: 'Sowing',
        titleTa: 'விதைப்பு',
        descriptionEn: 'Mix tiny seeds with sand (1:3 ratio) and broadcast evenly.',
        descriptionTa: 'சிறிய விதைகளை மணலுடன் (1:3 விகிதம்) கலந்து சீராகத் தூவவும்.'
      },
      {
        titleEn: 'Watering',
        titleTa: 'நீர் நிர்வாகம்',
        descriptionEn: 'Sprinkle water carefully using a rose can to avoid displacing seeds.',
        descriptionTa: 'விதைகள் சிதறாமல் இருக்க பூவாளி கொண்டு கவனமாக நீர் தெளிக்கவும்.'
      },
      {
        titleEn: 'Harvest',
        titleTa: 'அறுவடை',
        descriptionEn: 'First harvest can be done in 20-25 days. Pull out or clip leaves.',
        descriptionTa: '20-25 நாட்களில் முதல் அறுவடை செய்யலாம். வேருடன் பறிக்கலாம் அல்லது இலைகளை நறுக்கலாம்.'
      }
    ]
  },
  {
    id: 'watermelon',
    nameEn: 'Watermelon',
    nameTa: 'தர்பூசணி',
    icon: '🍉',
    color: 'bg-red-50 text-green-800 border-green-200',
    steps: [
      {
        titleEn: 'Season',
        titleTa: 'பருவம்',
        descriptionEn: 'Sow in Dec-Jan (Thai Pattam) for summer harvest.',
        descriptionTa: 'கோடை அறுவடைக்கு டிசம்பர்-ஜனவரி (தை பட்டம்) மாதங்களில் விதைக்கவும்.'
      },
      {
        titleEn: 'Sowing',
        titleTa: 'விதைப்பு',
        descriptionEn: 'Dig pits at 2.5m spacing. Sow 3-4 seeds per pit.',
        descriptionTa: '2.5 மீ இடைவெளியில் குழிகள் எடுக்கவும். ஒரு குழிக்கு 3-4 விதைகள் விதைக்கவும்.'
      },
      {
        titleEn: 'Irrigation',
        titleTa: 'பாசனம்',
        descriptionEn: 'Regular watering is crucial during flowering and fruit setting.',
        descriptionTa: 'பூக்கும் மற்றும் காய் பிடிக்கும் தருணங்களில் நீர் பாய்ச்சுவது மிக அவசியம்.'
      },
      {
        titleEn: 'Harvest',
        titleTa: 'அறுவடை',
        descriptionEn: 'Harvest when the tendril near the fruit stem dries up.',
        descriptionTa: 'பழத்தின் காம்பு அருகே உள்ள சுருள் காய்ந்தவுடன் அறுவடை செய்யவும்.'
      }
    ]
  },
  {
    id: 'tapioca',
    nameEn: 'Tapioca',
    nameTa: 'மரவள்ளிக்கிழங்கு',
    icon: '🍠',
    color: 'bg-stone-100 text-stone-900 border-stone-300',
    steps: [
      {
        titleEn: 'Setts',
        titleTa: 'குச்சிகள்',
        descriptionEn: 'Use disease-free stem cuttings (setts) from middle part of stem.',
        descriptionTa: 'தண்டின் நடுப்பகுதியிலிருந்து எடுக்கப்பட்ட நோய் இல்லாத குச்சிகளைப் பயன்படுத்தவும்.'
      },
      {
        titleEn: 'Planting',
        titleTa: 'நடவு',
        descriptionEn: 'Plant setts vertically on mounds or ridges. Be careful with buds facing up.',
        descriptionTa: 'மேடுகள் அல்லது பார்களில் குச்சிகளை செங்குத்தாக, மொட்டுகள் மேலே இருக்குமாறு நடவும்.'
      },
      {
        titleEn: 'Fertilizer',
        titleTa: 'உரம்',
        descriptionEn: 'Potash is essential for tuber development. Apply in split doses.',
        descriptionTa: 'கிழங்கு வளர்ச்சிக்கு சாம்பல் சத்து அவசியம். பல முறை பிரித்து இடவும்.'
      },
      {
        titleEn: 'Harvest',
        titleTa: 'அறுவடை',
        descriptionEn: 'Harvest after 8-10 months when soil near base cracks.',
        descriptionTa: '8-10 மாதங்களுக்குப் பிறகு அடிப்பகுதியில் மண் வெடிப்பு ஏற்படும் போது அறுவடை செய்யவும்.'
      }
    ]
  }
];