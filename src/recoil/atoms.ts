import { atom } from 'recoil';
import { IToDoState } from '../db';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const toDoState = atom<IToDoState>({
  key: 'toDo',
  default: {
    'To Do': [
      { id: 0, text: 'Beautiful Dnd' },
      { id: 1, text: 'Animations' },
    ],
    'In progress': [{ id: 2, text: 'Styling' }],
    Done: [{ id: 3, text: 'Set up' }],
  },
  effects_UNSTABLE: [persistAtom],
});
