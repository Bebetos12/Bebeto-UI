import { bootstrapApplication } from '@angular/platform-browser';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app/app.routes';
import { App } from './app/app';

bootstrapApplication(App, {
  providers: [
    provideZonelessChangeDetection(),
    provideRouter(routes, withComponentInputBinding())
  ]
}).catch((err) => console.error(err));
