import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SehduleComponent } from './sehdule.component';

describe('SehduleComponent', () => {
  let component: SehduleComponent;
  let fixture: ComponentFixture<SehduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SehduleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SehduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
