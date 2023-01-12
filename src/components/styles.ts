import styled from 'styled-components';

export const Board = styled.div`
  min-width: 355px;
  max-width: 355px;
  min-height: 500px;
  border-radius: 6px;
  background-color: #f6f8fa;
  border: 1px solid rgba(0, 0, 0, 0.2);
`;

export const BoardHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;

export const ItemCount = styled.span`
  display: inline-block;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 0.8em;
  font-weight: bold;
  margin-right: 8px;
  text-align: center;
  width: 1.6em;
  line-height: 1.6em;
`;

export const Title = styled.h3`
  font-weight: bold;
  flex-grow: 2;
`;

export const HeaderBtn = styled.button`
  font-size: 1.1em;
  background-color: inherit;
  border: none;
  cursor: pointer;
  &:hover {
    color: #218bff;
  }
`;

export const BoardContent = styled.div`
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const FormContent = styled(BoardContent)`
  padding: 12px 10px;
`;
export const FormBtn = styled.button<{ primary?: boolean }>`
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  cursor: pointer;
  background-color: ${(props) => (props.primary ? '#2da44e' : 'inherit')};
  color: ${(props) => (props.primary ? 'white' : 'inherit')};
  &:hover {
    background-color: ${(props) => (props.primary ? '#2c974b' : '#f3f4f6;')};
  }
`;

export const TaskForm = styled.div`
  form {
    display: flex;
    flex-direction: column;
    textarea {
      resize: vertical;
      padding: 8px 12px;
      border-radius: 5px;
      &:focus {
        outline-color: #218bff;
      }
    }
    div {
      display: flex;
      justify-content: space-between;
      gap: 10px;
      margin-top: 8px;
      ${FormBtn} {
        width: 100%;
        line-height: 26px;
        padding: 5px 16px;
        font-size: 1em;
      }
    }
  }
`;

export const Note = styled.div`
  padding: 8px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  word-wrap: break-word;
  height: 60px;
  span {
    width: 95%;
  }
  svg {
    width: 5%;
  }
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 1px 3px;
    cursor: pointer;
  }
`;
