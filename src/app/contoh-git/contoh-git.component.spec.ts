import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContohGitComponent } from './contoh-git.component';

describe('ContohGitComponent', () => {
  let component: ContohGitComponent;
  let fixture: ComponentFixture<ContohGitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContohGitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContohGitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
