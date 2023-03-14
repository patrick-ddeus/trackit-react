import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserContext } from "./contexts/user/userContext";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
function App () {
  const [userInfo, setUserInfo] = React.useState(null);

  return (
    <UserContext.Provider value={[userInfo, setUserInfo]}>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/cadastro" element={<RegisterPage />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
