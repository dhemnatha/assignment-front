import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';

import { authInterceptorProviders } from '../../_helpers/auth.interceptor';
import { AuthGuard } from '../auth/auth.guard';
import { headerInterceptorProviders } from '../../_helpers/header.interceptor';


@NgModule({
  declarations: [],
  imports: [CommonModule, FlexLayoutModule, HttpClientModule, RouterModule],
  providers: [authInterceptorProviders, AuthGuard, headerInterceptorProviders],
})
export class CoreModule {}
