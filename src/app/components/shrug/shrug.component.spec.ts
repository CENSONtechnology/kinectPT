import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShrugComponent } from './shrug.component';

describe('ShrugComponent', () => {
  let component: ShrugComponent;
  let fixture: ComponentFixture<ShrugComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShrugComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShrugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
