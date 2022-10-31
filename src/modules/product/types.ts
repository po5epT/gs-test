import { IModel } from "@/types";

export interface IProduct extends IModel {
  price: number;
  smallThumbnailUrl: string;
  imageUrl: string;
}
