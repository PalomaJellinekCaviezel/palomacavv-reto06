import { BrowserRouter, Routes, Route } from "react-router-dom";
import UseContext from "./context/UseContext";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Header from "./components/Header/Header";

function App() {
  return (
    <UseContext>
      <BrowserRouter basename="/palomacavv-reto06">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </BrowserRouter>
    </UseContext>
  );
}

export default App;
