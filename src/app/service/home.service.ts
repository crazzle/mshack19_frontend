import {Injectable} from '@angular/core';
import {Feature} from '../models/Feature';
import {Role} from '../models/Role';

@Injectable({
    providedIn: 'root'
})
export class HomeService {
    features: Feature[] = [
        {
            id: 'university',
            label: 'Nähe zur Uni',
            priorities: [{label: '<= 1km', value: 1}, {label: '<= 5km', value: 2}, {label: '>5km', value: 3}],
            description: 'Lorem Ipsum',
            value: 1
        },
        {
            id: 'shopping',
            label: 'Einkaufmöglichkeiten',
            priorities: [{label: 'L', value: 1}, {label: 'M', value: 2}, {label: 'H', value: 3}],
            description: 'Lorem Ipsum',
            value: 1
        },
        {
            id: 'nighlife',
            label: 'Nightlife',
            priorities: [{label: 'keine', value: 1}, {label: 'wenige Bars', value: 2}, {label: 'Altstadt', value: 3}],
            description: 'Lorem Ipsum',
            value: 2
        },
        {
            id: 'transport',
            label: 'ÖPNV',
            priorities: [{label: '<= 50m', value: 1}, {label: '<= 200m', value: 2}, {label: '>200m', value: 3}],
            description: 'Lorem Ipsum',
            value: 1
        },
        {
            id: 'payment',
            label: 'Mietspiegel',
            priorities: [{label: 'niedrig', value: 1}, {label: 'hoch', value: 2}],
            description: 'Lorem Ipsum',
            value: 1
        }
    ];

    constructor() {
    }

    getFeatureList(): Feature[] {
        return this.features;
    }

    getFeatureListForRole(role: Role): Feature[] {
        return this.features;
    }

}
