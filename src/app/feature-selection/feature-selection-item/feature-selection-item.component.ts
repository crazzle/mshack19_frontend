import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Feature} from '../../models/Feature';
import {Select} from "../../models/Select";

@Component({
    selector: 'app-feature-selection-item',
    templateUrl: './feature-selection-item.component.html',
    styleUrls: ['./feature-selection-item.component.css']
})
export class FeatureSelectionItemComponent implements OnInit {
    @Input() feature: Feature;
    @Output() messageEvent = new EventEmitter<Select>();

    constructor() {
    }

    ngOnInit() {
    }

    emit() {
        this.messageEvent.emit({label: this.feature.id, value: this.feature.value});
    }
}
