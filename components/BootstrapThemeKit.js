import { Container, Nav, Navbar, NavDropdown, Button } from "react-bootstrap";

const BootstrapThemeKit = () => {
  return (
    <>
      <Container>

        <code>
          Below are sample items from the bootstrap theme being implemented on
          this site
        </code>
      </Container>
      <Container fluid className="container p-5 pt-4 border my-5">
        <div className="row">
          <div className="col-4">
            <h1>h1 Header 1</h1>
            <h2>h2 Header 2</h2>
            <h3>h3 Header 3</h3>
            <h4>h4 Header 4</h4>
            <h5>h5 Header 5</h5>
            <h6>h6 Header 6</h6>
            <p>Pargraph Text</p>
            <p className="fw-bold">bold Pargraph Text</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic
              deserunt facere excepturi porro, exercitationem expedita?
            </p>
            <small>small text</small>
          </div>
          <div className="col-4">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="success">Success</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="warning">Warning</Button>
            <Button variant="info">Info</Button>
            <Button variant="light">Light</Button>
            <Button variant="dark">Dark</Button>
            <Button variant="link">Link</Button>
          </div>
          <div className="col-4">
            <Nav fill variant="tabs" defaultActiveKey="/home">
              <Nav.Item>
                <Nav.Link href="/home">Active</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1">Loooonger NavLink</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2">Link</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>
                  Disabled
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
        </div>
      </Container>
    </>
  );
};

export default BootstrapThemeKit;
