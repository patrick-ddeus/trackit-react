import React from 'react';
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import FormRegister from './FormRegister/FormRegister';
import * as S from "./styles";
function RegisterPage () {
    const [pageConfig, setPageConfig] = React.useState({
        loading: false,
        form: { email: "", name: "", image: "", password: "" }
    });

    return (
        <S.Container>
            <img src={Logo} alt="logo" />
            <FormRegister pageConfig={pageConfig} setPageConfig={setPageConfig} />
            <Link to={"/"} data-test="login-link"> Já tem uma conta? Faça login!</Link>
        </S.Container>
    );
}

export default RegisterPage;