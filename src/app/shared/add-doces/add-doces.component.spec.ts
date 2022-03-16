import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDocesComponent } from './add-doces.component';

describe('AddDocesComponent', () => {
  let component: AddDocesComponent;
  let fixture: ComponentFixture<AddDocesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDocesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDocesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
