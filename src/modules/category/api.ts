import { AxiosInstance } from "axios";
import { ICategory } from "./types";

interface ICategoriesResponseData {
  count: number;
  items: ICategory[];
  limit: number;
  offset: number;
  total: number;
}

type ICategoryResponseData = ICategory;

type Params = Record<string, unknown>;

export const getCategories = ({ get }: AxiosInstance, params: Params = {}) =>
  get<ICategoriesResponseData>("/categories", { params });

export const getCategoryById = (
  { get }: AxiosInstance,
  categoryId: number,
  params: Params = {}
) => get<ICategoryResponseData>(`/categories/${categoryId}`, { params });
