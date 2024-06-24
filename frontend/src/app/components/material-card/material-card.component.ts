import { Component, Input, OnInit } from '@angular/core';
import { Modele } from '../../../domain/entity/modele';
import { NgClass, SlicePipe } from '@angular/common';
import { OnClickModeleCardService } from '../../services/on-click-modele-card.service';
import { Router } from '@angular/router';
import { MODELES_BY_ID_URL } from '../../shared/constants/urls';

@Component({
  selector: 'app-material-card',
  standalone: true,
  imports: [SlicePipe, NgClass],
  templateUrl: './material-card.component.html',
  styleUrl: './material-card.component.css',
})
export class MaterialCardComponent implements OnInit {
  @Input() modele!: Modele;

  constructor(
    private cardClick: OnClickModeleCardService,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log(this.modele._id);
  }

  onDetailClick() {
    this.router.navigateByUrl('/api/modeles/' + this.modele._id);
  }
}
