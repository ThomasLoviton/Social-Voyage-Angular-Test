import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierPostComponent } from './modifier-post.component';

describe('ModifierPostComponent', () => {
  let component: ModifierPostComponent;
  let fixture: ComponentFixture<ModifierPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
