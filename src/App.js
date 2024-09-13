// import logo from "./logo.svg";
import { Routes, Route, HashRouter } from "react-router-dom";
// import PrivateRoute from "./PrivateRoute";
import "./App.css";
import Login from "./login/Login";
import Signup from "./Signup/Signup";
import Chatbot from "./chatbot/Chatbot";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/chatbot" element={<Chatbot />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
