import React from 'react';
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import FormLogin from './FormLogin/FormLogin';

import * as S from "./styles";
function LoginPage () {
  return (
    <S.Container>
      <img src={Logo} alt="logo" />
      <FormLogin/>
      <Link to={"/cadastro"} data-test="signup-link"> Não tem conta? Cadastre-se!</Link>
    </S.Container>
  );
}

export default LoginPage;