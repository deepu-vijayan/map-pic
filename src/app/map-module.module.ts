import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { MapComponent } from './map/map.component';
import { FilterComponent } from './filter/filter.component'

@NgModule({
  declarations: [
    LayoutComponent,
    MapComponent,
    FilterComponent
  ],
  imports: [
    CommonModule
  ],
  bootstrap: [LayoutComponent]
})
export class MapModuleModule { }
