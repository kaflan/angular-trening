import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McTaglistPopularComponent } from './mc-taglist-popular.component';

describe('McTaglistPopularComponent', () => {
  let component: McTaglistPopularComponent;
  let fixture: ComponentFixture<McTaglistPopularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ McTaglistPopularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(McTaglistPopularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
