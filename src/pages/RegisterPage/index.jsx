import React from 'react';
import InputField from '../../components/InputField';
import Button from '../../components/Button';
import Logo from "../../assets/Logo.svg";

import * as S from "./styles"
function RegisterPage () {
    return (
        <S.Container>
            <img src={Logo} alt="logo" />
            <form method="post">
                <InputField disabled={false} text={"email"} type={"email"} description={"email"} />
                <InputField disabled={false} text={"senha"} type={"password"} description={"password"} />
                <Button text="Entrar" />
            </form>
        </S.Container>
    );
}

export default RegisterPage;