import ResumeState from './Context/ResumeState';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Navbar from './Components/Navbar/Navbar';

function App() {

  return (
    <ResumeState>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
    </ResumeState>
  );
}

export default App;
