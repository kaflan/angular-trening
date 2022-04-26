import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McTaglistComponent } from './mc-tag-list.component';

describe('McTaglistComponent', () => {
  let component: McTaglistComponent;
  let fixture: ComponentFixture<McTaglistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ McTaglistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(McTaglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
