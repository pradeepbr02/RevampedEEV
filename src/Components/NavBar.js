import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faGear,
  faQuestion,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <nav>
      <div className="div1">
        <l1>
          <FontAwesomeIcon icon={faBars} />
        </l1>
        <l1>Company X</l1>
      </div>
      <div className="div2">
        <input
          className="searchbar"
          type="search"
          placeholder="  Search.."
        ></input>
        <FontAwesomeIcon
          style={{ paddingRight: "5px" }}
          icon={faSearch}
          className="search-icon"
        />
      </div>
      <div className="div3">
        <l1>
          <FontAwesomeIcon icon={faQuestion} />
        </l1>
        <l1>
          <FontAwesomeIcon icon={faGear} />
        </l1>
      </div>
    </nav>
  );
};
export default NavBar;
