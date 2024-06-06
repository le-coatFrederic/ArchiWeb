import { Injectable } from "@angular/core";
import { ICRUDItemInput } from "../shared/domain/usecase/ICRUDItemInput";
import { ICRUDItemOutput } from "../shared/domain/usecase/ICRUDItemOutput";
import { Item } from "../shared/domain/entity/item";
import { ITEM } from "../mock-item-list";

@Injectable({
  providedIn: "root",
})
export class CRUDItemMockClassService
  implements ICRUDItemInput, ICRUDItemOutput
{
  items: Item[];

  constructor() {
    this.items = ITEM;
    console.log(this.getAllItems());
  }
  getItemDetail(id: number): Item {
    if (id == null) {
      throw new Error("Argument can't be null");
    }

    let item: Item = this.items[id];
    if (item == null) {
      throw new Error("Can't find this item " + id);
    }

    return item;
  }
  getAllItems(): Item[] {
    return this.items;
  }
  createItem(name: string, material: string[], created: Date): void {
    let item: Item = new Item();
    item.id = this.items.length;
    item.name = name;
    item.material = material;
    item.created = created;

    this.items.push(item);
  }
}
