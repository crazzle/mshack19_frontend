import {Injectable} from '@angular/core';
import {Feature} from '../models/Feature';
import {Role} from '../models/Role';
import {DataPoint} from '../models/DataPoint';
import { addressPoints } from '../../assets/long_lat_mock';

@Injectable({
    providedIn: 'root'
})
export class HomeService {

    constructor() {
    }
    features: Feature[] = [
        {
            id: 'university',
            label: 'Nähe zur Uni',
            priorities: [{label: '<= 1km', value: 1}, {label: '<= 5km', value: 2}, {label: '>5km', value: 3}],
            description: 'Hier kannst du einstellen, wie nah an der Uni du wohnen möchtest.',
            value: 1
        },
        {
            id: 'shopping',
            label: 'Einkaufen',
            priorities: [{label: 'nah', value: 1}, {label: 'moderat', value: 2}, {label: 'weit entfernt', value: 3}],
            description: 'Wie wichtig sind dir Einkaufsmöglichkeiten in der Nähe?',
            value: 1
        },
        {
            id: 'nighlife',
            label: 'Nightlife',
            priorities: [{label: 'keine', value: 1}, {label: 'wenige Bars', value: 2}, {label: 'Altstadt', value: 3}],
            description: 'Gehst du gerne feiern? Die Münsteraner Altstadt hat ein reges Nachtleben!',
            value: 2
        },
        {
            id: 'transport',
            label: 'ÖPNV',
            priorities: [{label: '<= 50m', value: 1}, {label: '<= 200m', value: 2}, {label: '>200m', value: 3}],
            description: 'Fährst du gerne mit dem Bus? Wie nah sollte die näheste Bushaltestelle sein?',
            value: 1
        },
        {
            id: 'payment',
            label: 'Mietspiegel',
            priorities: [{label: 'niedrig', value: 1}, {label: 'hoch', value: 2}],
            description: 'Wie viel Budget steht dir für deine neue Wohnung zur Verfügung?',
            value: 1
        }
    ];

    static getDataPoints(): DataPoint [] {
        return addressPoints;
    }

    getFeatureList(): Feature[] {
        return this.features;
    }

    getFeatureListForRole(role: Role): Feature[] {
        return this.features;
    }

}
