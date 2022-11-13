import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Main from "./pages/Main";
import Manual from "./pages/Manual";
import Rules from "./pages/Rules";
import CustomCoin from "./pages/CustomCoin";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="bg-dark text-light w-full h-full min-h-screen flex flex-col">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/manual" element={<Manual />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/custom-coin" element={<CustomCoin />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
