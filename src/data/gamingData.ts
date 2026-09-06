import { GameItem, ReviewItem, GalleryImage } from '../types';

export const BUSINESS_INFO = {
  name: "The Game Zone",
  city: "Ankleshwar",
  fullName: "The Game Zone Ankleshwar",
  tagline: "PLAY. COMPETE. HAVE FUN.",
  subTagline: "Ankleshwar's Gaming Destination",
  category: "Video Game Store / Gaming Zone",
  rating: 5.0,
  reviewCount: 13,
  address: "5/9, Mahendra Nagar Rd, Gadkhol Patiya, Ankleshwar, Gujarat 393001",
  landmark: "Gadkhol Patiya",
  phone: "081419 74723",
  phoneRaw: "+918141974723",
  hoursText: "Open today until 10:00 PM",
  closingTime: "10:00 PM",
  officialWebsite: "https://thegamezone-ank.netlify.app/",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=The+Game+Zone+Ankleshwar+5%2F9+Mahendra+Nagar+Rd+Gadkhol+Patiya+Ankleshwar+Gujarat+393001",
  reviewsUrl: "https://www.google.com/maps/search/?api=1&query=The+Game+Zone+Ankleshwar#reviews",
  whatsappUrl: "https://wa.me/918141974723?text=Hi%20The%20Game%20Zone%20Ankleshwar%2C%20I%20want%20to%20inquire%20about%20booking%20a%20gaming%20session!"
};

export const FEATURED_GAMES: GameItem[] = [
  {
    id: "fifa-fc",
    title: "FIFA / EA Sports FC",
    genre: "Sports / Football",
    category: "sports",
    players: "1 - 4 Players",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=800&auto=format&fit=crop",
    description: "Battle it out on the virtual pitch. Take your club or nation to glory in intense head-to-head matches."
  },
  {
    id: "gta-v",
    title: "Grand Theft Auto V",
    genre: "Open World / Action",
    category: "action",
    players: "Single Player / Story",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop",
    description: "Explore the sprawling world of Los Santos with endless missions, heists, and free-roam madness."
  },
  {
    id: "wwe-2k",
    title: "WWE 2K",
    genre: "Wrestling / Sports Fighting",
    category: "fighting",
    players: "1 - 4 Players",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop",
    description: "Step inside the squared circle with legendary superstars, Royal Rumbles, and high-flying finishers."
  },
  {
    id: "call-of-duty",
    title: "Call of Duty",
    genre: "FPS / Tactical Shooter",
    category: "action",
    players: "Co-op / Multiplayer",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
    description: "High-octane first-person shooter adrenaline with fast reflexes, tight gunplay, and tactical team combat."
  },
  {
    id: "mortal-kombat",
    title: "Mortal Kombat",
    genre: "Competitive Fighting",
    category: "fighting",
    players: "1v1 Head-to-Head",
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop",
    description: "Brutal combos, crushing blows, and iconic fatalities in the ultimate tournament for bragging rights."
  },
  {
    id: "tekken",
    title: "Tekken",
    genre: "3D Martial Arts Fighting",
    category: "fighting",
    players: "1v1 Head-to-Head",
    image: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?q=80&w=800&auto=format&fit=crop",
    description: "Master martial arts fighters, juggles, and lightning-fast parries in classic arcade versus battles."
  },
  {
    id: "cricket",
    title: "Cricket",
    genre: "Sports Simulation",
    category: "sports",
    players: "1 - 2 Players",
    image: "https://images.unsplash.com/photo-1531415074868-036b1c57e359?q=80&w=800&auto=format&fit=crop",
    description: "Experience nail-biting overs, boundary hits, and clutch yorkers with your friends on the big screen."
  },
  {
    id: "racing-games",
    title: "Racing Games",
    genre: "Arcade & Street Racing",
    category: "racing",
    players: "Split-screen / Multiplayer",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop",
    description: "Push exotic supercars to the limit with drift turns, nitro boosts, and intense cornering."
  },
  {
    id: "football-games",
    title: "Football Games",
    genre: "Competitive Tournament",
    category: "sports",
    players: "2 - 4 Players",
    image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=800&auto=format&fit=crop",
    description: "Assemble your dream lineup and battle for neighborhood supremacy with quick response controllers."
  }
];

export const AUTHENTIC_REVIEWS: ReviewItem[] = [
  {
    id: "review-1",
    author: "Raja Parmar",
    rating: 5,
    dateText: "Verified Local Gamer",
    text: "Just came back from the game zone and honestly, it was 🔥 Played on PS4 and the graphics + smooth gameplay felt amazing.",
    highlight: "Smooth gameplay & PS4 graphics",
    verified: true
  },
  {
    id: "review-2",
    author: "Raj Singh",
    rating: 5,
    dateText: "Verified Local Gamer",
    text: "It is a great place for students to spend their time.",
    highlight: "Great place for students",
    verified: true
  },
  {
    id: "review-3",
    author: "Ranveer Yadav",
    rating: 5,
    dateText: "Verified Local Gamer",
    text: "Nice gaming setup",
    highlight: "Nice gaming setup",
    verified: true
  }
];

export const GALLERY_ITEMS: GalleryImage[] = [
  {
    id: "gal-1",
    title: "PlayStation Console & Controller Lounge",
    category: "consoles",
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?q=80&w=1000&auto=format&fit=crop",
    alt: "DualShock and DualSense PlayStation controllers ready for gameplay"
  },
  {
    id: "gal-2",
    title: "Dedicated Gaming Stations & Ambient Lighting",
    category: "setup",
    image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?q=80&w=1000&auto=format&fit=crop",
    alt: "High definition screens with dark gaming lighting"
  },
  {
    id: "gal-3",
    title: "Competitive Multiplayer Battle Arena",
    category: "atmosphere",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1000&auto=format&fit=crop",
    alt: "Gamers competing head-to-head with controllers"
  },
  {
    id: "gal-4",
    title: "Comfortable Seating & Big Screen Display",
    category: "setup",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000&auto=format&fit=crop",
    alt: "Wide screen display setup for immersive sessions"
  },
  {
    id: "gal-5",
    title: "PlayStation 4 High-Fidelity Gaming Station",
    category: "consoles",
    image: "https://images.unsplash.com/photo-1507457379470-08b800bebc67?q=80&w=1000&auto=format&fit=crop",
    alt: "Precision controller and gaming console station"
  },
  {
    id: "gal-6",
    title: "Chill Student & Friends Hangout Vibe",
    category: "atmosphere",
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=1000&auto=format&fit=crop",
    alt: "Lounge ambiance with dark aesthetic and blue accents"
  }
];
