import styled from 'styled-components';
import { colors } from '../../../constants/colors';

export const Container = styled.div`
    padding:20px 17px;
    background-color:white;
    margin:20px 0;
    border-radius:5px;
    width:340px;
`;

export const ButtonDay = styled.button`
    width:30px;
    height:30px;
    color:${({ isSelected }) => isSelected ? "white" : colors.inputColor.fontColor};
    border: 1px solid ${colors.inputColor.border};
    border-radius:5px;
    background-color:${({ isSelected }) => isSelected ? "#CFCFCF" : colors.inputColor.background};
    margin-right:3px;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size:1.25rem;
    cursor:pointer;
`;

export const ButtonsContainer = styled.div`
  margin-top:29px;
  display:flex;
  justify-content: flex-end;
  gap:20px;
  
  button{
    color:${colors.primaryLight};
    background:transparent;
    border:0;
    font-size:1rem;
    font-weight:400;
    cursor:pointer;
  }

  button:last-child{
    background:${colors.primaryLight};
    color:white;
    width:84px;
    height:34px;
    border-radius:5px;
    transition:background .2s ease-in-out;

    &:hover{
      background-color:${colors.primary}
    }
  }
`;

export const HabitTitle = styled.h2`
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 400;
  font-size:1.25rem;
  margin-bottom:10px;
  display:flex;
  justify-content:space-between;
  color: #666666;

  svg{
    width:22px;
    cursor:pointer;
  }
`;