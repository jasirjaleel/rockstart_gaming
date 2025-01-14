export interface SubPricing {
  name: string;
  price30min?: number; // Optional if not always present
  price60min?: number; // Optional if not always present
  players: number;
}

export interface PricingTier {
  name: string;
  price: number;
  duration: string;
  features: string[];
  popular?: boolean;
  subPricing?: SubPricing[]; // Add subPricing as an optional property
}

export const pricingTiers:PricingTier[] = [
  {
    name: "Casual Gamer",
    price: 60,
    duration: "30min",
    features: [
      "Access to PS5 Gaming (1 Player)",
      "Standard gaming setup",
      "Free water",
      "Access to board games",
      "Lounge access"
    ],
    subPricing: [
      {
        name: "Carrom Board",
        price30min: 30,
        price60min: 50,
        players: 2
      },
      {
        name: "Chess",
        price30min: 40,
        players: 2
      }
    ]
  },
  {
    name: "Pro Gamer",
    price: 100,
    duration: "60min",
    popular: true,
    features: [
      "All Casual features",
      "Premium board games access",
      "Priority booking",
      "Free snacks",
      "Access to all board games"
    ],
    subPricing: [
      {
        name: "Pool Table",
        price30min: 50,
        price60min: 100,
        players: 2
      },
      {
        name: "Table Tennis",
        price30min: 40,
        price60min: 70,
        players: 2
      },
      {
        name: "Foose Ball",
        price30min: 30,
        price60min: 50,
        players: 2
      }
    ]
  },
  {
    name: "Elite",
    price: 500,
    duration: "day",
    features: [
      "Unlimited gaming time",
      "VIP lounge access",
      "All premium games included",
      "Free beverages",
      "Access to private gaming sessions",
      "Priority booking for tournaments",
      "Access to special gaming events"
    ],
    subPricing: [
      {
        name: "All Board Games",
        players: 2
      }
    ]
  }
];