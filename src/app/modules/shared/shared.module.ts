import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { TreeViewComponent } from './components/tree-view/tree-view/tree-view.component';
import { RouterModule } from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';
import { TreeViewItemComponent } from './components/tree-view/tree-view-item/tree-view-item.component';




@NgModule({
  declarations: [HeaderComponent, TreeViewComponent, TreeViewItemComponent],
  imports: [CommonModule, RouterModule, FlexLayoutModule],
  exports: [HeaderComponent, TreeViewComponent],
})
export class SharedModule {}
