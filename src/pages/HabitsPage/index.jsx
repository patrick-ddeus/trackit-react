import React from 'react';
import TrackltService from '../../service/tracklit.api';
import { UserContext } from '../../contexts/userContext';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HabitForm from './HabitsForm/HabitForm';
import { Container, MainContent, TitleHabit, NoHabitContainer } from './styles';
export default function TodayPage () {
    const [userInfo, setUserInfo] = React.useContext(UserContext);
    const [habits, setHabits] = React.useState([]);
    const [showForm, setShowForm] = React.useState(false);

    React.useEffect(() => {
        const TrackltApi = new TrackltService();

        async function fetchHabits () {
            try {
                const response = await TrackltApi.getHabits(userInfo.token);
                setHabits(response.data);
            } catch (e) {
                alert(e.message);
            }
        }
        if (userInfo) {
            fetchHabits();
        }
    }, []);

    return (
        <Container>
            <Header />
            <MainContent className="fade-in">
                <TitleHabit>
                    <h2>Meus hábitos</h2>
                    <button onClick={() => setShowForm(true)} data-test="habit-create-btn">+</button>
                </TitleHabit>
                {showForm && <HabitForm setShowForm={setShowForm} habits={habits} setHabits={setHabits} />}
                {habits.length !== 0 ? habits.map(habit => (
                    <HabitForm key={habit.id} value={habit.name} habits={habits} setHabits={setHabits} selectedDays={habit.days} id={habit.id} />
                )) :
                    <NoHabitContainer>
                        <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                    </NoHabitContainer>}
            </MainContent>
            <Footer />
        </Container>
    );
}
