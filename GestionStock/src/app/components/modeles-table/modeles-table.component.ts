import { Component, Input, OnInit } from '@angular/core';
import { Modele } from '../../../domain/entity/modele';

@Component({
  selector: 'app-modeles-table',
  standalone: true,
  imports: [],
  templateUrl: './modeles-table.component.html',
  styleUrl: './modeles-table.component.css',
})
export class ModelesTableComponent implements OnInit {
  @Input() data!: Modele[];

  ngOnInit(): void {}
}
