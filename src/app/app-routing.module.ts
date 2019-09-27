import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HeatMapComponent} from './heatmap/heat-map.component';
import {ResultListComponent} from './result-list/result-list.component';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {FeatureSelectionComponent} from './feature-selection/feature-selection.component';
import {ContainerComponent} from './container/container.component';

const routes: Routes = [
  {path: 'heatmap', component: HeatMapComponent},
  {path: 'results', component: ResultListComponent},
  {path: '', component: LandingPageComponent},
  {path: 'feature', component: FeatureSelectionComponent},
  {path: 'search', component: ContainerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
