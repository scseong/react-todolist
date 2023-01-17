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

export interface IAddTaskProps {
  boardId: string;
  setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
}
