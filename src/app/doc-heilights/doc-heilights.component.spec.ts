import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocHeilightsComponent } from './doc-heilights.component';

describe('DocHeilightsComponent', () => {
  let component: DocHeilightsComponent;
  let fixture: ComponentFixture<DocHeilightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocHeilightsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocHeilightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
