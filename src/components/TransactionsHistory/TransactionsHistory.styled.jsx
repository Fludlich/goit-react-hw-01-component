import styled from 'styled-components';

export const Table = styled.table`
  margin: 100px auto 0 auto;
  background-color: #fff;
  width: 530px;
  text-align: center;
  height: 800px;
`;
export const TableHead = styled.thead`
  background-color: rgb(27, 183, 255);
  height: 50px;
`;

export const TableBody = styled.tbody`
  background-color: rgb(27, 183, 255);
  height: 50px;
`;
export const TableList = styled.tr`
  &:nth-child(2n + 1) {
    background-color: rgb(215, 215, 231);
  }
`;

export const TableItem = styled.td`
  outline: 1px solid rgb(197, 196, 196);
`;
