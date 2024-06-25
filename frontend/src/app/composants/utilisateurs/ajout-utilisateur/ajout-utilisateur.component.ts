import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UtilisateurService } from '../../../services/utilisateur.service';
import { Utilisateur } from '../../../modele/Utilisateur';
import { Role } from '../../../modele/Role';

@Component({
    selector: 'app-ajout-utilisateur',
    standalone: true,
    imports: [
        CommonModule, 
        FormsModule, 
        HttpClientModule
    ],
    templateUrl: './ajout-utilisateur.component.html',
    styleUrl: './ajout-utilisateur.component.css'
})

export class AjoutUtilisateurComponent {
    utilisateur: Utilisateur = {
        //id:'',
        nom: '',
        prenom: '',
        login: '',
        password: '',
        role: 'utilisateur' as Role,  // Rôle par défaut
    };

    roles: Role[] = ['admin', 'utilisateur'];

    constructor(private utilisateurService: UtilisateurService) { }

    ajouterUtilisateur() {
        this.utilisateurService.ajouterUtilisateur(this.utilisateur).subscribe(
            response => {
                console.log('Utilisateur ajouté', response);
            },
            error => {
                console.error('Erreur lors de l\'ajout de l\'utilisateur', error);
            }
        );
    }
}
