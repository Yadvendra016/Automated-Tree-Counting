import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Profile from "./profile/Profile";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/organization/:username" element={<Profile />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
