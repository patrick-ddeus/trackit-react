import styled from 'styled-components';
import { colors } from '../../constants/colors';
export const Container = styled.div`
  background-color:#F2F2F2;
  height:100vh;
`;

export const TitleToday = styled.div`
    h2{
        color:${colors.primary};
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 1.5rem;
        margin-bottom: 5px;
    }
`;

export const HabitParagraph = styled.p`
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 400;
  font-size: 1.125rem;
  color: ${({ habits }) => habits ? "#8FC549" : "#BABABA"};
  margin-bottom:40px;
`;

export const HabitCard = styled.div`
    width: 340px;
    height: 94px;
    background: #FFFFFF;
    border-radius: 5px;
    padding:0 15px 15px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    color: #666666;
    margin-bottom:15px;
    display:flex; 
    align-items:center;
    justify-content: space-between;
    
    h3{
        font-size: 1.25rem;
        margin-bottom:10px;
    }

    p{
        font-size:0.75rem;
    }

    svg{
        margin-top:15px;
        width:76px;
        fill: ${({habit}) => habit ? "#8FC549" : "#EBEBEB"};
        cursor:pointer;
    }
`;