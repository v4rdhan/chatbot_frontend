// import logo from "./logo.svg";
import { Routes, Route, HashRouter } from "react-router-dom";
// import PrivateRoute from "./PrivateRoute";
import "./App.css";
import Login from "./login/Login";
import Signup from "./Signup/Signup";
// import Chatbot from "./chatbot/Chatbot";
import ChatbotMin from "./chatbot/chatbotMin";
import { useState } from "react";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const handleIsLogin = (e) => {
    setIsLogin(e);
  };

  return (
    <>
      <HashRouter>
        <Routes>
          <Route index element={<Login handleIsLogin={handleIsLogin} />} />
          <Route
            path="/login"
            element={<Login handleIsLogin={handleIsLogin} />}
          />
          <Route path="/signup" element={<Signup />} />
          {/* <Route path="/chatbot" element={<Chatbot />} /> */}
          <Route
            path="/chatbotMin"
            element={
              isLogin ? <ChatbotMin /> : <Login handleIsLogin={handleIsLogin} />
            }
          />
          {console.log(isLogin)}
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
