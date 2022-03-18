import { ListComponent } from './components/list/list.component';
import { CategoryRoutingModule } from './category-routing.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ListingComponent } from './containers/listing/listing.component';
// import { SharedModule } from '../shared/shared.module';
// import { TreeViewComponent } from '../shared/components/tree-view/tree-view/tree-view.component';


@NgModule({
  declarations: [
    ListingComponent,
    ListComponent,
  ],
  imports: [CommonModule, CategoryRoutingModule, FormsModule],
})
export class CategoryModule {}
