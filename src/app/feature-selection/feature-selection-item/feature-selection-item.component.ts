import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {Feature} from '../../models/Feature';
import {Select} from "../../models/Select";

@Component({
    selector: 'app-feature-selection-item',
    templateUrl: './feature-selection-item.component.html',
    styleUrls: ['./feature-selection-item.component.css']
})
export class FeatureSelectionItemComponent {
    @Input() feature: Feature;
    @Output() messageEvent = new EventEmitter<Select>();

    constructor() {
    }

    emit() {
        this.messageEvent.emit({label: this.feature.id, value: this.feature.value});
    }
}
