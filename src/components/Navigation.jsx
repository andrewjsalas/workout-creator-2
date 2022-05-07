import { Navbar, Nav, Container } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"

const Navigation = () => {
  return (
    <>
      <Navbar collapseOnSelect fixed="top" expand='sm' bg="dark" variant="dark">
        <Container>

          <Navbar.Toggle aria-controls="rexponsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">

            <Nav className="container-fluid nav-list">
              <LinkContainer to='/'>
                <Nav.Link className="active mx-2">Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/exerciseSearch'>
                <Nav.Link className="mx-2">Exercise Search</Nav.Link>      
              </LinkContainer>
              <LinkContainer to='/about'>
                <Nav.Link className="mx-2">About</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/myWhiteBoard'>
                <Nav.Link className='mx-2'>My Whiteboard</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/profile'> 
                <Nav.Link className="ms-auto mx-2">Profile</Nav.Link>
              </LinkContainer>
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Navigation