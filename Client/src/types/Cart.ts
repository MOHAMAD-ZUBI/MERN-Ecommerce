import { Variant } from "./Product";

export type Cart = {
  total: number;
  products: {
    product: Variant;
    flavor: string;
    quantity: number;
  }[];
  _id: string;
  user: string;
};
