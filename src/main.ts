import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { HTTP_PROVIDERS } from '@angular/http';
import { AppComponent, environment } from './app/';
import { RouterConfig, provideRouter } from '@angular/router';

import { SitesComponent } from './app/sites/';
import { MaterialTest2Component } from './app/material-test/';


if (environment.production) {
  enableProdMode();
}

const AppRoutes: RouterConfig = [
  { path: 'md-test2', component: MaterialTest2Component },
  { path: ':horizontalSite/:verticalSite', component: SitesComponent },
  { path: '**', component: SitesComponent },
];

bootstrap(AppComponent, [
  disableDeprecatedForms(),
  provideForms(),
  HTTP_PROVIDERS,
  provideRouter(AppRoutes)
]);

