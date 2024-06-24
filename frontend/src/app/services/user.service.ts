import { Injectable } from '@angular/core';
import { IUserRegister } from '../shared/interfaces/IUserRegister';
import { Observable, tap } from 'rxjs';
import { Utilisateur } from '../../domain/entity/utilisateur';
import { HttpClient } from '@angular/common/http';
import { UTILISATEURS_REGISTER_URL } from '../shared/constants/urls';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  register(userRegister: IUserRegister): Observable<Utilisateur> {
    return this.http.post<Utilisateur>(UTILISATEURS_REGISTER_URL, userRegister);
  }
}
