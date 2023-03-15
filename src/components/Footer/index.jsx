import React from 'react';
import { UserContext } from '../../contexts/userContext';
import { Link} from "react-router-dom";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { colors } from '../../constants/colors';
import { Container } from './styles';
export default function Footer () {
    const [userInfo, setUserInfo] = React.useContext(UserContext);

    return (
        <Container data-test="menu">
            <Link to="/habitos" data-test="habit-link">Hábitos</Link>
            <Link to="/hoje" data-test="today-link">
                <CircularProgressbar
                    value={userInfo?.progress}
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
            <Link to="/historico" data-test="history-link">Histórico</Link>
        </Container>
    );
}
