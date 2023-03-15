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
    
    .react-calendar__tile--active{
        border-radius:20px;
    }
`;

export const TitleHistoric = styled.div`
    display:flex;
    flex-direction: column;
    gap:20px;
   
    h2{
        font-size:1.375rem;
        color:${colors.primary}
    }
    
    p{
        color:#666666;
    }
`;