import "./Navbar.css";
import logo from "../assets/images/logo.png";
const Navbar = () => {
  return (
    <div className="wrapper">
      <nav className="nav navbar shadow fixed-top" data-bs-theme="dark">
        <div className="container-fluid">
          <img className="logo" src={logo} alt="" />
          <form className="d-flex">
            <input
              type="text"
              className="form-control search-input"
              placeholder="Search a character"
            />
            <button className="btn btn-outline-darks" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
