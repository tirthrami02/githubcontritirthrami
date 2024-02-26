import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function MyNavbar() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
    };
  return (
      <Navbar expand="lg" className="bg-body-tertiary" id="MyNavbar">
          <Container>
              <span class="material-symbols-outlined">
                  code
              </span>
              <Navbar.Brand>Tirth Rami - GitHub Contributions</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                      <Nav.Link className="github-link" href="https://github.com/tirthrami02" target='_blank'>My GitHub</Nav.Link>
                      <Nav.Link className="github-link" href="mailto:ramitirth77@gmail.com" target='_blank'>Contact me</Nav.Link>
                  </Nav>
              </Navbar.Collapse>
              <Button variant="primary" onClick={scrollToTop}>Scroll to Top</Button>
          </Container>
      </Navbar>
  )
}

export default MyNavbar;