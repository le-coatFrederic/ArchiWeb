import { Component, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { Item } from "./item";
import { ITEM } from "./mock-item-list";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  itemList: Item[] = ITEM;
  itemSelected: Item | undefined;
  title: string = "tuto-angular";

  ngOnInit() {
    console.table(this.itemList);
  }

  selectItem(itemId: string) {
    const item: Item | undefined = this.itemList.find(
      (item) => item.id == +itemId
    );

    if (item) {
      console.log(`Vous avez sélectionné ${item?.name}`);
    }

    this.itemSelected = item;
  }
}
