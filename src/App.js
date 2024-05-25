// import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }
  const toggleMode =()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled","success");
      document.title='Textutils - Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
      document.title='Textutils - Light Mode';
    }
  }
  return (
   <>
   <BrowserRouter>
  <Navbar title="Textutils" aboutText="About us" mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
  <div className='container my-3'>
    <Routes>
      <Route path="/about" element={<About/>} />
    </Routes>
    <Routes>
    <Route path="/" element={
      <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/>
     
    }/>
    </Routes>
  
 {/* <About/> */}
  </div>
  </BrowserRouter>
  </>
 

  
   
  );
}

export default App;
