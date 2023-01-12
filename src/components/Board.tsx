import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import * as S from './styles';
import Task from './Task';
import AddTask from './AddTask';
import { IToDo } from '../db';

interface BoardProps {
  boardId: string;
  toDos: IToDo[];
}

const Board = ({ boardId, toDos }: BoardProps) => {
  const [isClicked, setIsClicked] = useState(false);
  const onClickPlusBtn = (e: React.MouseEvent<SVGSVGElement>) => {
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
      <S.BoardContent>
        {toDos.map((toDo: IToDo) => (
          <Task key={toDo.id} boardId={boardId} id={toDo.id} text={toDo.text} />
        ))}
      </S.BoardContent>
    </S.Board>
  );
};

export default Board;
