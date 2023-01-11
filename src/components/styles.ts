import styled from 'styled-components';

export const Board = styled.div`
  min-width: 355px;
  max-width: 355px;
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
  font-size: 1.2em;
  font-weight: bold;
  flex-grow: 2;
`;

export const HeaderBtn = styled.button`
  font-size: 1.2em;
  background-color: inherit;
  border: none;
  cursor: pointer;
  &:hover {
    color: red;
  }
`;

export const BoardContent = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Card = styled.div`
  padding: 8px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background-color: #fff;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 1px 3px;
    cursor: pointer;
  }
`;
