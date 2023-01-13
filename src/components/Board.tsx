import React, { useState, memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import * as S from './styles';
import Task from './Task';
import AddTask from './AddTask';
import { IToDo } from '../db';
import { Droppable } from 'react-beautiful-dnd';

interface BoardProps {
  boardId: string;
  toDos: IToDo[];
}

const Board = ({ boardId, toDos }: BoardProps) => {
  const [isClicked, setIsClicked] = useState(false);
  const onClickPlusBtn = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <S.Board>
      <S.BoardHeader>
        <S.ItemCount>{toDos.length}</S.ItemCount>
        <S.Title>{boardId}</S.Title>
        <S.HeaderBtn>
          <FontAwesomeIcon icon={faPlus} onClick={onClickPlusBtn} />
        </S.HeaderBtn>
        <S.HeaderBtn>
          <FontAwesomeIcon icon={faEllipsis} />
        </S.HeaderBtn>
      </S.BoardHeader>
      {isClicked && (
        <S.FormContent>
          <AddTask boardId={boardId} />
        </S.FormContent>
      )}
      <Droppable droppableId={boardId}>
        {(provided, snapshot) => (
          <S.BoardContent
            {...provided.droppableProps}
            ref={provided.innerRef}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {toDos.map((toDo, index) => (
              <Task
                key={toDo.id}
                boardId={boardId}
                id={toDo.id}
                text={toDo.text}
                index={index}
              />
            ))}
            {provided.placeholder}
          </S.BoardContent>
        )}
      </Droppable>
    </S.Board>
  );
};

export default memo(Board);
