import styled from 'styled-components';
import { colors } from '../../constants/colors';

export const Container = styled.div`
  height:100vh;
  width:100vw;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;

  a{
    color:${colors.primaryLight};
    font-family: "Lexend Deca", sans-serif;
    margin-top:36px;
  }
`;
