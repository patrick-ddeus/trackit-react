import React from 'react';
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import FormLogin from './FormLogin/FormLogin';

import * as S from "./styles";

export const PageContext = React.createContext();

function LoginPage () {
  const [pageConfig, setPageConfig] = React.useState({
    loading: false,
    form: { email: "", password: "" }
  });

  return (
    <PageContext.Provider value={[pageConfig, setPageConfig]}>
      <S.Container>
        <img src={Logo} alt="logo" />
        <FormLogin />
        <Link to={"/cadastro"}> Não tem conta? Cadastre-se!</Link>
      </S.Container>
    </PageContext.Provider>
  );
}

export default LoginPage;