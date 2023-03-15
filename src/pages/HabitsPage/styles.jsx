import styled from 'styled-components';
import { colors } from '../../constants/colors';

export const Container = styled.div`
  background-color:#F2F2F2;
  height:100vh;
`;


export const MainContent = styled.main`
    padding:98px 17px 0;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    background-color:#F2F2F2;
    margin-bottom: 75px;
`;

export const TitleHabit = styled.div`
        display:flex;
        justify-content:space-between;

        h2{
            font-size:1.375rem;
            color:${colors.primary}
        }

        button{
            background-color:${colors.primaryLight};
            color:white;
            width:40px;
            height:35px;
            border-radius:5px;
            border:0;
            font-size: 1.625rem;
            font-family:inherit;
            cursor:pointer;
        }
`;

export const NoHabitContainer = styled.div`
  width: 338px;
  color: #666666;
  font-weight: 400;
`;