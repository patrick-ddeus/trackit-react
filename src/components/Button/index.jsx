import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { Container } from './styles';
function Button ({ text, loading, onClickFunction, width, height, dataTest, dotWidth, dotHeight}) {

    return (
        <Container disabled={loading} onClick={onClickFunction} width={width} height={height} data-test={dataTest}>
            {loading ? (<ThreeDots
                height={dotHeight || "80"}
                width={dotWidth || "80"}
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