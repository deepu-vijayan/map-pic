import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { MapComponent } from './app/map/map.component';
import { provideRouter, Route, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <router-outlet></router-outlet>
  `,
})
export class App {}

export const routes: Route[] = [
  {
    path: '',
    component: MapComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

bootstrapApplication(App, {
  providers: [provideRouter(routes)],
});
