import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArraydemoComponent } from './arraydemo.component';

describe('ArraydemoComponent', () => {
  let component: ArraydemoComponent;
  let fixture: ComponentFixture<ArraydemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArraydemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArraydemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
