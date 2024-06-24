import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { PageOfModeleToChoseComponent } from './components/page-of-modele-to-chose/page-of-modele-to-chose.component';
import { ModeleDetailComponent } from './components/modele-detail/modele-detail.component';
import { PageCommandeModeleComponent } from './components/page-commande-modele/page-commande-modele.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'api/modeles', component: PageOfModeleToChoseComponent },
  { path: 'api/modeles/:id', component: ModeleDetailComponent },
  { path: 'valider', component: PageCommandeModeleComponent },
  { path: 'my', component: LandingPageComponent },
  { path: 'api/utilisateurs/register', component: RegisterPageComponent },
];
