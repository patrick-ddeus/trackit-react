import styled from 'styled-components';
import { colors } from '../../constants/colors';

export const Container = styled.button`
  width:100%;
  height:45px;
  background-color:${colors.primaryLight};
  opacity: ${({ disabled }) => disabled ? "0.7" : "1"};
  color:#fff;
  border-radius:5px;
  border:0;
  display:flex;
  justify-content: center;
  align-items: center;
  cursor:pointer; 

  font-family:"Lexend Deca", sans-serif;
  font-weight:400;
  font-size:1.25rem;
`;
