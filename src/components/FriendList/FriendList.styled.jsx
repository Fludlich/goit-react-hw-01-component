import styled from 'styled-components';

export const List = styled.ul`
  margin-left: 1480px;
  display: flex;
  gap: 20px;
  flex-direction: column;
`;

export const Item = styled.li`
  list-style-type: none;
  height: 70px;
  width: 300px;
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #fff;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 5px 10px #888888;
  background-color: rgb(244, 239, 239);
`;
export const Status = styled.span`
  display: block;
  border: 1px solid transparent;
  border-radius: 50%;
  width: 14px;
  height: 14px;
  background-color: ${props => {
    if (props.isOnline === true) {
      return 'green';
    } else {
      return 'red';
    }
  }};
`;

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 5px;
  border: 1px solid grey;
`;

export const Name = styled.p`
  font-size: 20px;
  color: black;
`;
