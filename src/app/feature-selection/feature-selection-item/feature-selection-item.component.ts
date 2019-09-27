import {Component, Input, OnInit} from '@angular/core';
import {Feature} from '../../models/Feature';

@Component({
  selector: 'app-feature-selection-item',
  templateUrl: './feature-selection-item.component.html',
  styleUrls: ['./feature-selection-item.component.css']
})
export class FeatureSelectionItemComponent implements OnInit {
  @Input() feature: Feature;

  constructor() {
  }

  ngOnInit() {
  }

}
