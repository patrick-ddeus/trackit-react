import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Calendar from 'react-calendar';
import TrackltService from '../../service/tracklit.api';
import 'react-calendar/dist/Calendar.css';

import { UserContext } from '../../contexts/userContext';
import { Container, MainContent, TitleHistoric } from './styles';

export default function HistoricPage () {
  const [value, onChange] = React.useState(new Date());
  const [userInfo, setUserInfo] = React.useContext(UserContext)

  React.useEffect(() => {
    const TrackltApi = new TrackltService();

    async function fetchHistoric () {
      try {
        const response = await TrackltApi.getHistoric(userInfo.token)
        console.log(response.data)
      } catch(e){
        alert(e)
      }
    }

    fetchHistoric()
  }, []);

  return (
    <Container>
      <Header />
      <MainContent className="fade-in">
        <TitleHistoric>
          <h2>Meus hábitos</h2>
          <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
        </TitleHistoric>
        <Calendar onChange={onChange} value={value} calendarType="US" />
      </MainContent>
      <Footer />
    </Container>
  );
}
