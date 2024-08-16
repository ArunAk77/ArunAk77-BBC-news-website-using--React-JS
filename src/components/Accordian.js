import Accordion from 'react-bootstrap/Accordion';

function BasicExample() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item style={{backgroundColor:"black",color:'white'}} eventKey="0">
        <Accordion.Header >BBC Roles</Accordion.Header>
        <Accordion.Body>
        The BBC is the world's leading public service broadcaster
        We're impartial and independent, and every day we create distinctive, 
        world-class programmes and content which inform, 
        educate and entertain millions of people in the UK and around the world.
        BBC News gathers and produces national daily news, business, 
        political and current affairs programmes on BBC television and radio.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item style={{backgroundColor:"black",color:'white'}} eventKey="1">
        <Accordion.Header>BBC Sector</Accordion.Header>
        <Accordion.Body>
        BBC News is an operational business division of the British Broadcasting Corporation (BBC) responsible for the gathering and broadcasting of news and current affairs in the UK and around the world.
        A portfolio of television services, including the UK's most-watched channel BBC One and our multi award-winning channels for children, as well as national and regional television programmes and services across England, Northern Ireland, Scotland and Wales.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default BasicExample;