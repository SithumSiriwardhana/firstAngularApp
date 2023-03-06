import { Product } from "./product.model";

export interface ProductResponse {
  [key: string]: any;
  message: string;
  data: Product[];
}