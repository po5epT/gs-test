export interface IBaseModel {
  id: number;
}

export interface IModel extends IBaseModel {
  name: string;
  description: string;
  url: string;
}
