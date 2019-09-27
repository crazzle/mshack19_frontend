import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HeatmapComponent} from './heatmap/heatmap.component';
import {ResultListComponent} from './result-list/result-list.component';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {FeatureSelectionComponent} from './feature-selection/feature-selection.component';

const routes: Routes = [
  { path: 'heatmap', component: HeatmapComponent },
  { path: 'results', component: ResultListComponent },
  { path: '/', component: LandingPageComponent },
  { path: 'feature', component: FeatureSelectionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
