// Atoms
export interface IToDoState {
  [key: string]: IToDo[];
}

export interface IToDo {
  id: number;
  text: string;
}

// Board
export interface BoardProps {
  boardId: string;
  toDos: IToDo[];
}

// AddTask
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

// Task
export interface TaskProps {
  id: number;
  text: string;
  boardId: string;
  index: number;
}
