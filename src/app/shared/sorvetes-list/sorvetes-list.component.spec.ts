import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SorvetesListComponent } from './sorvetes-list.component';

describe('SorvetesListComponent', () => {
  let component: SorvetesListComponent;
  let fixture: ComponentFixture<SorvetesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SorvetesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SorvetesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
