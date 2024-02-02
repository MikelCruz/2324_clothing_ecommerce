export interface simplifiedProduct {
  _id: string;
  imageUrl: string;
  price: number;
  slug: string;
  designer: string;
  name: string;
}

export interface fullProduct {
  _id: string;
  images: any;
  price: number;
  slug: string;
  designer: string;
  name: string;
  description: string;
  price_id: string;
}

export interface fullUser {
  _id: string;
  image: any;
  slug: string;
  name: string;
  about: string;
  email: string;
}