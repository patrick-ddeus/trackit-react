import React from 'react';
import { PageContext } from '../../pages/LoginPage';
import { ThreeDots } from 'react-loader-spinner';
import { Container } from './styles';
function Button ({ text }) {
    const [buttonState, setButtonState] = React.useContext(PageContext)

    function handleLogin(event){
        event.preventDefault()
    }

    return (
        <Container onClick={handleLogin}>
            {buttonState.loading ? (<ThreeDots
                height="80"
                width="80"
                radius="9"
                color="#fff"
                ariaLabel="three-dots-loading"
            />
            ) : (
                text 
            )}
        </Container>
    );
}

export default Button;