import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Modele } from '../../../domain/entity/modele';
import { GetModelListService } from '../../services/get-model-list.service';

@Component({
  selector: 'app-modele-detail',
  standalone: true,
  imports: [],
  templateUrl: './modele-detail.component.html',
  styleUrl: './modele-detail.component.css',
})
export class ModeleDetailComponent {
  modele: Modele;
  constructor(
    getModeleList: GetModelListService,
    activatedRoute: ActivatedRoute
  ) {
    this.modele = getModeleList.getModeleById(
      activatedRoute.snapshot.params['id']
    );
  }
}
