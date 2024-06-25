import { Injectable } from '@angular/core';
import { IUserRegister } from '../shared/interfaces/IUserRegister';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {
  UTILISATEURS_LOGIN_URL,
  UTILISATEURS_REGISTER_URL,
} from '../shared/constants/urls';
import { IUserLogin } from '../shared/interfaces/IUserLogin';
import { Utilisateur } from '../../domain/entity/utilisateur';

const USER_KEY = 'user';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userSubject = new BehaviorSubject<Utilisateur>(
    this.getUserLocalStorage()
  );
  public userObservable: Observable<Utilisateur>;
  constructor(private http: HttpClient) {
    this.userObservable = this.userSubject.asObservable();
  }

  register(userRegister: IUserRegister): Observable<Utilisateur> {
    return this.http
      .post<Utilisateur>(UTILISATEURS_REGISTER_URL, userRegister)
      .pipe(
        tap({
          next: (user) => {
            this.setUserLocalStorage(user);
            this.userSubject.next(user);
          },
          error: (errorResponse) => {},
        })
      );
  }

  login(userLogin: IUserLogin): Observable<Utilisateur> {
    return this.http.post<Utilisateur>(UTILISATEURS_LOGIN_URL, userLogin).pipe(
      tap({
        next: (user) => {
          console.log(user);

          this.setUserLocalStorage(user);
          this.userSubject.next(user);
        },
        error: (errorResponse) => {},
      })
    );
  }

  logout() {
    this.userSubject.next(new Utilisateur());
    localStorage.removeItem(USER_KEY);
    window.location.reload();
  }

  private setUserLocalStorage(user: Utilisateur) {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
    console.log(this.getUserLocalStorage());
  }

  private getUserLocalStorage(): Utilisateur {
    const userJson = localStorage.getItem(USER_KEY);
    if (userJson) return JSON.parse(userJson) as Utilisateur;
    return new Utilisateur();
  }
}
