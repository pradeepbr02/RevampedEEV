import NavBar from "./NavBar";
import "./Form.css";
import {useState} from 'react'
import Modal from "./Modal";
const Form = () => {
  const[modal , setModal] = useState(false);
  return (
    <>
       <NavBar />
       {
        modal && <Modal modal = {modal} setModal ={setModal}/>
       }
      <div className="container">
        <div className="question">
          <p className="q1" style={{ color: "white", height: "10px" }}>
            Question
          </p>
          <p className="q">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries.
          </p>
        </div>
        <div className="writing-area">
          <textarea
            className="typing"
            placeholder="Type your answer here ...."
          />
        </div>
        <div className="btn">
       
            <button className="submit-btn" onClick={()=>setModal(!modal)}>
              <strong>SUBMIT</strong>
            </button>
      
        </div>
      </div> 
    </>
  );
};

export default Form;
