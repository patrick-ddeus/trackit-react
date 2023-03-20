import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Calendar from 'react-calendar';
import TrackltApi from '../../service/tracklit.api';
import 'react-calendar/dist/Calendar.css';

import { formatZero } from '../../constants/utils';
import { UserContext } from '../../contexts/userContext';
import { Container, MainContent, TitleHistoric, DayDiv, Fade, Modal, ModalItem, ModalHeader } from './styles';
import { convertDay } from '../../constants/utils';
export default function HistoricPage () {
  const [value, onChange] = React.useState(new Date());
  const [historic, setHistoric] = React.useState([]);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalOptions, setModalOptions] = React.useState([]);
  const { userInfo } = React.useContext(UserContext);

  React.useEffect(() => {
    async function fetchHistoric () {
      try {
        const response = await TrackltApi.getHistoric(userInfo.token);
        setHistoric([...response.data]);
      } catch (e) {
        alert(e);
      }
    }
    if (userInfo) {
      fetchHistoric();
    }

  }, []);

  function verifyDate (date) {
    const today = new Date();
    const habit = historic.find(h => h.day === formatDate(date) && h.day !== formatDate(today));
    if (habit) {
      return habit.habits.some(h => !h.done && h.date !== date) ?
        <DayDiv color={"#ea5766"}>
          {date.getDate()}
        </DayDiv> :
        <DayDiv color={"#8cc654"}>
          {date.getDate()}
        </DayDiv>;
    }
    return (
      <div>
        {date.getDate()}
      </div>
    );
  }

  function toggleModal (event) {
    if (event.target.matches("div")) {
      setModalOpen(!modalOpen);
    }
  }

  function handleOnClickDay (day) {
    const habit = historic.find(h => h.day === formatDate(day));
    if (habit) {
      setModalOpen(true);
      setModalOptions(habit.habits);
    }
  }

  function formatDate (date) {
    return `${formatZero(date.getDate())}/${formatZero(date.getMonth() + 1)}/${date.getFullYear()}`;
  }

  return (
    <Container>
      <Header />
      <MainContent className="fade-in">
        <TitleHistoric>
          <h2>Meus hábitos</h2>
        </TitleHistoric>
        {modalOpen &&
          <Fade onClick={toggleModal}>
            <Modal >
              <ModalHeader done={modalOptions.some(habit => !habit.done)} />
              <ul>
                {modalOptions.map(options => (
                  <ModalItem done={options.done} key={options.id}>
                    <div>
                      <h3>{options.name}</h3>
                      <p>Situação: Finalizada</p>
                      <p>Dia: {convertDay(options.weekDay)}</p>
                      <p>Data: {formatDate(new Date(options.date))}</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
                      <title>Checkbox</title>
                      <path d="M400 48H112a64.07 64.07 0 00-64 64v288a64.07 64.07 0 0064 64h288a64.07 64.07 0 0064-64V112a64.07 64.07 0 00-64-64zm-35.75 138.29l-134.4 160a16 16 0 01-12 5.71h-.27a16 16 0 01-11.89-5.3l-57.6-64a16 16 0 1123.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0124.5 20.58z" />
                    </svg>
                  </ModalItem>
                ))}
              </ul>
            </Modal>
          </Fade>
        }
        <div data-test="calendar">
          <Calendar
            onChange={onChange}
            value={value}
            calendarType="US"
            formatDay={(_, date) => verifyDate(date)}
            onClickDay={(value) => handleOnClickDay(value)}
          />
        </div>
      </MainContent>
      <Footer />
    </Container>
  );
}
