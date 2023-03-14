import styled from 'styled-components';
import { colors } from '../../constants/colors';

export const Container = styled.div`
  position:relative;
  img{
    position:absolute;
    top:16px;
    right:15px;
    font-size:12px;
    font-family:sans-serif;
    cursor:pointer;
    width:20px;
  }

`;

export const ButtonContainer = styled.input`
  width:302px;
  height:45px;
  background: ${({ disabled }) => disabled ? colors.inputColor.disabled : colors.inputColor.background};
  border: 1px solid ${colors.inputColor.border};
  border-radius: 5px;
  padding:0 11px;
  display:block;
  margin:6px 0;

  color: grey;
  font-family: "Lexend Deca", sans - serif;
  font-weight: 400;
  font-size: 1.25rem;

  &::placeholder{
    color:${colors.inputColor.fontColor};
  }
`;
