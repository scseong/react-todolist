import React from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { useRecoilState } from 'recoil';
import Board from '../components/Board';
import { toDoState } from '../recoil/atoms';
import { Container, Boards } from './styles';

const Home = () => {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const onDragEnd = (info: DropResult) => {
    const { source, destination } = info;
    if (!destination) return;
    if (source.droppableId === destination.droppableId) {
      setToDos((allBoards) => {
        const boardCopy = [...allBoards[source.droppableId]];
        const taskObj = boardCopy[source.index];
        boardCopy.splice(source.index, 1);
        boardCopy.splice(destination?.index, 0, taskObj);
        return { ...allBoards, [source.droppableId]: boardCopy };
      });
    } else {
      setToDos((allBoards) => {
        const sourceBoard = [...allBoards[source?.droppableId]];
        const taskObj = sourceBoard[source.index];
        const destinationBoard = [...allBoards[destination?.droppableId]];
        sourceBoard.splice(source.index, 1);
        destinationBoard.splice(destination?.index, 0, taskObj);
        return {
          ...allBoards,
          [source.droppableId]: sourceBoard,
          [destination.droppableId]: destinationBoard,
        };
      });
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Container>
        <Boards>
          {Object.keys(toDos).map((boardId) => {
            return (
              <Board boardId={boardId} key={boardId} toDos={toDos[boardId]} />
            );
          })}
        </Boards>
      </Container>
    </DragDropContext>
  );
};

export default Home;
