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
