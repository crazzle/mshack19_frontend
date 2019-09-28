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
            priorities: [{label: '< 1km', value: 1}, {label: '< 5km', value: 2}, {label: '> 5km', value: 3}],
            description: 'Hier kannst du einstellen, wie nah an der Uni du wohnen möchtest.',
            value: 1
        },
        {
            id: 'shops',
            label: 'Supermärkte',
            priorities: [{label: 'nah', value: 1}, {label: 'moderat', value: 2}, {label: 'weit entfernt', value: 3}],
            description: 'Wie wichtig sind dir Einkaufsmöglichkeiten in der Nähe?',
            value: 1
        },
        {
            id: 'nightlife',
            label: 'Nightlife',
            priorities: [{label: 'keine', value: 1}, {label: 'wenige Bars', value: 2}, {label: 'Altstadt', value: 3}],
            description: 'Gehst du gerne feiern? Die Münsteraner Altstadt hat ein reges Nachtleben!',
            value: 2
        },
        {
            id: 'public_transport',
            label: 'ÖPNV',
            priorities: [{label: '< 50m', value: 1}, {label: '< 200m', value: 2}, {label: '>200m', value: 3}],
            description: 'Fährst du gerne mit dem Bus? Wie nah sollte die näheste Bushaltestelle sein?',
            value: 1
        },
        {
            id: 'avg_cost',
            label: 'Mietspiegel',
            priorities: [{label: 'niedrig', value: 1}, {label: 'hoch', value: 2}],
            description: 'Wie viel Budget steht dir für deine neue Wohnung zur Verfügung?',
            value: 1
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

        let queryString = "{";
        selection.forEach((k, v) => {
            queryString = queryString.concat("\"", v.toString(), "\"", ":", k.toString(), ",")
        });
        queryString = queryString.substr(0, queryString.length - 1).concat("}");

        // const queryString = prefix + middlePart + suffix;
        const queryStringNoSpaces = queryString.replace(/ /g, '');

        /*this.http.get('http://localhost:8000/search?query={"public_transport": 3, "nightlife": 4, "shops": 3, "near_university": 4, "avg_cost": 5}')
            .subscribe((data) => {
                console.log("DATA: " + data);
            });*/

        return this.http.get('http://localhost:8000/search?query=' + queryStringNoSpaces, httpOptions);
    }
}
