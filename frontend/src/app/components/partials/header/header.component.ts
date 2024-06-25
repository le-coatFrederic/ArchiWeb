import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { Utilisateur } from '../../../../domain/entity/utilisateur';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  user!: Utilisateur;
  constructor(private userService: UserService) {
    userService.userObservable.subscribe((userNew) => {
      this.user = userNew;
    });
  }

  logout() {
    this.userService.logout();
  }

  get isauth() {
    return this.user.token;
  }

  get roleAdmin() {
    return this.user.role === 'administrateur';
  }
}
