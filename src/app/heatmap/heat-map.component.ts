import {Component, Input, OnChanges, OnInit} from '@angular/core';
import * as L from 'leaflet';
import 'leaflet.heat/dist/leaflet-heat.js';
import {DataPoint} from '../models/DataPoint';

@Component({
    selector: 'app-heatmap',
    templateUrl: './heat-map.component.html',
    styleUrls: ['./heat-map.component.css']
})
export class HeatMapComponent implements OnInit, OnChanges {

    @Input() dataPoints: DataPoint[] = [];
    map;

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

    }

    ngOnInit() { }

    ngOnChanges() {
        this.onMapReady(this.map)
    }

    onMapReady(map) {
        this.map = map;
        let addressPoints: any[][][] =
            this.dataPoints
                .filter(x => x[2] > 0.0) // todo  choose better weight.
                .map(x => {
                    let coord = [x[1], x[0], Math.round(x[2] * 100) / 100];
                    return coord;
                });
        // @ts-ignore
        L.heatLayer(addressPoints, {
            radius: 50,
            maxZoom: 14,
            gradient: {
                0.7: 'blue',
                0.85: 'lime',
                1: 'red'}
        }).addTo(map);
    }

}
