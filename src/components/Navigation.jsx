import { Navbar, Nav, Container } from "react-bootstrap"

const Navigation = () => {
  return (
    <>
      <Navbar collapseOnSelect fixed="top" expand='sm' bg="dark" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="rexponsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="container-fluid nav-list">
              <Nav.Link className="active mx-2">Home</Nav.Link>
              <Nav.Link className="mx-2">Exercise Search</Nav.Link>
              <Nav.Link className="mx-2">About</Nav.Link>
              <Nav.Link className="ms-auto mx-2">Profile</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Navigation