import {Todo,  TodoStatus} from "src/models/todo";

export const SET_TODO = 'SET_TODO';
export const CREATE_TODO = 'CREATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const DELETE_ALL_TODOS = 'DELETE_ALL_TODOS';
export const TOGGLE_ALL_TODOS = 'TOGGLE_ALL_TODOS';
export const UPDATE_TODO = 'UPDATE_TODO';


export interface SetTodoAction {
  type: typeof SET_TODO,
  payload: Array<Todo>
}

export function setTodos(todos: Array<Todo>): SetTodoAction {
  return {
    type: SET_TODO,
    payload: todos
  }
}

///////////
export interface CreateTodoAction {
  type: typeof CREATE_TODO,
  payload: Todo
}

export function createTodo(newTodo: Todo): CreateTodoAction {
  return {
    type: CREATE_TODO,
    payload: newTodo
  }
}

//////////////
export interface UpdateTodoAction {
  type: typeof UPDATE_TODO,
  payload: {
    todo: Todo
  }
}

export function updateTodo(todo: Todo): UpdateTodoAction {
  return {
    type: UPDATE_TODO,
    payload: {
      todo
    }
  }
}

//////////////
export interface DeleteTodoAction {
  type: typeof DELETE_TODO,
  payload: string
}

export function deleteTodo(todoId: string): DeleteTodoAction {
  return {
    type: DELETE_TODO,
    payload: todoId
  }
}

//////////////
export interface DeleteAllTodosAction {
  type: typeof DELETE_ALL_TODOS,
}

export function deleteAllTodos(): DeleteAllTodosAction {
  return {
    type: DELETE_ALL_TODOS,
  }
}

///////////
export interface ToggleAllTodosAction {
  type: typeof TOGGLE_ALL_TODOS,
  payload: TodoStatus
}

export function toggleAllTodos(checked: TodoStatus): ToggleAllTodosAction {
  return {
    type: TOGGLE_ALL_TODOS,
    payload: checked
  }
}

export type AppActions =
  SetTodoAction |
  CreateTodoAction |
  UpdateTodoAction |
  DeleteTodoAction |
  DeleteAllTodosAction |
  ToggleAllTodosAction;