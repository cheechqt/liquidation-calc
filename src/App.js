import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import "./App.css";

function App() {
  return (
    <div className="bg-black h-full w-full">
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
