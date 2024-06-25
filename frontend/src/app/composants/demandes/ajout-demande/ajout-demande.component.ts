import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Utilisateur } from '../../../modele/Utilisateur';
import { UtilisateurService } from '../../../services/utilisateur.service';
import { SalleService } from '../../../services/salle.service';
import { DemandeService } from '../../../services/demande.service';
import { Demande } from '../../../modele/Demande';
import { Statut } from '../../../modele/Statut';
import { Salle } from '../../../modele/Salle';
import { Materiel } from '../../../modele/Materiel';
import { MaterielService } from '../../../services/materiel.service';

@Component({
    selector: 'app-ajout-demande',
    standalone: true,
    imports: [        
        CommonModule,
        FormsModule,
        HttpClientModule
    ],
    templateUrl: './ajout-demande.component.html',
    styleUrl: './ajout-demande.component.css'
})
export class AjoutDemandeComponent {
    statuts: Statut[] = ['validée', 'en attente', 'refusée'];

    demande: Demande = {
        statut: this.statuts[1],
        utilisateur: null,
        materiel: null,
        lieu: null,
    };
    
    constructor(private demandeService: DemandeService, 
        private salleService: SalleService,
        private userService: UtilisateurService, 
        private materielService: MaterielService
    ) { }
    
    ngOnInit(): void {
        this.getSalles();
        this.getUsers();
        this.getMaterielsStockes();
    }

    ajouterDemande() {
        this.demandeService.ajouterDemande(this.demande).subscribe(
            response => {
                console.log('Demande envoyée', response);
            },
            error => {
                console.error('Erreur lors de l\'envoi de la demande', error);
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
                console.error('Erreur lors de la récupération des utilisateurs', error);
            }
        );
    }

    materiels: Materiel[] = [];
    getMaterielsStockes() {
        this.materielService.getMaterielsStocke().subscribe(
            (data: Materiel[]) => {
                this.materiels = data;
            },
            error => {
                console.error('Erreur lors de la récupération des materiels', error);
            }
        );
    }
}
