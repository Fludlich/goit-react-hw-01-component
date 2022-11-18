import styled from 'styled-components';

export const Box = styled.div`
  margin: 100px auto 0 auto;
  width: 300px;
  overflow: hidden;
  border: 1px solid grey;
  border-radius: 5px;
`;

export const DescriptionBox = styled.div`
  width: 100%;
  background-color: rgb(255, 255, 255);
  text-align: center;
  padding: 40px 0;
`;

export const Avatar = styled.img`
  width: calc(100% / 3);
  border-radius: 50%;
  border: 1px solid grey;
`;

export const Name = styled.p`
  font-size: 24px;
`;

export const Tag = styled.p`
  color: aqua;
`;

export const Location = styled.p`
  text-decoration-line: underline;
  margin-bottom: 0;
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0%;
  margin: 0%;
  display: flex;
  border: 1px solid black;
`;

export const Item = styled.li`
  background-color: rgb(211, 207, 207);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: calc(100% / 3);
  border: 1px solid black;
  padding: 15px 0;
  gap: 5px;
`;

export const Label = styled.span`
  color: grey;
  margin-bottom: 3px;
`;

export const Quantity = styled.span`
  font-weight: bold;
`;
