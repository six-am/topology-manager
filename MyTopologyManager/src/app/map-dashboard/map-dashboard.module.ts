import { NgModule } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { MapDetailComponent } from './components/map-detail/map-detail.component';

@NgModule({
    declarations: [
        MapDetailComponent
    ],
    imports: [
        GoogleMapsModule
    ],
    exports: [
        MapDetailComponent
    ],
    providers: []
  })

export class MapDashboardModule{}