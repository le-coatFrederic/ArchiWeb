import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Demande } from '../modele/Demande';

@Injectable({
    providedIn: 'root'
})
export class DemandeService {
    private apiUrl = 'http://localhost:5000/api/demandes';

    constructor(private http: HttpClient) { }

    ajouterDemande(demande: Demande): Observable<Demande> {
        return this.http.post<Demande>(this.apiUrl + "/ajouter", demande);
    }

    // Récupérer toutes les demandes
    getDemandes(): Observable<Demande[]> {
        return this.http.get<Demande[]>(this.apiUrl + "/all");
    }

    // updateDemande(demande: Demande): Observable<Demande> {
    //     return this.http.put<Demande>(`${this.apiUrl}/${demande.utilisateur?.login}/${materiel.}`, demande);
    // }

}
