import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCommandeModeleComponent } from './page-commande-modele.component';

describe('PageCommandeModeleComponent', () => {
  let component: PageCommandeModeleComponent;
  let fixture: ComponentFixture<PageCommandeModeleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageCommandeModeleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageCommandeModeleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
