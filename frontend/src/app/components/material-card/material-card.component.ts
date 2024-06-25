import { Component, Input, OnInit } from '@angular/core';
import { Materiel } from '../../../domain/entity/materiel';
import { NgClass, SlicePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-material-card',
  standalone: true,
  imports: [SlicePipe, NgClass],
  templateUrl: './material-card.component.html',
  styleUrl: './material-card.component.css',
})
export class MaterialCardComponent implements OnInit {
  @Input() materiel!: Materiel;

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log(this.materiel._id);
  }

  onDetailClick() {
    this.router.navigateByUrl('/api/materiels/search/' + this.materiel._id);
  }
}
