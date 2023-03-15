import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { Container, MainContent, TitleHistoric } from './styles';

export default function HistoricPage () {
  return (
    <Container>
      <Header />
      <MainContent>
        <TitleHistoric>
          <h2>Meus hábitos</h2>
          <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
        </TitleHistoric>
      </MainContent>
      <Footer />
    </Container>
  );
}
