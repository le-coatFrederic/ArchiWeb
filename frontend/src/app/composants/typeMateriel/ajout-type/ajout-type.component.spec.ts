import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutTypeComponent } from './ajout-type.component';

describe('AjoutTypeComponent', () => {
  let component: AjoutTypeComponent;
  let fixture: ComponentFixture<AjoutTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjoutTypeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AjoutTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
