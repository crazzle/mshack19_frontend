import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureSelectionItemComponent } from './feature-selection-item.component';

describe('FeatureSelectionItemComponent', () => {
  let component: FeatureSelectionItemComponent;
  let fixture: ComponentFixture<FeatureSelectionItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureSelectionItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureSelectionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
