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
        const taskObj = boardCopy.splice(source.index, 1);
        boardCopy.splice(destination.index, 0, ...taskObj);
        return { ...allBoards, [source.droppableId]: [...boardCopy] };
      });
    } else {
      setToDos((allBoards) => {
        const sourceCopy = [...allBoards[source.droppableId]];
        const targetCopy = [...allBoards[destination.droppableId]];
        const taskObj = sourceCopy.splice(source.index, 1);
        targetCopy.splice(destination.index, 0, ...taskObj);
        return {
          ...allBoards,
          [source.droppableId]: [...sourceCopy],
          [destination.droppableId]: [...targetCopy],
        };
      });
    }
  };

  return (
    <Container>
      <DragDropContext onDragEnd={onDragEnd}>
        <Boards>
          {Object.keys(toDos).map((boardId) => (
            <Board boardId={boardId} key={boardId} toDos={toDos[boardId]} />
          ))}
        </Boards>
      </DragDropContext>
    </Container>
  );
};

export default Home;
