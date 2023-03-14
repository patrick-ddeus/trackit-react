import styled from 'styled-components';
import { colors } from '../../constants/colors';

export const Container = styled.div`
    background-color:white;
    width:100%;
    height:70px;
    position:fixed;
    bottom:0;
    display:flex;
    align-items: center;
    justify-content: center;
    gap:40px;
    font-family: "Lexend Deca";

  svg{
    width:91px;
    margin-top: -30px;
    margin-bottom:10px;
  }

  p{
    color:${colors.primaryLight};
    cursor:pointer;
  }
`;
