import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SalleService } from '../../../services/salle.service';
import { Salle } from '../../../modele/Salle';

@Component({
    selector: 'app-ajout-salle',
    standalone: true,
    imports: [        
        CommonModule, 
        FormsModule, 
        HttpClientModule
    ],
    templateUrl: './ajout-salle.component.html',
    styleUrl: './ajout-salle.component.css'
})
export class AjoutSalleComponent {
    salle: Salle = {
        numero:'',
        etage: '',
        adresse: '',
        adresseComplement: '',
        codePostal: '',
        ville: ''
    };


    constructor(private salleService: SalleService) { }

    ajouterSalle() {
        this.salleService.ajouterSalle(this.salle).subscribe(
            response => {
                console.log('Salle ajoutée', response);
            },
            error => {
                console.error('Erreur lors de l\'ajout de la salle', error);
            }
        );
    }
}
