import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EasyHttpComponent } from './easy-http.component';

describe('EasyHttpComponent', () => {
  let component: EasyHttpComponent;
  let fixture: ComponentFixture<EasyHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EasyHttpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EasyHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
