import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {ButtonComponent} from './button/button.component';
import {TasksComponent} from './tasks/tasks.component';
import {TasksItemComponent} from './tasks-item/tasks-item.component';
import {AddTaskComponent} from './add-task/add-task.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule} from '@angular/forms';
import { ChartJsComponent } from './chart-js/chart-js.component';
import { TableComponent } from './table/table.component';
import { ExpandTableComponent } from './expand-table/expand-table.component';
import {MatTableModule} from '@angular/material/table';
import { LoginComponent } from './login/login.component';
import {MatTabsModule} from "@angular/material/tabs";
import { MainMenubarComponent } from './main-menubar/main-menubar.component';
// import {RouterModule, Routes} from '@angular/router';

// const appRoutes: Routes = [
//   // {path: 'login', component: LoginComponent},
//   // {path: 'task', component: TasksComponent}
// ];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TasksItemComponent,
    AddTaskComponent,
    ChartJsComponent,
    TableComponent,
    ExpandTableComponent,
    LoginComponent,
    MainMenubarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    FormsModule,
    MatTableModule,
    MatTabsModule,
    // RouterModule.forRoot(appRoutes, {enableTracing: true}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
