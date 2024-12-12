import { Routes, Route } from "react-router-dom";
import NewMessage from "./app/containers/NewMessage/NewMessage";
import Home from "./app/containers/Home/Home";
import ToolBar from "./components/ToolBar/ToolBar";

function App() {
  return (
    <div>
      <header>
        <ToolBar />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-message" element={<NewMessage />} />
        <Route path="*" element={"<div> Not found <div/>"} />
      </Routes>
    </div>
  );
}

export default App;
