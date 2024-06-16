import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelesTableComponent } from './modeles-table.component';

describe('ModelesTableComponent', () => {
  let component: ModelesTableComponent;
  let fixture: ComponentFixture<ModelesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelesTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModelesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
