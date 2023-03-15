import React from 'react';
import { useNavigate } from "react-router-dom";
import TrackltService from '../../../service/tracklit.api';
import InputField from '../../../components/InputField';
import Button from '../../../components/Button';

function FormRegister ({ pageConfig, setPageConfig }) {
    const navigate = useNavigate();

    function registerChangeInput (event) {
        setPageConfig({ ...pageConfig, form: { ...pageConfig.form, [event.currentTarget.name]: event.currentTarget.value } });
    }

    function handleRegister (event) {
        event.preventDefault();
        const TrackltApi = new TrackltService();
        setPageConfig({ ...pageConfig, loading: true });

        async function registerUser () {
            try {
                await TrackltApi.registerUser(pageConfig.form);
                setPageConfig({ ...pageConfig, loading: false });
                navigate("/");
            } catch (e) {
                alert(e.message);
                setPageConfig({ ...pageConfig, loading: false });
            }
        }
        registerUser();
    }

    return (
        <form method="post">
            <InputField
                disabled={pageConfig.loading}
                text={"email"}
                type={"email"}
                description={"email"}
                onChangeFunction={registerChangeInput}
                value={pageConfig.form["email"]}
                dataTest={"email-input"} />
            <InputField
                disabled={pageConfig.loading}
                text={"senha"}
                type={"password"}
                description={"password"}
                onChangeFunction={registerChangeInput}
                value={pageConfig.form["password"]} 
                dataTest={"password-input"}/>
            <InputField
                disabled={pageConfig.loading}
                text={"nome"}
                type={"text"}
                description={"name"}
                onChangeFunction={registerChangeInput}
                value={pageConfig.form["name"]} 
                dataTest={"user-name-input"}/>
            <InputField
                disabled={pageConfig.loading}
                text={"foto"}
                type={"text"}
                description={"image"}
                onChangeFunction={registerChangeInput}
                value={pageConfig.form["image"]} 
                dataTest={"user-image-input"}/>
            <Button 
            text="Cadastrar" 
            loading={pageConfig.loading} 
            onClickFunction={handleRegister} 
            width="100%"
            height="45px"
            dataTest={"signup-btn"}/>
        </form>);
}

export default FormRegister;