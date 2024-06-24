import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeleDetailComponent } from './modele-detail.component';

describe('ModeleDetailComponent', () => {
  let component: ModeleDetailComponent;
  let fixture: ComponentFixture<ModeleDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModeleDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModeleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
