import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DefaultComponent } from './default.component';
import { DashboardComponent } from '../../dashboard/dashboard.component';

import { SharedModule } from '../../shared/shared.module';

import { FlexLayoutModule } from '@angular/flex-layout';




@NgModule({
  declarations: [DefaultComponent, DashboardComponent],
  imports: [CommonModule, RouterModule, FlexLayoutModule, SharedModule],
})
export class DefaultModule {}
