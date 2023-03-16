import styled, { keyframes } from 'styled-components';
import baseAnimation from "../../constants/baseAnimation";
import { colors } from '../../constants/colors';

const modalShow = keyframes`
  from{
    opacity: 0;
    transform:scaleY(0);
  }
  to{
    opacity: 1;
    transform:scaleY(1);
  }
`;

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

    .react-calendar{
        width:335px;
        margin:20px auto;
        border-radius:10px;
        border:0;
        height:402px;
    }

    .react-calendar__tile--now{
        background-color:#ffff81;
        color:black;
    }

    .react-calendar__month-view__days button{
        height:50px;
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

export const DayDiv = styled.div`
    background-color: ${({ color }) => color};
    height:30px;
    border-radius:50%;
    display:flex;
    justify-content:center;
    align-items:center;
`;

export const Fade = styled.div`
  position: fixed;
  background: rgba(43, 46, 56, 0.932);
  bottom: 0;
  left:0;
  z-index: 998;
  height: 100%;
  width: 100%;
  margin: 0;
  opacity: 1;
  display:flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled(baseAnimation)`
  background-color:white;
  width:500px;
  z-index: 999;
  border-radius:5px;
  animation-name: ${modalShow};
  overflow:hidden;

  /* div{
    padding:20px;
    font-size:18px;
    font-weight:400;
    color:#D70900;
    cursor:pointer;
    font-family:"Recursive", sans-serif;
    transition:background .2s, color .2s;
    
    &:hover{
      background-color:#FB6B6B;
      color:white;
    }
    &:first-child{
      border-top-left-radius:5px;
      border-top-right-radius:5px;
    }
    &:last-child{
      border-bottom-left-radius:5px;
      border-bottom-right-radius:5px;
    }
  } */
`;

export const ModalArticle = styled.article`
    height: 64px;
    background: #FFFFFF;
    padding:15px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    color: #666666;

    display:flex;
    justify-content: space-between;
    align-items:center;

    & + &{
        margin-top:15px;
    }

    &:hover{
        color:${({ done }) => done ? "#8FC549" : "#fb2e42"};
        cursor:pointer;

        svg{
            fill: ${({ done }) => done ? "#8FC549" : "#fb2e42"};
        }
    }
    
    h3{
        font-size: 1.25rem;
    }

    p{
        margin:5px 1px;
        font-size:0.75rem;
    }

    svg{
        width:76px;
        fill:#EBEBEB;
        cursor:pointer;
    }
`;