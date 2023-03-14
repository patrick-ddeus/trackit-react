import React from 'react';
import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { colors } from '../../constants/colors';
import { Container } from './styles';
export default function Footer () {
    const percentage = 36;
    return (
        <Container>
            <Link to="/habitos">Hábitos</Link>
            <Link to="/hoje">
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
                        width: "30px",
                    })}
                />
            </Link>
            <Link to="/historico">Histórico</Link>
        </Container>
    );
}
