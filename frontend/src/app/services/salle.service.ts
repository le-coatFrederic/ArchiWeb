import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Salle } from '../modele/Salle';

@Injectable({
    providedIn: 'root'
})
export class SalleService {

    private apiUrl = 'http://localhost:5000/api/salle';

    constructor(private http: HttpClient) { }

    ajouterSalle(salle: Salle): Observable<Salle> {
        return this.http.post<Salle>(this.apiUrl + "/ajouter", salle);
    }

    // Récupérer toutes les salles
    getSalles(): Observable<Salle[]> {
        return this.http.get<Salle[]>(this.apiUrl + "/all");
    }

    updateSalle(salle: Salle): Observable<Salle> {
        return this.http.put<Salle>(`${this.apiUrl}/${salle.numero}`, salle);
    }

    deleteSalle(salle: Salle): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${salle.numero}`);
    }
}
