export interface GameSlide {
  id: number;
  title: string;
  description: string;
  image: string;
  releaseYear: string;
  developer: string;
}

export const featuredGames: GameSlide[] = [
  {
    id: 1,
    title: "The Last of Us Part II",
    description: "Embark on Ellie's brutal journey of revenge in a dangerous post-apocalyptic America",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e",
    releaseYear: "2020",
    developer: "Naughty Dog"
  },
  {
    id: 2,
    title: "Red Dead Redemption 2",
    description: "Follow Arthur Morgan's epic tale in America's unforgiving heartland",
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f",
    releaseYear: "2018",
    developer: "Rockstar Games"
  },
  {
    id: 3,
    title: "Grand Theft Auto V",
    description: "Navigate the lives of three criminals in the sprawling city of Los Santos",
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f",
    releaseYear: "2013",
    developer: "Rockstar Games"
  },
  {
    id: 4,
    title: "Horizon Zero Dawn Remastered",
    description: "Join Aloy's quest in a world ruled by machines",
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f",
    releaseYear: "2023",
    developer: "Guerrilla Games"
  },
  {
    id: 5,
    title: "God of War Ragnarök",
    description: "Embark on an epic journey with Kratos and Atreus through the Nine Realms",
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f",
    releaseYear: "2022",
    developer: "Santa Monica Studio"
  }
];