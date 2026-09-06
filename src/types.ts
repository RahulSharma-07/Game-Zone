export interface GameItem {
  id: string;
  title: string;
  genre: string;
  category: 'sports' | 'action' | 'fighting' | 'racing' | 'multiplayer';
  players: string;
  image: string;
  description: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  dateText: string;
  text: string;
  highlight?: string;
  verified: boolean;
}

export interface GalleryImage {
  id: string;
  title: string;
  category: 'setup' | 'consoles' | 'atmosphere';
  image: string;
  alt: string;
}
