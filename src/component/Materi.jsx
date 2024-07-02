import React from "react";
import "../Style/Materi.css";
import contoh1 from "../Image/1.png";
import Contoh2 from "../Image/2.png";

function Materi() {
  return (
    <div className="kontainer-1">
      <div className="box-1">
        <h1>Memulai HTML 1: Pengenalan dan Dasar HTML</h1>
        <hr />
        <img
          src="https://img.freepik.com/free-photo/html-css-collage-concept_23-2150061955.jpg?ga=GA1.1.185333785.1719150752&semt=sph"
          alt="Gambar Tutorial CSS"
          className="gambar-tutorial"
        />
        <p>
          <span>Selamat datang di tutorial HTML!</span> Di sini kita akan
          membahas dasar-dasar HTML yang perlu diketahui oleh setiap pemula.
          HTML, atau HyperText Markup Language, adalah bahasa yang digunakan
          untuk mengatur struktur dan konten dokumen web. Dengan HTML, Anda
          dapat mengatur tata letak halaman, menambahkan gambar dan teks, serta
          banyak lagi. Mari kita mulai dengan beberapa konsep dasar yang penting
          untuk dipahami.
        </p>
        <h2>Pengertian HTML</h2>
        <p>
          HTML (HyperText Markup Language) adalah bahasa yang digunakan untuk
          mengatur struktur dan konten halaman web. Dengan HTML, kita bisa
          mengatur layout, menambahkan gambar dan teks.
        </p>
        <h2>Text Editor HTML</h2>
        <p>
          Untuk menulis kode HTML, Anda memerlukan text editor. Beberapa text
          editor yang populer digunakan antara lain:
        </p>
        <ul>
          <li>Visual Studio Code</li>
          <li>Sublime Text</li>
          <li>Atom</li>
          <li>Notepad++</li>
        </ul>
        <h2>Web Browser untuk HTML</h2>
        <p>
          Untuk melihat hasil dari kode HTML, Anda memerlukan web browser.
          Beberapa web browser yang populer digunakan antara lain:
        </p>
        <ul>
          <li>Google Chrome</li>
          <li>Mozilla Firefox</li>
          <li>Microsoft Edge</li>
          <li>Safari</li>
        </ul>

        <h2>Contoh HTML Sederhana</h2>

        <p>Berikut adalah contoh HTML untuk memanggil text Hello World</p>
        <img src={contoh1} alt="" />
        <p>Dan ini adalah contoh tampilan dari Chrome nya</p>
        <img src={Contoh2} alt="" />
        <p>
          Dengan mengikuti tutorial ini, Anda akan mendapatkan pemahaman dasar
          tentang cara menggunakan HTML untuk meningkatkan struktur dan konten
          halaman web Anda.
        </p>
      </div>

      <div className="box-2">
        <h2>List Tutorial</h2>
        <hr />
        <ol>
          <a href="/Zulian_Perweb_akhir/Materi">
            <li>1. Pengenalan html</li>
          </a>
          <a href="/Zulian_Perweb_akhir/Materidua">
            <li>2. Struktur Dasar html</li>
          </a>
        </ol>
      </div>
    </div>
  );
}

export default Materi;
