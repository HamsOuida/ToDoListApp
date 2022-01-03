import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ToDoListComponent } from './to-do-list.component';

describe('ToDoListComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ToDoListComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ToDoListComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
