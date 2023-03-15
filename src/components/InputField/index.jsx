import React from 'react';
import eye from "../../assets/eye.png"
import view from "../../assets/view.png"

import { Container, ButtonContainer } from './styles';

function InputField ({ text, disabled, type, description = "", onChangeFunction, value, required, dataTest}) {
  const [toggleInput, setToggleInput] = React.useState(true)

  return (
    <Container>
      <ButtonContainer
        disabled={disabled}
        placeholder={text}
        type={type === "password" ? toggleInput ? "password" : "text" : type}
        onChange={onChangeFunction}
        value={value}
        name={description}
        required={required || true} 
        data-test={dataTest}
        />

      {description === "password" &&
        <img onClick={() => setToggleInput(!toggleInput)} src={toggleInput ? eye : view} alt="eye"/>}
    </Container>
  );
}

export default InputField;

