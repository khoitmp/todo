/*
  ! non-null
  ? optional
*/

// Base
export class BaseSearchResponse<T> {
  durationInMilisecond!: number;
  totalCount!: number;
  totalPage!: number;
  pageSize!: number;
  pageIndex!: number;
  data!: T[];
}

export class BaseResponse {
  isSuccess!: boolean;
  message!: string;
}

export class BaseCriteria {
  pageIndex!: number;
  pageSize!: number;
  sorts!: string;
}

// Commands
export class LoginUserCommand {
  userName!: string;

  constructor(userName: string) {
    this.userName = userName;
  }
}

export class AddUserTaskCommand {
  description!: string;
  completed!: boolean;

  constructor(description: string, completed: boolean) {
    this.description = description;
    this.completed = completed;
  }
}

export class UpdateUserTaskCommand {
  id!: number;
  description!: string;
  completed!: boolean;

  constructor(id: number, description: string, completed: boolean) {
    this.id = id;
    this.description = description;
    this.completed = completed;
  }
}

export class SeriesCommand {
  ids!: number[];

  constructor(ids: number[]) {
    this.ids = ids;
  }
}

// Models
export class User {
  id!: string;
  userName!: string;
  token!: string;
}

export class UserTask {
  id!: number;
  description!: string;
  completed!: boolean;
}