import Nav from 'react-bootstrap/Nav';
import './NavT.css';
function AlignmentExample() {
  return (
    <>
      <Nav style={{backgroundColor:"black",borderRadius:"10px"}} className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link id="top" href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link id="top" eventKey="link-1">News</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link id="top" eventKey="link-2">Sport</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link id="top" eventKey="link-2">Business</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link id="top" eventKey="link-2">Innovation</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link id="top" eventKey="link-2">Culture</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link id="top" eventKey="link-2">Travel</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link id="top" eventKey="link-2">Earth</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link id="top" eventKey="link-2">Video</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link id="top" eventKey="link-2">Live</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        </Nav.Item>
      </Nav>
      {/* <p className="text-center mt-4 mb-4">Or right-aligned</p>
      <Nav className="justify-content-end" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav> */}
    </>
  );
}

export default AlignmentExample;