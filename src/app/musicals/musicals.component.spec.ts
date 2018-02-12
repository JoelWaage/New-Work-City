import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicalsComponent } from './musicals.component';

describe('MusicalsComponent', () => {
  let component: MusicalsComponent;
  let fixture: ComponentFixture<MusicalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
