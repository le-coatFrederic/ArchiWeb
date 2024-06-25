import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { IMaterielCreate } from '../../../shared/interfaces/IMaterielCreate';
import { MaterielService } from '../../../services/materiel.service';

@Component({
  selector: 'app-manage-materiel',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './manage-materiel.component.html',
  styleUrl: './manage-materiel.component.css',
})
export class ManageMaterielComponent {
  materielToCreate: IMaterielCreate = {
    type: '',
    modele: '',
    image: '',
  };

  constructor(private matService: MaterielService) {}

  submitForm(form: NgForm) {
    if (form.valid) {
      this.matService.ajouterMateriel(this.materielToCreate);
      window.location.reload();
    }
  }
}
