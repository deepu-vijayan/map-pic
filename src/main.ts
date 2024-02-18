
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MapModuleModule } from './app/map-module.module';

platformBrowserDynamic().bootstrapModule(MapModuleModule)
  .catch(err => console.error(err));
/*@Component({
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
    component: LayoutComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

bootstrapApplication(App, {
  providers: [provideRouter(routes)],
});*/
