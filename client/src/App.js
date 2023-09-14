import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import { Toaster } from "react-hot-toast";
import Projects from "./projects/Projects";
import ImpageUpload from "./ImpageUpload/ImpageUpload";
import Result from "./result/Result";

function App() {
  return (
    <>
      <div>
        <Toaster position="top-center"></Toaster>
      </div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/image-upload" element={<ImpageUpload />} />
        <Route path="/result" element={<Result />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
