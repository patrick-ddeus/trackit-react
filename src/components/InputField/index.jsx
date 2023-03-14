import React from 'react';
import eye from "../../assets/eye.png"
import view from "../../assets/view.png"

import { PageContext } from '../../pages/LoginPage';
import { Container, ButtonContainer } from './styles';

function InputField ({ text, disabled, type, description }) {
  const [toggleInput, setToggleInput] = React.useState(true)
  const [loginState, setloginState] = React.useContext(PageContext);

  function handleChangeInput (event) {
    setloginState({ ...loginState, form: { ...loginState.form, [event.currentTarget.name]: [event.currentTarget.value] } });
    console.log(loginState)
  }

  return (
    <Container>
      <ButtonContainer
        disabled={disabled}
        placeholder={text}
        type={type === "password" ? toggleInput ? "password" : "text" : type}
        onChange={handleChangeInput}
        value={loginState.form[description]}
        name={description}
        required />

      {description === "password" &&
        <img onClick={() => setToggleInput(!toggleInput)} src={toggleInput ? eye : view} alt="eye"/>}
    </Container>
  );
}

export default InputField;

