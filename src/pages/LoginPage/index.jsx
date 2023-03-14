import React from 'react';
import { Link } from "react-router-dom";
import TrackltService from '../../service/tracklit.api';
import Logo from "../../assets/Logo.svg";
import InputField from '../../components/InputField';
import Button from '../../components/Button';

import * as S from "./styles";

export const PageContext = React.createContext();

function LoginPage () {
  const [pageConfig, setPageConfig] = React.useState({
    loading: false,
    user: null,
    form: { name: "", password: "" }
  });


  // React.useEffect(() => {
  //   const TrackltApi = new TrackltService()
  //   async function fetchUserAuthenticate(){
  //       const data = TrackltApi.authenticateUser()
  //   }

  // }, []);

  return (
    <PageContext.Provider value={[pageConfig, setPageConfig]}>
      <S.Container>
        <img src={Logo} alt="logo" />
        <form method="post">
          <InputField disabled={false} text={"email"} type={"email"} description={"name"} />
          <InputField disabled={false} text={"senha"} type={"password"} description={"password"} />
          <Button text="Entrar" />
        </form>
        <Link to={"/cadastro"}> Não tem conta? Cadastre-se!</Link>
      </S.Container>
    </PageContext.Provider>
  );
}

export default LoginPage;