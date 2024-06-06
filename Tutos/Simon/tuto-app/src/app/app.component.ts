import { Component, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { Item } from "./shared/domain/entity/item";
import { ITEM } from "./mock-item-list";
import { CRUDItemUse } from "./shared/domain/usecase/CRUDItemUse";
import { CRUDItemMockClassService } from "./services/cruditem-mock-class.service";
import { CardGridComponent } from "./component/card-grid/card-grid.component";
import { CardComponent } from "./component/card/card.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, CardComponent, CardGridComponent],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {}
