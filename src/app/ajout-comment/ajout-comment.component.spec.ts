import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutCommentComponent } from './ajout-comment.component';

describe('AjoutCommentComponent', () => {
  let component: AjoutCommentComponent;
  let fixture: ComponentFixture<AjoutCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
