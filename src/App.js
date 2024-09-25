
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Skill from './components/Skill';
import Qualification from './components/Qualification';
import Testmonial from './components/Testmonial';
import { Routes,Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Navbar/>
     <Routes>
        <Route path='*' element={<Home/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/skill' element={<Skill/>}/>
        <Route path='/qualification' element={<Qualification/>}/>
        <Route path='/testmonials' element={<Testmonial/>}/>
        
        
     </Routes>
    </div>
  );
}

export default App;
