import './App.css';
import LandingPage from './pages/landingPage/LandingPage';
import Dashboard from './pages/dashboard/Dashboard';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
