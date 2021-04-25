import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarinfoComponent } from './editarinfo.component';

describe('EditarinfoComponent', () => {
  let component: EditarinfoComponent;
  let fixture: ComponentFixture<EditarinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
