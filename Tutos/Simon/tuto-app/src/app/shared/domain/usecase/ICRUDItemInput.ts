import { Item } from "../entity/item";

export interface ICRUDItemInput {
  getItemDetail(id: number): Item;
  getAllItems(): Item[];
}
