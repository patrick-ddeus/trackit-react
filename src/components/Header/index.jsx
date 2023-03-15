import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from "../../assets/text-logo.svg";
import { UserContext } from '../../contexts/user/userContext';

import { Container } from './styles';
export default function Header () {
  const userLoggedInfo = React.useContext(UserContext);
  const navigate = useNavigate();

  React.useEffect(() => {
    if(!(JSON.parse(localStorage.getItem("userInfo")))) {
      navigate("/");
    }
  }, []);

  return (
    <Container data-test="header">
      <img src={Logo} alt="" />
      <img src={userLoggedInfo[0]?.image} alt="" />
    </Container>
  );
}
