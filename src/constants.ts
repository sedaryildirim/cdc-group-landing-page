export interface Brand {
  name: string;
  tagline?: string;
  description: string;
  status: 'live' | 'upcoming';
  url?: string;
  thumbnail?: string;
  invertLogo?: boolean;
  facebookUrl?: string;
  instagramUrl?: string;
}

export interface Owner {
  name: string;
  role: string;
  background: string;
  image?: string;
}

export const BRANDS: Brand[] = [
  {
    name: "Mojos",
    tagline: "Smoke, Fire, and the Perfect Bite.",
    description: "A vibrant destination for smokehouse enthusiasts and craft burger lovers. We blend traditional BBQ techniques with modern flavors to create an unforgettable urban dining experience.",
    status: "live",
    url: "https://mojos-bbq-website.pages.dev/",
    thumbnail: "/images/Mojos-LogoPaper.png",
    facebookUrl: "https://www.facebook.com/mojos.th/",
    instagramUrl: "https://www.instagram.com/mojos.th/"
  },
  {
    name: "Kaif",
    tagline: "Island Soul, Sophisticated Flavors.",
    description: "Experience the ultimate island lifestyle on the shores of Koh Phangan. From sunset cocktails to refined beachfront dining, Kaif is where sophisticated relaxation meets the rhythm of the sea.",
    status: "live",
    url: "https://kaif-koh-phangan.pages.dev/",
    thumbnail: "/images/KAIF-LOGO.png",
    facebookUrl: "https://www.facebook.com/kaifphangan/",
    instagramUrl: "https://www.instagram.com/kaifphangan/"
  },
  {
    name: "Ember",
    tagline: "Primal Art, Elevated Comfort.",
    description: "Ember brings the warmth of charcoal-grilled excellence to Bangkok, redefining comfort food through the primal art of fire-roasting and smoke.",
    status: "live",
    url: "https://ember-charcoal-chicken.pages.dev/",
    thumbnail: "/images/ember-logo.png",
    invertLogo: true,
    facebookUrl: "https://facebook.com",
    instagramUrl: "https://instagram.com"
  }
];

export const OWNERS: Owner[] = [
  {
    name: "Andrew Grindlay",
    role: "CEO & Founder",
    background: "With over 20 years in international hospitality, Andrew leads the operational excellence and brand development of CDC Group.",
    image: "/images/andrew-portrait.png"
  },
  {
    name: "Helene Pavie",
    role: "Financial CEO",
    background: "A strategic leader with a deep background in financial management, Helene ensures the group's sustainable growth and fiscal integrity.",
    image: "/images/helene-portrait.png"
  },
  {
    name: "Troy Trigwell",
    role: "Construction Manager",
    background: "Oversees construction projects and leads menu concept design and development across the CDC Group, bridging the gap between physical space and culinary experience.",
    image: "/images/troy-profile.jpg"
  }
];
