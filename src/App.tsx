import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './componentes/Home';
import Faltas from './componentes/Faltas';
import ComputarPresenca from './componentes/ComputarPresenca';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faltas" element={<Faltas />} />
        <Route path="/computar" element={<ComputarPresenca />} />
      </Routes>
    </Router>
  );
}

export default App;