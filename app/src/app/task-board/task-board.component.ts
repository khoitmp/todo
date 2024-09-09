import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgsContenteditableModule } from '@ng-stack/contenteditable';
import { environment } from '../../environments/environment';
import { EditablePreventEventKeyDirective } from '../shared/directives/editable-prevent-eventkey.directive';
import { EditableMaxlengthDirective } from '../shared/directives/editable-maxlength.directive';
import { CONSTANTS } from '../shared/constants/common.constants';
import { HttpService } from '../shared/services/common.http';
import { AddUserTaskCommand, BaseSearchResponse, BaseCriteria, UserTask, UpdateUserTaskCommand, BaseResponse, SeriesCommand } from '../shared/models/common.models';

@Component({
  selector: 'app-task-board',
  standalone: true,
  imports: [CommonModule, FormsModule, NgsContenteditableModule, EditablePreventEventKeyDirective, EditableMaxlengthDirective],
  templateUrl: './task-board.component.html',
  styleUrl: './task-board.component.css'
})
export class TaskBoardComponent implements OnInit {
  private _httpService = inject(HttpService);
  private _debounceTimeout: any;
  private _tasks!: UserTask[];

  constants = CONSTANTS;
  searchText!: string;
  description!: string;
  selectedTask!: UserTask;

  get filteredTasks() {
    return this._tasks.filter(ut =>
      Object.values(ut).some(value =>
        value.toString().toLowerCase().includes(this.searchText.toLowerCase())
      )
    );
  }

  ngOnInit(): void {
    this.init();
    this.getTasks();
  }

  onSelectedTask(userTask: UserTask): void {
    this.selectedTask = userTask;
  }

  // Changes only be updated if the user stop typing in 2s
  onInputDescription(task: UserTask): void {
    if (!task.description)
      return;

    if (this._debounceTimeout) {
      clearTimeout(this._debounceTimeout);
    }

    this._debounceTimeout = setTimeout(() => {
      this.ensureLength(task);
      this.updateTask(task);
    }, 2000);
  }

  onAddTask(event: KeyboardEvent | null = null): void {
    if (!this.description) {
      return;
    }

    // Press Enter
    if (event && event?.key === CONSTANTS.EVENT_KEY_ENTER) {
      event.preventDefault();
      this.addTask(this.description);
    }
    // Press Button
    else if (!event) {
      this.addTask(this.description);
    }
  }

  onDeleteTask(): void {
    this.deleteTask(this.selectedTask.id);
  }

  updateTask(userTask: UserTask): void {
    let url = `${environment.apiUrl}/dev/userTasks/${userTask.id}`;
    let command = new UpdateUserTaskCommand(userTask.id, userTask.description, userTask.completed);

    this._httpService.put<UpdateUserTaskCommand, BaseResponse>(url, command).subscribe({
      next: response => {
        this.getTasks();
      },
      error: error => { }
    });
  }

  private getTasks() {
    let url = `${environment.apiUrl}/dev/userTasks/search`;

    this._httpService.post<BaseCriteria, BaseSearchResponse<UserTask>>(url, {
      pageIndex: 0,
      pageSize: CONSTANTS.LIMIT,
      sorts: CONSTANTS.SORT
    }
    ).subscribe({
      next: response => {
        this.handleGettingSuccess(response);
      },
      error: error => { }
    });
  }

  private addTask(description: string): void {
    let url = `${environment.apiUrl}/dev/userTasks`;
    let command = new AddUserTaskCommand(description, false);

    this._httpService.post<AddUserTaskCommand, BaseResponse>(url, command).subscribe({
      next: response => {
        this.getTasks();
        this.resetDescription();
      },
      error: error => { }
    });
  }

  private deleteTask(id: number): void {
    let url = `${environment.apiUrl}/dev/userTasks`;
    let command = new SeriesCommand([this.selectedTask.id]);

    this._httpService.delete<SeriesCommand, BaseResponse>(url, command).subscribe({
      next: response => {
        this.getTasks();
      },
      error: error => { }
    });
  }

  private handleGettingSuccess(responnse: BaseSearchResponse<UserTask>): void {
    this._tasks = responnse.data;
  }

  private resetDescription(): void {
    this.description = CONSTANTS.EMPTY;
  }

  // Minor issue, need to validate again
  private ensureLength(task: UserTask): void {
    if (task.description.length > CONSTANTS.MAX_LENGTH) {
      task.description = task.description.slice(0, -1);
    }
  }

  private init(): void {
    this._tasks = [];
    this.searchText = CONSTANTS.EMPTY;
    this.description = CONSTANTS.EMPTY;
  }
}