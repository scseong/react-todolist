import { Note } from './styles';
import React, { memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useSetRecoilState } from 'recoil';
import { toDoState } from '../recoil/atoms';
import { Draggable } from 'react-beautiful-dnd';
import { TaskProps } from '../db';

const Task = ({ id, text, boardId, index }: TaskProps) => {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = () => {
    if (window.confirm('This will remove this task from board')) {
      setToDos((allBoards) => {
        const boardCopy = [...allBoards[boardId]];
        const updateBoard = boardCopy.filter((toDos) => toDos.id !== id);
        return { ...allBoards, [boardId]: [...updateBoard] };
      });
    }
  };

  return (
    <Draggable draggableId={id + ''} index={index}>
      {(provided, snapshot) => (
        <Note
          isDraggingOver={snapshot.isDragging}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <span>{text}</span>
          <FontAwesomeIcon icon={faTrashCan} onClick={onClick} />
        </Note>
      )}
    </Draggable>
  );
};

export default memo(Task);
