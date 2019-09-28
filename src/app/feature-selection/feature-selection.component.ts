import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Feature} from '../models/Feature';
import {Select} from '../models/Select';

@Component({
    selector: 'app-feature-selection',
    templateUrl: './feature-selection.component.html',
    styleUrls: ['./feature-selection.component.css']
})
export class FeatureSelectionComponent implements OnInit {
    @Input() role = [];
    @Input() features: Feature[] = [];
    @Output() messageEvent = new EventEmitter<Map<string, number>>();

    selection: Map<string, number>;

    constructor() {

    }

    ngOnInit() {
      this.selection = new Map<string, number>();
      this.features.forEach(f => this.selection.set(f.id, f.value));
    }

    receiveMessage($event) {
      let select: Select = $event;
      this.selection.set(select.label, select.value);
      this.emit();
    }

    emit() {
        this.messageEvent.emit(this.selection);
    }
}
