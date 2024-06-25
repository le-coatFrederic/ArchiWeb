import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilisateurService } from '../../../services/utilisateur.service';
import { Utilisateur } from '../../../modele/Utilisateur';
@Component({
    selector: 'app-liste-utilisateurs',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './liste-utilisateurs.component.html',
    styleUrl: './liste-utilisateurs.component.css'
})

export class ListeUtilisateursComponent {
    utilisateurs: Utilisateur[] = [];

    constructor(private utilisateurService: UtilisateurService) {}

    ngOnInit(): void {
        this.utilisateurService.getUtilisateurs().subscribe(
          (data: Utilisateur[]) => {
            this.utilisateurs = data;
          },
          error => {
            console.error('Erreur lors de la récupération des utilisateurs', error);
          }
        );
      }
}
