import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  NO_ERRORS_SCHEMA,
  OnInit,
} from "@angular/core";
import { CRUDItemMockClassService } from "../../services/cruditem-mock-class.service";
import { CardComponent } from "../card/card.component";
import { Item } from "../../shared/domain/entity/item";

@Component({
  selector: "app-card-grid",
  standalone: true,
  imports: [CardComponent],
  templateUrl: "card-grid.component.html",
  styleUrl: "card-grid.component.css",
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CardGridComponent implements OnInit {
  itemsCrud: CRUDItemMockClassService;
  itemCopy: Item = new Item();
  ngOnInit(): void {
    this.itemsCrud = new CRUDItemMockClassService();
    this.itemsCrud.createItem("Bouton", ["Acier", "Plastique"], new Date());
    this.itemsCrud.createItem("Clavier", ["Acier", "Plastique"], new Date());
    this.itemsCrud.createItem("Souris", ["Acier", "Plastique"], new Date());
    this.itemsCrud.createItem("Boite", ["Bois", "Carton"], new Date());
  }
}
