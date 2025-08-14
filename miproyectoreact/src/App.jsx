import React from "react";
import Saludo from './components/Saludo';

function App(){
  return(
    <div style={{textAlign:'center', marginTop:'2rem'}}>
      <h1> Mi primer proyecto</h1>
      <Saludo nombre="Daniel" />
    </div>
  )
}

export default App;