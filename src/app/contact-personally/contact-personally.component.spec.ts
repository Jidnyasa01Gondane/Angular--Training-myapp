import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactPersonallyComponent } from './contact-personally.component';

describe('ContactPersonallyComponent', () => {
  let component: ContactPersonallyComponent;
  let fixture: ComponentFixture<ContactPersonallyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactPersonallyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactPersonallyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
