/*
hardcoded data about what will appear on the list - ultimately, I think this will live in the DB?
an array of packing categories with the following structure
{

  name:
  description:
  status: (deleted, active, or complete?)
  note: removed status, tracking that in state instead
}

NOTE - at some point, these will need unique ids. for now, i am going to rely on unique names.
*/

export const packData = [
  {
    name: "Essentials",
    description:
      "Do not worry too much. Almost anything can be replaced. If you have to buy toothpaste when you get to your destination, it will be okay. Here are the things to be absolutely sure about: wallet (with a way to pay for things and with ID that will work for your travel), your house keys, your phone, and any tickets/documentation you need for your trip today.",
  },
  {
    name: "Clothing",
    description:
      "Think about what you'll need during the day, for sleeping, and on travel days.",
  },
  {
    name: "Outerwear",
    description:
      "What will the weather be like where you will be going? Will you need rain gear? A light sweater? A down jacket?",
  },

  {
    name: "Accessories",
    description: "Will you need to pack any purses? Hats? Jewelry? Belts?",
  },
  {
    name: "Shoes",
    description:
      "Are you packing any shoes other than what you are wearing to travel? Gym shoes? Hiking boots? Fancy shoes? Slippers? Shower shoes?",
  },
  {
    name: "Toiletries",
    description:
      "Do you have a pre-packed toiletry bag, or do you need to pack one now? Here are some items to consider: dental care, shower items, moisturizer and skincare, sunscreen, menstrual products, sexual health items, deodorant bugspray, glasses/contacts, shaving equipment, hair styling products.",
  },
  {
    name: "Medication",
    description:
      "Do you take any daily or as-needed prescription medication? Do you want to bring any basic first aid? What OTC meds might be good to have? Painkillers, stomach issues, melatonin, etc. Do you have any medical issues exacerbated by travel, like car sickness?",
  },
  {
    name: "Daily Items",
    description:
      "What do you want to bring out with you on a normal travel day? There are the essentials - keys, wallet, phone - but what about a reuseable water bottle? sunscreen? totebag in case you buy something? notebook and pen?",
  },
  {
    name: "Tech/Electronic Items",
    description:
      "What tech are you bringing? Some examples: laptop, tablet, ereader, portable gaming device, bluetooth speaker, camera equipment. Don't forget the necessary chargers for everything!",
  },
  {
    name: "Accessibility",
    description:
      "Are there any accessibility items that you want to bring? Mobility aids like a cane, walker, or wheelchair? Hearing aids? Plane seatbelt extender?",
  },
  {
    name: "Food",
    description:
      "Will you want snacks for the travel day, or just to have during the trip? Are you going somewhere like a short term rental where you will want to bring groceries?",
  },
  {
    name: "Entertainment",
    description:
      "Physical books and DVDs? Downloaded music, movies, podcasts, audiobooks? Boardgames? Deck of cards? Personal gaming system? Will you need any special cables or devices to potentially connect your laptop to a tv or speaker?",
  },
  {
    name: "Special Clothing/Equipment",
    description:
      "Do you have any plans that might require special items? Formal wear? A costume? A bathing suit? Hiking boots? Sports equipment?",
  },
  {
    name: "Comfort Items",
    description:
      "Sleep mask? Neck pillow for the plane? Blanky? Perhaps your own bed linens and towels, either because you're staying somewhere where you need to bring them, or you insist on only the best!",
  },
  {
    name: "Day Of",
    description:
      "There are always some things you feel like you can't pack in advance, or even some tasks you need to get done when you're leaving. Any meds or toiletries you were still using and couldn't pack in advance? Any special outfit/shoes you want to be wearing to travel? Anything you want to make sure you have at the top of your bag for easy access during travel? Any tasks to remember, like taking out the garbage, texting your friend, downloading playlists, checking into a flight, scheduling a ride to the airport, checking in with the catsitter?",
  },
];

//sample hardcoded array of complete category
export const sampleComplete = [
  {
    name: "example completed item1",
    description: "this is a fake completed item for hardcoded testing",
  },
  { name: "example completed item2", description: "a second completed item" },
];

export const sampleArchive = [
  {
    name: "example archived item",
    description: "an item you aren't going to pack",
  },
  {
    name: "a second archived item",
    description: "a second sample archive item",
  },
];

//array of questions/categories. each one is an object with a category name and an array of individual items

/*
how will quantity work?
most items - default quant 1
some items - default quant "travelDays"
some items - default quant "tripDuration"
set default quantity for each item and have + and - available so user can adjust
 */
