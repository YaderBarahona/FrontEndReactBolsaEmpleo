import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";

const Navbar2 = () => {
  return (
    // <Navbar bg="light" expand="lg">
    //   <Container>
    //     <NavLink className="link parent-item capitalize nav-link" to="home">
    //       Home
    //     </NavLink>
    //   </Container>
    // </Navbar>

    <div id="navbar">
        <Navbar bg="ligth" expand="lg">
      <Container>
        <Nav className="me-auto">
          <NavLink className="link" to="home">
            Home
          </NavLink>
          <NavLink className="link" to="applicants">
            Add Applicant
          </NavLink>
          <NavLink className="link" to="applicantList">
            Applicant List
          </NavLink>
          <NavLink className="link" to="offerList">
            Offer List
          </NavLink>

          {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}

        </Nav>
      </Container>
    </Navbar>
    </div>
    
  );
};

export default Navbar2;
