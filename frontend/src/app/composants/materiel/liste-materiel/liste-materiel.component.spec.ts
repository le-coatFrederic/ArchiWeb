import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeMaterielComponent } from './liste-materiel.component';

describe('ListeMaterielComponent', () => {
  let component: ListeMaterielComponent;
  let fixture: ComponentFixture<ListeMaterielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeMaterielComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListeMaterielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
