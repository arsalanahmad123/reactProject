import logo from "../assets/airbnb.png";
import "../app.css";
export function Navbar(props) {
  return (
    <nav className={props.mode ? "DarkMode navbar" : "navbar"}>
      <img src={logo} alt="Airbnb logo" className="nav--logo" />
      <ul className="nav--links">
        <li>
          <a href="/" className="nav--link">
            Home
          </a>
        </li>
        <li>
          <a href="/" className="nav--link">
            About
          </a>
        </li>
        <li>
          <a href="/" className="nav--link active">
            Tours
          </a>
        </li>
        <li>
          <input
            type="checkbox"
            id="switch"
            className="checkbox nav--link"
            onClick={props.toggleDarkMode}
          />
          <label for="switch" className="toggle"></label>
        </li>
      </ul>
    </nav>
  );
}
