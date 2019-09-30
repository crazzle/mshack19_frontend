import {Injectable} from '@angular/core';
import {Feature} from '../models/Feature';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class HomeService {

    features: Feature[] = [
        {
            id: 'near_university',
            label: 'Nähe zur Uni',
            priorities: [{label: '> 5km', value: 1}, {label: '<=5km', value: 2}, {label: '<1km', value: 3}],
            description: 'Hier kannst du einstellen, wie nah an der Uni du wohnen möchtest.',
            value: 1
        },
        {
            id: 'shops',
            label: 'Supermärkte',
            priorities: [{label: 'weit entfernt', value: 1}, {label: 'moderat', value: 2}, {label: 'nah', value: 3}],
            description: 'Wie wichtig sind dir Einkaufsmöglichkeiten in der Nähe?',
            value: 2
        },
        {
            id: 'nightlife',
            label: 'Nightlife',
            priorities: [{label: 'keine', value: 1}, {label: 'wenige Bars', value: 2}, {label: 'Altstadt', value: 3}],
            description: 'Gehst du gerne feiern? Die Münsteraner Altstadt hat ein reges Nachtleben!',
            value: 1
        },
        {
            id: 'public_transport',
            label: 'ÖPNV',
            priorities: [{label: '> 200m', value: 1}, {label: '<= 200m', value: 2}, {label: '<100m', value: 3}],
            description: 'Fährst du gerne mit dem Bus? Wie nah sollte die näheste Bushaltestelle sein?',
            value: 3
        },
        {
            id: 'avg_cost',
            label: 'Mietspiegel',
            priorities: [{label: 'hoch', value: 1}, {label: 'niedrig', value: 2}],
            description: 'Wie viel Budget steht dir für deine neue Wohnung zur Verfügung?',
            value: 2
        }
    ];

    constructor(private http: HttpClient) {
    }

    getFeatureList(): Feature[] {
        return this.features;
    }

    getFeatureListForRole(role: string): Feature[] {
        return this.features;
    }

    getMapData(selection: Map<string, number>): Observable<Object> {
        const httpOptions = {
            headers: new HttpHeaders({
                'accept': 'application/json'
            })
        };
        // Set student priorities for show case
        if (selection.size == 0) {
            selection.set('nightlife', 3);
            selection.set('public_transport', 2);
        }

        let queryString = "{";
        selection.forEach((k, v) => {
            queryString = queryString.concat("\"", v.toString(), "\"", ":", k.toString(), ",")
        });
        queryString = queryString.substr(0, queryString.length - 1).concat("}");
        const queryStringNoSpaces = queryString.replace(/ /g, '');

        return this.http.get('http://localhost:8000/search?query=' + queryStringNoSpaces, httpOptions);
    }
}
