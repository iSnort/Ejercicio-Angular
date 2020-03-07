import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookRegistryComponent } from './book-registry.component';

describe('BookRegistryComponent', () => {
  let component: BookRegistryComponent;
  let fixture: ComponentFixture<BookRegistryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookRegistryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookRegistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