export const customListQuiz = [
  {
    name: "Essentials",
    items: [
      { name: "wallet", quantity: 1 },
      { name: "keys", quantity: 1 },
      { name: "phone", quantity: 1 },
      { name: "tickets", quantity: "travelDays" },
      { name: "sufficient ID", quantity: 1 },
      { name: "payment method", quantity: 1 },
    ],
  },
  {
    name: "Clothing and Accessories",
    items: [
      { name: "travel outfit", quantity: "travelDays" },
      { name: "daytime outfit", quantity: "tripDuration" },
      { name: "sleepwear", quantity: 1 },
      { name: "underwear", quantity: "tripDuration" },
      { name: "socks", quantity: "tripDuration" },
      { name: "outerwear (heavy)", quantity: 1 },
      { name: "outerwear (light)", quantity: 1 },
      { name: "bag/purse", quantity: 1 },
      { name: "hat", quantity: 1 },
      { name: "belt", quantity: 1 },
      { name: "sunglasses", quantity: 1 },
      { name: "jewelry set", quantity: 1 },
      { name: "formal wear", quantity: 1 },
      { name: "swimwear", quantity: 1 },
      { name: "exercise outfit", quantity: 1 },
      { name: "sports equipment", quantity: 1 },
    ],
  },
  {
    name: "Shoes",
    items: [
      { name: "sneakers", quantity: 1 },
      { name: "hiking boots", quantity: 1 },
      { name: "formal shoes", quantity: 1 },
      { name: "slippers", quantity: 1 },
      { name: "shower shoes", quantity: 1 },
    ],
  },
  {
    name: "Toiletries",
    items: [
      { name: "toothbrush", quantity: 1 },
      { name: "toothpaste", quantity: 1 },
      { name: "dental floss", quantity: 1 },
      { name: "shower items", quantity: 1 },
      { name: "moisturizer/skincare", quantity: 1 },
      { name: "sunscreen", quantity: 1 },
      { name: "menstrual products", quantity: 1 },
      { name: "sexual health items", quantity: 1 },
      { name: "deodorant", quantity: 1 },
      { name: "bugspray", quantity: 1 },
      { name: "glasses/contacts", quantity: 1 },
      { name: "shaving equipment", quantity: 1 },
      { name: "hair products", quantity: 1 },
      { name: "makeup", quantity: 1 },
      { name: "perfume", quantity: 1 },
    ],
  },
  {
    name: "Medication",
    items: [
      { name: "prescription medication (daily)", quantity: "tripDuration" },
      { name: "prescription medication (as needed)", quantity: 1 },
      { name: "vitamins", quantity: "tripDuration" },
      { name: "first aid", quantity: 1 },
      { name: "painkillers", quantity: 1 },
      { name: "medication for stomach issues", quantity: 1 },
      { name: "nausea kit", quantity: 1 },
      { name: "melatonin", quantity: 1 },
    ],
  },
  {
    name: "Daily Items",
    items: [
      { name: "water bottle", quantity: 1 },
      { name: "reuseable bag", quantity: 1 },
      { name: "notebook", quantity: 1 },
      { name: "pen/pencil", quantity: 1 },
      { name: "gum", quantity: 1 },
    ],
  },
  {
    name: "Tech/Electronic Items",
    items: [
      { name: "laptop (and charger)", quantity: 1 },
      { name: "tablet (and charger)", quantity: 1 },
      { name: "eReader (and charger)", quantity: 1 },
      { name: "portable gaming device (and charger)", quantity: 1 },
      { name: "bluetooth speaker (and charger)", quantity: 1 },
      { name: "camera equipment", quantity: 1 },
      { name: "power converter", quantity: 1 },
      { name: "cables/equipment to connect computer to tv", quantity: 1 },
    ],
  },
  {
    name: "Accessibility",
    items: [
      { name: "cane", quantity: 1 },
      { name: "walker", quantity: 1 },
      { name: "wheelchair", quantity: 1 },
      { name: "hearing aids", quantity: 1 },
      { name: "plane seatbelt extender", quantity: 1 },
    ],
  },
  {
    name: "Food",
    items: [
      { name: "snacks for travel days", quantity: "travelDays" },
      { name: "snacks for daily use", quantity: "tripDuration" },
      { name: "groceries", quantity: 1 },
    ],
  },
  {
    name: "Entertainment",
    items: [
      { name: "books", quantity: 1 },
      { name: "DVDs", quantity: 1 },
      {
        name: "digital media (music, movies, podcasts, ebooks, audiobooks",
        quantity: 1,
      },
      { name: "boardgames/deck of cards", quantity: 1 },
      { name: "stamps", quantity: 1 },
    ],
  },

  {
    name: "Comfort Items",
    items: [
      { name: "sleep mask", quantity: 1 },
      { name: "travel pillow", quantity: 1 },
      { name: "earplugs", quantity: 1 },
      { name: "bed linens", quantity: 1 },
      { name: "towels", quantity: 1 },
    ],
  },
  {
    name: "Day Of",
    items: [
      { name: "set out travel outfit" },
      { name: "pack items that you were still using / for top of bag" },
      { name: "take out garbage" },
      { name: "check into flight" },
      { name: "contact friends/family with update" },
      { name: "download media" },
      { name: "schedule ride to airport" },
      { name: "check in with pet sitter" },
      { name: "clear out fridge" },
      { name: "set autoresponder in your email" },
    ],
  },
];
