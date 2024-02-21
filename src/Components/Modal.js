import "./modal.css";
import { Link } from "react-router-dom";
const Modal = ({modal , setModal})=>{
    return(
        
        <div className="modal-container">
          <div className="modal">
            <h1 className="sure">Are You Sure?</h1>
            <div className="btns-3">
            <span><button className="cancel" onClick={()=>setModal(()=>!modal)}>Cancel</button></span>
            <span>
              <Link to="/submit">
              <button className="yes">Yes</button>
              </Link>
              </span>
              </div>
          </div>
      </div>
   
    )
}
export default Modal;