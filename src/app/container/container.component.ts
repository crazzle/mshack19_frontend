import {Component, OnInit} from '@angular/core';
import {HomeService} from '../service/home.service';
import {Feature} from '../models/Feature';
import {Select} from '../models/Select';
import {Role} from '../models/Role';

@Component({
    selector: 'app-container',
    templateUrl: './container.component.html',
    styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
    roleNumber = 0;
    features: Feature[] = [];
    selection: Select[] = [];
    data = [];

    constructor(private service: HomeService) {
        this.getHeapMapData();
        this.getFeatureList();
    }

    ngOnInit() {
    }

    fetchSelection($event) {
        this.selection = $event;
        this.getHeapMapData();
    }

    getHeapMapData() {
        this.data = this.service.getMapData(this.selection);

    }

    getFeatureList() {
        this.features = this.service.getFeatureListForRole(Role[this.roleNumber]);
    }
}
