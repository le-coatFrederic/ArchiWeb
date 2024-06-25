import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageMaterielComponent } from './manage-materiel.component';

describe('ManageMaterielComponent', () => {
  let component: ManageMaterielComponent;
  let fixture: ComponentFixture<ManageMaterielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageMaterielComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManageMaterielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
