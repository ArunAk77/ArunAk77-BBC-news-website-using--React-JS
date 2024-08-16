import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import './ImageCard.css';

const ImageCards = () => {
  return (
    <Row xs={1} md={2} lg={3} className="g-4">
      <Col>
        <Card id="cardss" style={{backgroundColor:"black",color:"white",padding:'10px',transition:"0.6s"}}>
          <Card.Img variant="top" src="https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2024-08/240813-Eliquis-al-1435-a244b3.jpg" />
          <Card.Body>
            <Card.Title>Medicare Costs Lowered</Card.Title>
            <Card.Text>
            The Biden administration said Thursday that it had reached an agreement with drugmakers to lower prices on the 10 costliest prescription drugs under Medicare.
            </Card.Text>
            <Button variant="primary">Explore more</Button>
          </Card.Body>
        </Card>
      </Col>

      <Col>
        <Card id="cardss" style={{backgroundColor:"black",color:"white",padding:'10px',transition:"0.6s"}}>
          <Card.Img variant="top" src="https://media.cnn.com/api/v1/images/stellar/prod/ap24228105687962.jpg?c=16x9&q=w_800,c_fill" />
          <Card.Body>
            <Card.Title>MLB history</Card.Title>
            <Card.Text>
            New York Yankees star outfielder Aaron Judge is no stranger to making Major League Baseball history, and on Wednesday he did it again.
            </Card.Text>
            <Button variant="primary">Explore more</Button>
          </Card.Body>
        </Card>
      </Col>

      <Col>
        <Card id="cardss" style={{backgroundColor:"black",color:"white",padding:'10px',transition:"0.6s"}}>
          <Card.Img variant="top" src="https://image.cnbcfm.com/api/v1/image/108010689-17217627442024-07-23t192240z_2080561786_rc2619afuuu9_rtrmadp_0_usa-election-harris.jpeg?v=1721762768&w=1920&h=1080" />
          <Card.Body>
            <Card.Title>Harris to propose federal ban</Card.Title>
            <Card.Text>
            Vice President Kamala Harris would expand FTC authority to help enforce a proposed federal ban on excessive prices in the food industry.
            </Card.Text>
            <Button variant="primary">Explore more</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card id="cardss" style={{backgroundColor:"black",color:"white",padding:'10px',transition:"0.6s"}}>
          <Card.Img variant="top" src="https://dims.apnews.com/dims4/default/1ef7f8b/2147483647/strip/true/crop/6330x3561+0+330/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fb0%2Fcc%2Ff7cfebc7c4a21365fda12e490221%2Fdbcbe15c55874093ab3d9b8eade2e736" />
          <Card.Body>
            <Card.Title>Ukraine's incursion deep into Russian territory</Card.Title>
            <Card.Text>
            The shock of Ukraine’s thunder run revealed chinks in the armor of its powerful adversary.
            </Card.Text>
            <Button variant="primary">Explore more</Button>
          </Card.Body>
        </Card>
      </Col>

      <Col>
        <Card id="cardss" style={{backgroundColor:"black",color:"white",padding:'10px',transition:"0.6s"}}>
          <Card.Img variant="top" src="https://media.nbcsportsbayarea.com/2024/08/jim-harbaugh-colin-kaepernick-GettyImages-160613610.jpg?quality=85&strip=all&resize=1200%2C675" />
          <Card.Body>
            <Card.Title>Kaepernick ‘considering' Chargers coaching offer from Harbaugh</Card.Title>
            <Card.Text>
            Los Angeles Chargers head coach Jim Harbaugh wants to reunite with Colin Kaepernick in the NFL, but in a different kind of partnership than last time.
            </Card.Text>
            <Button variant="primary">Explore more</Button>
          </Card.Body>
        </Card>
      </Col>

      <Col>
        <Card  id="cardss"style={{backgroundColor:"black",color:"white",padding:'10px',transition:"0.6s"}}>
          <Card.Img variant="top" src="https://media.nbcsportschicago.com/2024/07/GettyImages-1464788047-e1723680451893.jpg?quality=85&strip=all&crop=0px%2C41px%2C3616px%2C2121px&resize=1200%2C675" />
          <Card.Body>
            <Card.Title>Report: Bears were finalists in Matthew Judon sweepstakes</Card.Title>
            <Card.Text>
            Report: Bears were finalists in Matthew Judon sweepstakes
            </Card.Text>
            <Button variant="primary">Explore more</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card id="cardss" style={{backgroundColor:"black",color:"white",padding:'10px',transition:"0.6s"}}>
          <Card.Img variant="top" src="https://cdn.abcotvs.com/dip/images/15187499_081424-kabc-5pm-la-olympics-pt-2-vid.jpg?w=1600" />
          <Card.Body>
            <Card.Title>Car-free zones, remote work being explored as ways to address traffic in LA during 2028 Olympics</Card.Title>
            <Card.Text>
            Organizers and elected officials have approached the 2028 Olympics in L.A. as a deadline to expand and complete ambitious transportation projects.
            </Card.Text>
            <Button variant="primary">Explore more</Button>
          </Card.Body>
        </Card>
      </Col>

      <Col>
        <Card id="cardss" style={{backgroundColor:"black",color:"white",padding:'10px',transition:"0.6s"}}>
          <Card.Img variant="top" src="https://media.nbcsportsbayarea.com/2024/08/Steph-Curry-Golden-Dagger-USATSI.jpg?quality=85&strip=all&resize=1200%2C675" />
          <Card.Body>
            <Card.Title>Is Steph's ‘Golden Dagger' his most memorable moment? Fans weigh in</Card.Title>
            <Card.Text>
            Steph Curry has produced countless iconic moments during his basketball career. But was his gold-medal sealing shot in Team USA's win over France his most...
            </Card.Text>
            <Button variant="primary">Explore more</Button>
          </Card.Body>
        </Card>
      </Col>

      <Col>
        <Card id="cardss" style={{backgroundColor:"black",color:"white",padding:'10px',transition:"0.6s"}}>
          <Card.Img variant="top" src="https://cdn.arstechnica.net/wp-content/uploads/2024/08/PIA17254large-760x380.jpg" />
          <Card.Body>
            <Card.Title>NASA shuts down asteroid-hunting telescope, but a better one is on the way</Card.Title>
            <Card.Text>
            The NEOWISE spacecraft is on a course to fall out of orbit in the next few months.
            </Card.Text>
            <Button variant="primary">Explore more</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card id="cardss" style={{backgroundColor:"black",color:"white",padding:'10px',transition:"0.6s"}}>
          <Card.Img variant="top" src="https://neurosciencenews.com/files/2024/08/inferential-reasoning-neuroscience.jpg" />
          <Card.Body>
            <Card.Title>How the Brain Learns to Make Inferences</Card.Title>
            <Card.Text>
            Researchers have uncovered how the brain processes inferential reasoning by recording neuron activity in individuals as they learned through trial and error.
            </Card.Text>
            <Button variant="primary">Explore more</Button>
          </Card.Body>
        </Card>
      </Col>

      <Col>
        <Card id="cardss" style={{backgroundColor:"black",color:"white",padding:'10px',transition:"0.6s"}}>
          <Card.Img variant="top" src="https://static.independent.co.uk/2024/08/15/08/GettyImages-2165916443.jpg?quality=75&width=1200&auto=webp" />
          <Card.Body>
            <Card.Title> ‘Blake Lively interview made me want to quit my job’: Journalist shares clip amid It Ends With Us drama</Card.Title>
            <Card.Text>
            Fans have called out the actor for being ‘rude’ and ‘bullying’ the reporter in the 2016 sit-down
            </Card.Text>
            <Button variant="primary">Explore more</Button>
          </Card.Body>
        </Card>
      </Col>

      <Col>
        <Card id="cardss" style={{backgroundColor:"black",color:"white",padding:'10px',transition:"0.6s"}}>
          <Card.Img variant="top" src="https://dims.apnews.com/dims4/default/9f04aba/2147483647/strip/true/crop/4500x2531+0+234/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fdb%2F4a%2Ff645a3382111d3aec57c24fe1149%2Fa443df9f7dc74d419126c61505888372" />
          <Card.Body>
            <Card.Title>Disney argues wrongful death suit should be tossed because plaintiff signed up for Disney+ trial</Card.Title>
            <Card.Text>
            Disney is asking a Florida court to dismiss a lawsuit brought by the husband of a New York doctor who suffered a fatal allergic reaction after eating at a restaurant in Disney Springs.
            </Card.Text>
            <Button variant="primary">Explore more</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    
  );
};

export default ImageCards;
