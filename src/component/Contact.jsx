import React from "react";
import "../Style/Contact.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  AOS.init();

  return (
    <div className="container-contact">
      <div className="cardcontact-container" data-aos="fade-up" duration="1000">
        <div className="left" data-aos="fade-left" duration="1000">
          <div className="left-container">
            <h2>Hubungi Kami</h2>
            <br />
          </div>
        </div>
        <div className="right" data-aos="fade-right" duration="1000">
          <form action="https://formspree.io/f/xdoqyjwy" method="POST">
            <div className="form-group">
              <label htmlFor="name">Nama:</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="form-control"
                placeholder="Nama"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="form-control"
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Pesan:</label>
              <textarea
                id="message"
                name="message"
                required
                className="form-control"
                placeholder="Pesan"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Kirim
            </button>
          </form>

          <div className="social-media">
            <h3>Hubungi Kami di Sosial Media:</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
