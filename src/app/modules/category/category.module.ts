import { CategoryRoutingModule } from './category-routing.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [],
  imports: [CommonModule, CategoryRoutingModule, FormsModule,SharedModule],
})
export class CategoryModule {}
