
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login.js";
import Verify from "./pages/verify.js";
import Start1 from "./pages/start1.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/start1" element={<Start1 />} />
      </Routes>
    </Router>
  );
}

export default App;
