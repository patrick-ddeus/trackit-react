import styled from 'styled-components';
import { colors } from '../../constants/colors';

export const Container = styled.header`
    position:fixed;
    top:0;
    left:0;
    width:100%;
    background-color:${colors.primary};
    height: 70px;
    display:flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    z-index:2;

    img:last-child{
        width:51px;
        border-radius:50%;
        cursor:pointer;
        margin:0 20px;
    }

    h1{
        margin:0 20px;
        font-family:"Playball", sans-serif;
        font-size:2.5rem;
        color:white;
    }
`;

