import "./style/footer.css";
import { FaLinkedin, FaWhatsappSquare, FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="content-footer">
      <section className="logo">
        <h3>JS Mobile</h3>
        <span className="subtitle">Tec. em Desenvolvimento</span>
      </section>
      <section className="socials-media">
        <FaLinkedin color={'#c6c2c2'} size={26}/>
        <FaWhatsappSquare color={'#c6c2c2'} size={26}/>
        <FaGithub color={'#c6c2c2'} size={26}/>
      </section>
    </footer>
  );
};

export default Footer;
