import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalylistCardComponent } from './palylist-card.component';

describe('PalylistCardComponent', () => {
  let component: PalylistCardComponent;
  let fixture: ComponentFixture<PalylistCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PalylistCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PalylistCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
