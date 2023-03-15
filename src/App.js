import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { UserContext } from "./contexts/user/userContext";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import TodayPage from "./pages/TodayPage";
import HabitsPage from "./pages/HabitsPage";
import HistoricPage from "./pages/HistoricPage";


function App () {
  const [userInfo, setUserInfo] = React.useState(JSON.parse(localStorage.getItem("userInfo")) || null);
  return (
    <UserContext.Provider value={[userInfo, setUserInfo]}>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/cadastro" element={<RegisterPage />} />
          <Route path="/hoje" element={<TodayPage />} />
          <Route path="/habitos" element={<HabitsPage />} />
          <Route path="/historico" element={<HistoricPage />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
