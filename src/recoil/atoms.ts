import { atom } from 'recoil';
import { IToDoState } from '../db';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const toDoState = atom<IToDoState>({
  key: 'toDo',
  default: {
    'To Do': [],
    'In progress': [],
    Done: [],
  },
  effects_UNSTABLE: [persistAtom],
});
