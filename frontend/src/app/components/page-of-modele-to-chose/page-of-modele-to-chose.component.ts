import { Component } from '@angular/core';
import { MaterialGridComponent } from '../material-grid/material-grid.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-page-of-modele-to-chose',
  standalone: true,
  imports: [MaterialGridComponent, RouterLink],
  templateUrl: './page-of-modele-to-chose.component.html',
  styleUrl: './page-of-modele-to-chose.component.css',
})
export class PageOfModeleToChoseComponent {}
