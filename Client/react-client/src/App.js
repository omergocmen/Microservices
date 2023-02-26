import "./assets/css/style.css";
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import HomeContainer from "./routes/homeContainer";
import PublicContainer from "./routes/publicContainer";
import axios from "axios";
import { ToastContainer } from "react-toastify";

function App() {
  
  const params = new URLSearchParams({
    client_id: "WebMvcClient",
    client_secret: "secret",
    grant_type: "client_credentials"
  });

  useEffect(() => {
    axios
      .post("http://localhost:5001/connect/token",params.toString())
      .then((response) => {
        localStorage.setItem("baseToken",response.data.access_token);
      })
  }, []);



  return (
    <div className="App">
      <Routes>
        <Route exact path="/home/*" element={<HomeContainer />} />
        <Route exact path="/*" element={<PublicContainer />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
