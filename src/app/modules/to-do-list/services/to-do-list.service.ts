import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ToDoListService {
  url: string = '';
  constructor(private httpService: HttpClient) {
    this.url = 'https://jsonplaceholder.typicode.com';
  }

  getAllToDoList() {
    return this.httpService.get(`${this.url}/users/1/todos`);
  }

  addNewToDoItem(item: any) {
    return this.httpService.post(`${this.url}/users/1/todos`, item);
  }

  removeToDoItem(item: any) {
    return this.httpService.post(
      `${this.url}/users/1/todos?id=${item.id}`,
      item
    );
  }
  filterTOdOlIST(searchValue: any) {
    fetch(`${this.url}/users/1/todos?title=${searchValue}`)
      .then((response) => response.json())
      .then((json) => console.log(json));
  }

  UpdateToDoItem(item: any) {
    return this.httpService.post(
      `${this.url}/users/1/todos?id=${item.id}`,
      item
    );
  }
}
