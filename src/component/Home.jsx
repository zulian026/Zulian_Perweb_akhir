import React, { useEffect, useRef } from "react";
import { useTypewriter, cursor, Cursor } from "react-simple-typewriter";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import "../Style/Home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import homeImage from "../Image/home_image.jpg";
import Footer from "./Footer";

const Home = () => {
  const listTutorialRef = useRef(null);

  useEffect(() => {
    AOS.init();
  }, []);

  const scrollToTutorialList = () => {
    if (listTutorialRef.current) {
      listTutorialRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [typeEffect] = useTypewriter({
    words: ["Bareng."],
    loop: {},
    typeSpeed: 80,
    deleteSpeed: 20,
  });

  return (
    <div className="home-kontainer">
      <div className="boxx-1">
        <div
          className="content-satu"
          data-aos="fade-right"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
        >
          <h1>
            Ngoding<span>{typeEffect}</span>
            <span style={{ color: "blue" }}>
              <Cursor />
            </span>
            <br /> di Website Saya
          </h1>
          <p>
            Ini adalah halaman utama dari website yang menyediakan tutorial
            ngoding untuk pemula.
          </p>
          <Button onClick={scrollToTutorialList}>List Tutorial</Button>
        </div>

        <div className="content-dua">
          <img src={homeImage} alt="Coding Illustration" />
        </div>

        <div className="content-tiga" ref={listTutorialRef}>
          <h2>List tutorial</h2>
          <p>Update Beberapa Tutorial</p>
          <div
            className="card-container"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <Nav.Link href="/Zulian_Perweb_akhir/Materi">
              <Card style={{ width: "15rem" }}>
                <Card.Body>
                  <Card.Title style={{ fontWeight: "bold" }}>
                    Belajar Ngoding #1
                  </Card.Title>
                  <Card.Img
                    src="https://img.freepik.com/free-vector/web-developers-courses-computer-programming-web-design-script-coding-study-computer-science-student-learning-interface-structure-components_335657-1161.jpg?ga=GA1.1.185333785.1719150752&semt=sph"
                    style={{ width: "100%", height: "100%" }}
                  />
                  <Card.Text style={{ fontWeight: "bold" }}>
                    Tutorial HTML #1 : Pengertian dan Pengenalan Html
                  </Card.Text>
                </Card.Body>
              </Card>
            </Nav.Link>

            <Nav.Link href="/Zulian_Perweb_akhir/Materidua">
              <Card style={{ width: "15rem" }}>
                <Card.Body>
                  <Card.Title style={{ fontWeight: "bold" }}>
                    Belajar Ngoding #2
                  </Card.Title>
                  <Card.Img
                    src="https://img.freepik.com/free-vector/web-developers-courses-computer-programming-web-design-script-coding-study-computer-science-student-learning-interface-structure-components_335657-1161.jpg?ga=GA1.1.185333785.1719150752&semt=sph"
                    style={{ width: "100%", height: "100%" }}
                  />
                  <Card.Text style={{ fontWeight: "bold" }}>
                    Tutorial HTML #2 : Struktur dasar pada HTML
                  </Card.Text>
                </Card.Body>
              </Card>
            </Nav.Link>

            <Nav.Link href="/Zulian_Perweb_akhir/Materidua">
              <Card style={{ width: "15rem" }}>
                <Card.Body>
                  <Card.Title style={{ fontWeight: "bold" }}>
                    Belajar Ngoding #3
                  </Card.Title>
                  <Card.Img
                    src="https://img.freepik.com/free-vector/web-developers-courses-computer-programming-web-design-script-coding-study-computer-science-student-learning-interface-structure-components_335657-1161.jpg?ga=GA1.1.185333785.1719150752&semt=sph"
                    style={{ width: "100%", height: "100%" }}
                  />
                  <Card.Text style={{ fontWeight: "bold" }}>
                    Tutorial HTML #3 : Struktur dasar pada HTML
                  </Card.Text>
                </Card.Body>
              </Card>
            </Nav.Link>

            <Nav.Link href="/Zulian_Perweb_akhir/Materidua">
              <Card style={{ width: "15rem" }}>
                <Card.Body>
                  <Card.Title style={{ fontWeight: "bold" }}>
                    Belajar Ngoding #4
                  </Card.Title>
                  <Card.Img
                    src="https://img.freepik.com/free-vector/web-developers-courses-computer-programming-web-design-script-coding-study-computer-science-student-learning-interface-structure-components_335657-1161.jpg?ga=GA1.1.185333785.1719150752&semt=sph"
                    style={{ width: "100%", height: "100%" }}
                  />
                  <Card.Text style={{ fontWeight: "bold" }}>
                    Tutorial HTML #4 : Struktur dasar pada HTML
                  </Card.Text>
                </Card.Body>
              </Card>
            </Nav.Link>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
