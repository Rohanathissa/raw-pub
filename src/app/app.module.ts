import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {ButtonComponent} from './button/button.component';
import {TasksComponent} from './tasks/tasks.component';
import {TasksItemComponent} from './tasks-item/tasks-item.component';
import {AddRaskComponent} from './add-rask/add-rask.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {ShopComponent} from './shop/shop.component';
import {FormsModule} from '@angular/forms';
import { ChartJsComponent } from './chart-js/chart-js.component';
import { TableComponent } from './table/table.component';
import { ExpandTableComponent } from './expand-table/expand-table.component';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TasksItemComponent,
    AddRaskComponent,
    ShopComponent,
    ChartJsComponent,
    TableComponent,
    ExpandTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    FormsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
