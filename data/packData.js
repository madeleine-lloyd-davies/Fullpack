/*
hardcoded data about what will appear on the list - ultimately, I think this will live in the DB?
an array of packing categories with the following structure
{
  name:
  description:
  status: (deleted, active, or complete?)
}

*/

export const packData = [
  {
    name: "Essentials",
    description:
      "Do not worry too much. Almost anything can be replaced. If you have to buy toothpaste when you get to your destination, it will be okay. Here are the things to be absolutely sure about: wallet (with a way to pay for things and with ID that will work for your travel), your house keys, your phone, and any tickets/documentation you need for your trip today.",
    status: "active",
  },
  {
    name: "Clothing",
    description:
      "Think about what you'll need during the day, for sleeping, and on travel days.",
    status: "active",
  },
  {
    name: "Outerwear",
    description:
      "What will the weather be like where you will be going? Will you need rain gear? A light sweater? A down jacket?",
    status: "active",
  },

  {
    name: "Accessories",
    description: "Will you need to pack any purses? Hats? Jewelry? Belts?",
    status: "active",
  },
  {
    name: "Shoes",
    description:
      "Are you packing any shoes other than what you are wearing to travel? Gym shoes? Hiking boots? Fancy shoes? Slippers? Shower shoes?",
    status: "active",
  },
  {
    name: "Toiletries",
    description:
      "Do you have a pre-packed toiletry bag, or do you need to pack one now? Here are some items to consider: dental care, shower items, moisturizer and skincare, sunscreen, menstrual products, sexual health items, deodorant bugspray, glasses/contacts, shaving equipment, hair styling products.",
    status: "active",
  },
  {
    name: "Medication",
    description:
      "Do you take any daily or as-needed prescription medication? Do you want to bring any basic first aid? What OTC meds might be good to have? Painkillers, stomach issues, melatonin, etc. Do you have any medical issues exacerbated by travel, like car sickness?",
    status: "active",
  },
  {
    name: "Daily Items",
    description:
      "What do you want to bring out with you on a normal travel day? There are the essentials - keys, wallet, phone - but what about a reuseable water bottle? sunscreen? totebag in case you buy something? notebook and pen?",
    status: "active",
  },
  {
    name: "Tech/Electronic Items",
    description:
      "What tech are you bringing? Some examples: laptop, tablet, ereader, portable gaming device, bluetooth speaker, camera equipment. Don't forget the necessary chargers for everything!",
    status: "active",
  },
  {
    name: "Accessibility",
    description:
      "Are there any accessibility items that you want to bring? Mobility aids like a cane, walker, or wheelchair? Hearing aids? Plane seatbelt extender?",
    status: "active",
  },
  {
    name: "Food",
    description:
      "Will you want snacks for the travel day, or just to have during the trip? Are you going somewhere like a short term rental where you will want to bring groceries?",
    status: "active",
  },
  {
    name: "Entertainment",
    description:
      "Physical books and DVDs? Downloaded music, movies, podcasts, audiobooks? Boardgames? Deck of cards? Personal gaming system? Will you need any special cables or devices to potentially connect your laptop to a tv or speaker?",
    status: "active",
  },
  {
    name: "Special Clothing/Equipment",
    description:
      "Do you have any plans that might require special items? Formal wear? A costume? A bathing suit? Hiking boots? Sports equipment?",
    status: "active",
  },
  {
    name: "Comfort Items",
    description:
      "Sleep mask? Neck pillow for the plane? Blanky? Perhaps your own bed linens and towels, either because you're staying somewhere where you need to bring them, or you insist on only the best!",
    status: "active",
  },
  {
    name: "Day Of",
    description:
      "There are always some things you feel like you can't pack in advance, or even some tasks you need to get done when you're leaving. Any meds or toiletries you were still using and couldn't pack in advance? Any special outfit/shoes you want to be wearing to travel? Anything you want to make sure you have at the top of your bag for easy access during travel? Any tasks to remember, like taking out the garbage, texting your friend, downloading playlists, checking into a flight, scheduling a ride to the airport, checking in with the catsitter?",
    status: "active",
  },
];
