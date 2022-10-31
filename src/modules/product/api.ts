import { AxiosInstance } from "axios";
import { IProduct } from "./types";

interface IProductsResponseData {
  count: number;
  items: IProduct[];
  limit: number;
  offset: number;
  total: number;
}

export type IProductResponseData = IProduct;

type Params = Record<string, unknown>;

export const getProducts = ({ get }: AxiosInstance, params: Params = {}) =>
  get<IProductsResponseData>("/products", { params });

export const getProductById = (
  { get }: AxiosInstance,
  productId: number,
  params: Params = {}
) => get<IProductResponseData>(`/products/${productId}`, { params });
