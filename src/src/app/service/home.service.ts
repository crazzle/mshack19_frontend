import {Injectable} from '@angular/core';
import {Feature} from '../models/Feature';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  features: Feature[] = [
    {name: 'Nähe zur Uni', priorities: ['<= 1km', '<= 5km', '>5km'], value: 1, description: 'Lorem Ipsum'},
    {name: 'Einkaufmöglichkeiten', priorities: ['L', 'M', 'H'], value: 1, description: 'Lorem Ipsum'},
    {name: 'Nightlife', priorities: ['keine', 'wenige Bars', 'Altstadt'], value: 2, description: 'Lorem Ipsum'},
    {name: 'ÖPNV', priorities: ['<= 50m', '<= 200m', '>200m'], value: 2, description: 'Lorem Ipsum'},
    {name: 'Mietspiegel', priorities: ['niedrig', 'hoch'], value: 1, description: 'Lorem Ipsum'}
  ];

  constructor() {
  }

  getFeatures(): Feature[] {
    return this.features;
  }
}
