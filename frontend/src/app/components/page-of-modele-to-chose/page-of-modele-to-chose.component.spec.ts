import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageOfModeleToChoseComponent } from './page-of-modele-to-chose.component';

describe('PageOfModeleToChoseComponent', () => {
  let component: PageOfModeleToChoseComponent;
  let fixture: ComponentFixture<PageOfModeleToChoseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageOfModeleToChoseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageOfModeleToChoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
