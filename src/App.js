import './App.css';
import Home from './Pages/Home/Home/Home';
import Navbar from './Pages/Shared/Navabar/Navbar';
import { Routes, Route } from "react-router-dom";
import CreateChallenges from './Pages/CreateChallenges/CreateChallenges';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/create-challenges' element={<CreateChallenges></CreateChallenges>}></Route>
      </Routes>
    </div>
  );
}

export default App;
