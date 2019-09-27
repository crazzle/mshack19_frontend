import {Component, OnInit} from '@angular/core';
import {HomeService} from '../service/home.service';
import {Feature} from '../models/Feature';

@Component({
  selector: 'app-feature-selection',
  templateUrl: './feature-selection.component.html',
  styleUrls: ['./feature-selection.component.css']
})
export class FeatureSelectionComponent implements OnInit {
  features: Feature[] = [];

  constructor(private homeService: HomeService) {
    this.features = homeService.getFeatures();
  }

  ngOnInit() {

  }
}
