import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { colors } from '../../constants/colors';
import { Container } from './styles';
export default function Footer () {
    const percentage = 66;
    return (
        <Container>
            <p>Hábitos</p>
            <CircularProgressbar
                value={percentage}
                text={`Hoje`}
                background
                backgroundPadding={6}
                styles={buildStyles({
                    backgroundColor: colors.primaryLight,
                    textColor: "#fff",
                    pathColor: "#fff",
                    trailColor: "transparent",
                    width:"30px",
                })}
            />
            <p>Histórico</p>
        </Container>
    );
}
