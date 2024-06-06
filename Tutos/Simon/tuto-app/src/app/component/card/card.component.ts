import { Component, Input, OnInit, input } from "@angular/core";
import { Item } from "../../shared/domain/entity/item";
import { CardGridComponent } from "../card-grid/card-grid.component";

@Component({
  selector: "app-card",
  standalone: true,
  imports: [],
  templateUrl: "card.component.html",
  styleUrl: "card.component.css",
  inputs: ["item"],
})
export class CardComponent implements OnInit {
  ngOnInit(): void {
    console.log(this.item);
  }
  item: Item;
}
