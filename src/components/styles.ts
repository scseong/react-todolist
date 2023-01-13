import styled from 'styled-components';

export const Board = styled.div`
  min-width: 355px;
  max-width: 355px;
  min-height: 600px;
  max-height: 600px;
  border-radius: 6px;
  background-color: ${(props) => props.theme.colors['board-bg']};
  border: 1px solid ${(props) => props.theme.colors['board-border-bg']};
  display: flex;
  flex-direction: column;
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
  width: 10%;
  word-wrap: break-word;
`;

export const HeaderBtn = styled.button`
  font-size: 1.1em;
  background-color: inherit;
  border: none;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.colors['btn-hover']};
  }
`;

export const BoardContent = styled.div<{ isDraggingOver?: boolean }>`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-grow: 2;
  overflow-y: auto;
  background-color: ${(props) =>
    props?.isDraggingOver
      ? props.theme.colors['board-dragging-bg']
      : 'inherit'};
`;

export const FormContent = styled(BoardContent)`
  overflow: hidden;
  padding: 12px 10px;
  flex-grow: 0;
`;
export const FormBtn = styled.button<{ submit?: boolean }>`
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  cursor: pointer;
  background-color: ${(props) =>
    props.submit
      ? props.theme.colors['form-submit-btn-bg']
      : props.theme.colors['form-btn-bg']};
  color: ${(props) => (props.submit ? 'white' : 'inherit')};
  &:hover {
    background-color: ${(props) =>
      props.submit
        ? props.theme.colors['form-submit-btn-bg-hover']
        : props.theme.colors['form-btn-bg-hover']};
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
      border: 1px solid ${(props) => props.theme.colors['card-border-bg']};
      &:focus {
        outline-color: ${(props) => props.theme.colors['border-outline']};
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
  border: 1px solid ${(props) => props.theme.colors['card-border-bg']};
  background-color: ${(props) => props.theme.colors['card-bg']};
  display: flex;
  justify-content: space-between;
  word-wrap: break-word;
  line-height: 1.5em;
  span {
    width: 95%;
    height: fit-content;
  }
  svg {
    transform: translateY(4px);
    width: 16px;
    height: 16px;
    &:hover {
      color: ${(props) => props.theme.colors['btn-hover']};
    }
  }
  &:hover {
    box-shadow: ${(props) => props.theme.colors['card-shadow']};
    cursor: pointer;
  }
`;
