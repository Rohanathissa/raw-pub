import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRaskComponent } from './add-rask.component';

describe('AddRaskComponent', () => {
  let component: AddRaskComponent;
  let fixture: ComponentFixture<AddRaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
