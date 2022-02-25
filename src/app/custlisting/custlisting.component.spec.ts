import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustlistingComponent } from './custlisting.component';

describe('CustlistingComponent', () => {
  let component: CustlistingComponent;
  let fixture: ComponentFixture<CustlistingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustlistingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustlistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
