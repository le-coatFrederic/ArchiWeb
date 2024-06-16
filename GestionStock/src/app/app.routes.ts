import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { PageOfModeleToChoseComponent } from './components/page-of-modele-to-chose/page-of-modele-to-chose.component';
import { ModeleDetailComponent } from './components/modele-detail/modele-detail.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'modeles', component: PageOfModeleToChoseComponent },
  { path: 'valider', component: LandingPageComponent },
  { path: 'my', component: LandingPageComponent },
  { path: 'modele/detail/:id', component: ModeleDetailComponent },
];
