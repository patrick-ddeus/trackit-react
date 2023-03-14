import React from 'react';
import InputField from '../../../components/InputField';
import Button from '../../../components/Button';

function FormRegister ({ pageConfig, setPageConfig }) {

    function registerChangeInput (event) {
        setPageConfig({ ...pageConfig, form: { ...pageConfig.form, [event.currentTarget.name]: event.currentTarget.value } });
    }
    return (
        <form method="post">
            <InputField
                disabled={pageConfig.loading}
                text={"email"}
                type={"email"}
                description={"email"}
                onChangeFunction={registerChangeInput}
                value={pageConfig.form["email"]} />
            <InputField
                disabled={pageConfig.loading}
                text={"senha"}
                type={"password"}
                description={"password"}
                onChangeFunction={registerChangeInput}
                value={pageConfig.form["password"]} />
            <InputField
                disabled={pageConfig.loading}
                text={"nome"}
                type={"text"}
                description={"name"}
                onChangeFunction={registerChangeInput}
                value={pageConfig.form["name"]} />
            <InputField
                disabled={pageConfig.loading}
                text={"foto"}
                type={"text"}
                description={"image"}
                onChangeFunction={registerChangeInput}
                value={pageConfig.form["image"]} />
            <Button text="Cadastrar" loading={pageConfig.loading}/>
        </form>);
}

export default FormRegister;