import React from 'react';
import { useRecoilValue } from 'recoil';
import Board from '../components/Board';
import { toDoState } from '../recoil/atoms';
import { Container, Boards } from './styles';

const Home = () => {
  const toDos = useRecoilValue(toDoState);

  return (
    <Container>
      <Boards>
        {Object.keys(toDos).map((boardId) => (
          <Board boardId={boardId} key={boardId} toDos={toDos[boardId]} />
        ))}
      </Boards>
    </Container>
  );
};

export default Home;
