export interface IToDoState {
  [key: string]: IToDo[];
}

export interface IToDo {
  id: number;
  text: string;
}

export interface IFormProps {
  [boardId: string]: string;
}

export interface IForm {
  toDo: string;
}
