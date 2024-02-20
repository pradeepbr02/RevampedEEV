import NavBar from "./NavBar";
import "./Form.css";
import Submit from "./Submit";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
const Form = ({form , setForm})=>{
 
 
   
    return (
      
       <>
    
      
        <NavBar/>
      <div className="container">
        <div className="question">
            <p className="q1" style={{color : "white", height : "10px"}}>Question</p>
          <p className="q">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className="writing-area">
          
            <textarea className="typing" placeholder="Type your answer here ...."/>
        </div>
        <div className="btn">
        <button className="submit-btn"><strong>SUBMIT</strong></button>
        </div>
      </div>
   

   
        </> 
    )
}

export default Form;