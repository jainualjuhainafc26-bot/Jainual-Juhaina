import { IndianStateDossier } from '../types/heritage';

export const INDIAN_STATES_AND_UTS: IndianStateDossier[] = [
  // SOUTH INDIA
  {
    id: 'tamil-nadu',
    name: 'Tamil Nadu',
    type: 'State',
    zone: 'South',
    capital: 'Chennai',
    coordinates: [78.65, 11.12],
    famousDishes: ['Kambu Koozh', 'Ragi Kali', 'Paniyaram', 'Kozhukattai', 'Kollu Rasam'],
    featuredDishIds: ['kambu-koozh', 'kozhukattai', 'kollu-rasam'],
    forgottenRecipes: [
      {
        name: 'Varagu Arisi Ven Pongal',
        note: 'Kodo millet savoury porridge once prepared in dryland Kongu and Madurai farms before polished rice became dominant.',
      },
      {
        name: 'Ulundhu Kali',
        note: 'Black gram and palm jaggery porridge traditionally prepared for adolescent girls and postpartum recovery.',
      },
    ],
    localIngredients: ['Kambu (Pearl Millet)', 'Kezhvaragu (Finger Millet)', 'Kollu (Horse Gram)', 'Karupatti (Palm Jaggery)', 'Cold-pressed Gingelly Oil'],
    festivalFoods: [
      { festival: 'Aadi Perukku', dish: 'Chitrannam & Kambu Koozh', context: 'Shared in earthen pots along riverbanks to honour monsoon waters.' },
      { festival: 'Vinayagar Chaturthi', dish: 'Ellu Kozhukattai', context: 'Hand-pleated rice dumplings filled with roasted sesame and jaggery.' },
    ],
    culturalStory:
      'Sangam-era poetry classifies Tamil food by five ecological landscapes (Tinai)—mountain millets, forest tubers, coastal salt-cured fish, and river-delta rice. Across rural courtyards, earthen-pot millet fermentation sustained agrarian families through intense summer heat.',
    cookingMethods: ['Earthen-pot lacto-fermentation', 'Cast-iron paniyaram grilling', 'Steam-cooking in palm or banana leaf', 'Stone-ground wet batter preparation'],
    communities: ['Kongu agrarian kitchens', 'Chettinad merchant homes', 'Tamil fisherfolk coast', 'Irula & Toda highland communities'],
  },
  {
    id: 'kerala',
    name: 'Kerala',
    type: 'State',
    zone: 'South',
    capital: 'Thiruvananthapuram',
    coordinates: [76.27, 10.85],
    famousDishes: ['Puttu', 'Appam', 'Avial', 'Palada Payasam'],
    featuredDishIds: ['avial', 'appam', 'palada-payasam'],
    forgottenRecipes: [
      {
        name: 'Karkidaka Kanji',
        note: 'Medicinal monsoon rice gruel simmered with ten sacred herbs (Dasapushpam) and crushed spices during the heavy rains of Karkidakam.',
      },
      {
        name: 'Puzhukku (Tubers Medley)',
        note: 'Root vegetables—elephant foot yam, tapioca, and colocasia—slow-steamed with crushed bird’s-eye chili and coconut oil.',
      },
    ],
    localIngredients: ['Matta Red Rice', 'Tender Coconut & Coconut Milk', 'Kudampuli (Malabar Tamarind)', 'Tellicherry Black Pepper', 'Jackfruit & Plantain'],
    festivalFoods: [
      { festival: 'Onam', dish: 'Onasadya & Palada Payasam', context: 'A harvest feast on plantain leaf balancing six tastes across seasonal garden produce.' },
      { festival: 'Vishu', dish: 'Vishu Kanji & Chakka Pradhaman', context: 'Rice and jackfruit dishes welcoming the spring agricultural new year.' },
    ],
    culturalStory:
      'Shaped by the Arabian Sea spice trade, monsoons, and multi-faith coastal port towns—Malabar Muslim, Syrian Christian, Jewish Cochin, and temple traditions—Kerala’s kitchens turn coconut, fermented toddy or rice batter, and forest tubers into deeply restorative meals.',
    cookingMethods: ['Bamboo-tube steaming (Puttu Kutti)', 'Earthen chatty slow-simmering', 'Uruli bronze vessel reduction', 'Toddy/yeast rice-batter fermentation'],
    communities: ['Malabar Mappila kitchens', 'Central Travancore Christian homes', 'Namboodiri & Nair Sadya traditions', 'Kurichiya & Paniya Wayanad communities'],
  },
  {
    id: 'karnataka',
    name: 'Karnataka',
    type: 'State',
    zone: 'South',
    capital: 'Bengaluru',
    coordinates: [75.71, 15.31],
    famousDishes: ['Ragi Mudde', 'Bisi Bele Bath', 'Akki Rotti'],
    featuredDishIds: ['ragi-mudde', 'bisi-bele-bath'],
    forgottenRecipes: [
      {
        name: 'Kharbujada Sandige & Jolada Ambali',
        note: 'Sun-dried ash-gourd crisps and fermented sorghum buttermilk gruel common in North Karnataka harvest seasons.',
      },
      {
        name: 'Patrode',
        note: 'Colocasia leaves smeared with spiced rice-tamarind paste, rolled, steamed, and pan-toasted along the Malnad hills.',
      },
    ],
    localIngredients: ['Ragi (Finger Millet)', 'Byadagi Chili', 'Toor Dal', 'Avarekalu (Hyacinth Bean)', 'Kodagu Wild Honey & Vinegar'],
    festivalFoods: [
      { festival: 'Ugadi', dish: 'Bevu Bella & Obbattu', context: 'Neem blossom and jaggery eaten together to accept life’s bitterness and sweetness.' },
      { festival: 'Makara Sankranti', dish: 'Ellu Bella', context: 'Exchanging sesame, jaggery, and dry coconut mixes among neighbours.' },
    ],
    culturalStory:
      'Karnataka’s cuisine shifts dramatically every hundred kilometres: from Old Mysore’s ragi balls and aromatic rice-lentil pots to Uttara Karnataka’s sorghum rotis, coastal Mangalorean kori rotti, and Kodava bamboo-shoot pork curries.',
    cookingMethods: ['Wooden paddle kneading over boiling millet', 'Slow-simmered spice-roasted grain pots', 'Tawa-pressed rice flatbreads', 'Clay-pot coastal coconut roasting'],
    communities: ['Old Mysore farming families', 'Uttara Karnataka Lingayat kitchens', 'Kodava highland clans', 'Tuluva & Karavali coastal homes'],
  },
  {
    id: 'andhra-pradesh',
    name: 'Andhra Pradesh',
    type: 'State',
    zone: 'South',
    capital: 'Amaravati',
    coordinates: [79.74, 15.91],
    famousDishes: ['Pesarattu', 'Gongura Pachadi', 'Pootharekulu'],
    featuredDishIds: ['gongura-pachadi', 'pesarattu'],
    forgottenRecipes: [
      {
        name: 'Dibba Rotti',
        note: 'Thick, crisp-edged fermented black-gram and rice-rava loaf slow-baked under embers in earthen or cast-iron pans.',
      },
      {
        name: 'Ragi Sangati with Natu Kodi',
        note: 'Rayalaseema’s hearty finger-millet and rice mash paired with fiery country-spice stew.',
      },
    ],
    localIngredients: ['Gongura (Roselle Sorrel Leaves)', 'Guntur Sannam Chili', 'Whole Green Moong', 'Aavapindi (Mustard Powder)', 'Kakinada Kaja Sugar & Rice Starch'],
    festivalFoods: [
      { festival: 'Sankranti', dish: 'Ariselu & Pootharekulu', context: 'Paper-thin rice-starch sheets folded with ghee and jaggery, crafted by women artisans in Atreyapuram.' },
      { festival: 'Ugadi', dish: 'Ugadi Pachadi', context: 'Six-taste raw mango, tamarind, neem flower, chili, salt, and jaggery elixir.' },
    ],
    culturalStory:
      'Defined by sunlit delta paddies and arid Rayalaseema plateaus, Andhra’s kitchens celebrate sour-spicy harmony—sun-drying pickles (avakai) in ceramic jaadis for the entire year and turning simple green gram into crisp morning crepes.',
    cookingMethods: ['Heated clay pot inversion for rice-starch sheets', 'Stone-mortar (rolu-rokali) pounding', 'Sun-curing seasonal pickles in ceramic jars', 'Cast-iron tawa griddling'],
    communities: ['Godavari delta farming households', 'Atreyapuram sweet-maker families', 'Rayalaseema dryland kitchens', 'Chenchu & Yanadi forest foragers'],
  },
  {
    id: 'telangana',
    name: 'Telangana',
    type: 'State',
    zone: 'South',
    capital: 'Hyderabad',
    coordinates: [79.01, 18.11],
    famousDishes: ['Sarva Pindi', 'Sakinalu', 'Jonna Rotte'],
    featuredDishIds: ['sarva-pindi', 'sakinalu'],
    forgottenRecipes: [
      {
        name: 'Ambali & Kudumulu',
        note: 'Steamed broken-millet dumplings and fermented jowar porridge sustaining Deccan pastoralists.',
      },
      {
        name: 'Makka Garelu',
        note: 'Coarse corn-kernel fritters spiced with garlic, curry leaves, and wild cumin.',
      },
    ],
    localIngredients: ['Jonna (Sorghum)', 'Tella Nuvvulu (White Sesame)', 'Chana Dal', 'Tamarind & Sesame Oil', 'Dry Coconut & Curry Leaf'],
    festivalFoods: [
      { festival: 'Bathukamma', dish: 'Maleeda & Saddulu', context: 'Five-grain or sesame-mixed rice offerings shared during the floral goddess festival.' },
      { festival: 'Sankranti', dish: 'Sakinalu', context: 'Concentric spirals of soaked rice flour and sesame piped by hand onto cotton cloths and fried crisp.' },
    ],
    culturalStory:
      'On the rocky Deccan plateau, Telangana cooks perfected water-wise grains like jowar and bajra alongside sesame and tamarind. Community gatherings revolve around hand-piping hundreds of Sakinalu spirals before winter harvest.',
    cookingMethods: ['Direct hand-pressing onto oiled brass/steel pans (Tapala Chekka)', 'Hand-piping rice-flour spirals', 'Hand-slapped sorghum flatbread roasting', 'Stone grinding with garlic and dry chilies'],
    communities: ['Deccan agrarian families', 'Hyderabadi Dakhni kitchens', 'Gond & Lambadi communities'],
  },

  // WEST INDIA
  {
    id: 'maharashtra',
    name: 'Maharashtra',
    type: 'State',
    zone: 'West',
    capital: 'Mumbai',
    coordinates: [75.71, 19.75],
    famousDishes: ['Puran Poli', 'Thalipeeth', 'Misal Pav'],
    featuredDishIds: ['puran-poli', 'thalipeeth'],
    forgottenRecipes: [
      {
        name: 'Amboli & Ghavan',
        note: 'Lacy Konkan rice-flour crepes and fermented multi-grain pancakes cooked on seasoned cast iron.',
      },
      {
        name: 'Kurdai & Shengule',
        note: 'Sun-dried fermented wheat-milk vermicelli and hand-rolled millet pasta simmered in spicy garlic broth.',
      },
    ],
    localIngredients: ['Bhajani (Roasted Multi-grain Flour)', 'Kokum (Garcinia indica)', 'Kala Masala / Goda Masala', 'Kolhapuri Jaggery', 'Alphonso & Coastal Coconut'],
    festivalFoods: [
      { festival: 'Holi & Gudi Padwa', dish: 'Puran Poli with Katachi Amti', context: 'Sweet lentil-stuffed flatbread paired with spicy broth made from the lentil cooking water.' },
      { festival: 'Ganesh Chaturthi', dish: 'Ukadiche Modak', context: 'Steamed rice-flour parcels pleated around fresh coconut and jaggery.' },
    ],
    culturalStory:
      'From the Konkan coast’s kokum-tangy fish curries to Vidarbha’s fiery Saoji gravies and Desh’s roasted multi-grain bhajani flours, Marathi cuisine balances thrift, spice alchemy, and seasonal fasting foods.',
    cookingMethods: ['Dry-roasting and stone-milling multi-grain bhajani', 'Zero-waste lentil broth pairing', 'Steaming in banana leaves', 'Goda masala spice roasting'],
    communities: ['Konkani & Malvani coastal kitchens', 'Deshastha & Maratha households', 'Kolhapuri & Vidarbha Saoji cooks', 'Warli indigenous highland communities'],
  },
  {
    id: 'gujarat',
    name: 'Gujarat',
    type: 'State',
    zone: 'West',
    capital: 'Gandhinagar',
    coordinates: [71.19, 22.25],
    famousDishes: ['Dhokla', 'Thepla', 'Undhiyu'],
    featuredDishIds: ['undhiyu', 'dhokla'],
    forgottenRecipes: [
      {
        name: 'Handvo & Khichu',
        note: 'Slow-baked lentil-rice crusted savoury cake with bottle gourd, and steamed spiced rice-flour dough drizzled with groundnut oil.',
      },
      {
        name: 'Bajra no Rotlo with Ringan no Olo',
        note: 'Thick pearl-millet flatbread patted by hand and served with smoky ember-roasted eggplant mash.',
      },
    ],
    localIngredients: ['Besan & Chana Dal', 'Kasuri & Fresh Fenugreek (Methi)', 'Surti Papdi & Purple Yam (Ratalu)', 'Peanut Oil', 'Jaggery & Tamarind'],
    festivalFoods: [
      { festival: 'Uttarayan', dish: 'Undhiyu & Chikki', context: 'Winter vegetables slow-cooked upside down in an earthen matlu buried under embers.' },
      { festival: 'Navratri', dish: 'Falahari Sabudana & Samak Khichdi', context: 'Fasting dishes crafted from amaranth, millet, and tuber flours.' },
    ],
    culturalStory:
      'Long sea-voyage mercantile histories and fertile winter gardens shaped Gujarat’s enduring mastery of travel-ready flatbreads like Thepla, lacto-fermented steamed batters, and earthen-pot winter feasts.',
    cookingMethods: ['Matlu upside-down ember burial cooking', 'Natural batter fermentation & steaming', 'Tempering (Vaghar) with mustard and asafoetida', 'Sun-dried papad and khakhra crisping'],
    communities: ['Surti & Kathiawadi households', 'Kutch pastoralist kitchens', 'Parsi & Bohra coastal communities', 'Dang forest communities'],
  },
  {
    id: 'rajasthan',
    name: 'Rajasthan',
    type: 'State',
    zone: 'West',
    capital: 'Jaipur',
    coordinates: [74.21, 27.02],
    famousDishes: ['Dal Baati Churma', 'Gatte Ki Sabzi'],
    featuredDishIds: ['dal-baati-churma'],
    forgottenRecipes: [
      {
        name: 'Kair Sangri & Rabodi',
        note: 'Foraged desert capers and desert-bean pods simmered with dried red chilies, alongside sun-dried buttermilk-corn papads.',
      },
      {
        name: 'Raabdi (Bajra Buttermilk Broth)',
        note: 'Pearl millet boiled slowly in sour buttermilk in clay pots—warming in winter and cooling when served cold in summer.',
      },
    ],
    localIngredients: ['Kair & Sangri (Desert Pods)', 'Bajra & Makki (Millet & Corn)', 'Besan (Gram Flour)', 'Mathania Red Chili', 'Cultured Buttermilk & Desi Ghee'],
    festivalFoods: [
      { festival: 'Teej & Gangaur', dish: 'Ghevar & Dal Baati Churma', context: 'Honeycomb-crisp fried discs soaked in saffron syrup and ember-baked wheat spheres.' },
      { festival: 'Sheetala Ashtami', dish: 'Basi Bhojan (Chilled Curd Rice & Rabdi)', context: 'Foods cooked a day prior and eaten cold to rest the hearth fire.' },
    ],
    culturalStory:
      'Born in the Thar Desert where water is precious and fresh greens are seasonal luxuries, Rajasthani cooks invented dishes that rely on buttermilk, gram flour, sun-dried desert berries, and ghee instead of water.',
    cookingMethods: ['Cow-dung / wood-ember burial baking (Baati)', 'Buttermilk-base simmering without water', 'Sun-drying desert pods & papads', 'Hand-pounding churma with jaggery'],
    communities: ['Marwari & Mewari households', 'Bishnoi desert conservationists', 'Shekhawati & Bhil communities'],
  },
  {
    id: 'goa',
    name: 'Goa',
    type: 'State',
    zone: 'West',
    capital: 'Panaji',
    coordinates: [74.12, 15.29],
    famousDishes: ['Goan Fish Curry (Xit Kodi)', 'Bebinca'],
    featuredDishIds: ['goan-fish-curry', 'bebinca'],
    forgottenRecipes: [
      {
        name: 'Patoleo',
        note: 'Steamed turmeric-leaf rice parcels filled with freshly grated coconut and Goa palm jaggery.',
      },
      {
        name: 'Khatkhate',
        note: 'Temple-style mixed vegetable stew thickened with roasted coconut, triphal (Sichuan-like Konkan pepper), and kokum.',
      },
    ],
    localIngredients: ['Goan Red Rice (Ukdo)', 'Toddy Palm Jaggery', 'Triphal (Teppal Pepper)', 'Kokum & Tamarind', 'Coconut & Cashew Feni'],
    festivalFoods: [
      { festival: 'Christmas', dish: 'Bebinca & Dodol', context: 'Seven-to-sixteen-layer coconut milk and egg-yolk pudding baked layer by layer over glowing coconut-husk coals.' },
      { festival: 'Sao Joao & Ganesh', dish: 'Patoleo & Khatkhate', context: 'Monsoon turmeric leaves harvested in August to perfume sweet steamed rice cakes.' },
    ],
    culturalStory:
      'A crossroad of Konkan Saraswat temple cuisine and four centuries of maritime Lusophone exchange, Goa pairs vinegar-cured spice pastes and multi-layered coal-baked puddings with monsoon forest leaves and coastal catch.',
    cookingMethods: ['Layered charcoal top-and-bottom baking (Bebinca)', 'Stone-ground coconut-chili curry paste', 'Turmeric-leaf steaming', 'Toddy vinegar preservation'],
    communities: ['Goan Catholic kitchens', 'Goud Saraswat Brahmin households', 'Gawda & Kunbi indigenous farmers'],
  },

  // NORTH INDIA
  {
    id: 'punjab',
    name: 'Punjab',
    type: 'State',
    zone: 'North',
    capital: 'Chandigarh',
    coordinates: [75.34, 31.14],
    famousDishes: ['Makki di Roti', 'Sarson da Saag', 'Amritsari Kulcha'],
    featuredDishIds: ['sarson-da-saag', 'amritsari-kulcha'],
    forgottenRecipes: [
      {
        name: 'Kanji & Gajar-Shalgam Achar',
        note: 'Black-carrot probiotic fermented winter drink spiced with crushed black mustard seeds.',
      },
      {
        name: 'Pinni & Panjiri',
        note: 'Slow-roasted whole-wheat or lentil flour folded with edible gum (gond), nuts, and winter jaggery.',
      },
    ],
    localIngredients: ['Sarson & Bathua Greens', 'Makki (Yellow Maize Flour)', 'White Makhan (Churned Butter)', 'Black Carrot', 'Saffron-infused Cultured Milk'],
    festivalFoods: [
      { festival: 'Lohri', dish: 'Sarson da Saag, Makki Roti & Til Rewari', context: 'Celebrating the winter solstice harvest around communal bonfires.' },
      { festival: 'Baisakhi', dish: 'Kadha Prasad & Meethe Chawal', context: 'Equinox-and-harvest communal kitchen (Langar) hospitality.' },
    ],
    culturalStory:
      'In the land of five rivers, winter mornings begin with brass pots of mustard greens slowly simmered with bathua and churned with a wooden madhani, accompanied by hand-patted maize flatbreads and the sacred egalitarianism of Langar.',
    cookingMethods: ['Charcoal clay-oven (Tandoor) baking', 'Slow earthen-pot saag simmering', 'Hand-patted maize flatbread roasting', 'Natural winter lacto-fermentation (Kanji)'],
    communities: ['Malwa, Majha & Doaba farming households', 'Amritsari street-tandoor artisans', 'Sikh Gurdwara Langar traditions'],
  },
  {
    id: 'himachal-pradesh',
    name: 'Himachal Pradesh',
    type: 'State',
    zone: 'North',
    capital: 'Shimla',
    coordinates: [77.17, 31.10],
    famousDishes: ['Dham', 'Siddu'],
    featuredDishIds: ['himachali-dham', 'siddu'],
    forgottenRecipes: [
      {
        name: 'Babru & Aktori',
        note: 'Buckwheat-leaf and black-gram stuffed highland pancakes once essential along Spiti and Kinnaur winter passes.',
      },
      {
        name: 'Chha Gosht & Sepu Badi',
        note: 'Gram-flour yogurt stew and slow-cooked lentil dumplings from Mandi and Kangra valleys.',
      },
    ],
    localIngredients: ['Buckwheat (Ogla/Phafra)', 'Black Urad & Chana Dal', 'Wild Apricot Oil (Chulli)', 'Walnut & Poppy Seed', 'Kullu Red Rice'],
    festivalFoods: [
      { festival: 'Shivratri & Valley Fairs', dish: 'Kangri & Chamba Dham', context: 'Ceremonial midday feast cooked in giant copper charoti pots by hereditary Boti chefs, served on stitched sal-leaf pattal.' },
      { festival: 'Lohri & Halda', dish: 'Steamed Siddu with Ghee', context: 'Yeast-fermented wheat buns stuffed with spiced walnuts and poppy seeds.' },
    ],
    culturalStory:
      'In high mountain valleys snowbound for months, fermentation and copper-pot communal cooking turn humble pulses, walnuts, and buckwheat into deeply warming feasts cooked without onions or garlic during sacred Dham gatherings.',
    cookingMethods: ['Copper charoti pot cooking over wood fire', 'Yeast-fermented highland bread steaming', 'Yogurt-based slow spice tempering', 'Apricot-kernel cold pressing'],
    communities: ['Kangra & Chamba Boti cooks', 'Kullu & Kinnaur mountain villages', 'Lahaul & Spiti Tibetan-Himalayan kitchens'],
  },
  {
    id: 'uttar-pradesh',
    name: 'Uttar Pradesh',
    type: 'State',
    zone: 'North',
    capital: 'Lucknow',
    coordinates: [80.94, 26.84],
    famousDishes: ['Bedmi Puri', 'Awadhi Biryani'],
    featuredDishIds: ['awadhi-biryani', 'bedmi-puri'],
    forgottenRecipes: [
      {
        name: 'Nimona (Green Pea Stew)',
        note: 'Winter green peas coarsely stone-ground and slow-simmered with asafoetida, cumin, and sun-dried urad badi.',
      },
      {
        name: 'Fara / Gojha',
        note: 'Steamed rice-flour half-moons stuffed with spiced split chana dal, cooked without a drop of oil across Purvanchal.',
      },
    ],
    localIngredients: ['Kala Namak Rice (Siddharthnagar)', 'Rose Water & Kewra', 'Petha Ash Gourd', 'Urad Dal & Fennel', 'Desi Hing (Asafoetida)'],
    festivalFoods: [
      { festival: 'Eid & Celebratory Feasts', dish: 'Awadhi Dum Biryani & Sheermal', context: 'Saffron-scented basmati and slow-braised meats sealed under dough (dum pukht).' },
      { festival: 'Holi & Temple Mornings', dish: 'Bedmi Puri, Dubki Aloo & Thandai', context: 'Spiced lentil-stuffed puffed breads paired with tangy asafoetida potato curry.' },
    ],
    culturalStory:
      'Spanning Braj’s temple sweets, Varanasi’s morning spiced puris, Purvanchal’s steamed lentil faras, and Lucknow’s refined dum pukht courts, Uttar Pradesh embodies Gangetic agricultural abundance layered with courtly fragrance.',
    cookingMethods: ['Dum pukht dough-sealed slow steaming', 'Kettles and deg copper-pot braising', 'Sun-dried lentil badi preparation', 'Bamboo-basket leaf steaming'],
    communities: ['Awadhi & Lucknowi bawarchis', 'Braj & Mathura temple cooks', 'Purvanchal & Bundelkhand farming homes'],
  },
  {
    id: 'uttarakhand',
    name: 'Uttarakhand',
    type: 'State',
    zone: 'North',
    capital: 'Dehradun',
    coordinates: [79.01, 30.06],
    famousDishes: ['Kafuli', 'Bhatt ki Churkani', 'Bal Mithai'],
    featuredDishIds: ['bhatt-ki-churkani'],
    forgottenRecipes: [
      {
        name: 'Chainsoo & Phaanu',
        note: 'Roasted black-gram paste slow-simmered in iron kadhais for high-altitude protein and warmth.',
      },
      {
        name: 'Jhangora ki Kheer',
        note: 'Barnyard millet simmered in mountain milk with wild nuts and cardamom.',
      },
    ],
    localIngredients: ['Bhatt (Black Soybean)', 'Jhangora (Barnyard Millet)', 'Jakhiya (Wild Cleome Seed)', 'Mandua (Mountain Ragi)', 'Bhangjeera (Hemp Seed Chutney)'],
    festivalFoods: [
      { festival: 'Harela & Phool Dei', dish: 'Singal & Arsa', context: 'Rice-flour and jaggery celebratory sweets marking spring blossoms and monsoon sowing.' },
      { festival: 'Ghughutia (Makar Sankranti)', dish: 'Sweet Flour Ghughute', context: 'Knotted sweet wheat garlands strung around children’s necks to feed migrating crows.' },
    ],
    culturalStory:
      'Kumaoni and Garhwali kitchens rely on cast-iron kadhais that fortify iron-rich black soybeans, barnyard millet, and wild mountain herbs like jakhiya and gandrayani—simple, nutrient-dense mountain wisdom.',
    cookingMethods: ['Cast-iron kadhai (Lohai) slow simmering', 'Stone sil-batta herb and hemp grinding', 'Sun-drying mountain greens (Suksa)', 'Wood-ash roasted millet rotis'],
    communities: ['Kumaoni & Garhwali village kitchens', 'Bhotiya & Jaunsari Himalayan communities'],
  },
  {
    id: 'haryana',
    name: 'Haryana',
    type: 'State',
    zone: 'North',
    capital: 'Chandigarh',
    coordinates: [76.08, 29.05],
    famousDishes: ['Bajra Khichdi', 'Kachri ki Sabzi', 'Churma'],
    featuredDishIds: ['bajra-khichdi'],
    forgottenRecipes: [
      {
        name: 'Singri ki Sabzi & Alsi ki Pinni',
        note: 'Radish-pod stir-fry and roasted flaxseed energy balls prepared in rural winters.',
      },
      {
        name: 'Mithe Chawal & Bathua Raita',
        note: 'Wild lamb’s-quarters greens whisked into thick home-cultured dahi.',
      },
    ],
    localIngredients: ['Bajra (Pearl Millet)', 'Fresh Churned White Butter', 'Kachri (Wild Desert Melon)', 'Moong Dal', 'Sarson & Bathua'],
    festivalFoods: [
      { festival: 'Teej & Sakat Chauth', dish: 'Desi Ghee Churma & Til Kut', context: 'Crumbled whole-wheat rotis hand-rubbed with warm ghee and cane jaggery.' },
    ],
    culturalStory:
      'Often overlooked beyond dairy clichés, rural Haryana’s hearth honours physical labour with protein-rich bajra khichdi, wild kachri chutneys, and fresh hand-churned lassi.',
    cookingMethods: ['Earthen-pot simmering on dung-cake slow fire (Hara)', 'Stone hand-chakkis for coarse millet', 'Hand-churning butter with wooden bilona'],
    communities: ['Jat, Ahir & Ror agrarian households'],
  },

  // EAST INDIA
  {
    id: 'west-bengal',
    name: 'West Bengal',
    type: 'State',
    zone: 'East',
    capital: 'Kolkata',
    coordinates: [87.85, 22.98],
    famousDishes: ['Shorshe Ilish', 'Pitha', 'Mishti Doi'],
    featuredDishIds: ['shorshe-ilish', 'bengali-pitha'],
    forgottenRecipes: [
      {
        name: 'Shukto & Kochu Shak',
        note: 'Bitter-sweet opening medley with bitter gourd and poppy seed, and foraging taro-stem greens cooked with black gram.',
      },
      {
        name: 'Panta Bhat with Pora Lonka',
        note: 'Overnight fermented cooked rice served with fire-charred chilies and mustard oil.',
      },
    ],
    localIngredients: ['Kalo Jeera (Nigella) & Panch Phoron', 'Kacha Mustard Oil', 'Nolen Gur (Date Palm Jaggery)', 'Gobindobhog Rice', 'Posto (Poppy Seed)'],
    festivalFoods: [
      { festival: 'Poush Sankranti', dish: 'Pithe-Puli (Patishapta, Dudh Puli)', context: 'Winter rice-flour crepes and dumplings bathed in fresh date-palm jaggery milk.' },
      { festival: 'Durga Puja & Pohela Boishakh', dish: 'Bhoger Khichuri, Shorshe Ilish & Mishti Doi', context: 'Communal spiced rice-lentil pots and clay-pot fermented caramelized yogurt.' },
    ],
    culturalStory:
      'Guided by a strict progression from bitter to sweet, Bengali kitchens transform river fish, wetland greens, bitter roots, and winter date-palm sap into one of Asia’s most poetic culinary philosophies.',
    cookingMethods: ['Earthen matir bhanr yogurt culturing', 'Panch phoron five-spice tempering', 'Banana-leaf paturi steaming', 'Stone-ground mustard and poppy pastes'],
    communities: ['Ghoti & Bangal river-delta kitchens', 'Rarh Bengal rural households', 'Santal & Rajbanshi indigenous communities'],
  },
  {
    id: 'odisha',
    name: 'Odisha',
    type: 'State',
    zone: 'East',
    capital: 'Bhubaneswar',
    coordinates: [85.09, 20.95],
    famousDishes: ['Pakhala Bhata', 'Chhena Poda'],
    featuredDishIds: ['pakhala-bhata', 'chhena-poda'],
    forgottenRecipes: [
      {
        name: 'Dalma & Kanika',
        note: 'Temple-style roasted moong dal simmered with root vegetables and grated coconut, paired with fragrant turmeric-clove rice.',
      },
      {
        name: 'Enduri Pitha',
        note: 'Fermented rice-urad cakes steamed inside folded green turmeric leaves during Prathamastami.',
      },
    ],
    localIngredients: ['Chhena (Fresh Milk Curd)', 'Panch Phutana', 'Fresh Turmeric Leaves', 'Mandia (Ragi) & Indigenous Red Rice', 'Badi (Sun-dried Lentil Nuggets)'],
    festivalFoods: [
      { festival: 'Pakhala Dibasa & Summer', dish: 'Dahi Pakhala with Badi Chura', context: 'Fermented rice water cooled with curd, lemon leaf, and pounded fried lentil nuggets.' },
      { festival: 'Raja Parba', dish: 'Poda Pitha', context: 'Slow-baked spiced rice-coconut cake wrapped in sal or banana leaves.' },
    ],
    culturalStory:
      'Rooted in the ancient Jagannath temple kitchen of Puri—where food is steamed exclusively in unglazed earthen pots stacked over wood fires—and coastal-tribal harmony across Koraput and Mayurbhanj.',
    cookingMethods: ['Stacked earthen-pot steam cooking (Kudua)', 'Sal-leaf and charcoal slow baking (Poda)', 'Overnight rice fermentation (Torani)', 'Turmeric-leaf aromatic steaming'],
    communities: ['Puri temple mahaprasad cooks', 'Coastal Odia households', 'Kondh, Saora & Santal indigenous communities'],
  },
  {
    id: 'bihar',
    name: 'Bihar',
    type: 'State',
    zone: 'East',
    capital: 'Patna',
    coordinates: [85.31, 25.09],
    famousDishes: ['Litti Chokha', 'Thekua'],
    featuredDishIds: ['litti-chokha', 'thekua'],
    forgottenRecipes: [
      {
        name: 'Dal Pitha & Marua Roti',
        note: 'Oil-free steamed rice dumplings stuffed with spiced chana dal, and finger-millet flatbreads of Mithila.',
      },
      {
        name: 'Makhana Kheer & Sattu Sharbat',
        note: 'Foxnut pudding from Mithila wetlands and roasted-gram cooling drink spiced with black salt and mango.',
      },
    ],
    localIngredients: ['Sattu (Roasted Bengal Gram Flour)', 'Makhana (Foxnuts)', 'Mustard Oil & Ajwain', 'Whole Wheat & Jaggery', 'Kacha Aam (Green Mango)'],
    festivalFoods: [
      { festival: 'Chhath Puja', dish: 'Thekua & Rasiyaw', context: 'Hand-carved wooden-mold wheat-jaggery biscuits offered to the setting and rising sun.' },
      { festival: 'Makar Sankranti', dish: 'Dahi-Chura & Tilkut', context: 'Flattened rice with thick curd, jaggery, and pounded sesame-sugar brittle.' },
    ],
    culturalStory:
      'Bihar’s food carries millennia of Magadha and Mithila peasant resilience: sattu—nutritious roasted gram flour that sustained travellers and farmers—and Chhath Puja’s austere, pure offerings crafted without salt.',
    cookingMethods: ['Cow-dung / charcoal ember roasting (Goitha)', 'Wooden sancha mold embossing (Thekua)', 'Dry-roasting and stone-milling roasted gram (Sattu)', 'Steaming in earthen perforated pots'],
    communities: ['Bhojpuri & Magahi farming families', 'Mithila wetland fishers & cooks', 'Angika & Vajjika rural households'],
  },
  {
    id: 'jharkhand',
    name: 'Jharkhand',
    type: 'State',
    zone: 'East',
    capital: 'Ranchi',
    coordinates: [85.27, 23.61],
    famousDishes: ['Dhuska', 'Chilka Roti', 'Rugra & Bamboo Shoot Stew'],
    featuredDishIds: ['dhuska'],
    forgottenRecipes: [
      {
        name: 'Madua Roti & Gondli Bhat',
        note: 'Finger-millet flatbreads and little-millet porridge paired with wild forest greens.',
      },
      {
        name: 'Handia (Herbal Rice Brew)',
        note: 'Traditional fermented rice beverage brewed with ranu (wild forest root tablets) for harvest ceremonies.',
      },
    ],
    localIngredients: ['Rugra (Wild Forest Mushroom)', 'Mahua Flowers', 'Karanj & Mustard Oil', 'Sandhna (Fermented Bamboo Shoot)', 'Chana Dal & Indigenous Red Rice'],
    festivalFoods: [
      { festival: 'Sarhul & Karma', dish: 'Dhuska, Peetha & Handia', context: 'Celebrating the flowering of the sal forest and earth-renewal rituals.' },
    ],
    culturalStory:
      'Jharkhand’s cuisine is inseparable from the Chotanagpur forests—foraging monsoon rugra mushrooms, drying sweet mahua blossoms, and fermenting grains in earthen pots by Santhal, Munda, Oraon, and Ho communities.',
    cookingMethods: ['Sal-leaf wrapped ember roasting', 'Natural herbal fermentation (Ranu)', 'Stone-ground wet rice-lentil batters', 'Sun-drying mahua and wild greens'],
    communities: ['Santhal, Munda, Oraon & Ho tribal kitchens', 'Sadri & Nagpuri rural homes'],
  },

  // CENTRAL INDIA
  {
    id: 'madhya-pradesh',
    name: 'Madhya Pradesh',
    type: 'State',
    zone: 'Central',
    capital: 'Bhopal',
    coordinates: [78.65, 22.97],
    famousDishes: ['Bhutte Ka Kees', 'Dal Bafla', 'Poha Jalebi'],
    featuredDishIds: ['bhutte-ka-kees'],
    forgottenRecipes: [
      {
        name: 'Kodo-Kutki Khichdi',
        note: 'Minor millets harvested by Gond and Baiga farmers across Mandla and Dindori hills.',
      },
      {
        name: 'Chakki ki Shaak & Indori Garadu',
        note: 'Hand-washed wheat gluten simmered in spicy Malwa gravy, and crisp fried purple yam.',
      },
    ],
    localIngredients: ['Tender Sweet Corn', 'Kodo & Kutki Millets', 'Mahua & Chironji Nuts', 'Jeeravan Spice Blend', 'Chickpea Besan'],
    festivalFoods: [
      { festival: 'Monsoon & Malwa Fairs', dish: 'Bhutte Ka Kees & Dal Bafla', context: 'Grated monsoon corn simmered in milk and mustard-asafoetida tempering.' },
    ],
    culturalStory:
      'At the heart of the subcontinent, Madhya Pradesh bridges Malwa’s wheat-and-corn richness, Bundelkhand’s pastoral stews, Baghelkhand’s mahua sweets, and the ancient Kodo-Kutki millet farms of Gond and Baiga villages.',
    cookingMethods: ['Boiling before ember-baking (Bafla)', 'Grated fresh-corn milk simmering', 'Chironji & poppy-seed stone grinding', 'Earthen-pot millet slow cooking'],
    communities: ['Malwa & Nimar households', 'Gond & Baiga forest-farming clans', 'Bhopali & Bundelkhandi kitchens'],
  },
  {
    id: 'chhattisgarh',
    name: 'Chhattisgarh',
    type: 'State',
    zone: 'Central',
    capital: 'Raipur',
    coordinates: [81.86, 21.27],
    famousDishes: ['Chila', 'Faraa', 'Bore Baasi'],
    featuredDishIds: ['bore-baasi'],
    forgottenRecipes: [
      {
        name: 'Dubki Kadhi & Chapda Chutney',
        note: 'Bastar’s traditional tangy red-ant chutney prized for Vitamin C and forest foraging heritage, plus steamed urad dumplings.',
      },
      {
        name: 'Angakar Roti',
        note: 'Thick hand-patted rice-flour loaf baked over embers between sal or palash leaves.',
      },
    ],
    localIngredients: ['Heirloom Rice (Dubraj, Jeeraphool)', 'Kodo & Kutki', 'Tendu & Char (Chironji)', 'Bohra Bhaji & Chech Bhaji (Wild Greens)', 'Mahua'],
    festivalFoods: [
      { festival: 'Hareli & Pola', dish: 'Chila, Faraa & Thethri Khurmi', context: 'Celebrating agricultural tools and cattle with steamed rice rolls and savoury gram-flour snacks.' },
    ],
    culturalStory:
      'Known as India’s "Rice Bowl," Chhattisgarh preserves thousands of heirloom rice varieties and wild forest greens (bhaji). Bore Baasi—overnight water-soaked rice—was honourably celebrated as a living symbol of farmers’ endurance.',
    cookingMethods: ['Overnight rice hydration (Bore Baasi)', 'Palash-leaf coal baking (Angakar)', 'Steaming rice rolls in clay vessels', 'Wild-greens dry preservation'],
    communities: ['Bastar Gond, Maria & Halba tribes', 'Chhattisgarhi agrarian families'],
  },

  // NORTHEAST INDIA
  {
    id: 'assam',
    name: 'Assam',
    type: 'State',
    zone: 'Northeast',
    capital: 'Dispur',
    coordinates: [92.93, 26.20],
    famousDishes: ['Khar', 'Masor Tenga', 'Pitha'],
    featuredDishIds: ['assam-khar', 'masor-tenga'],
    forgottenRecipes: [
      {
        name: 'Khorisa & Hukoti Maas',
        note: 'Fermented bamboo shoots and dried small river fish pounded with taro stems inside bamboo tubes.',
      },
      {
        name: 'Xunga Saul (Bamboo-baked Sticky Rice)',
        note: 'Bora glutinous rice stuffed inside tender green bamboo tubes and roasted over open embers.',
      },
    ],
    localIngredients: ['Bhimkol Banana Ash (Kola Khar)', 'Outenga (Elephant Apple)', 'Bhoot Jolokia', 'Joha Aromatic Rice', 'Kaji Nemu (Assam Lemon)'],
    festivalFoods: [
      { festival: 'Magh Bihu (Bhogali Bihu)', dish: 'Til Pitha, Tekeli Pitha & Laru', context: 'Harvest festival around bamboo meji bonfires celebrating sesame-filled rice crepes.' },
    ],
    culturalStory:
      'Assamese kitchens rely on gentle sourness (Tenga) and alkaline banana-peel ash (Khar)—a prehistoric culinary signature that replaces baking soda and salt while harmonising with Brahmaputra river fish and wild herbs.',
    cookingMethods: ['Banana-ash alkaline extraction (Khar)', 'Bamboo-tube ember roasting (Xunga)', 'Earthen-kettle steam cooking (Tekeli Pitha)', 'Sun-drying and bamboo fish curing'],
    communities: ['Brahmaputra Valley Assamese homes', 'Bodo, Mising, Karbi & Ahom traditions'],
  },
  {
    id: 'manipur',
    name: 'Manipur',
    type: 'State',
    zone: 'Northeast',
    capital: 'Imphal',
    coordinates: [93.90, 24.66],
    famousDishes: ['Eromba', 'Chak-Hao Kheer', 'Kangshoi'],
    featuredDishIds: ['eromba', 'chak-hao-kheer'],
    forgottenRecipes: [
      {
        name: 'Singju & Hawaijar',
        note: 'Fermented soybean (Hawaijar) wrapped in banana leaves and herbaceous lotus-stem salad tossed with perilla seeds.',
      },
      {
        name: 'Ooti',
        note: 'Yellow peas and greens cooked gently with bamboo-ash alkali (utong khar) for community feasts (Ushob).',
      },
    ],
    localIngredients: ['Chak-Hao (Black Scented Rice)', 'Ngari (Fermented Dried Fish)', 'Maroi Nakuppi (Chive)', 'Lotus Stem (Thambou)', 'U-Morok (King Chili)'],
    festivalFoods: [
      { festival: 'Cheiraoba & Yaoshang', dish: 'Chak-Hao Kheer & Eromba', context: 'Deep purple black-rice pudding and fiery fermented-fish vegetable mash.' },
    ],
    culturalStory:
      'In Manipur, oil is used sparingly; flavour springs from ngari (fermented fish), wild aromatic herbs (maroi), and purple-black Chak-Hao rice—turning steamed greens and lotus stems into vibrant, restorative bowls.',
    cookingMethods: ['Oil-free boiling & mashing (Eromba)', 'Earthen-jar fish fermentation (Ngari)', 'Banana-leaf soybean fermentation', 'Slow milk reduction with black rice'],
    communities: ['Meitei valley kitchens', 'Tangkhul, Mao & Kuki hill communities'],
  },
  {
    id: 'meghalaya',
    name: 'Meghalaya',
    type: 'State',
    zone: 'Northeast',
    capital: 'Shillong',
    coordinates: [91.36, 25.46],
    famousDishes: ['Jadoh', 'Dohneiiong', 'Tungrymbai'],
    featuredDishIds: ['jadoh'],
    forgottenRecipes: [
      {
        name: 'Nakham Bitchi (Garo)',
        note: 'Clear, pungent smoked-dried fish broth infused with wood-ash soda and fiery chilies.',
      },
      {
        name: 'Pumaloi',
        note: 'Powdered highland rice steamed in specialized earthen pots (Khiew Ranei) for Khasi weddings.',
      },
    ],
    localIngredients: ['Lakadong Turmeric', 'Neiiong (Black Sesame)', 'Tungrymbai (Fermented Soybeans)', 'Khasi Mandarin & Wild Pepper', 'Red Hill Rice'],
    festivalFoods: [
      { festival: 'Wangala & Shad Suk Mynsiem', dish: 'Jadoh, Pukhlein & Rice Cakes', context: 'Thanksgiving feasts honouring the sun and harvest across Khasi, Jaintia, and Garo hills.' },
    ],
    culturalStory:
      'High in the cloud-wrapped Khasi, Jaintia, and Garo hills, matriarchal kitchens centre on red rice cooked in meat broth with Lakadong turmeric (Jadoh), black-sesame pork, and earthen-steamed rice cakes.',
    cookingMethods: ['Earthen Khiew Ranei steaming', 'Roasted black-sesame paste simmering', 'Wood-ash alkaline extraction (Kalchi)', 'Fermenting soybeans in banana leaves'],
    communities: ['Khasi, Jaintia (Pnar) & Garo matrilineal kitchens'],
  },
  {
    id: 'nagaland',
    name: 'Nagaland',
    type: 'State',
    zone: 'Northeast',
    capital: 'Kohima',
    coordinates: [94.56, 26.15],
    famousDishes: ['Smoked Pork with Bamboo Shoot', 'Axone (Akhuni)', 'Galho'],
    featuredDishIds: ['naga-smoked-pork'],
    forgottenRecipes: [
      {
        name: 'Anishi (Ao)',
        note: 'Fermented colocasia-leaf patties smoked over the kitchen hearth and crumbled into winter stews.',
      },
      {
        name: 'Zutho',
        note: 'Milky, lightly sweet fermented rice beverage brewed in bamboo vessels by Angami households.',
      },
    ],
    localIngredients: ['Axone (Fermented Soybean)', 'Raja Mircha (Naga King Chili)', 'Bamboo Shoot (Bastenga)', 'Naga Sichuan Pepper (Michinga)', 'Perilla Seed (Hansing)'],
    festivalFoods: [
      { festival: 'Hornbill, Sekrenyi & Moatsu', dish: 'Smoked Pork with Axone & Galho', context: 'Tribal harvest and purification feasts celebrating smoked meats and heirloom rice.' },
    ],
    culturalStory:
      'In Naga kitchens, the hearth shelf (smoke rack) above the wood fire slowly cures pork, wild leaves, and chilies for months—giving dishes an unmistakable smoky depth anchored by fermented soybeans and bamboo shoots.',
    cookingMethods: ['Hearth-rack slow wood smoking', 'Fermenting soybeans in banana leaves (Axone)', 'Boiling without oil in clay or cast iron', 'Crushing roasted chilies in bamboo tubes'],
    communities: ['Angami, Ao, Sumi, Lotha & Konyak Naga tribes'],
  },
  {
    id: 'arunachal-pradesh',
    name: 'Arunachal Pradesh',
    type: 'State',
    zone: 'Northeast',
    capital: 'Itanagar',
    coordinates: [94.72, 28.21],
    famousDishes: ['Thukpa', 'Bamboo Shoot Stew (Ikung)', 'Zan'],
    featuredDishIds: ['arunachal-thukpa'],
    forgottenRecipes: [
      {
        name: 'Pika Pila (Apatani)',
        note: 'Tangy pickle crafted from bamboo shoots, pork fat, and King chili, seasoned with Apatani Tapyo (black herbal plant ash salt).',
      },
      {
        name: 'Zan (Monpa)',
        note: 'Hearty millet-flour porridge served with fermented yak cheese (Chhurpi) and buckwheat pancakes.',
      },
    ],
    localIngredients: ['Tapyo (Apatani Plant-Ash Salt)', 'Fermented Yak Cheese (Chhurpi)', 'Finger & Foxtail Millet', 'Wild Ferns & Bamboo Shoot', 'Buckwheat'],
    festivalFoods: [
      { festival: 'Losar, Dree & Solung', dish: 'Thukpa, Khapse & Apong', context: 'Himalayan New Year noodles and harvest rice-millet brews shared across 26+ tribes.' },
    ],
    culturalStory:
      'Stretching from Monpa snow passes to Adi and Apatani bamboo valleys, Arunachal showcases astonishing ecological diversity—from yak-cheese noodle broths to plant-ash salt fermented bamboo pickles.',
    cookingMethods: ['Bamboo-tube steaming (Chunga)', 'Smoke-drying meats and wild greens', 'Plant-ash salt crystallization (Tapyo)', 'Hand-pulled Himalayan noodle broths'],
    communities: ['Monpa, Apatani, Nyishi, Adi & Mishmi communities'],
  },
  {
    id: 'sikkim',
    name: 'Sikkim',
    type: 'State',
    zone: 'Northeast',
    capital: 'Gangtok',
    coordinates: [88.51, 27.53],
    famousDishes: ['Gundruk', 'Phagshapa', 'Kinema & Thukpa'],
    featuredDishIds: ['gundruk-soup'],
    forgottenRecipes: [
      {
        name: 'Sinki & Sel Roti',
        note: 'Pit-fermented radish taproots (Sinki) dried in Himalayan sunshine and ring-shaped sweet rice bread.',
      },
      {
        name: 'Khuri & Chhurpi Soup',
        note: 'Buckwheat crepes filled with wilted greens and aged yak curd.',
      },
    ],
    localIngredients: ['Gundruk (Fermented Mustard Greens)', 'Dalle Khursani (Round Fire Chili)', 'Large Black Cardamom', 'Buckwheat & Millet (Kodo)', 'Chhurpi'],
    festivalFoods: [
      { festival: 'Losar & Dashain', dish: 'Sel Roti, Khapse & Gyathuk', context: 'Festive fried rice rings and warming hand-cut noodle soups.' },
    ],
    culturalStory:
      'Blended from Lepcha, Bhutia, and Nepali mountain traditions, Sikkim’s organic farms preserve winter harvests through Gundruk and Sinki—turning sun-wilted greens and radishes into tangy probiotic broths.',
    cookingMethods: ['Earthen-pit anaerobic vegetable fermentation', 'Sun-drying fermented greens', 'Bamboo-whisked millet beer (Tongba)', 'Steaming buckwheat dumplings'],
    communities: ['Lepcha indigenous stewards', 'Bhutia & Sikkimese Nepali homes'],
  },
  {
    id: 'mizoram',
    name: 'Mizoram',
    type: 'State',
    zone: 'Northeast',
    capital: 'Aizawl',
    coordinates: [92.93, 23.16],
    famousDishes: ['Bai', 'Sawhchiar', 'Vawksa Rep'],
    featuredDishIds: ['mizo-bai'],
    forgottenRecipes: [
      {
        name: 'Chhum Han & Bekang',
        note: 'Steamed seasonal wild greens seasoned simply with fermented soybean (Bekang) and smoked pork broth.',
      },
    ],
    localIngredients: ['Sa-um (Fermented Pork Fat)', 'Bekang (Fermented Soybean)', 'Wild Mustard & Bamboo Shoot', 'Sticky Hill Rice', 'Bird’s-Eye Chili'],
    festivalFoods: [
      { festival: 'Chapchar Kut', dish: 'Sawhchiar & Bai', context: 'Spring bamboo-clearing festival centred on comforting rice-and-meat porridge.' },
    ],
    culturalStory:
      'Mizo cuisine treasures purity of flavour: boiling and steaming wild hill greens in vegetable stews (Bai) thickened gently with rice water and alkaline ash, proving richness needs neither heavy oil nor complex spice mixes.',
    cookingMethods: ['Wood-ash soda boiling (Chingal)', 'Oil-free vegetable stewing (Bai)', 'Hearth-smoking meat', 'Banana-leaf soybean fermentation'],
    communities: ['Mizo, Mara & Lai hill communities'],
  },
  {
    id: 'tripura',
    name: 'Tripura',
    type: 'State',
    zone: 'Northeast',
    capital: 'Agartala',
    coordinates: [91.98, 23.94],
    famousDishes: ['Mui Borok', 'Gudok', 'Wahan Mosdeng'],
    featuredDishIds: ['mui-borok'],
    forgottenRecipes: [
      {
        name: 'Chakhwi (Bamboo-Ash Broth)',
        note: 'Bamboo shoots, jackfruit, and papaya simmered in filtered bamboo-ash water with fermented fish (Berma).',
      },
      {
        name: 'Bangui Rice',
        note: 'Sun-dried fragrant sticky rice wrapped in lairu leaves and steamed into triangular parcels.',
      },
    ],
    localIngredients: ['Berma (Sun-cured Fermented Fish)', 'Muya (Fresh Bamboo Shoot)', 'Lairu Leaves', 'Shidol', 'Wild Black Sesame'],
    festivalFoods: [
      { festival: 'Garia Puja & Ker Puja', dish: 'Mui Borok & Bangui', context: 'Traditional Tripuri feast honouring harvest and village wellbeing.' },
    ],
    culturalStory:
      'Tripuri kitchens revolve around Berma—salt-free fermented dry fish—and green bamboo shoots steamed inside aromatic wild lairu leaves without frying.',
    cookingMethods: ['Oil-free bamboo-ash simmering', 'Leaf-wrapped rice steaming (Bangui)', 'Earthen-pot fish curing (Berma)', 'Charcoal-roasted chili mashing (Mosdeng)'],
    communities: ['Tripuri, Reang, Jamatia & Chakma communities'],
  },

  // UNION TERRITORIES (All 8!)
  {
    id: 'jammu-kashmir',
    name: 'Jammu & Kashmir',
    type: 'Union Territory',
    zone: 'Union Territories',
    capital: 'Srinagar / Jammu',
    coordinates: [74.79, 34.08],
    famousDishes: ['Rogan Josh', 'Kahwa', 'Nadru Yakhni', 'Kalari Kulcha'],
    featuredDishIds: ['rogan-josh', 'kahwa', 'nadru-yakhni'],
    forgottenRecipes: [
      {
        name: 'Haak & Dry-Vegetable Winter Strings (Hokh Syun)',
        note: 'Turnips, bottle gourds, and tomatoes threaded and sun-dried on autumn rooftops to nourish families through snowbound winters.',
      },
      {
        name: 'Kalari & Ambal (Jammu)',
        note: 'Dense pan-seared Dogri mountain cheese and sweet-sour pumpkin cooked in tamarind and fenugreek.',
      },
    ],
    localIngredients: ['Pampore Saffron', 'Mawal (Cockscomb Flower)', 'Nadru (Dal Lake Lotus Stem)', 'Kashmiri Ver Masala', 'Green Tea & Almonds'],
    festivalFoods: [
      { festival: 'Navroz, Eid & Shivratri (Herath)', dish: 'Wazwan, Dum Aloo & Nadru Yakhni', context: 'Multi-course copper-samovar tea and yogurt-fennel lotus stem stews.' },
    ],
    culturalStory:
      'Across Dal Lake’s floating gardens and Jammu’s Dogra hills, Kashmiri culinary memory preserves summer sun inside strings of dried vegetables, crimson cockscomb-tinted curries, and saffron-cardamom samovar tea.',
    cookingMethods: ['Charcoal copper Samovar brewing (Kahwa)', 'Tinned copper deg slow braising (Wazwan)', 'Sun-drying winter vegetables (Hokh Syun)', 'Yogurt-fennel tempering without tomatoes'],
    communities: ['Kashmiri Muslim Waza & Pandit households', 'Dogra kitchens of Jammu', 'Gujjar & Bakarwal pastoralists'],
  },
  {
    id: 'ladakh',
    name: 'Ladakh',
    type: 'Union Territory',
    zone: 'Union Territories',
    capital: 'Leh',
    coordinates: [77.57, 34.15],
    famousDishes: ['Skyu', 'Thukpa', 'Butter Tea (Gur-Gur Chai)', 'Tsampa'],
    featuredDishIds: ['ladakh-skyu'],
    forgottenRecipes: [
      {
        name: 'Khambir & Paba',
        note: 'Thick sourdough whole-barley loaves and roasted barley-pea-buckwheat dough balls eaten with tangy apricot sauce.',
      },
    ],
    localIngredients: ['Grim (High-altitude Naked Barley)', 'Yak Butter & Chhurpi', 'Wild Seabuckthorn', 'Dried Apricots (Chuli)', 'Mountain Thyme'],
    festivalFoods: [
      { festival: 'Losar & Hemis Tsechu', dish: 'Skyu, Khapse & Chhang', context: 'Hand-pinched thumb pasta simmered with root vegetables and barley brew.' },
    ],
    culturalStory:
      'At 3,500+ metres in the rain-shadow Himalayas, Ladakhi kitchens celebrate naked barley (grim) roasted into tsampa, hand-churned butter tea in cylindrical wooden barrels, and thumb-rolled wheat-barley Skyu.',
    cookingMethods: ['Wooden churn-barrel tea emulsification (Gur-Gur)', 'High-altitude sourdough fermentation (Khambir)', 'Hand-pinched pasta simmering', 'Sun-drying apricots on stone roofs'],
    communities: ['Ladakhi Buddhist & Balti communities', 'Changpa nomadic herders'],
  },
  {
    id: 'delhi',
    name: 'Delhi (NCT)',
    type: 'Union Territory',
    zone: 'Union Territories',
    capital: 'New Delhi',
    coordinates: [77.20, 28.61],
    famousDishes: ['Daulat Ki Chaat', 'Nihari', 'Bedmi Aloo & Chole Bhature'],
    featuredDishIds: ['daulat-ki-chaat'],
    forgottenRecipes: [
      {
        name: 'Shab Deg & Kanji Vada',
        note: 'Winter turnip-and-meat stew simmered overnight in earthen pots, and fermented mustard-water lentil fritters.',
      },
    ],
    localIngredients: ['Winter Dew Milk Foam', 'Saffron & Pistachio', 'Nihari Long Pepper (Pipli)', 'Kala Chana', 'Mango Amchur'],
    festivalFoods: [
      { festival: 'Winter Mornings & Old Delhi Melas', dish: 'Daulat Ki Chaat & Gajar Pak', context: 'Milk whipped under cold winter night dew into cloud-like foam in Shahjahanabad.' },
    ],
    culturalStory:
      'A living palimpsest of Indraprastha, Sultanate and Mughal Shahjahanabad courts, Partition-era Punjabi migration, and Bania spice alleys—Old Delhi turns winter dew itself into an ephemeral milk delicacy.',
    cookingMethods: ['Overnight cold-dew milk churning', 'Earthen-pot overnight slow braising (Nihari)', 'Cast-iron tawa roasting', 'Mustard-seed probiotic fermentation'],
    communities: ['Old Delhi Shahjahanabad artisans', 'Kayastha, Bania & Punjabi refugee-heritage families'],
  },
  {
    id: 'puducherry',
    name: 'Puducherry',
    type: 'Union Territory',
    zone: 'Union Territories',
    capital: 'Puducherry',
    coordinates: [79.80, 11.94],
    famousDishes: ['Bouillabaisse Pondichéry', 'Meen Puyabaise', 'Vindaloo & Créole Curry'],
    featuredDishIds: ['puducherry-meen'],
    forgottenRecipes: [
      {
        name: 'Assad & Rava Vadai',
        note: 'Slow-cooked coconut-milk and spiced stew paired with crisp coastal Tamil snacks.',
      },
    ],
    localIngredients: ['Coromandel Sea Fish', 'Tamarind & Fennel', 'Coconut Milk & Curry Leaf', 'Vanilla & Crusty Baguette'],
    festivalFoods: [
      { festival: 'Masi Magam & Bastille Day', dish: 'Pondicherry Fish Curry & Brioche', context: 'Tamil temple coastal processions alongside Franco-Tamil family tables.' },
    ],
    culturalStory:
      'Where Tamil Sangam coastal kitchens encountered French provincial technique, Pondicherrian families simmer Bay of Bengal fish with saffron, curry leaves, coconut milk, and crusty hearth bread.',
    cookingMethods: ['Earthen-pot fish reduction', 'French-Tamil roux & coconut emulsion', 'Wood-fired bakery hearth'],
    communities: ['Franco-Tamil Pondicherrian households', 'Coromandel fisherfolk communities'],
  },
  {
    id: 'chandigarh',
    name: 'Chandigarh',
    type: 'Union Territory',
    zone: 'Union Territories',
    capital: 'Chandigarh',
    coordinates: [76.77, 30.73],
    famousDishes: ['Chana Bhatura', 'Rajma Chawal & Tandoori Platter'],
    featuredDishIds: ['amritsari-kulcha'],
    forgottenRecipes: [
      {
        name: 'Aloo Bukhara Chutney & Dhania Panjiri',
        note: 'Shivalik-foothill wild plum chutneys and coriander-seed festive offerings.',
      },
    ],
    localIngredients: ['Shivalik Foothill Pulses', 'Anardana (Dried Pomegranate)', 'Cultured Lassi', 'Whole Spices'],
    festivalFoods: [
      { festival: 'Baisakhi & Lohri', dish: 'Sarson Saag, Makki Roti & Pinni', context: 'Shared heritage of Punjab and Haryana converging in the planned Himalayan foothill city.' },
    ],
    culturalStory:
      'Sitting at the confluence of Punjab, Haryana, and the Himachal Shivalik foothills, Chandigarh preserves agrarian winter greens and highway-dhaba slow-cooked lentil traditions.',
    cookingMethods: ['Charcoal tandoor baking', 'Slow brass-pot dal simmering', 'Hand-churned spiced buttermilk'],
    communities: ['Punjabi, Haryanvi & Himalayan foothill households'],
  },
  {
    id: 'andaman-nicobar',
    name: 'Andaman & Nicobar Islands',
    type: 'Union Territory',
    zone: 'Union Territories',
    capital: 'Sri Vijaya Puram (Port Blair)',
    coordinates: [92.72, 11.74],
    famousDishes: ['Island Coconut Fish Curry', 'Nicobarese Pandanus & Tuber Mash'],
    featuredDishIds: ['andaman-fish-curry'],
    forgottenRecipes: [
      {
        name: 'Kuwen (Nicobarese Pandanus Bread)',
        note: 'Screwpine (pandanus) fruit boiled, scraped into rich golden pulp, and paired with coconut and baked yams.',
      },
    ],
    localIngredients: ['Wild Pandanus Fruit', 'Fresh Island Coconut', 'Sea Crab & Reef Fish', 'Wild Nutmeg & Cinnamon', 'Taro & Yam'],
    festivalFoods: [
      { festival: 'Ossuary & Harvest Gatherings', dish: 'Pandanus Paste, Coconut Pork & Reef Fish', context: 'Communal island feasts anchored by coconut-wood fire pits.' },
    ],
    culturalStory:
      'Far out in the Bay of Bengal, Nicobarese islanders transform wild pandanus fruit and coconut milk alongside a vibrant settler mosaic of Bengali, Tamil, Telugu, and Karen coastal cooking.',
    cookingMethods: ['Coconut-shell & pit fire roasting', 'Scraping & simmering pandanus pulp', 'Fresh-grated coconut milk reduction'],
    communities: ['Nicobarese indigenous communities', 'Karen, Bengali & Tamil islander kitchens'],
  },
  {
    id: 'lakshadweep',
    name: 'Lakshadweep',
    type: 'Union Territory',
    zone: 'Union Territories',
    capital: 'Kavaratti',
    coordinates: [72.64, 10.56],
    famousDishes: ['Mus Kavaab (Spiced Tuna)', 'Maas Podichathu', 'Coconut Rice (Thenga Choru)'],
    featuredDishIds: ['lakshadweep-tuna'],
    forgottenRecipes: [
      {
        name: 'Chakka & Kavaratti Bonda',
        note: 'Breadfruit and tuna-stuffed crisp snacks flavoured with fresh coconut oil and island curry leaves.',
      },
    ],
    localIngredients: ['Pole-and-Line Skipjack Tuna', 'Toddy Vinegar & Neera Jaggery', 'Island Coconut', 'Breadfruit', 'Coriander & Fennel'],
    festivalFoods: [
      { festival: 'Eid & Island Weddings', dish: 'Mus Kavaab & Kilanchi', context: 'Lacy rice-coconut-egg crepes soaked in palm-jaggery milk alongside spiced tuna.' },
    ],
    culturalStory:
      'On coral atolls surrounded by turquoise lagoons, Lakshadweep’s cuisine relies on sustainable pole-and-line tuna, breadfruit, and fresh toddy vinegar—sun-drying smoked Masmin tuna for journeys across the Arabian Sea.',
    cookingMethods: ['Sun-drying & coconut-husk smoking tuna (Masmin)', 'Fresh coconut oil frying', 'Clay-pot coconut milk braising'],
    communities: ['Mahl-speaking Minicoy & Malayalam-speaking atoll kitchens'],
  },
  {
    id: 'dadra-nagar-haveli-daman-diu',
    name: 'Dadra & Nagar Haveli and Daman & Diu',
    type: 'Union Territory',
    zone: 'Union Territories',
    capital: 'Daman',
    coordinates: [72.83, 20.39],
    famousDishes: ['Ubadiyu (Clay-pot Winter Veg)', 'Daman Coconut Crab Curry', 'Nagli Rotla'],
    featuredDishIds: ['ubadiyu-pot'],
    forgottenRecipes: [
      {
        name: 'Tadi & Khajur-Ragi Porridge',
        note: 'Palm-sap fermented breads and Warli finger-millet (nagli) flatbreads served with forest mahua chutney.',
      },
    ],
    localIngredients: ['Nagli (Finger Millet)', 'Kalar & Kalari Herbs', 'Coastal Pomfret & Crab', 'Wild Mahua', 'Daman Toddy Vinegar'],
    festivalFoods: [
      { festival: 'Winter Harvest & Coastal Feasts', dish: 'Ubadiyu & Jetty Fish Curry', context: 'Earthen pots sealed with aromatic kalari herbs and buried beneath embers.' },
    ],
    culturalStory:
      'Bridging coastal Daman & Diu’s Indo-Portuguese seafood stews and the forested hills of Dadra & Nagar Haveli, where Warli and Kokna communities bake Nagli millet and herb-packed clay Ubadiyu pots.',
    cookingMethods: ['Herb-lined upside-down earthen pot baking (Ubadiyu)', 'Stone-baked nagli millet rotla', 'Coastal coconut-vinegar simmering'],
    communities: ['Warli, Dhodia & Kokna tribal kitchens', 'Daman & Diu coastal fisherfolk'],
  },
];
