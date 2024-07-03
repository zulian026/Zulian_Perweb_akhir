import React from "react";
import contoh5 from "../Image/5.png";

const Materitiga = () => {
  return (
    <div className="kontainer-1">
      <div className="box-1">
        <h1>Memulai HTML 3 :Membuat Paragraf Pada HTML</h1>
        <hr />
        <img
          src="https://img.freepik.com/free-photo/person-front-computer-working-html_23-2150040412.jpg?ga=GA1.1.185333785.1719150752&semt=ais_user"
          alt="Gambar Struktur Dasar HTML"
          className="gambar-tutorial"
        />
        <p>
          Paragraf dalam HTML digunakan untuk menampilkan teks yang terstruktur
          dalam satu blok atau baris yang berbeda. Setiap paragraf biasanya
          dipisahkan oleh jarak kosong di atas dan di bawahnya untuk membedakan
          antara satu paragraf dengan paragraf lainnya.
        </p>
        <h2>Tag Paragraf HTML</h2>
        <p>
          Tag yang digunakan untuk membuat paragraf dalam HTML adalah{" "}
          <code>&lt;p&gt;</code>. Berikut adalah contoh penggunaannya:
        </p>
        <pre>
          <code>{`<p>Ini adalah paragraf pertama.</p>
<p>Ini adalah paragraf kedua.</p>
<p>Ini adalah paragraf ketiga.</p>`}</code>
        </pre>
        <img src={contoh5} alt="" />
        <p>
          Setiap <code>&lt;p&gt;</code> tag akan membuat satu blok teks baru.
          Browser secara otomatis menambahkan jarak kosong di atas dan di bawah
          setiap paragraf untuk membedakan antara satu paragraf dengan yang
          lain.
        </p>
        <p>
          Dengan menggunakan tag paragraf, Anda dapat membuat konten teks yang
          lebih terstruktur dan mudah dibaca. Hal ini sangat penting dalam
          membuat konten web yang baik dan mudah dipahami oleh pengguna.
        </p>
        <h2>Contoh Penggunaan Paragraf dalam HTML</h2>
        <p>
          Berikut adalah contoh penggunaan paragraf dalam HTML untuk membuat
          konten teks yang lebih terstruktur:
        </p>
        <pre>
          <code>{`<p>HTML adalah bahasa markup yang digunakan untuk membuat struktur konten pada web.</p>
<p>HTML terdiri dari serangkaian tag yang digunakan untuk mendefinisikan elemen-elemen pada halaman web.</p>
<p>Tag-tag ini dapat digunakan untuk membuat judul, paragraf, gambar, link, dan lain-lain.</p>`}</code>
        </pre>
        <p>
          Dalam contoh di atas, kita menggunakan tag paragraf untuk membuat tiga
          blok teks yang berbeda. Setiap blok teks dipisahkan oleh jarak kosong
          di atas dan di bawahnya, sehingga membuat konten teks lebih mudah
          dibaca dan dipahami.
        </p>
        <h2>Tag Judul HTML (h1, h2, h3, h4, h5)</h2>
        <p>
          Tag judul dalam HTML digunakan untuk menentukan tingkat kepentingan
          teks. Ada enam tingkat judul, yaitu h1, h2, h3, h4, h5, dan h6.
          Semakin kecil angkanya, semakin kecil ukuran teks.
        </p>
        <pre>
          <code>{`<h1>Ini adalah judul utama</h1>
<h2>Ini adalah sub-judul</h2>
<h3>Ini adalah sub-sub-judul</h3>
<h4>Ini adalah sub-sub-sub-judul</h4>
<h5>Ini adalah sub-sub-sub-sub-judul</h5>`}</code>
        </pre>
        <p>
          Tag judul ini sangat berguna untuk memberikan struktur dan hierarki
          pada konten teks. Dengan menggunakan tag judul, Anda dapat membuat
          konten teks yang lebih terorganisir dan mudah dipahami.
        </p>
      </div>

      <div className="box-2">
        <h2>List Tutorial</h2>
        <hr />
        <ol>
          <a href="/Zulian_Perweb_akhir/Materi">
            <li>1. Pengenalan HTML</li>
          </a>
          <a href="/Zulian_Perweb_akhir/Materidua">
            <li>2. Struktur Dasar HTML</li>
          </a>
          <a href="/Zulian_Perweb_akhir/Materitiga">
            <li>3. Paragraf Pada HTML</li>
          </a>
        </ol>
      </div>
    </div>
  );
};

export default Materitiga;
