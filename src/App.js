import logo from './logo.svg';
import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Garrage from './Garrage';
import Welcome from './welcome';
import UseStateTest from './UseStateTest';
import Chagecolor from './chagecolor';
import LoginOut from './loginOut'; 
import Main from './Modules/Main'
import Info from './Modules/Appstructure/Header/Info';
import About from './Modules/Appstructure/Header/About';
import Contact from './Modules/Appstructure/Header/Contact';
import { Route, Routes } from 'react-router-dom';
import Nav from './Modules/Appstructure/Header/Nav';
function App() {
  return (
    <>  
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/about-us' element={<About/>}/>
      <Route path='/info' element={<Info/>}/>
      <Route path='/contact-us' element={<Contact/>}/> 

    </Routes>
      
    </>    
  );
}

export default App;
