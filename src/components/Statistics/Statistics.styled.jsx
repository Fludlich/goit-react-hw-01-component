import styled from 'styled-components';

export const Box = styled.div``;

export const Statistics = styled.section`
  width: 450px;
  margin: 100px auto 0 auto;
  background-color: #fff;
`;

export const Title = styled.h2`
  margin: 0%;
  padding-bottom: 20px;
  padding-top: 20px;
  text-align: center;
`;

export const List = styled.ul`
  justify-content: center;
  width: 100%;
  display: flex;
  padding: 0%;
  margin: 0%;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  width: calc(100% / 5);
  justify-content: center;
  align-items: center;
  padding: 10px 0 10px 0;
  gap: 5px;
`;

export const Label = styled.span``;

export const Percentage = styled.span`
  font-weight: bold;
`;
