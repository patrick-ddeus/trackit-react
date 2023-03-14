import React from 'react';
import { UserContext } from '../../contexts/user/userContext';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { Container } from './styles';
export default function TodayPage () {
    const [userInfo, setUserInfo] = React.useContext(UserContext);
    return (
        <Container>
            <Header />
            <Footer />
        </Container>
    );
}
