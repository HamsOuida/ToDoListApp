import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components';
import { ToDoListComponent } from './components/to-do/to-do-list.component';
import { ToDoPageComponent } from './pages/to-do-page/to-do-page.component';
import { ToDoListRoutingModule } from './to-do-page-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ToDoListService } from './services/to-do-list.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ToDoPageComponent, HeaderComponent, ToDoListComponent],
  imports: [
    CommonModule,
    ToDoListRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [ToDoListService],
})
export class ToDoListModule {}
