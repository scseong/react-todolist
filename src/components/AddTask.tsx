import { spawn } from 'child_process';
import React, { memo, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';
import { IForm, IFormProps } from '../db';
import { toDoState } from '../recoil/atoms';
import { FormBtn, TaskForm } from './styles';

const AddTask = ({ boardId }: IFormProps) => {
  const setToDos = useSetRecoilState(toDoState);
  const { register, handleSubmit, setFocus, resetField } = useForm<IForm>();
  const onSubmit = ({ toDo }: IForm) => {
    const newToDo = {
      id: Date.now(),
      text: toDo,
    };
    setToDos((allBoards) => {
      return { ...allBoards, [boardId]: [...allBoards[boardId], newToDo] };
    });
    resetField('toDo');
  };

  useEffect(() => {
    setFocus('toDo');
  }, []);

  return (
    <TaskForm>
      <form onSubmit={handleSubmit(onSubmit)}>
        <textarea
          {...register('toDo', { required: true, maxLength: 150 })}
          placeholder="Add a task"
          rows={5}
        />
        <div>
          <FormBtn type="submit" submit>
            Submit
          </FormBtn>
          <FormBtn>Cancel</FormBtn>
        </div>
      </form>
    </TaskForm>
  );
};

export default memo(AddTask);
