import { IBaseModel } from "@/types";
import { ICategory } from "@/modules/category/types";
import { IProduct } from "@/modules/product/types";

const makeUrl =
  <T extends IBaseModel>(modelName: string) =>
  (model: T = {} as T): T => ({
    ...model,
    url: `/${modelName}/${model.id}`,
  });

export const makeCategoryUrl = makeUrl<ICategory>("category");
export const makeProductUrl = makeUrl<IProduct>("product");
