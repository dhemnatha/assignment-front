import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { CoreModule } from './modules/core/core.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DefaultModule } from './modules/layouts/default/default.module';

import { SigninComponent } from './modules/login/signin/signin.component';

import { CategoryModule } from './modules/category/category.module';
import { AuthModule } from './modules/auth/auth.module';

@NgModule({
  declarations: [AppComponent, SigninComponent],
  imports: [
    AuthModule,
    AppRoutingModule,
    BrowserModule,
    CoreModule,
    CategoryModule,
    DefaultModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
