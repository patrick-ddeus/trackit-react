import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from "../../assets/text-logo.svg";
import { UserContext } from '../../contexts/userContext';

import { Container } from './styles';
export default function Header () {
  const { userInfo } = React.useContext(UserContext);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!(JSON.parse(localStorage.getItem("userInfo")))) {
      navigate("/");
    }
  }, []);

  return (
    <Container data-test="header">
      <h1>TrackIt</h1>
      <img src={userInfo.image || "https://i.pinimg.com/originals/f1/0f/f7/f10ff70a7155e5ab666bcdd1b45b726d.jpg"} alt="" />
    </Container>
  );
}
