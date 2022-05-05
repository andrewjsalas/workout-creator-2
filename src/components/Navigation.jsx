import { Navbar, Nav, Container } from "react-bootstrap"

const Navigation = () => {
  return (
    <>
      <Navbar collapseOnSelect fixed="top" expand='sm' bg="dark" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="rexponsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link>Home</Nav.Link>
              <Nav.Link>Exercise Search</Nav.Link>
              <Nav.Link>About</Nav.Link>
              <Nav.Link>Profile</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Navigation