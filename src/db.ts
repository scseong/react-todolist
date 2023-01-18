export interface IToDoState {
  [key: string]: IToDo[];
}

export interface IToDo {
  id: number;
  text: string;
}

export interface IForm {
  toDo: string;
}

interface toggleFunc {
  (): void;
}

export interface IAddTaskProps {
  boardId: string;
  toggleClickedBtn: toggleFunc;
}
