import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { HTTP_PROVIDERS } from '@angular/http';
import { AppComponent, environment } from './app/';
import { RouterConfig, provideRouter } from '@angular/router';

import { HelloComponent } from './app/hello/';
import { MaterialTest2Component } from './app/material-test/';


if (environment.production) {
  enableProdMode();
}

const AppRoutes: RouterConfig = [
  { path: '', component: HelloComponent },
  { path: 'md-test2', component: MaterialTest2Component }
];

bootstrap(AppComponent, [
  disableDeprecatedForms(),
  provideForms(),
  HTTP_PROVIDERS,
  provideRouter(AppRoutes)
]);

