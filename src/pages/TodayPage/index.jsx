import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TrackltService from '../../service/tracklit.api';
import DayJs from "dayjs";
import { UserContext } from '../../contexts/user/userContext';
import { MainContent } from '../HabitsPage/styles';
import { convertDay, formatZero } from '../../constants/utils';

import { Container, TitleToday, HabitParagraph, HabitCard } from './styles';

export default function TodayPage () {
    // States and Contexts
    const [todayHabits, setTodayHabits] = React.useState([]);
    const [userInfo, setUserInfo] = React.useContext(UserContext);
    // Constants
    const hasDoneHabit = todayHabits.some(habit => habit.done);
    const TrackltApi = new TrackltService();

    React.useEffect(() => {
        async function fetchHabit () {
            try {
                const response = await TrackltApi.getHabitToday(userInfo.token);
                setTodayHabits(response.data);
            } catch (e) {
                alert(e.message);
            }
        }
        fetchHabit();
    }, []);

    React.useEffect(() => {
        const doneHabits = todayHabits.filter(habit => habit.done);
        const progress = (doneHabits.length / todayHabits.length) * 100;
        setUserInfo({ ...userInfo, progress: progress || 0 });
    }, [todayHabits]);

    async function handleDoneHabits (habit) {
        try {
            if (habit.done) {
                toggleCheckedButton(habit);
                await TrackltApi.postUndoneHabit(habit.id, userInfo.token);
            } else {
                toggleCheckedButton(habit);
                await TrackltApi.postDoneHabit(habit.id, userInfo.token);
            }
        } catch (error) {
            alert(error);
        }
    }

    function toggleCheckedButton (habit) {
        const transformedHabits = todayHabits.map(todayHabit => todayHabit.id === habit.id ?
            { ...todayHabit, done: !habit.done, currentSequence: !habit.done ? todayHabit.currentSequence + 1 : todayHabit.currentSequence - 1 } : todayHabit);
        setTodayHabits(transformedHabits);
    }

    return (
        <Container>
            <Header />
            <MainContent>
                <TitleToday>
                    <h2 data-test="today">{convertDay(DayJs().day())}, {formatZero(DayJs().date())}/{formatZero(DayJs().month() + 1)}</h2>
                    {!hasDoneHabit ?
                        <HabitParagraph habits={hasDoneHabit} data-test="today-counter">
                            Nenhum hábito concluído ainda
                        </HabitParagraph> :
                        <HabitParagraph habits={hasDoneHabit} data-test="today-counter">
                            {Math.round(userInfo.progress)}% dos hábitos concluídos
                        </HabitParagraph>
                    }
                </TitleToday>
                {todayHabits && todayHabits.map(habit => (
                    <HabitCard key={habit.id} habit={habit.done} data-test="today-habit-container">
                        <div>
                            <h3 data-test="today-habit-name">
                                {habit.name}
                            </h3>
                            <p data-test="today-habit-sequence">
                                Sequência atual: <span style={{color: habit.done ? '#8FC549' : '#666666'}} habit={habit.done}>{habit.currentSequence} {habit.currentSequence > 1 ? "dias" : "dia"}</span>
                            </p>
                            <p data-test="today-habit-record">
                                Seu Recorde: <span style={{color: habit.highestSequence === habit.currentSequence ? '#8FC549' : '#666666'}}>{habit.highestSequence} {habit.highestSequence > 1 ? "dias" : "dia"}</span>
                            </p>
                        </div>
                        <svg data-test="today-habit-check-btn" xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512" onClick={() => handleDoneHabits(habit)}>
                            <title>Checkbox</title>
                            <path d="M400 48H112a64.07 64.07 0 00-64 64v288a64.07 64.07 0 0064 64h288a64.07 64.07 0 0064-64V112a64.07 64.07 0 00-64-64zm-35.75 138.29l-134.4 160a16 16 0 01-12 5.71h-.27a16 16 0 01-11.89-5.3l-57.6-64a16 16 0 1123.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0124.5 20.58z" />
                        </svg>
                    </HabitCard>
                ))}
            </MainContent>
            <Footer />
        </Container>
    );
}
