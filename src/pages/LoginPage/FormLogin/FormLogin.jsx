import React from 'react';
import TrackltService from '../../../service/tracklit.api';
import InputField from '../../../components/InputField';
import Button from '../../../components/Button';

import { PageContext } from '..';

function FormLogin () {
    const [loginState, setloginState] = React.useContext(PageContext);

    function loginChangeInput (event) {
        setloginState({ ...loginState, form: { ...loginState.form, [event.currentTarget.name]: event.currentTarget.value } });
    }

    function handleLogin (event) {
        event.preventDefault();
        const TrackltApi = new TrackltService();
        setloginState({ ...loginState, loading: true });
        async function UserAuthenticate () {
            try {
                const data = await TrackltApi.authenticateUser(loginState.form);
                setloginState({ ...loginState, loading: false, user: data });
            } catch (e) {
                alert(e.message);
                setloginState({ ...loginState, loading: false });
            }
        }

        UserAuthenticate();
    }

    return (
        <form method="post">
            <InputField
                disabled={loginState.loading}
                text={"email"}
                type={"email"}
                description={"email"}
                onChangeFunction={loginChangeInput}
                value={loginState.form["email"]} />
            <InputField
                disabled={loginState.loading}
                text={"senha"}
                type={"password"}
                description={"password"}
                onChangeFunction={loginChangeInput}
                value={loginState.form["password"]} />
            <Button text="Entrar" loading={loginState.loading} onClickFunction={handleLogin} />
        </form>
    );
}

export default FormLogin;