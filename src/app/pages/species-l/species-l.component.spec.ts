import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeciesLComponent } from './species-l.component';

describe('SpeciesLComponent', () => {
  let component: SpeciesLComponent;
  let fixture: ComponentFixture<SpeciesLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpeciesLComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpeciesLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
