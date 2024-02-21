import { useNavigate } from "react-router-dom";
import "./Card.css";
import React from "react";

const Card = ({form , setForm }) => {
const navigate  = useNavigate();
  return (
    
    <>
 
    <div className="card">
      <div className="card-header">
        <h1>Get Essay Title</h1>
      </div>
      <div className="card-body">
        <div className="essay-question">
          <p>
            <i>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              using 'Content here.{" "}
            </i>
          </p>
        </div>
        <div className="marks">
          <p className="maxi">
            Max Marks: <span className="max-marks">100</span>
          </p>
          <p className="mini">
            Min Marks: <span className="min-marks">50</span>
          </p>
        </div>
        
        <button className="attempt-btn" onClick={()=>navigate("/form")}><strong>ATTEMPT</strong></button>
        
        
      </div>
    </div>
    </>
    
  );
};
export default Card;
