import {Injectable} from '@angular/core';
import {Feature} from '../models/Feature';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  features: Feature[] = [
    {name: 'Nähe zur Uni', priorities: ['<= 1km', '<= 5km', '>5km'], value: 1},
    {name: 'Einkaufmöglichkeiten', priorities: ['L', 'M', 'H'], value: 1},
    {name: 'Nightlife', priorities: ['keine', 'wenige Bars', 'Altstadt'], value: 2},
    {name: 'ÖPNV', priorities: ['<= 50m', '<= 200m', '>200m'], value: 2},
    {name: 'Mietspiegel', priorities: ['niedrig', 'hoch'], value: 1}
  ];

  constructor() {
  }

  getFeatures(): Feature[] {
    return this.features;
  }
}
