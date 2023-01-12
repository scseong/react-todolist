import { Note } from './styles';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useSetRecoilState } from 'recoil';
import { toDoState } from '../recoil/atoms';

interface TaskProps {
  id: number;
  text: string;
  boardId: string;
}

const Task = ({ id, text, boardId }: TaskProps) => {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (e: React.MouseEvent<SVGSVGElement>) => {
    setToDos((allBoards) => {
      const boardCopy = [...allBoards[boardId]];
      const newBoard = boardCopy.filter((toDos) => toDos.id !== id);
      return { ...allBoards, [boardId]: [...newBoard] };
    });
  };
  return (
    <>
      <Note>
        <span>{text}</span>
        <FontAwesomeIcon icon={faTrashCan} onClick={onClick} />
      </Note>
    </>
  );
};

export default Task;
