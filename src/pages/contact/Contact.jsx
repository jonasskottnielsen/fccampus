import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { ContactForm, Footer } from "../../components";

import './contact.css'

const Contact = () => {
  return (
    <>
      <div className="section__padding">
        <div className="container">
          <div className="content left">
            <h1 className="title gradient__text">Kontakt Os</h1>
            <p>Alle henvendelser går direkte til vores kontakt mail. Vi tager fat i dig hurtigst muligt. </p> 
            <p>Du kan dog med fordel skrive til os på vores sociale medier.</p>
            <dic className="socials">
              <FaFacebook size={27} />
              <FaInstagram size={27} />
            </dic>
          </div>
          <div className="content right">
            <ContactForm />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;