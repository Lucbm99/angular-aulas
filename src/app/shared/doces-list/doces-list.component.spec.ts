import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocesListComponent } from './doces-list.component';

describe('DocesListComponent', () => {
  let component: DocesListComponent;
  let fixture: ComponentFixture<DocesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
