import { Component } from '@angular/core';
import { Statut } from '../../../modele/Statut';
import { Materiel } from '../../../modele/Materiel';
import { MaterielService } from '../../../services/materiel.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TypeMaterielService } from '../../../services/type-materiel.service';
import { TypeMateriel } from '../../../modele/TypeMateriel';
import { Salle } from '../../../modele/Salle';
import { SalleService } from '../../../services/salle.service';
import { UtilisateurService } from '../../../services/utilisateur.service';
import { Utilisateur } from '../../../modele/Utilisateur';


@Component({
    selector: 'app-ajout-materiel',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule
    ],
    templateUrl: './ajout-materiel.component.html',
    styleUrl: './ajout-materiel.component.css'
})

export class AjoutMaterielComponent {
    statuts: Statut[] = ['stocké', 'utilisé'];

    materiel: Materiel = {
        modele: '',
        statut: this.statuts[0],
        localisation: null,
        type: null,
        assignedTo: null
    };


    constructor(private materielService: MaterielService, private typeService: TypeMaterielService, private salleService: SalleService, private userService: UtilisateurService) { }
    ngOnInit(): void {
        this.getSalles();
        this.getTypes();
        this.getUsers();
    }

    ajouterMateriel() {
        this.materielService.ajouterMateriel(this.materiel).subscribe(
            response => {
                console.log('Materiel ajouté', response);
            },
            error => {
                console.error('Erreur lors de l\'ajout du materiel', error);
            }
        );
    }

    types: TypeMateriel[] = [];
    getTypes() {
        this.typeService.getTypeMateriels().subscribe(
            (data: TypeMateriel[]) => {
                this.types = data;
            },
            error => {
                console.error('Erreur lors de la récupération des types', error);
            }
        );
    }

    salles: Salle[] = [];
    getSalles() {
        this.salleService.getSalles().subscribe(
            (data: Salle[]) => {
                this.salles = data;
            },
            error => {
                console.error('Erreur lors de la récupération des salles', error);
            }
        );
    }

    users: Utilisateur[] = [];
    getUsers() {
        this.userService.getUtilisateurs().subscribe(
            (data: Utilisateur[]) => {
                this.users = data;
            },
            error => {
                console.error('Erreur lors de la récupération des utilisateur', error);
            }
        );
    }
}
