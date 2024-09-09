import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { provideToastr } from 'ngx-toastr';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { CONSTANTS } from './shared/constants/common.constants';
import { LoginGuard } from './shared/guards/login.guard';
import { AuthGuard } from './shared/guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { FeaturesComponent } from './shell/features.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: CONSTANTS.ROUTE_LOGIN,
    component: LoginComponent,
    canActivate: [LoginGuard]
  },
  {
    path: CONSTANTS.ROUTE_HOME,
    component: FeaturesComponent,
    canActivate: [AuthGuard],
    children: [
      { path: CONSTANTS.ROUTE_HOME, component: HomeComponent },
      { path: CONSTANTS.ROUTE_ABOUT, component: AboutComponent },
      { path: CONSTANTS.ROUTE_NOT_FOUND, component: PageNotFoundComponent }
    ]
  }
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideAnimations(),
    provideToastr({
      positionClass: 'toast-bottom-right',
      preventDuplicates: true
    })
  ]
};