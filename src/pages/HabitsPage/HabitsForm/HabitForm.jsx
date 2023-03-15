import React from 'react';
import { UserContext } from '../../../contexts/user/userContext';
import InputField from '../../../components/InputField';
import Button from '../../../components/Button';
import TrackltService from '../../../service/tracklit.api';
import { Container, ButtonDay, ButtonsContainer, HabitTitle } from './styles';

const days = ["Domingo", "Segunda", "Terca", "Quarta", "Quinta", "Sexta", "Sabado"];

export default function HabitForm ({ selectedDays, id, value, setShowForm, habits, setHabits }) {
  const [userInfo, setUserInfo] = React.useContext(UserContext);
  const [pageConfig, setPageConfig] = React.useState({
    form: "",
    isSelected: selectedDays || userInfo.days || [],
    loading: false
  });
  const TrackltApi = new TrackltService();

  function handleButtonDayClick (day) {
    const existingDay = pageConfig.isSelected.find(daySelected => daySelected === day);
    if (!existingDay && existingDay !== 0) {
      setPageConfig({ ...pageConfig, isSelected: [...pageConfig.isSelected, day] });
      setUserInfo({...userInfo, days: [...userInfo.days || [], day]})
    } else {
      const transformedDays = pageConfig.isSelected.filter(daySelected => daySelected !== day);
      setPageConfig({ ...pageConfig, isSelected: transformedDays });
      setUserInfo({...userInfo, days: transformedDays})
    }
  }

  async function handleSubmit () {
    const bodyPost = {};
    bodyPost.name = userInfo.form;
    bodyPost.days = pageConfig.isSelected;
    setPageConfig({ ...pageConfig, loading: true });
    try {
      const response = await TrackltApi.postHabit(bodyPost, userInfo.token);
      setPageConfig({ ...pageConfig, loading: false });
      setHabits([...habits, response.data]);
      resetForm()
    } catch (error) {
      alert(error);
      setPageConfig({ ...pageConfig, loading: false });
    }
  }

  function resetForm(){
    setPageConfig({...pageConfig, form: ""})
    setUserInfo({...userInfo, form: "", days: []})
    setShowForm(false)
  }

  function handleOnChange(event){
    setPageConfig({ ...pageConfig, form: event.target.value })
    setUserInfo({...userInfo, form: event.target.value})
  }

  function handleDeleteHabit (id) {
    const transformedHabits = habits.filter(habit => habit.id !== id);
    // eslint-disable-next-line no-restricted-globals
    const confirmDelete = window.confirm("Essa ação é irreversível, tem certeza que deseja deletar?");

    async function deleteHabitEvent () {
      try {
        TrackltApi.deleteHabit(id, userInfo.token);
        setHabits(transformedHabits);
      } catch (error) {
        alert(error);
      }
    }
    if (confirmDelete) {
      deleteHabitEvent();
    }
  }

  return (
    <Container>
      {!value ? <InputField
        text="nome do hábito"
        type="text"
        required={false}
        disabled={pageConfig.loading}
        value={userInfo.form || pageConfig.form}
        onChangeFunction={handleOnChange}
      /> :
        <HabitTitle>
          {value}
          <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512" onClick={() => handleDeleteHabit(id)}>
            <title>Trash</title>
            <path d="M112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
            <path stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M80 112h352" />
            <path d="M192 112V72h0a23.93 23.93 0 0124-24h80a23.93 23.93 0 0124 24h0v40M256 176v224M184 176l8 224M328 176l-8 224" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
          </svg>
        </HabitTitle>}
      {days.map((day, index) =>
        <ButtonDay disabled={pageConfig.loading || value} key={index} isSelected={pageConfig.isSelected.includes(index)} onClick={() => handleButtonDayClick(index)}>
          {day.charAt(0)}
        </ButtonDay>
      )}
      {!value && <ButtonsContainer>
        <button onClick={() => setShowForm(false)}>Cancelar</button>
        <Button onClickFunction={handleSubmit} text={"Salvar"} loading={pageConfig.loading} />
      </ButtonsContainer>}
    </Container>
  );
}
