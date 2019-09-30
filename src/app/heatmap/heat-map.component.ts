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
    heatLayer;
    addressPoints: any[][][];

    constructor() {

    }

    ngOnInit() { 
        this.map = L.map('map').setView([51.962268, 7.625148], 12);
        L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 18
        }).addTo(this.map);
    }

    ngOnChanges() {
        this.addressPoints = this.dataPoints
            .filter(x => x[2] > 0.05)
            .map(x => {
                let coord = [x[1], x[0], Math.round(x[2] * 100) / 100];
                return coord;
            });
        this.updateHeatLayer();
    }

    updateHeatLayer() {
        if (this.heatLayer != null) {
            this.heatLayer.removeFrom(this.map);
        }
        if (this.map != null) {
            // @ts-ignore
            this.heatLayer = L.heatLayer(this.addressPoints, {
                radius: 23,
                maxZoom: 14,
                gradient: {
                    0.5: 'blue',
                    0.85: 'lime',
                    1: 'red'}
                }).addTo(this.map);
        }
    }

}
