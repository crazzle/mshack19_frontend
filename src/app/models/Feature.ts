import {Select} from './Select';

export interface Feature {
  id: string;
  label: string;
  value: number;
  priorities: Select[];
  description: string;
}
