import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaoComponent } from './bao.component';

describe('BaoComponent', () => {
  let component: BaoComponent;
  let fixture: ComponentFixture<BaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
