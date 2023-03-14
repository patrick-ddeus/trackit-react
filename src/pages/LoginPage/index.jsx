import React from 'react';
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import FormLogin from './FormLogin/FormLogin';

import * as S from "./styles";

export const PageContext = React.createContext();

function LoginPage () {
  const [loginState, setLoginState] = React.useState({
    loading: false,
    form: { email: "", password: "" }
  });

  return (
    <S.Container>
      <img src={Logo} alt="logo" />
      <FormLogin loginState={loginState} setLoginState={setLoginState}/>
      <Link to={"/cadastro"}> Não tem conta? Cadastre-se!</Link>
    </S.Container>
  );
}

export default LoginPage;