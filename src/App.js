import './App.css';
import Home from './Pages/Home/Home/Home';
import Navbar from './Pages/Shared/Navabar/Navbar';
import { Routes, Route } from "react-router-dom";
import CreateChallenges from './Pages/CreateChallenges/CreateChallenges';
import EventParticipate from './Pages/EventParticipate/EventParticipate';
import EditChallenges from './Pages/EditChallenges/EditChallenges';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/create-challenges' element={<CreateChallenges></CreateChallenges>}></Route>
        <Route path='/event-participate' element={<EventParticipate></EventParticipate>}></Route>
        <Route path='/edit-participate' element={<EditChallenges></EditChallenges>}></Route>
      </Routes>
    </div>
  );
}

export default App;
