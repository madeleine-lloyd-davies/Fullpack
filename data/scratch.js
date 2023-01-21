const categories = {
  clothing: "Items to wear during the daytime on your trip",
  pajamas: "What to wear at night during your trip",
  travelOutfits: "comfy clothes for travel days",
  outerwear: "Outerwear for your trip",
  accessories: "Accessories, purses, hats, jewelry",
  shoes: "Any shoes you might pack other than what you wear to travel",
  toiletries:
    "toothbrush/toothpaste, shower stuff, skincare, sunscreen, pads and tampons, bugspray, deodorant, glasses/contact lenses, shaving equipment, styling equipment",
  medication:
    "prescribed medication, painkillers, first aid, nauseau meds/maybe a bag to throw up in if you get carsick",
  dailyItems:
    "sunglasses, reuseable water bottle, notebook and pen, reuseable tote bag",
  tech: "computer, tablet, ereader, headphones, camera, and all necessary chargers",
  accessibility: "mobility aids, hearing aids",
  food: "snacks for travel day, general emergency trip snacks, groceries if staying in short term rental",
  entertainment:
    "books, boardgames, deck of cards, ethernet cable etc if you will be hooking your laptop up to a tv",
  essentials:
    "keys, wallet, phone, id, tickets/confirmation details for your trip",
  dayOf:
    "things to do on the day of your departure: take out garbage, clean out fridge, pack items like meds you couldn't pack before, contact family friends, check into flight, download podcasts/music",
  events:
    "items related to specific events. Will you be doing something that requires formal wear? A swimsuit? Hiking boots?",
  comfortItems: "sleep mask? your own sheets and towels? pillow for the plane",
};

//duration is an integer, the number of days including the day you leave and the day you come home
function generateList(duration, travelDays = 2) {
  return ` Here are some items you will need to pack for your upcoming trip:
  * Enough clothing for ${duration} days
  Don't forget, this will include ${travelDays} travel days, and ${
    duration - 1
  } nights.
  * Outerwear
  What will the weather be like where you will be going? Will you need rain gear? a light sweater? a down jacket?
  * Accessories
  Will you need to pack any purses? Hats? Jewelry? Belts?
  * Shoes
  Are you packing any shoes other than what you are wearing to travel? Gym shoes? Hiking boots? Fancy shoes? Slippers? Shower shoes?
  * Toiletries
  Do you have a pre-packed toiletry bag, or do you need to pack one now? Here are some items to consider: dental care, shower items, moisturizer and skincare, sunscreen, menstrual products, sexual health items, deodorant bugspray, glasses/contacts, shaving equipment, hair styling products.
  * Medication
  Do you take any daily or as-needed prescription medication? Do you want to bring any basic first aid? What OTC meds might be good to have? Painkillers, stomach issues, melatonin, etc. Do you have any medical issues exacerbated by travel, like car sickness?
  * Daily Items
  What do you want to bring out with you on a normal travel day? There are the essentials - keys, wallet, phone - but what about a reuseable water bottle? sunscreen? totebag in  case you buy something? notebook and pen?
  * Tech/electronic Items What tech are you bringing? Some examples: laptop, tablet, ereader, portable gaming device, bluetooth speaker, camera equipment. Don't forget the necessary chargers for everything!
  * Accessibility
  Are there any accessibility items that you want to bring? Mobility aids like a cane, walker, or wheelchair? Hearing aids?
  * Food Will you want snacks for the travel day, or just to have during the trip? Are you going somewhere like
 a short term rental where you will want to bring groceries?
 * Entertainment
 Physical books and DVDs? Downloaded music, movies, podcasts, audiobooks? Boardgames? Deck of cards? Personal gaming system? Will you need any special cables or devices to potentially connect your laptop to a tv or speaker?
 * Special equipment
 Do you have any plans that might require special items? Formal wear? A costume? A bathing suit? Hiking boots? Sports equipment?
 * Comfort Items
 Sleep mask? Neck pillow for the plane? Blanky? Perhaps your own bed linens and towels, either because you're staying somewhere where you need to bring them, or you insist on only the best!
 * Day Of There are always some things you feel like you can't pack in advance, or even some tasks you need to get done when you're leaving. Any meds or toiletries you were still using and couldn't pack in advance? Any special outfit/shoes you want to be wearing to travel? Anything you want to make sure you have at the top of your bag for easy access during travel? Any tasks to remember, like taking out the garbage, texting your friend, downloading playlists, checking into a flight, scheduling a ride to the airport, checking in with the catsitter?
 * Essentials
 * Do not worry too much. Almost anything can be replaced. If you have to buy toothpaste when you get to your destination, it will be okay. Here are the things to be absolutely sure about: wallet (with a way to pay for things and with ID that will work for your travel), your house keys, your phone, and any tickets/documentation you need for your trip today. `;
}
