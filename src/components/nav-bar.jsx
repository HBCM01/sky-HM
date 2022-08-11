import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div>
        <div className="sky-transition" />
        <div className="nav-header">
          <Link to={"/"}>
            <img
              className="nav-logo"
              alt="sky logo"
              src={require("../images/skylogo.png")}
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
