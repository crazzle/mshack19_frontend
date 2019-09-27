import {Component, Input, OnInit} from '@angular/core';
import * as L from 'leaflet';
import 'leaflet.heat/dist/leaflet-heat.js';
import {DataPoint} from '../models/DataPoint';
import {HomeService} from '../service/home.service';

@Component({
  selector: 'app-heatmap',
  templateUrl: './heat-map.component.html',
  styleUrls: ['./heat-map.component.css']
})
export class HeatMapComponent implements OnInit {

  @Input() dataPoints: DataPoint[] = [];

  options = {
    layers: [
      L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18
      })
    ],
    zoom: 12,
    center: L.latLng(51.820500298442674, 7.382656727408407)
  };

  constructor() {
    this.dataPoints = HomeService.getDataPoints();
  }

  ngOnInit() { }

  onMapReady(map) {
    let addressPoints: any[][][] =
        this.dataPoints
            .filter(x => x[2] > 0.0) // todo  choose better weight.
            .map(x => {
              return [x[1], x[0], x[2]];
            });
    // @ts-ignore
    L.heatLayer(addressPoints, {gradient: {0.001: 'blue', 0.025: 'lime', 0.2: 'red'}}).addTo(map);
  }

}
