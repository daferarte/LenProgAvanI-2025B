import React from "react";
import Saludo from './components/Saludo';
import FormularioLogin from "./components/FormularioLogin";

function App(){
  return(
    <div style={{textAlign:'center', marginTop:'2rem'}}>
      <h1> Mi primer proyecto</h1>
      <FormularioLogin/>
      <Saludo nombre="Daniel" />
    </div>
  )
}

export default App;