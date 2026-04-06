import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Chiron from './pages/Chiron';
import Bolide from './pages/Bolide';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chiron" element={<Chiron />} />
        <Route path="/bolide" element={<Bolide />} />
      </Routes>
    </Router>
  );
}

export default App;
