export interface IToDoState {
  [key: string]: ITodo[];
}

export interface ITodo {
  id: number;
  text: string;
}
