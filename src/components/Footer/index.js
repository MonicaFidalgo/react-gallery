import { Container } from "react-bootstrap";

function Footer() {
  return (
    <footer className="footer mt-5">
      <Container className="footer__content">
        <span className="footer__copyright">
          Copyright 2022 © Sérgio Gameiro
        </span>{" "}
        <a href="https://www.instagram.com/padrinhosergio_/">
          <span className="instagram-icon"></span>
        </a>
      </Container>
    </footer>
  );
}

export default Footer;
