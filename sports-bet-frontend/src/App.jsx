import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import OddsConverter from "./pages/OddsConverter";
import Calculator from "./pages/Calculator";
import Explain from "./pages/Explain";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/odds-converter" element={<OddsConverter />} />
        <Route path="/arbitrage-calculator" element={<Calculator />} />
        <Route path="/explain" element={<Explain />} />
      </Routes>
    </Router>
  );
}

export default App;
