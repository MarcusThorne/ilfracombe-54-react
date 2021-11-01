import Tiki from '../img/activities/tiki.jpg'
import Museum from '../img/activities/museum.jpg'
import Embassy from '../img/activities/embassy.jpg'
import Landmark from '../img/activities/landmark.jpg'
import Scott from '../img/activities/scott.jpg'
import Queens from '../img/activities/queens.jpg'
import Lundy from '../img/activities/lundy.jpg'
import Lynton from '../img/activities/lynton.jpg'
import Heddons from '../img/activities/heddons.jpg'
import Clovelly from '../img/activities/clovelly.jpg'
import Woolacombe from '../img/activities/woolacombe.jpg'
import Milkyway from '../img/activities/milkyway.jpg'
import Bigsheep from '../img/activities/bigsheep.jpg'
import Exmoor from '../img/activities/exmoor.jpg'
import Water from '../img/activities/water.jpg'

const Adverts = [
    {
        name: "Tiki Surf Shop",
        location: "Barnstaple",
        category: "Shop",
        description: "The Tiki surf shop is one of the UK’s oldest surfboard and wetsuit retailers. Originally developed as a surf outlet for Tiki surfboards and the licensed classic Californian surfboards of Bing and G&S, it is now one of the largest surf shops in the UK.",
        phone: "07963 531964",
        address: "Caen St, Braunton, EX33 1AA",
        link: "https://www.tikisurf.co.uk/",
        image: Tiki
    }, {
        name: "Museum of British Surfing",
        location: "Barnstaple",
        category: "Museum",
        description: "The Museum of British Surfing is a national registered charity preserving our surfing heritage and culture, celebrating current achievements and helping to shape the future of surfing in Great Britain.",
        phone: "01271 815155",
        address: "The Museum of British Surfing The Yard, Caen St, Braunton, EX33 1AA",
        link: "https://www.museumofbritishsurfing.org.uk/",
        image: Museum
    }, {
        name: "Embassy Cinema",
        location: "Ilfracombe",
        category: "Entertainment",
        description: "Independent cinema showing latest releases and alternative films, with waiter service in one screen.",
        phone: "01271 862323",
        address: "134 High St, Ilfracombe, EX34 9EZ",
        link: "https://ilfracombe.merlincinemas.co.uk/?forcechoice=true",
        image: Embassy
    }, {
        name: "The Landmark Theatre",
        location: "Ilfracombe",
        category: "Entertainment",
        description: "The Landmark Theatre is a theatre in the North Devon coastal town of Ilfracombe. This theatre, along with the Queen's Theatre, Barnstaple, is managed by the North Devon Theatres' Trust, a registered charity promoting the arts.",
        phone: "01271 316523",
        address: "Ilfracombe, EX34 9BZ",
        link: "https://www.landmark-ilfracombe.com/",
        image: Landmark
    }, {
        name: "Scott Cinema",
        location: "Barnstaple",
        category: "Entertainment",
        description: "1930's cinema with a bar and 4 modern screens showing latest releases and live theatre broadcasts.",
        phone: "0300 124 0275",
        address: "77 Boutport St, Barnstaple, EX31 1SR",
        link: "https://www.scottcinemas.co.uk/findme?redirect=/",
        image: Scott
    }, {
        name: "Queen's Theatre",
        location: "Barnstaple",
        category: "Entertainment",
        description: "The Queen's Theatre is a theatre in Barnstaple, North Devon, England. It assumed its current form in 1993, but the history of theatre in Barnstaple can be traced back to at least 1435, when minstrels, players, jugglers and buffoons were an established feature of Barnstaple's annual fair.",
        phone: "01271 316523",
        address: "100 Boutport St, Barnstaple, EX31 1SY",
        link: "https://www.queenstheatre-barnstaple.com/",
        image: Queens
    }, {
        name: "Lundy Island",
        location: "Lundy Island",
        category: "Explore",
        description: "We are pleased to be able to offer unique day trips to Lundy Island aboard the catamaran Obsession II.",
        phone: "07963 531964",
        address: "The Pier, Ilfracombe Harbour, Ilfracombe, Devon, EX34 9EQ",
        link: "https://www.lifeboattrips.co.uk/",
        image: Lundy
    }, {
        name: "Valley of Rocks",
        location: "Lynton",
        category: "Hiking",
        description: "The Valley of Rocks, sometimes called Valley of the Rocks, is a dry valley that runs parallel to the coast in north Devon, England, about 1 kilometre to the west of the village of Lynton.",
        phone: "",
        address: "S W Coast Path, Lynton, EX35 6JH",
        link: "https://www.visit-exmoor.co.uk/things-to-do/natural-attractions/valley-of-rocks",
        image: Lynton
    }, {
        name: "Heddon's Mouth",
        location: "Heddon's Mouth",
        category: "Hiking",
        description: "A beautiful walk through ancient woodland alongside the River Heddon to where it meets the sea between some of England's highest cliffs.",
        phone: "0344 249 1895",
        address: "Heddon's Mouth, Barnstaple, EX31 4PY",
        link: "https://www.nationaltrust.org.uk/heddon-valley/trails/heddons-mouth-circular-walk",
        image: Heddons
    }, {
        name: "Clovelly",
        location: "Clovelly",
        category: "Explore",
        description: "Clovelly is a harbour village in the Torridge district of Devon, England. Its steep pedestrianised cobbled main street, traditional architecture, donkeys and views over the Bristol Channel attract numerous tourists.",
        phone: "01237 431781",
        address: "Clovelly Visitor Centre, near Bideford, EX39 5TA",
        link: "https://www.clovelly.co.uk/",
        image: Clovelly
    }, {
        name: "Woolacombe Beach",
        location: "Woolacombe",
        category: "Explore",
        description: "Woolacombe is one of the finest beaches in the West Country, and it is easy to see why it has won numerous awards. It’s a big favourite with families and surfers attracting thousands of people each summer to the beach and Woolacombe village.",
        phone: "01237 431781",
        address: "Woolacombe, Devon, EX39 5TA",
        link: "https://www.visitdevon.co.uk/northdevon/things-to-do/woolacombe-beach-p2512783",
        image: Woolacombe
    }, {
        name: "Milky Way (Adventure Park)",
        location: "Near Bideford",
        category: "Kids",
        description: "The Milky Way Adventure Park is one of the 10 best theme parks in the UK at Higher Clovelly in North Devon.",
        phone: "01237 431255",
        address: "The Milky Way Adventure Park, Bideford, EX39 5RY",
        link: "https://www.themilkyway.co.uk/",
        image: Milkyway
    }, {
        name: "The Big Sheep (Family Attraction)",
        location: "Bideford",
        category: "Kids",
        description: "BIG fun and BIG smiles await you at North Devon’s top family attraction! Rides to thrill, adventures across the park, seeing the animals up close, hilarious live shows, events and more, to give you the best family day out in North Devon!",
        phone: "01237 472366",
        address: "Abbotsham Rd, Abbotsham, Bideford, EX39 5AP",
        link: "https://www.thebigsheep.co.uk/",
        image: Bigsheep
    }, {
        name: "Exmoor Zoo",
        location: "Exmoor",
        category: "Kids",
        description: "Exmoor Zoo is a conservation centre in Exmoor, North Devon, England. The zoo developed from Exmoor Bird Gardens, opened on the site of a farm in 1982.",
        phone: "01598 763352",
        address: "Bratton Fleming, Barnstaple, EX31 4SG",
        link: "https://www.exmoorzoo.co.uk/",
        image: Exmoor
    }, {
        name: "Combe Martin Wildlife & Dinosaur Park",
        location: "Combe Martin",
        category: "Kids",
        description: "We are a family run wildlife & dinosaur park set in over 28 acres of spectacular gardens within the North Devon Area of Outstanding Natural Beauty.",
        phone: "01271 882486",
        address: "Combe Martin, Ilfracombe, EX34 0NG",
        link: "https://cmwdp.co.uk/Watermouth Castle",
        image: Tiki
    }, {
        name: "Watermouth Castle (Adventure Park)",
        location: "Combe Martin",
        category: "Kids",
        description: "One of the West Country’s premier Family Tourist Attractions where you can enjoy a Victorian Castle full of eclectic treasures, nostalgic displays and curios, a theme park including rides and play areas, and beautiful landscaped gardens.",
        phone: "01271 867474",
        address: "A399, Ilfracombe, EX34 9SL",
        link: "https://www.watermouthcastle.com/",
        image: Water
    }, {
        // info needs updating from here
        name: "The Thatch",
        location: "Croyde",
        category: "Resturant/ Pub",
        description: "One of the West Country’s premier Family Tourist Attractions where you can enjoy a Victorian Castle full of eclectic treasures, nostalgic displays and curios, a theme park including rides and play areas, and beautiful landscaped gardens.",
        phone: "01271 867474",
        address: "A399, Ilfracombe, EX34 9SL",
        link: "https://www.watermouthcastle.com/",
        image: Water
    }, {
        name: "Squires (Fish and Chips)",
        location: "Braunton",
        category: "Resturant/ Pub",
        description: "One of the West Country’s premier Family Tourist Attractions where you can enjoy a Victorian Castle full of eclectic treasures, nostalgic displays and curios, a theme park including rides and play areas, and beautiful landscaped gardens.",
        phone: "01271 867474",
        address: "A399, Ilfracombe, EX34 9SL",
        link: "https://www.watermouthcastle.com/",
        image: Water
    }, {
        name: "The Admiral Collingwood",
        location: "Ilfracombe",
        category: "Resturant/ Pub",
        description: "One of the West Country’s premier Family Tourist Attractions where you can enjoy a Victorian Castle full of eclectic treasures, nostalgic displays and curios, a theme park including rides and play areas, and beautiful landscaped gardens.",
        phone: "01271 867474",
        address: "A399, Ilfracombe, EX34 9SL",
        link: "https://www.watermouthcastle.com/",
        image: Water
    }, {
        name: "The Water Gate",
        location: "Barnstaple",
        category: "Resturant/ Pub",
        description: "One of the West Country’s premier Family Tourist Attractions where you can enjoy a Victorian Castle full of eclectic treasures, nostalgic displays and curios, a theme park including rides and play areas, and beautiful landscaped gardens.",
        phone: "01271 867474",
        address: "A399, Ilfracombe, EX34 9SL",
        link: "https://www.watermouthcastle.com/",
        image: Water
    }, {
        name: "Ilfracombe Golf Club",
        location: "Ilfracombe",
        category: "Entertainment",
        description: "One of the West Country’s premier Family Tourist Attractions where you can enjoy a Victorian Castle full of eclectic treasures, nostalgic displays and curios, a theme park including rides and play areas, and beautiful landscaped gardens.",
        phone: "01271 867474",
        address: "A399, Ilfracombe, EX34 9SL",
        link: "https://www.watermouthcastle.com/",
        image: Water
    }, {
        name: "Tarka Tennis",
        location: "Barnstaple",
        category: "Entertainment",
        description: "One of the West Country’s premier Family Tourist Attractions where you can enjoy a Victorian Castle full of eclectic treasures, nostalgic displays and curios, a theme park including rides and play areas, and beautiful landscaped gardens.",
        phone: "01271 867474",
        address: "A399, Ilfracombe, EX34 9SL",
        link: "https://www.watermouthcastle.com/",
        image: Water
    }, {
        name: "Lesuire Center",
        location: "Barnstaple",
        category: "Entertainment",
        description: "One of the West Country’s premier Family Tourist Attractions where you can enjoy a Victorian Castle full of eclectic treasures, nostalgic displays and curios, a theme park including rides and play areas, and beautiful landscaped gardens.",
        phone: "01271 867474",
        address: "A399, Ilfracombe, EX34 9SL",
        link: "https://www.watermouthcastle.com/",
        image: Water
    }, {
        name: "Down The Rabbit Hole",
        location: "Barnstaple",
        category: "Resturant/ Pub",
        description: "One of the West Country’s premier Family Tourist Attractions where you can enjoy a Victorian Castle full of eclectic treasures, nostalgic displays and curios, a theme park including rides and play areas, and beautiful landscaped gardens.",
        phone: "01271 867474",
        address: "A399, Ilfracombe, EX34 9SL",
        link: "https://www.watermouthcastle.com/",
        image: Water
    }
]

export default Adverts
