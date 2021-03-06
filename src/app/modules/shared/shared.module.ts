import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  SelectedItemComponent,
  TreeViewComponent,
  TreeViewItemComponent,
} from './components/tree-view';

@NgModule({
  declarations: [HeaderComponent, TreeViewComponent, TreeViewItemComponent, SelectedItemComponent],
  imports: [CommonModule, RouterModule, FlexLayoutModule,FormsModule],
  exports: [HeaderComponent, TreeViewComponent, TreeViewItemComponent,SelectedItemComponent],
})
export class SharedModule {}
