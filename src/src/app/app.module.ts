import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FeatureSelectionComponent } from './feature-selection/feature-selection.component';
import { FeatureSelectionItemComponent } from './feature-selection/feature-selection-item/feature-selection-item.component';
import { HeatmapComponent } from './heatmap/heatmap.component';
import { ResultListComponent } from './result-list/result-list.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    FeatureSelectionComponent,
    FeatureSelectionItemComponent,
    HeatmapComponent,
    ResultListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
