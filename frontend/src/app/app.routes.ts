import { Routes } from '@angular/router';
import { MaterielDetailComponent } from './components/pages/modele-detail/modele-detail.component';
import { LandingPageComponent } from './components/pages/landing-page/landing-page.component';
import { MaterialGridComponent } from './components/pages/material-grid/material-grid.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { ManageMaterielComponent } from './components/pages/manage-materiel/manage-materiel.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'api/materiels', component: MaterialGridComponent },
  { path: 'api/materiels/search/:id', component: MaterielDetailComponent },
  { path: 'api/materiels/manage', component: ManageMaterielComponent },
  { path: 'my', component: LandingPageComponent },
  { path: 'api/utilisateurs/register', component: RegisterPageComponent },
  { path: 'api/utilisateurs/login', component: LoginPageComponent },
];
