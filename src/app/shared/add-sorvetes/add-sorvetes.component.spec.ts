import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSorvetesComponent } from './add-sorvetes.component';

describe('AddSorvetesComponent', () => {
  let component: AddSorvetesComponent;
  let fixture: ComponentFixture<AddSorvetesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSorvetesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSorvetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
