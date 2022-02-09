
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode]= useState('light');
  const toggleMode=()=>{
    if (mode=='light'){
      setMode('dark')
      document.body.style.backgroundColor='grey'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
    }
    
  }
  
  
  
  
  return (
    <>
    
<Navbar title="TransformText" mode={mode} toggleMode={toggleMode}/>
<h1>
      </h1>
<div className='container my-3'>

<TextForm heading="Capatalize Your Text" mode={mode}/>

</div>
    </>
  );
}

export default App;
