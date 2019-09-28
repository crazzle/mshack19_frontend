import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {FeatureSelectionComponent} from './feature-selection/feature-selection.component';
import {FeatureSelectionItemComponent} from './feature-selection/feature-selection-item/feature-selection-item.component';
import {ResultListComponent} from './result-list/result-list.component';
import {AppRoutingModule} from './app-routing.module';
import {MatButtonModule, MatCardModule, MatListModule, MatSliderModule} from '@angular/material';
import {SelectionPipe} from './helper/selection.pipe';
import {ContainerComponent} from './container/container.component';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';
import {HeatMapComponent} from './heatmap/heat-map.component';
import {MatToolbarModule, MatIconModule} from '@angular/material';

@NgModule({
    declarations: [
        AppComponent,
        LandingPageComponent,
        FeatureSelectionComponent,
        FeatureSelectionItemComponent,
        ResultListComponent,
        SelectionPipe,
        ContainerComponent,
        HeatMapComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        LeafletModule.forRoot(),
        MatCardModule,
        MatButtonModule,
        MatListModule,
        MatSliderModule,
        MatToolbarModule,
        MatIconModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
