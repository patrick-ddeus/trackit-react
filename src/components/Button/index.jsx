import React from 'react';
import TrackltService from '../../service/tracklit.api';
import { ThreeDots } from 'react-loader-spinner';
import { Container } from './styles';
function Button ({ text, loading, onClickFunction }) {

    return (
        <Container onClick={onClickFunction}>
            {loading ? (<ThreeDots
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