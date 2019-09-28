import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {ContainerComponent} from './container/container.component';

const routes: Routes = [
    {path: '', component: LandingPageComponent},
    {path: 'search', component: ContainerComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
