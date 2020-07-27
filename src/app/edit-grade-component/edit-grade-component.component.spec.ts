import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EditGradeComponentComponent } from './edit-grade-component.component';

describe('EditGradeComponentComponent', () => {
  let component: EditGradeComponentComponent;
  let fixture: ComponentFixture<EditGradeComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditGradeComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGradeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
