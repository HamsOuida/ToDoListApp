import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ToDoListItem } from '../../models';
import { ToDoListService } from '../../services/to-do-list.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
})
export class ToDoListComponent implements OnInit {
  toDoList: ToDoListItem[] = [];
  searchText: string = '';
  openModal: boolean = false;
  model: any = {};
  toDoForm: FormGroup = new FormGroup({});
  updatedItem: ToDoListItem = {};
  submitted: boolean = false;
  constructor(
    private toDoListService: ToDoListService,
    private formBuilder: FormBuilder
  ) {}
  ngOnInit(): void {
    this.createToDoForm();
    this.toDoListService.getAllToDoList().subscribe((res: any) => {
      this.toDoList = res;
    });
  }
  createToDoForm(): void {
    this.toDoForm = this.formBuilder.group({
      title: new FormControl('', Validators.required),
      completed: new FormControl(false),
    });
  }
  openModalForm(): void {
    this.openModal = true;
  }
  deleteItem(item: ToDoListItem): void {
    this.toDoListService.removeToDoItem(item).subscribe((res: any) => {
      console.log('deleted===>>>', res);
      this.toDoList = this.toDoList.filter((d: any) => d.id !== item.id);
    });
  }
  updateItem(item: ToDoListItem): void {
    this.updatedItem = item;
    this.openModal = true;
    this.toDoForm.patchValue({
      title: item.title,
      completed: item.completed,
    });
  }
  updateToDoItem(item: ToDoListItem): void {
    this.toDoListService.UpdateToDoItem(item).subscribe((res: any) => {
      console.log('updated===>>>', res);
    });
  }
  addNewToDoItem(item: ToDoListItem) {
    this.toDoListService.addNewToDoItem(item).subscribe((res: any) => {
      console.log('added', res);
      this.toDoList.unshift(res);
    });
  }
  saveItem(): void {
    console.log(99, this.updatedItem);
    this.submitted = true;
    if (this.toDoForm.valid) {
      if (Object.keys(this.updatedItem).length > 0) {
        this.updatedItem.title = this.toDoForm.value.title;
        this.updatedItem.completed = this.toDoForm.value.completed;
        this.updateToDoItem(this.updatedItem);
      } else {
        let item: ToDoListItem = {
          completed: this.toDoForm.value.completed,
          id: 1,
          title: this.toDoForm.value.title,
          userId: 1,
        };
        this.addNewToDoItem(item);
      }
      this.openModal = false;
      this.resetForm();
    }
  }
  resetForm(): void {
    this.toDoForm.reset();
    this.toDoForm.setValidators(null);
    this.submitted = false;
  }
  closeModal(): void {
    this.openModal = false;
    this.resetForm();
  }
  checkItem(item: ToDoListItem): void {
    if (!item.completed) {
      item.completed = true;
      this.updateToDoItem(item);
    }
  }
  toggleSelection(): void {
    this.toDoForm.value.completed = !this.toDoForm.value.completed;
  }
  searchList(event: Event): void {
    this.searchText = (event.target as HTMLInputElement).value;
    this.filterToDoList();
  }
  filterToDoList(): ToDoListItem[] {
    if (this.searchText.length) {
      let filteredItems = this.toDoList.filter((ele: ToDoListItem) =>
        ele.title!.toLowerCase().includes(this.searchText.toLowerCase())
      );
      return filteredItems;
    }
    return this.toDoList;
  }
  trackByItem(index: number): number {
    return index;
  }
}
