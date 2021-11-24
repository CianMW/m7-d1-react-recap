import { Form, FormControl, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import clipart from "../imageAssets/clipart329592.png";

const MyNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark">
     
      <Link to="/">
        <img src={clipart} height="50px" width="50px" />
      </Link>
      <Link to="/">
      <Nav className="ml-4 mr-auto">
        <span>Home</span>
      </Nav>
      </Link>
      <Link to="/favourites">
      <Nav className="ml-4 mr-auto">
        <span>Favourites</span>
      </Nav>
      </Link>
    </Navbar>
  );
};

export default MyNavbar;
