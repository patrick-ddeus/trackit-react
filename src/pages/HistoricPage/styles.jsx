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
  border-radius:10px;
  animation-name: ${modalShow};

  ul{
    min-height: 0;
    max-height: 500px;
    overflow-y: auto;
    -ms-overflow-style: none;
    scrollbar-width: thin;

    /* width */
    &::-webkit-scrollbar {
          width: 7px;
        }
      
      /* Track */
    &::-webkit-scrollbar-track {
      background:#f0f0f0; 
    }
    
    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: #787C81; 
    }
    
    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
      background: #555; 
    }
  }
  
`;

export const ModalItem = styled.li`
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
    transition:color .2s ease;

    & + &{
        margin-top:15px;
    }

    &:hover{
        color:${({ done }) => done ? "#8FC549" : "#fb2e42"};
        cursor:pointer;
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
        cursor:pointer;
        fill: ${({ done }) => done ? "#8FC549" : "#fb2e42"};
    }

    &:last-child{
      border-bottom-right-radius: 5px;
      border-bottom-left-radius: 5px;
    }
`;

export const ModalHeader = styled.div`
    width:100%;
    height:65px;
    background-color: ${({ done }) => done ? "#fb2e42" : "#8FC549"};
    box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 8px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
`;