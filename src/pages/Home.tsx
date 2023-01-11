import React from 'react';
import Board from '../components/Board';
import { Container, Boards } from './styles';

const Home = () => {
  return (
    <Container>
      <Boards>
        <Board id={'To Do'} toDo={'a'} />
        <Board id={'In progress'} toDo={'b'} />
        <Board id={'Done'} toDo={'c'} />
      </Boards>
    </Container>
  );
};

export default Home;
