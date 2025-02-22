import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/HomePage";
import ContactPage from "./Pages/ContactPage";
import ReactGA from "react-ga4";
import { useEffect } from "react";


function App() {
  useEffect(() => {
    ReactGA.initialize("G-8WYFXYG7M4");
  }, [])


  return (
    <>
      <div className="App">
        <h2>Hello, It's Amit Here welcoming you in my playground</h2>
      </div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
