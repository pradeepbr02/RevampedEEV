import NavBar from "./NavBar";
import "./Submit.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
const Submit = () => {
  const navigate = useNavigate();
  return (
    <>
      <NavBar />
      <div className="container2">
        <div className="box">
          <h1 style={{ color: "#ffce33", textAlign: "center" }}>
            SUBMISSION SUCCESSFULL
          </h1>

          <div className="graded-score">
            <p>Graded Score</p>

            <p>60</p>
          </div>
          <div className="max-score">
            <p>Maximum Score</p>

            <p>100</p>
          </div>
        </div>
        <div className="summary">
          <h2 style={{ height: "20px", width: "100%", color: "#4b0082" }}>
            YOUR ESSAY
          </h2>
          <p style={{ fontStyle: "italic" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.Why do we use it? It is
            a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution
            of letters, as opposed to using 'Content here, content here', making
            it look like readable English. Many desktop publishing packages and
            web page editors now use Lorem Ipsum as their default model text,
            and a search for 'lorem ipsum' will uncover many web sites still in
            their infancy. Various versions have evolved over the years,
            sometimes by accident, sometimes on purpose injected humour and the
            like.Where does it come from? Contrary to popular belief, Lorem
            Ipsum is not simply random text. It has roots in a piece of
            classical Latin literature from 45 BC, making it over 2000 years
            old. Richard McClintock, a Latin professor at Hampden-Sydney College
            in Virginia, looked up one of While working on Git, developers
            commit to save changes to the local repository. Sometimes, they get
            the “Git author Unknown” error while commenting on Git. This error
            occurs when the author’s information has not been added to the Git
            configuration file. In order to make commits, it is required to add
            the username and email. This study will explain:
          </p>
        </div>

        <button className="submit2-btn" onClick={() => navigate("/")}>
          <div>
            {" "}
            <FontAwesomeIcon icon={faBackward} />
          </div>
          <div>
            <strong>Go Back</strong>
          </div>
        </button>
      </div>
    </>
  );
};
export default Submit;
