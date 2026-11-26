import { WorldCountryDossier } from '../types/heritage';

export const WORLD_COUNTRIES: WorldCountryDossier[] = [
  {
    id: 'india',
    isoNumeric: '356',
    name: 'India',
    regionLabel: 'South Asia · 28 States & 8 Union Territories',
    coordinates: [78.96, 20.59],
    signatureDishes: ['Kambu Koozh', 'Ragi Mudde', 'Litti Chokha', 'Awadhi Biryani', 'Shorshe Ilish', 'Rogan Josh'],
    featuredDishIds: ['kambu-koozh', 'ragi-mudde', 'litti-chokha', 'shorshe-ilish', 'rogan-josh'],
    endangeredOrForgotten: [
      {
        name: 'Small Millets & Foraged Forest Greens',
        note: 'Kodo, barnyard, little, and proso millets once anchored regional dryland diets before post-1960s polished rice/wheat subsidies.',
      },
    ],
    localIngredients: ['Heirloom Millets', 'Cold-Pressed Oils', 'Kokum & Tamarind', 'Indigenous Rice Landraces', 'Fermented Bamboo & Fish'],
    festivalFoods: [
      { occasion: 'Harvest Cycle (Pongal, Makar Sankranti, Bihu, Onam)', dish: 'Pitha, Sakinalu, Payasam & Undhiyu', context: 'Every ecological region celebrates newly harvested rice, sesame, and jaggery differently.' },
    ],
    culturalStory:
      'India is not a single cuisine—it is thousands of hyper-local ecosystems where monsoon coastal kitchens, arid desert pastures, Himalayan valleys, and indigenous forest communities craft living foodways.',
    cookingMethods: ['Earthen-pot lacto-fermentation', 'Dum pukht sealing', 'Bamboo-tube roasting', 'Sun-drying & stone grinding'],
    communities: ['36 States & Union Territories', 'Over 700 indigenous tribal foodways'],
  },
  {
    id: 'japan',
    isoNumeric: '392',
    name: 'Japan',
    regionLabel: 'East Asia',
    coordinates: [138.25, 36.20],
    signatureDishes: ['Sushi (Narezushi & Edomae)', 'Miso Soup', 'Mochi'],
    featuredDishIds: ['japan-sushi', 'japan-miso-soup', 'japan-mochi'],
    endangeredOrForgotten: [
      {
        name: 'Funazushi (Lake Biwa Lacto-Fermented Carp)',
        note: 'An ancient predecessor of modern sushi fermented for over a year in salted cooked rice without vinegar.',
      },
    ],
    localIngredients: ['Koji Mold (Aspergillus oryzae)', 'Kombu Kelp & Bonito Dashi', 'Short-Grain Glutinous Mochigome', 'Heirloom Soybeans', 'Mountain Sansai'],
    festivalFoods: [
      { occasion: 'Oshogatsu (New Year)', dish: 'Ozoni & Kagami Mochi', context: 'Pounded glutinous rice cakes simmered in regional dashi broths for longevity and family unity.' },
    ],
    culturalStory:
      'Washoku centres on seasonality (shun), umami fermentation through koji, and spiritual gratitude (itadakimasu) before every bowl of miso soup and hand-pounded mochi.',
    cookingMethods: ['Wooden cedar-barrel miso aging', 'Mochitsuki wooden-mallet pounding', 'Dashi steeping', 'Rice-lacto fish fermentation'],
    communities: ['Shiga Lake Biwa fishers', 'Rural mountain sansai foragers', 'Urban Edo craft sushiya'],
  },
  {
    id: 'china',
    isoNumeric: '156',
    name: 'China',
    regionLabel: 'East Asia',
    coordinates: [104.19, 35.86],
    signatureDishes: ['Dim Sum', 'Congee (Zhou)', 'Zongzi'],
    featuredDishIds: ['china-dim-sum', 'china-congee', 'china-zongzi'],
    endangeredOrForgotten: [
      {
        name: 'Stone-Milled Rice Noodle & Fermented Black Bean Hearth Cakes',
        note: 'Labour-intensive hand-ground rice slurries steamed on woven bamboo trays in rural Cantonese and Hakka villages.',
      },
    ],
    localIngredients: ['Glutinous Rice & Lotus/Bamboo Leaves', 'Aged Pu-erh & Oolong Tea', 'Fermented Black Beans', 'Ginger & Dried Tangerine Peel', 'Soy & Rice Wine'],
    festivalFoods: [
      { occasion: 'Duanwu (Dragon Boat Festival)', dish: 'Zongzi', context: 'Pyramidal bamboo-leaf parcels of glutinous rice commemorating poet Qu Yuan.' },
    ],
    culturalStory:
      'Across eight great regional culinary traditions, food serves simultaneously as family bonding around yum cha tables, seasonal medicine in bubbling clay-pot congee, and ancestral remembrance.',
    cookingMethods: ['Stacked bamboo-basket steaming', 'Clay-pot slow porridge reduction', 'Reed/bamboo-leaf boiling (Zongzi)', 'Wok hei high-flame tossing'],
    communities: ['Cantonese yum cha households', 'Hakka mountain clans', 'Jiangnan river-town kitchens'],
  },
  {
    id: 'south-korea',
    isoNumeric: '410',
    name: 'Korea',
    regionLabel: 'East Asia',
    coordinates: [127.76, 35.90],
    signatureDishes: ['Kimchi', 'Bibimbap', 'Tteok'],
    featuredDishIds: ['korea-kimchi', 'korea-bibimbap', 'korea-tteok'],
    endangeredOrForgotten: [
      {
        name: 'Regional Heirloom Kimchi (Seokbakji & Pheasant Dongchimi)',
        note: 'Seasonal temple and coastal kimchis using wild mountain greens rather than standardized Napa cabbage.',
      },
    ],
    localIngredients: ['Onggi-fermented Napa & Radish', 'Gochugaru Chili Flake', 'Saeujeot (Salted Shrimp)', 'Doenjang & Gochujang', 'Glutinous & Non-glutinous Rice'],
    festivalFoods: [
      { occasion: 'Kimjang (Late Autumn) & Chuseok', dish: 'Kimjang Kimchi & Songpyeon Tteok', context: 'Entire neighbourhoods gather before frost to salt, season, and bury earthenware kimchi crocks.' },
    ],
    culturalStory:
      'Korean culinary heritage is built on Jang (fermented pastes) and Kimjang—communal autumn kimchi-making that preserves summer fields inside breathable clay onggi jars across harsh winters.',
    cookingMethods: ['Breathable clay Onggi earth-burial fermentation', 'Stone-pot scorching (Dolsot)', 'Wooden-mallet tteok pounding', 'Pine-needle steaming (Songpyeon)'],
    communities: ['Kimjang neighbourhood collectives', 'Korean Buddhist Temple kitchens', 'Jeolla agricultural families'],
  },
  {
    id: 'thailand',
    isoNumeric: '764',
    name: 'Thailand',
    regionLabel: 'Southeast Asia',
    coordinates: [100.99, 15.87],
    signatureDishes: ['Tom Yum', 'Pad Thai', 'Khao Soi'],
    featuredDishIds: ['thailand-tom-yum', 'thailand-pad-thai'],
    endangeredOrForgotten: [
      {
        name: 'Ancient Nam Prik Relishes & Fermented Rice Noodles (Khanom Jeen)',
        note: 'Hand-pounded mortar chili pastes paired with wild forest herbs and three-day fermented rice noodles.',
      },
    ],
    localIngredients: ['Lemongrass, Galangal & Kaffir Lime', 'Nam Pla (Fermented Fish Sauce)', 'Tamarind Pulp', 'Palm Sugar', 'Bird’s-Eye Chili & Holy Basil'],
    festivalFoods: [
      { occasion: 'Songkran & Loy Krathong', dish: 'Khao Chae & Shared River Curries', context: 'Jasmine-scented chilled rice with delicate stuffed shallots to cool April heat.' },
    ],
    culturalStory:
      'Thai cooking balances hot, sour, salty, sweet, and aromatic layers within a single meal—honouring waterborne river markets, stone mortar-and-pestle craft, and communal sharing.',
    cookingMethods: ['Granite mortar-and-pestle (Krok) herb pounding', 'Rapid wok searing over charcoal', 'Aromatic herbal broth infusion', 'Sun-fermented fish curing'],
    communities: ['Central Chao Phraya river kitchens', 'Northern Lanna & Isan communities'],
  },
  {
    id: 'indonesia',
    isoNumeric: '360',
    name: 'Indonesia',
    regionLabel: 'Maritime Southeast Asia',
    coordinates: [113.92, -0.78],
    signatureDishes: ['Nasi Goreng', 'Rendang', 'Tempe Bacem'],
    featuredDishIds: ['indonesia-rendang', 'indonesia-nasi-goreng'],
    endangeredOrForgotten: [
      {
        name: 'Papeda (Sago Palm Porridge) & Wild Candlenut Sambals',
        note: 'Eastern Indonesian staple sago porridge eaten before commercial rice expansion in Maluku and Papua.',
      },
    ],
    localIngredients: ['Fresh Coconut Cream', 'Ketjap Manis (Sweet Soy)', 'Galangal, Turmeric Leaf & Lemongrass', 'Kluwak & Candlenut', 'Fermented Shrimp Paste (Terasi)'],
    festivalFoods: [
      { occasion: 'Lebaran (Eid) & Ceremonial Kenduri', dish: 'Rendang & Ketupat', context: 'Minangkabau beef slow-simmered for hours until coconut oil caramelizes spices into dark preservation gold.' },
    ],
    culturalStory:
      'Across 17,000 islands, Minangkabau cooks created Rendang—a dish whose slow caramelization in coconut milk acts as natural preservation for long overland journeys—while Java’s night markets turned leftover rice into Nasi Goreng.',
    cookingMethods: ['Hour-long coconut reduction & caramelization', 'Stone ulekan spice grinding', 'Banana-leaf charcoal grilling', 'Rhizopus mold tempeh fermentation'],
    communities: ['Minangkabau West Sumatra matriarchs', 'Javanese warung & keraton kitchens', 'Maluku & Balinese islanders'],
  },
  {
    id: 'italy',
    isoNumeric: '380',
    name: 'Italy',
    regionLabel: 'Southern Europe · Mediterranean',
    coordinates: [12.56, 41.87],
    signatureDishes: ['Risotto', 'Hand-Rolled Pasta', 'Traditional Pane (Sourdough Hearth Bread)'],
    featuredDishIds: ['italy-risotto', 'italy-pasta-bread'],
    endangeredOrForgotten: [
      {
        name: 'Pane di Grano Duro & Regional Pasta Shapes (Su Filindeu)',
        note: 'Sardinian "threads of God" hand-pulled pasta made by only a handful of women elders for the feast of San Francesco.',
      },
    ],
    localIngredients: ['Carnaroli & Arborio Rice', 'Senatore Cappelli Durum Wheat', 'Extra-Virgin Olive Oil', 'Aged Parmigiano & Pecorino', 'Lievito Madre (Mother Starter)'],
    festivalFoods: [
      { occasion: 'Sunday Family Pranzo & Patron Saints', dish: 'Hand-rolled Tagliatelle, Risotto & Hearth Bread', context: 'Generations gather to roll pasta sheets by hand on wooden spianatoia boards.' },
    ],
    culturalStory:
      'Italian culinary identity lives in campanilismo—loyalty to one’s village bell tower, local wheat varietals, northern rice paddies, and mother-yeast bread ovens.',
    cookingMethods: ['Wooden spianatoia rolling', 'Gradual hot-broth rice mantecatura', 'Wood-fired brick bread ovens', 'Natural lievito madre fermentation'],
    communities: ['Po Valley rice growers', 'Emilia-Romagna sfogline pasta makers', 'Sardinian & Sicilian bread bakers'],
  },
  {
    id: 'france',
    isoNumeric: '250',
    name: 'France',
    regionLabel: 'Western Europe',
    coordinates: [2.21, 46.22],
    signatureDishes: ['Ratatouille', 'Crêpes & Buckwheat Galettes'],
    featuredDishIds: ['france-ratatouille', 'france-crepes'],
    endangeredOrForgotten: [
      {
        name: 'Far Breton & Garbure Béarnaise',
        note: 'Slow-simmered Gascon cabbage-and-confit peasant soup and rustic buckwheat porridge of rural Brittany.',
      },
    ],
    localIngredients: ['Provençal Sun-Ripened Tomatoes & Aubergine', 'Breton Buckwheat (Sarrasin)', 'Salted Normandy/Brittany Butter', 'Herbes de Provence', 'Orchard Cider'],
    festivalFoods: [
      { occasion: 'La Chandeleur (Feb 2)', dish: 'Crêpes Suzette & Galettes de Sarrasin', context: 'Round golden crêpes flipped with a coin in hand to welcome returning sunlight and prosperity.' },
    ],
    culturalStory:
      'Beyond haute cuisine sits France’s true bedrock: terroir—peasant Provençal cooks stewing late-summer garden abundance in olive oil, and Breton families pouring buckwheat batter onto hot cast-iron billig griddles.',
    cookingMethods: ['Cast-iron billig crepe spreading (Rozell)', 'Layered summer vegetable olive-oil braising', 'Earthenware daubière simmering'],
    communities: ['Provençal market gardeners', 'Breton crêperie artisans'],
  },
  {
    id: 'mexico',
    isoNumeric: '484',
    name: 'Mexico',
    regionLabel: 'Mesoamerica',
    coordinates: [-102.55, 23.63],
    signatureDishes: ['Tamales', 'Mole', 'Nixtamalized Corn Tacos'],
    featuredDishIds: ['mexico-tamales', 'mexico-mole'],
    endangeredOrForgotten: [
      {
        name: 'Pre-Hispanic Milpa Heirloom Corn & Quelites',
        note: 'Over 59 native landraces of purple, red, and blue maize grown alongside wild milpa greens threatened by monoculture.',
      },
    ],
    localIngredients: ['Heirloom Criollo Maize & Wood-Ash Lime (Cal)', 'Dried Chilies (Mulato, Pasilla, Ancho)', 'Cacao & Pepitas', 'Corn Husks & Banana Leaves', 'Epazote'],
    festivalFoods: [
      { occasion: 'Día de los Muertos & Día de la Candelaria', dish: 'Tamales & Mole Negro', context: 'Families wrap hundreds of masa parcels in corn husks and lay mole on altars for ancestors.' },
    ],
    culturalStory:
      'Mesoamerican civilization is built on nixtamalization—soaking heirloom maize in alkaline wood-ash or slaked lime water to unlock niacin and bind masa—transforming corn into sacred tamales, tortillas, and ceremonial mole.',
    cookingMethods: ['Alkaline nixtamalization & metate stone grinding', 'Vaporera pot steaming in corn husks', 'Multi-day roasted chili-cacao grinding (Mole)', 'Clay comal griddling'],
    communities: ['Oaxacan Zapotec & Mixtec cocineras tradicionales', 'Puebla & Yucatán Maya kitchens'],
  },
  {
    id: 'ethiopia',
    isoNumeric: '231',
    name: 'Ethiopia',
    regionLabel: 'Horn of Africa',
    coordinates: [40.48, 9.14],
    signatureDishes: ['Injera', 'Doro Wat'],
    featuredDishIds: ['ethiopia-injera', 'ethiopia-doro-wat'],
    endangeredOrForgotten: [
      {
        name: 'Kocho (Enset False-Banana Bread)',
        note: 'Ancient pit-fermented enset root bread central to Gurage and Sidama food security in southern highlands.',
      },
    ],
    localIngredients: ['Teff (Ivory & Red Highland Grain)', 'Berbere Spice Blend', 'Niter Kibbeh (Spiced Clarified Butter)', 'Koseret & Korarima', 'Ersho Starter'],
    festivalFoods: [
      { occasion: 'Meskel, Genna & Fasika', dish: 'Doro Wat atop Communal Injera', context: 'Slow-caramelized onion and berbere chicken stew served on shared mesob baskets symbolizing social harmony.' },
    ],
    culturalStory:
      'In Ethiopia, food is eaten together from one shared clay platter (gebeta) through Gursha—feeding one another by hand as a gesture of trust, woven around three-day fermented teff injera.',
    cookingMethods: ['Clay mitad griddle baking', 'Three-day wild-yeast teff fermentation (Ersho)', 'Hour-long onion caramelization without added oil', 'Pit-fermented enset processing'],
    communities: ['Amhara, Tigray & Oromo highland homes', 'Gurage & Sidama enset cultivators'],
  },
  {
    id: 'turkey',
    isoNumeric: '792',
    name: 'Turkey',
    regionLabel: 'Anatolia & Eastern Mediterranean',
    coordinates: [35.24, 38.96],
    signatureDishes: ['Menemen', 'Baklava', 'Tarhana'],
    featuredDishIds: ['turkey-menemen', 'turkey-baklava'],
    endangeredOrForgotten: [
      {
        name: 'Sun-Dried Tarhana & Siyez (Einkorn) Wheat Pilaf',
        note: 'Anatolian 10,000-year-old einkorn wheat and fermented yogurt-vegetable soup pellets dried on summer cotton sheets.',
      },
    ],
    localIngredients: ['Antep Pistachios', 'Siyez Wheat & Fine Phyllo (Yufka)', 'Sun-Ripened Tomatoes & Sivri Peppers', 'Clarified Butter (Sade Yağ)', 'Sumac & Pomegranate Molasses'],
    festivalFoods: [
      { occasion: 'Şeker Bayramı (Eid al-Fitr) & Weddings', dish: 'Gaziantep Baklava', context: 'Forty paper-thin hand-rolled yufka layers crisped with emerald Antep pistachios.' },
    ],
    culturalStory:
      'Bridging Central Asian pastoral hearths, Ottoman palace kitchens, and Aegean olive groves, Turkish tables unite everyday warmth—sizzling copper-pan menemen—with Gaziantep’s generational baklava craft.',
    cookingMethods: ['Hand-rolling paper-thin yufka with oklava pin', 'Copper sahan pan egg-tomato simmering', 'Sun-drying fermented yogurt dough (Tarhana)'],
    communities: ['Gaziantep baklava ustas', 'Black Sea & Aegean village kitchens'],
  },
  {
    id: 'greece',
    isoNumeric: '300',
    name: 'Greece',
    regionLabel: 'Mediterranean & Aegean',
    coordinates: [21.82, 39.07],
    signatureDishes: ['Moussaka', 'Dolmades'],
    featuredDishIds: ['greece-moussaka', 'greece-dolmades'],
    endangeredOrForgotten: [
      {
        name: 'Trachanas & Wild Mountain Horta',
        note: 'Sun-dried cracked wheat and sour sheep’s-milk soup grains alongside foraged wild dandelion and fennel greens.',
      },
    ],
    localIngredients: ['Tender Vine Leaves', 'Kalamata & Peloponnese Olive Oil', 'Sheep & Goat Milk Feta / Kefalotyri', 'Wild Oregano & Mint', 'Eggplant & Lemon'],
    festivalFoods: [
      { occasion: 'Sunday Gatherings & Island Feasts', dish: 'Dolmadakia & Baked Moussaka', context: 'Delicate hand-rolled vine leaves scented with dill, mint, and bright lemon.' },
    ],
    culturalStory:
      'Greek culinary memory celebrates philoxenia—generosity toward guests—rooted in olive groves, seasonal wild greens, and patient grandmotherly hands rolling hundreds of vine-leaf dolmades.',
    cookingMethods: ['Weighted clay-pot slow vine-leaf simmering', 'Earthenware layered oven baking', 'Wild-herb foraging and lemon-egg emulsifying (Avgolemono)'],
    communities: ['Aegean & Cretan island households', 'Epirus mountain pastoralists'],
  },
  {
    id: 'middle-east',
    isoNumeric: '400',
    name: 'Jordan & Levant (Middle East)',
    regionLabel: 'Levant & Arabian Crossroads',
    coordinates: [36.23, 31.24],
    signatureDishes: ['Hummus', 'Mansaf', 'Maqluba'],
    featuredDishIds: ['levant-hummus', 'jordan-mansaf', 'levant-maqluba'],
    endangeredOrForgotten: [
      {
        name: 'Freekeh & Sun-Dried Jameed Craft',
        note: 'Flame-roasted green durum wheat and rock-hard fermented goat-yogurt spheres preserved by Bedouin women.',
      },
    ],
    localIngredients: ['Jameed (Fermented Dried Yogurt)', 'Chickpeas & Sesame Tahini', 'Sumac, Za’atar & Allspice', 'Extra-Virgin Olive Oil', 'Shrak Flatbread'],
    festivalFoods: [
      { occasion: 'Weddings, Eid & Friday Gatherings', dish: 'Mansaf & Maqluba', context: 'Aromatic rice, lamb, and toasted almonds inverted upside down from a grand pot onto shared platters.' },
    ],
    culturalStory:
      'Across Jordan, Palestine, Lebanon, and Syria, hospitality is sacred: Mansaf—simmered in reconstituted desert jameed yogurt—and upside-down Maqluba gather extended families around one generous platter.',
    cookingMethods: ['Sun-cured goat yogurt reconstitution (Jameed)', 'Upside-down layered pot inversion (Maqluba)', 'Stone-ground sesame tahini emulsification', 'Saj dome-griddle shrak baking'],
    communities: ['Bedouin pastoral households', 'Levantine village olive-grove kitchens'],
  },
  {
    id: 'peru',
    isoNumeric: '604',
    name: 'Peru',
    regionLabel: 'Andes & Pacific Coast',
    coordinates: [-75.01, -9.19],
    signatureDishes: ['Pachamanca', 'Ceviche', 'Quinua Stew'],
    featuredDishIds: ['peru-pachamanca'],
    endangeredOrForgotten: [
      {
        name: 'Chuño & Native Heirloom Potatoes',
        note: 'High-Andean freeze-dried potatoes preserved naturally at 4,000m frost cycles for multi-year storage.',
      },
    ],
    localIngredients: ['3,000+ Native Potato Varieties', 'Huacatay (Black Mint)', 'Ají Amarillo', 'Quinoa & Kiwicha', 'Cancha Corn'],
    festivalFoods: [
      { occasion: 'Inti Raymi & Earth Harvests', dish: 'Pachamanca', context: 'Earth-oven feast baked over heated river stones wrapped in banana leaves and Andean herbs.' },
    ],
    culturalStory:
      'Honouring Pachamama (Mother Earth), Quechua families dig earthen ovens lined with hot stones to slow-bake native tubers, corn, and herbs—connecting high-Andean seed guardians to coastal tables.',
    cookingMethods: ['Subterranean hot-stone earth oven (Pachamanca)', 'Andean freeze-drying (Chuño)', 'Citrus cold-curing (Leche de Tigre)'],
    communities: ['Quechua & Aymara Andean seed-keeper families', 'Lima coastal Nikkei & Criollo kitchens'],
  },
  {
    id: 'morocco',
    isoNumeric: '504',
    name: 'Morocco',
    regionLabel: 'North Africa · Maghreb',
    coordinates: [-7.09, 31.79],
    signatureDishes: ['Hand-Rolled Couscous', 'Tagine', 'Harira'],
    featuredDishIds: ['morocco-couscous'],
    endangeredOrForgotten: [
      {
        name: 'Barley-Millet Belboula & Smen (Aged Spiced Butter)',
        note: 'Clay-jar fermented butter aged for years with wild thyme and salt in rural Atlas homes.',
      },
    ],
    localIngredients: ['Preserved Lemons', 'Taliouine Saffron', 'Argan Oil', 'Ras el Hanout', 'Hand-Rolled Semolina'],
    festivalFoods: [
      { occasion: 'Friday Family Noon & Eid', dish: 'Seven-Vegetable Couscous', context: 'Three-stage steamed semolina heaped communally with caramelized onions and chickpeas.' },
    ],
    culturalStory:
      'Amazigh (Berber) women spend mornings hand-rolling semolina grains between palms and steaming them thrice in clay couscoussiers above saffron-infused broths.',
    cookingMethods: ['Conical clay Tagine condensation braising', 'Three-stage Couscoussier steaming', 'Clay-jar butter aging (Smen)'],
    communities: ['Amazigh Atlas mountain households', 'Fez & Marrakech guild kitchens'],
  },
  {
    id: 'nigeria',
    isoNumeric: '566',
    name: 'Nigeria',
    regionLabel: 'West Africa',
    coordinates: [8.67, 9.08],
    signatureDishes: ['Smoky Party Jollof', 'Egusi Soup & Pounded Yam', 'Akara'],
    featuredDishIds: ['nigeria-egusi-yam'],
    endangeredOrForgotten: [
      {
        name: 'Ofada Heritage Rice & Locust Bean (Iru / Dawadawa)',
        note: 'Fermented African locust beans used for umami depth long before commercial bouillon cubes arrived.',
      },
    ],
    localIngredients: ['Melon Seed (Egusi)', 'Red Palm Oil (Zomi)', 'Fermented Locust Bean (Iru)', 'White Puna Yam', 'Scotch Bonnet & Uziza Leaf'],
    festivalFoods: [
      { occasion: 'New Yam Festival (Iri Ji)', dish: 'Pounded Yam & Egusi', context: 'Celebrating the first harvest of white yams with rhythmic wooden mortar pounding.' },
    ],
    culturalStory:
      'Across Igbo, Yoruba, and Hausa kitchens, fermented locust beans (iru), unrefined red palm oil, and rhythmic mortar-pounded yam bind agrarian gratitude to lively communal celebrations.',
    cookingMethods: ['Wooden mortar-and-pestle yam pounding', 'Firewood cast-iron pot smoky roasting', 'Locust-bean alkaline fermentation (Iru)'],
    communities: ['Igbo, Yoruba, Hausa & Efik culinary traditions'],
  },
  {
    id: 'georgia',
    isoNumeric: '268',
    name: 'Georgia',
    regionLabel: 'Caucasus Crossroads',
    coordinates: [43.35, 42.31],
    signatureDishes: ['Khachapuri', 'Khinkali', 'Pkhali'],
    featuredDishIds: ['georgia-khachapuri'],
    endangeredOrForgotten: [
      {
        name: 'Tsiteli Doli Ancient Red Wheat Bread',
        note: 'Endemic Caucasian landrace wheat baked inside subterranean clay tone ovens.',
      },
    ],
    localIngredients: ['Sulguni & Imeruli Brined Cheese', 'Walnut & Marigold (Khmeli Suneli)', 'Endemic Wheat Landraces', 'Wild Tarragon & Pomegranate'],
    festivalFoods: [
      { occasion: 'Supra (Traditional Feast)', dish: 'Imeretian & Adjarian Khachapuri', context: 'Led by a Tamada toastmaster honouring ancestors, guests, and seasonal harvests.' },
    ],
    culturalStory:
      'In the South Caucasus, bread baked on the inner walls of glowing clay tone ovens and walnut-herb pastes anchor the Supra—where hospitality treats every guest as a gift.',
    cookingMethods: ['Subterranean clay Tone oven wall-baking', 'Mortar-crushed walnut & spice emulsifying', 'Pleated dumpling boiling'],
    communities: ['Kakheti, Imereti & Svaneti mountain villages'],
  },
  {
    id: 'vietnam',
    isoNumeric: '704',
    name: 'Vietnam',
    regionLabel: 'Southeast Asia',
    coordinates: [108.27, 14.05],
    signatureDishes: ['Bánh Chưng', 'Phở Bò', 'Bún Chả'],
    featuredDishIds: ['vietnam-banh-chung'],
    endangeredOrForgotten: [
      {
        name: 'Mắm Ferments & Mountain Five-Colour Sticky Rice',
        note: 'Glutinous rice naturally dyed with forest leaves (magenta perilla, turmeric, pandan) by Tay and Thai highland communities.',
      },
    ],
    localIngredients: ['Nước Mắm (Aged Anchovy Fish Sauce)', 'Dong Leaves (Phrynium)', 'Star Anise & Cassia', 'Glutinous Rice & Mung Bean', 'Fresh Herbs (Rau Thơm)'],
    festivalFoods: [
      { occasion: 'Tết Nguyên Đán (Lunar New Year)', dish: 'Bánh Chưng & Bánh Tét', context: 'Square glutinous rice cakes wrapped in green dong leaves and boiled overnight over wood fires.' },
    ],
    culturalStory:
      'Tết celebrations begin days ahead around wood-fired cauldrons where families take turns tending square Bánh Chưng cakes—symbolizing the Earth—through the night.',
    cookingMethods: ['12-hour wood-fired dong-leaf boiling', 'Charred ginger-onion bone broth simmering', 'Ceramic jar fish-salt aging'],
    communities: ['Red River Delta, Hue Imperial & Mekong families', 'Northern Tay & Hmong highland cooks'],
  },
];
