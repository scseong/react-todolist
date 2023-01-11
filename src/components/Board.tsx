import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import * as S from './styles';

const Board = ({ id, toDo }: any) => {
  return (
    <S.Board>
      <S.BoardHeader>
        <S.ItemCount>2</S.ItemCount>
        <S.Title>{id}</S.Title>
        <S.HeaderBtn>
          <FontAwesomeIcon icon={faPlus} />
        </S.HeaderBtn>
        <S.HeaderBtn>
          <FontAwesomeIcon icon={faEllipsis} />
        </S.HeaderBtn>
      </S.BoardHeader>
      <S.BoardContent>
        <S.Card>{toDo}</S.Card>
        <S.Card>{toDo}</S.Card>
        <S.Card>{toDo}</S.Card>
      </S.BoardContent>
    </S.Board>
  );
};

export default Board;
