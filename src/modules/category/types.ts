import { IModel } from "@/types";

export interface ICategory extends IModel {
  productCount: number;
  parentId: number;
  thumbnailUrl: string;
  enabledProductCount: number;
  enabled: boolean;
  productIds: number[];
}
