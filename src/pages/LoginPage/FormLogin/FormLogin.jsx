import React from 'react';
import { useNavigate } from "react-router-dom";
import { UserContext } from '../../../contexts/userContext';
import TrackltService from '../../../service/tracklit.api';
import InputField from '../../../components/InputField';
import Button from '../../../components/Button';

function FormLogin () {
    const [loginState, setLoginState] = React.useState({
        loading: false,
        form: { email: "", password: "" }
    });
    const [userInfo, setUserInfo] = React.useContext(UserContext);
    const navigate = useNavigate();

    function loginChangeInput (event) {
        setLoginState({ ...loginState, form: { ...loginState.form, [event.currentTarget.name]: event.currentTarget.value } });
    }

    function handleLogin (event) {
        event.preventDefault();
        const TrackltApi = new TrackltService();
        setLoginState({ ...loginState, loading: true });
        async function UserAuthenticate () {
            try {
                const response = await TrackltApi.authenticateUser(loginState.form);
                setLoginState({ ...loginState, loading: false });
                setUserInfo(response.data);
                localStorage.setItem("userInfo", JSON.stringify({ ...response.data, password: "" }));
                navigate("/hoje");
            } catch (e) {
                alert(e.message);
                setLoginState({ ...loginState, loading: false });
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
                value={loginState.form["email"]}
                dataTest={"email-input"} />
            <InputField
                disabled={loginState.loading}
                text={"senha"}
                type={"password"}
                description={"password"}
                onChangeFunction={loginChangeInput}
                value={loginState.form["password"]}
                dataTest={"password-input"} />
            <Button
                text="Entrar"
                loading={loginState.loading}
                onClickFunction={handleLogin}
                width="100%"
                height="45px"
                dataTest={"login-btn"}
            />
        </form>
    );
}

export default FormLogin;