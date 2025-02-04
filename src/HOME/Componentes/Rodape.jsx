import "./Rodape.css";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";


function Rodape() {
  return (
    <div className="container-rodape">

        <div className="box-redes-socias">
      <div className="container-redes-socias">
        <a
          href="https://www.facebook.com/FundacaoBancodeOlhos"
          target="_blanck"
          rel="noopener noreferrer"
        >
          <FaFacebookF id="icon-redes-socias" />
        </a>

        <a
          href="https://www.instagram.com/fundacaobancodeolhos?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram id="icon-redes-socias" />
        </a>

        <a
          href="https://www.linkedin.com/company/funda%C3%A7%C3%A3o-banco-de-olhos-de-goi%C3%A1s/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn id="icon-redes-socias" />
        </a>
      </div>

      <div className="container-rodape-location">
        <a
          href="https://maps.app.goo.gl/oSPmNUVGRGhrfiWv5"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3 id="texto-location">
            Av. Couto Magalhães, nº50, Jardim da Luz 74850-410 Goiânia, GO,
            Brasil
          </h3>
        </a>
      </div>

        <div className="container-contatos">
            <div className="box-contatos">
        <FaPhone />
        <h4>(62) 3219-4100</h4>
            </div>
            <div className="box-contatos">
        <MdOutlineMail />
        <a href="mailto:fubog@fubog.org">
        <h4 id="contact-email">fubog@fubog.org</h4>
        </a>
            </div>
        </div>

        </div>
    </div>
  );
}

export default Rodape;
