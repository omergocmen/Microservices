import { Route, Routes } from "react-router-dom";
import "./assets/css/style.css";
import Login from "./pages/auth/login";
import AboutUs from "./pages/home/aboutUs";
import Contact from "./pages/home/contact";
import Home from "./pages/home/home";
import HomeContainer from "./routes/homeContainer";
import PublicContainer from "./routes/publicContainer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/home/*" element={<HomeContainer />} />
        <Route exact path="/*" element={<PublicContainer />} />
      </Routes>
    </div>
  );
}

export default App;
