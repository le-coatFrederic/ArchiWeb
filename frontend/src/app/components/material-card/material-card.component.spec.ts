import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialCardComponent } from './material-card.component';
import { DecimalPipe } from '@angular/common';

describe('MaterialCardComponent', () => {
  let component: MaterialCardComponent;
  let fixture: ComponentFixture<MaterialCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialCardComponent, DecimalPipe],
    }).compileComponents();

    fixture = TestBed.createComponent(MaterialCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});