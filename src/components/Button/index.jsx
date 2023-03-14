import React from 'react';
import TrackltService from '../../service/tracklit.api';
import { PageContext } from '../../pages/LoginPage';
import { ThreeDots } from 'react-loader-spinner';
import { Container } from './styles';
function Button ({ text }) {
    const [loginState, setLoginState] = React.useContext(PageContext);

    function handleLogin (event) {
        event.preventDefault();
        const TrackltApi = new TrackltService();
        setLoginState({ ...loginState, loading: true });
        async function UserAuthenticate () {
            try {
                const data = await TrackltApi.authenticateUser(loginState.form);
                setLoginState({ ...loginState, loading: false, user: data });
            } catch (e) {
                alert(e.message);
                setLoginState({ ...loginState, loading: false});

            }
        }

        UserAuthenticate();
    }

    return (
        <Container onClick={handleLogin}>
            {loginState.loading ? (<ThreeDots
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