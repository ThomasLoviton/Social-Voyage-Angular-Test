import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierCommentComponent } from './modifier-comment.component';

describe('ModifierCommentComponent', () => {
  let component: ModifierCommentComponent;
  let fixture: ComponentFixture<ModifierCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
