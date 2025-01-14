export interface GalleryImage {
  id: number;
  title: string;
  category: 'Setup' | 'Events' | 'Facilities';
  url: string;
  description: string;
}

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    title: "Pro Gaming Setup",
    category: "Setup",
    url: "https://images.unsplash.com/photo-1542751371-adc38448a05e",
    description: "High-end gaming rigs with RTX graphics"
  },
  {
    id: 2,
    title: "VR Gaming Zone",
    category: "Setup",
    url: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620",
    description: "Immersive VR gaming experience"
  },
  {
    id: 3,
    title: "Gaming Lounge",
    category: "Facilities",
    url: "https://images.unsplash.com/photo-1598550476439-6847785fcea6",
    description: "Comfortable lounge area for gamers"
  },
  {
    id: 4,
    title: "Tournament Area",
    category: "Facilities",
    url: "https://images.unsplash.com/photo-1542751110-97427bbecf20",
    description: "Professional tournament setup"
  },
  {
    id: 5,
    title: "Local Tournament",
    category: "Events",
    url: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1",
    description: "Monthly gaming tournaments"
  },
  {
    id: 6,
    title: "Console Gaming",
    category: "Setup",
    url: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3",
    description: "Latest console gaming stations"
  }
];

export const categories = ["All", "Setup", "Events", "Facilities"] as const;