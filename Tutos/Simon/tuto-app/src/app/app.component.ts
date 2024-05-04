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
  title: string = "tuto-angular";

  ngOnInit() {
    console.table(this.itemList);
    for (let item of this.itemList) {
      this.selectItem(item);
    }
  }

  selectItem(item: Item) {
    console.log(`Vous avez cliqué sur ${item.id} : ${item.name}`);
  }
}
