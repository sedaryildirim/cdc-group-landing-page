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
    background: "As the visionary CEO and Founder of CDC Group, Andrew leverages over 20 years of business management experience to drive the group's strategic growth and operational excellence across Thailand's premier hospitality landscape.",
    image: "/images/andrew-portrait.png"
  },
  {
    name: "Helene Pavie",
    role: "Chief Financial Officer",
    background: "A strategic leader with a deep background in financial management, Helene ensures the group's sustainable growth and fiscal integrity.",
    image: "/images/helene-portrait.png"
  },
  {
    name: "Troy Trigwell",
    role: "Chief Operations Manager & Executive Chef",
    background: "A multi-talented leader who excels in both operational and culinary spheres. Troy oversees all construction projects while simultaneously serving as Executive Chef, leading menu concept design and development across the CDC Group's portfolio.",
    image: "/images/troy-profile.jpg"
  }
];
