export interface Movie {
  id: number;
  title: string;
  image: string;
  quality: 'HD' | '4K';
  duration: string;
  genre: string;
  type: 'Original' | 'Series' | 'Docu';
  episodes?: number;
}

export interface Testimonial {
  id: number;
  name: string;
  since: string;
  text: string;
  avatar: string;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
}