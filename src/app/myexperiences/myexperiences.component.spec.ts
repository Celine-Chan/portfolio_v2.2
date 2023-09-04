import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyexperiencesComponent } from './myexperiences.component';

describe('MyexperiencesComponent', () => {
  let component: MyexperiencesComponent;
  let fixture: ComponentFixture<MyexperiencesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyexperiencesComponent]
    });
    fixture = TestBed.createComponent(MyexperiencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
