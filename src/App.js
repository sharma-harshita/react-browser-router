import './App.css';
import { Header } from './components/Header';
import {Routes, Route} from "react-router-dom"
import { Home } from './components/Home';
import { Contact } from './components/Contact';
import { Career } from './components/Career';
import { Support } from './components/Support';
import { Team } from './components/Team';
import { NotFound } from './components/NotFound';
import Student from './components/Student';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/career" element={<Career/>}/>
        <Route path="/support" element={<Support/>}/>
        <Route path="/team" element={<Team/>}/>
        <Route path="/students/:stuId" element={<Student/>}/>
        <Route path="/*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
