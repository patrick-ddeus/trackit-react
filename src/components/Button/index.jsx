import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { Container } from './styles';
function Button ({ text, loading, onClickFunction, width, height}) {

    return (
        <Container disabled={loading} onClick={onClickFunction} width={width} height={height}>
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