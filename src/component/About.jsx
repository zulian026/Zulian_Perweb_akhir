import React from "react";
import "../Style/About.css";
import AOS from "aos";
import "aos/dist/aos.css";
import profil from "../Image/profil.png";

const About = () => {
  AOS.init();

  return (
    <div className="container-contact">
      <div className="cardabout-container" data-aos="fade-up" duration="1000">
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
            <div className="profile-section">
              <h3><span>Identitas Saya</span></h3>
              <img src={profil} alt="Profile Image" />
              <h3>Universitas: Institut Teknologi Padang</h3>
              <h3>Jurusan: Teknik Informatika</h3>
              <h3>Mata Kuliah: Perancangan Web </h3>
              <h3>Proyek: Website Blog</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
