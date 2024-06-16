import { Component } from '@angular/core';
import { DocumentationComponent } from '../documentation/documentation.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [DocumentationComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent {}
