import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet.heat/dist/leaflet-heat.js';
import { addressPoints } from '../../assets/realworld.10000';

@Component({
  selector: 'app-heatmap',
  templateUrl: './heat-map.component.html',
  styleUrls: ['./heat-map.component.css']
})
export class HeatMapComponent implements OnInit {

  options = {
    layers: [
      L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18
      })
    ],
    zoom: 12,
    center: L.latLng(-37.87, 175.475)
  };

  constructor() { }

  ngOnInit() { }

  onMapReady(map) {
    // tslint:disable-next-line:only-arrow-functions
    let newAddressPoints = addressPoints.map(function(p) { return [p[0], p[1]]; });
    // @ts-ignore
    const heat = L.heatLayer(newAddressPoints).addTo(map);
  }

}
