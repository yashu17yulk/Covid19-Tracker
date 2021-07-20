import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OthercountriesComponent } from './othercountries.component';

describe('OthercountriesComponent', () => {
  let component: OthercountriesComponent;
  let fixture: ComponentFixture<OthercountriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OthercountriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OthercountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
