import { RouterModule, Routes }   from '@angular/router';
import { SitesComponent } from './sites';

const MARKDOWN_ROUTES: Routes = [
  { path: ':horizontalSite/:verticalSite', component: SitesComponent },
  { path: '**', component: SitesComponent },
];

export const markdownRouting = RouterModule.forChild(MARKDOWN_ROUTES);
