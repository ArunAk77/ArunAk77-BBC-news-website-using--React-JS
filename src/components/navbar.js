import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function NavScroll() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid style={{backgroundColor: "#343a40",height:"75px"}}>
        <img style={{width:"200px",height:"100px"}} src='https://download.logo.wine/logo/BBC_News/BBC_News-Logo.wine.png' alt='logo'/>
        <Navbar.Brand href="#"> <h3><span style={{color:"red",fontSize:"50px"}}>Hot </span> News!</h3></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link style={{color:"white"}} href="#action1">Books</Nav.Link>
            <Nav.Link style={{color:"white"}} href="#action2">Links</Nav.Link>
            <NavDropdown title="Products" id="navbarScrollingDropdown">
              <NavDropdown.Item  href="#action3">Papers </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Magazines
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Pacts
              </NavDropdown.Item>
            </NavDropdown>
            {/* <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
          </Nav>
          <Form style={{boxShadow:"-5px 8px 12px black",padding:'5px',borderRadius:'10px'} } className="d-flex">
            <Form.Control style={{border:'2px solid black'}}
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button style={{backgroundColor:"skyblue"}} variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScroll;