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
            <h2>Tentang Kami</h2>
            <p>
              Website ini adalah blog untuk belajar dari paling dasar, dirancang
              khusus untuk membantu pemula memahami konsep dasar dalam
              pemrograman dan pengembangan web. Kami menyediakan tutorial, dan
              sumber daya yang mudah diikuti untuk membantu Anda memulai
              perjalanan belajar coding Anda.
            </p>

            <br />
          </div>
        </div>
        <div className="right" data-aos="fade-right" duration="1000">
          <h2>Hubungi Kami</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Nama:</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="nama"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder=" email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Pesan:</label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="message"
              ></textarea>
            </div>
            <button type="submit">Kirim</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
