import { atom } from 'recoil';
import { IToDoState } from '../db';

export const toDoState = atom<IToDoState>({
	key: 'toDo',
	default: { 'To Do': [], 'In progress': [], Done: [] },
});
