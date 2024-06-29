import React from "react";
import "../Style/Materi.css";

function Materidua() {
  return (
    <div className="kontainer-1">
      <div className="box-1">
        <h1>Memulai HTML 2 :Struktur Dasar Pada HTML</h1>
        <hr />
        <img
          src="https://img.freepik.com/free-vector/html-structure-concept-illustration_114360-5253.jpg?ga=GA1.1.185333785.1719150752&semt=ais_user"
          alt="Gambar Struktur Dasar HTML"
          className="gambar-tutorial"
        />
        <p>
          <span>Selamat datang di tutorial Struktur Dasar HTML!</span> Di sini kita akan
          membahas dasar-dasar struktur HTML yang perlu diketahui oleh setiap pemula.
        </p>
        <h2>Struktur Dasar HTML</h2>
        <p>
          Struktur dasar HTML terdiri dari beberapa elemen penting seperti
          <code>&lt;html&gt;</code>, <code>&lt;head&gt;</code>, <code>&lt;body&gt;</code>, dan lain-lain.
          Elemen-elemen ini membantu mengatur struktur dan konten halaman web.
        </p>
        <h2>Tag HTML Dasar</h2>
        <p>Ada beberapa tag HTML dasar yang perlu diketahui:</p>
        <ul>
          <li>
            <strong>&lt;html&gt;:</strong> Tag ini adalah tag utama yang mengawali dan mengakhiri dokumen HTML.
          </li>
          <li>
            <strong>&lt;head&gt;:</strong> Tag ini berisi informasi tentang dokumen HTML seperti judul, CSS, dan JavaScript.
          </li>
          <li>
            <strong>&lt;body&gt;:</strong> Tag ini berisi konten utama dari halaman web.
          </li>
        </ul>
        <h2>Contoh Struktur Dasar HTML</h2>
        <p>
          Berikut adalah contoh struktur dasar HTML:
        </p>
        <p>
          Dengan mengikuti tutorial ini, Anda akan mendapatkan pemahaman dasar
          tentang cara menggunakan HTML untuk meningkatkan struktur dan konten
          halaman web Anda. Selain itu, Anda juga akan belajar tentang cara mengatur
          tata letak dan gaya halaman web menggunakan CSS.
        </p>
      </div>

      <div className="box-2">
        <h2>List tutorial</h2>
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

export default Materidua;
