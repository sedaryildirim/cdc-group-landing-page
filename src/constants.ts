export interface Brand {
  name: string;
  description: string;
  status: 'live' | 'upcoming';
  url?: string;
  thumbnail?: string;
  facebookUrl?: string;
  instagramUrl?: string;
}

export interface Owner {
  name: string;
  role: string;
  background: string;
}

export const BRANDS: Brand[] = [
  {
    name: "Mojos",
    description: "Burger BBQ Restaurant. A vibrant destination for smokehouse enthusiasts and craft burger lovers in the heart of the city.",
    status: "live",
    url: "https://mojosthailand.netlify.app/",
    thumbnail: "https://picsum.photos/seed/mojos/800/600",
    facebookUrl: "https://facebook.com",
    instagramUrl: "https://instagram.com"
  },
  {
    name: "Kaif",
    description: "Beach Bar and Restaurant. Experience the ultimate island lifestyle with sophisticated dining and sunset views on the shores of Koh Phangan.",
    status: "live",
    url: "https://kaifkohphangan.netlify.app/",
    thumbnail: "https://picsum.photos/seed/kaif/800/600",
    facebookUrl: "https://facebook.com",
    instagramUrl: "https://instagram.com"
  },
  {
    name: "Ember",
    description: "Charcoal Chicken. Our upcoming concept focusing on the primal art of fire-roasting, bringing elevated comfort food to Bangkok.",
    status: "upcoming",
    thumbnail: "https://picsum.photos/seed/ember/800/600",
    facebookUrl: "https://facebook.com",
    instagramUrl: "https://instagram.com"
  }
];

export const OWNERS: Owner[] = [
  {
    name: "Andrew Grindlay",
    role: "Operations Director",
    background: "With over 20 years in international hospitality, Andrew leads the operational excellence and brand development of CDC Group."
  },
  {
    name: "Helene Pavie",
    role: "Financial CEO",
    background: "A strategic leader with a deep background in financial management, Helene ensures the group's sustainable growth and fiscal integrity."
  },
  {
    name: "Troy Trigwell",
    role: "Creative Director",
    background: "Troy brings a unique vision to the group, overseeing the aesthetic and conceptual development of every brand in the portfolio."
  }
];
