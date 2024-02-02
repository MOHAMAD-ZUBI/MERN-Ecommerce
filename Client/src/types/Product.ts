export interface Product {
  _id: string;
  title: string;
  description: string;
  img?: string;
  comments: Comment[];
  categories: string[];
  variants: Variant[];
  status: string;
  nutrition: object;
}

export interface Variant {
  _id: string;
  flavors: Flavor[];
  size: any;
  price: number;
  weight?: string;
  img: string;
  quantity: number;
}

export interface Flavor {
  _id: string;
  title: string;
  color: string;
}
