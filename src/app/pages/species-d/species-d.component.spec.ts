import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeciesDComponent } from './species-d.component';

describe('SpeciesDComponent', () => {
  let component: SpeciesDComponent;
  let fixture: ComponentFixture<SpeciesDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpeciesDComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpeciesDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
