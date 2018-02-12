import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicalDetailComponent } from './musical-detail.component';

describe('MusicalDetailComponent', () => {
  let component: MusicalDetailComponent;
  let fixture: ComponentFixture<MusicalDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicalDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicalDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
