import React from 'react'
import Logo from "../../assets/text-logo.svg";
import { UserContext } from '../../contexts/user/userContext';

import { Container } from './styles';
export default function Header () {
  const userLoggedInfo = React.useContext(UserContext)
  console.log(userLoggedInfo)
  return (
    <Container>
        <img src={Logo} alt="" />
        <img src={userLoggedInfo[0].image} alt="" />
    </Container>
  )
}
