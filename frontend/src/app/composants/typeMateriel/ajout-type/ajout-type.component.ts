import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TypeMateriel } from '../../../modele/TypeMateriel';
import { TypeMaterielService } from '../../../services/type-materiel.service';

@Component({
    selector: 'app-ajout-type',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule
    ],
    templateUrl: './ajout-type.component.html',
    styleUrl: './ajout-type.component.css'
})
export class AjoutTypeComponent {
    type: TypeMateriel = {
        libelle: ''
    }

    constructor(private typeService: TypeMaterielService) { }

    ajouterTypeMateriel() {
        this.typeService.ajouterTypeMateriel(this.type).subscribe(
            response => {
                console.log('Salle ajoutée', response);
            },
            error => {
                console.error('Erreur lors de l\'ajout de la salle', error);
            }
        );
    }
}
