import React, { useEffect, useRef } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import '../Style/Home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import homeImage from '../Image/home_image.jpg';
import Footer from './Footer';

const Home = () => {
  const listTutorialRef = useRef(null);

  useEffect(() => {
    AOS.init();
  }, []);

  const scrollToTutorialList = () => {
    if (listTutorialRef.current) {
      listTutorialRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home-kontainer">
      <div className="boxx-1">
        <div className="content-satu" data-aos="fade-right" data-aos-duration="3000">
          <h1><span>Ngoding Bareng</span><br /> di Website Saya</h1>
          <p>Ini adalah halaman utama dari website yang menyediakan tutorial ngoding untuk pemula.</p>
          <Button onClick={scrollToTutorialList}>List Tutorial</Button>
        </div>

        <div className="content-dua">
          <img src={homeImage} alt="Coding Illustration" />
        </div>

        <div className="content-tiga" ref={listTutorialRef}>
          <h2>List tutorial</h2>
          <p>Update Beberapa Tutorial</p>
          <div className="card-container" data-aos="zoom-in" data-aos-duration="1000">
            <Nav.Link href="/Materi">
              <Card style={{ width: '15rem' }}>
                <Card.Body>
                  <Card.Title style={{ fontWeight: 'bold' }}>Belajar Ngoding #1</Card.Title>
                  <Card.Img src="https://img.freepik.com/free-vector/web-developers-courses-computer-programming-web-design-script-coding-study-computer-science-student-learning-interface-structure-components_335657-1161.jpg?ga=GA1.1.185333785.1719150752&semt=sph" style={{ width: '100%', height: '100%' }} />
                  <Card.Text style={{ fontWeight: 'bold' }}>
                    Tutorial HTML #1 : Pengertian dan Pengenalan Html 
                  </Card.Text>
                </Card.Body>
              </Card>
            </Nav.Link>

            <Nav.Link href="/Materidua">
              <Card style={{ width: '15rem' }}>
                <Card.Body>
                  <Card.Title style={{ fontWeight: 'bold' }}>Belajar Ngoding #2</Card.Title>
                  <Card.Img src="https://img.freepik.com/free-vector/web-developers-courses-computer-programming-web-design-script-coding-study-computer-science-student-learning-interface-structure-components_335657-1161.jpg?ga=GA1.1.185333785.1719150752&semt=sph" style={{ width: '100%', height: '100%' }} />
                  <Card.Text style={{ fontWeight: 'bold' }}>
                    Tutorial HTML #2 : Struktur dasar pada HTML
                  </Card.Text>
                </Card.Body>
              </Card>
            </Nav.Link>
           
          </div>
          <Footer/>
        </div>
      </div>  
     
    </div>
    
  );
};

export default Home;
