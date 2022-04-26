import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McPaginationComponent } from './mc-pagination.component';

describe('McPaginationComponent', () => {
  let component: McPaginationComponent;
  let fixture: ComponentFixture<McPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ McPaginationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(McPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
