import { Container } from "react-bootstrap";

function Footer() {
  return (
    <footer className="footer__wrapper">
      <div className="footer__banner"></div>
      <div className="footer">
        <Container className="footer__content">
          <span className="footer__copyright">
            Copyright 2022 © Sérgio Gameiro
          </span>{" "}
          <a href="https://www.instagram.com/padrinhosergio_/">
            <span className="instagram-icon"></span>
          </a>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
