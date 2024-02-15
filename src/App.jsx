import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "../Pages/home";
import { Easy } from "../Pages/easy";
import { Normal } from "../Pages/Normal";
import { Hard } from "../Pages/Hard";

function App() {
  return (
    <BrowserRouter basename="/TENANSWERSGAME">
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/easy" element={<Easy />} />
          <Route path="/Normal" element={<Normal />} />
          <Route path="/Hard" element={<Hard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
