import { Component } from '@angular/core';
import { Router, RouterLinkActive, RouterModule } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { FormsModule, NgForm } from '@angular/forms';
import { IUserRegister } from '../../../shared/interfaces/IUserRegister';
import { IUserLogin } from '../../../shared/interfaces/IUserLogin';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [RouterModule, RouterLinkActive, FormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent {
  user: IUserLogin = {
    email: '',
    password: '',
  };
  constructor(private userService: UserService, private router: Router) {}

  submitForm(form: NgForm) {
    console.log(this.user);

    if (form.valid) {
      this.userService.login(this.user).subscribe((_) => {
        this.router.navigateByUrl('/');
      });
    }
  }
}
