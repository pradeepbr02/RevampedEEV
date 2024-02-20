import Wrapper from "./Components/Wrapper";
import "./App.css";
import Card from "./Components/Card";
import NavBar from "./Components/NavBar";
import Form from "./Components/Form";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Submit from "./Components/Submit";
function App() {
  const[form , setForm] = useState(false);
  
  return (
    // <Submit/>
  
    <>
   
   
    {/* <NavBar />
  
    <Wrapper>
      <Card form = {form} setForm = {setForm}  />
      <Card form = {form} setForm = {setForm}  />
      <Card form = {form} setForm = {setForm} />
      <Card form = {form} setForm = {setForm}  />
      <Card form = {form} setForm = {setForm}   />
      <Card form = {form} setForm = {setForm}   />
    </Wrapper>  */}
   <Form/>
    {/* <Submit/> */}
    </> 

  );
}

export default App;
