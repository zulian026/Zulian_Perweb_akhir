import React from 'react';
import '../Style/Materi.css'


function Konten() {
  return (
      <div className='kontainer-1'> 
        <div className="box-1">
          <h1>Belajar HTML 1: Pengertian dan Pengenalan HTML</h1>
          <hr/>
          <img src="https://img.freepik.com/free-photo/html-css-collage-concept_23-2150061955.jpg?ga=GA1.1.185333785.1719150752&semt=sph" alt="Gambar Tutorial CSS" className="gambar-tutorial" />
          <p><span>Selamat datang di tutorial CSS!</span> Di sini kita akan membahas dasar-dasar CSS yang perlu diketahui oleh setiap pemula. CSS, atau Cascading Style Sheets, adalah bahasa yang digunakan untuk mengatur tampilan dan format dokumen HTML. Dengan CSS, Anda dapat mengubah warna teks, mengatur tata letak halaman, menambahkan margin dan padding, serta banyak lagi. Mari kita mulai dengan beberapa konsep dasar yang penting untuk dipahami.</p>
          <h2>Pengertian CSS</h2>
          <p>CSS (Cascading Style Sheets) adalah bahasa yang digunakan untuk mendesain tampilan halaman web. Dengan CSS, kita bisa mengatur layout, warna, dan font.</p>
          <h2>Menambahkan CSS ke Halaman Web</h2>
          <p>Ada beberapa cara untuk menambahkan CSS ke halaman web:</p>
          <ul>
             <li><strong>Inline CSS:</strong> Menambahkan style langsung pada elemen HTML menggunakan atribut 'style'.</li>
             <li><strong>Internal CSS:</strong> Menempatkan CSS di dalam tag <code>&lt;style&gt;</code> di bagian head dokumen.</li>
             <li><strong>External CSS:</strong> Menulis CSS di file terpisah dan menghubungkannya dengan HTML menggunakan tag <code>&lt;link&gt;</code>.</li>
             <p>contoh untuk bagian file style.css nya</p>
          </ul>
          <h2>Contoh CSS Sederhana</h2>
          <p>Berikut adalah contoh CSS yang mengubah warna background dan warna teks:</p>
          <p>Dengan mengikuti tutorial ini, Anda akan mendapatkan pemahaman dasar tentang cara menggunakan CSS untuk meningkatkan tampilan halaman web Anda.</p>
        </div>

        <div className='box-2'>
          <h2>List tutorial</h2>
          <hr/>
          <ol>
            <a href='#'><li>1. Pengenalan html</li></a>
            <a href='#'><li>2. Test</li></a>
          </ol>
        </div >
      </div>
      
  );
}

export default Konten;
