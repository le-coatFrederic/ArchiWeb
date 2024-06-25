import { Component } from '@angular/core';
import { IUserRegister } from '../../../shared/interfaces/IUserRegister';
import { NgForm, FormsModule } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css',
})
export class RegisterPageComponent {
  user: IUserRegister = {
    email: '',
    password: '',
    nom: '',
    prenom: '',
    organisme: '',
  };

  constructor(private userService: UserService, private router: Router) {}

  submitForm(form: NgForm) {
    console.log(this.user);

    if (form.valid) {
      this.userService.register(this.user).subscribe((_) => {
        this.router.navigateByUrl('/');
      });
    }
  }
}
