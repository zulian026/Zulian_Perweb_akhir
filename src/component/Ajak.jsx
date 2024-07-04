import React from "react";
import contohajax from "../Image/6.png";
import Contohajax1 from "../Image/7.png";
import contohajax3 from "../Image/8.png";

const Ajak = () => {
  return (
    <div className="kontainer-1">
      <div className="box-1">
        <h1>Menyimpan Data ke Database dengan AJAX</h1>
        <hr />
        <img
          src={contohajax}
          alt="Gambar Tutorial CSS"
          className="gambar-tutorial"
        />
        <h2>Langkah I. Membuat File Koneksi</h2>
        <pre>
          <code>
            {`<?php  
$servername="localhost" ; 
$database="cafe_anisya" ; 
//nama database 
$username="root" ; //nama user dari webserver kita, kalau XAMPP=root 
$password=" " ; //password dari webserver kita, kalau XAMPP="" , passwordnya kosong // untuk tulisan bercetak tebal silakan sesuaikan dengan detail database Anda // membuat koneksi
$conn=mysqli_connect($servername, $username, $password, $database); // mengecek koneksi  
if (!$conn) { 
    die("Koneksi gagal: " . mysqli_connect_error());
}
?>
`}
          </code>
        </pre>
        <p>Simpan dengan nama koneksi.php</p>
        <h2>Langkah II. Membuat HTML Form</h2>
        <p>
          Pertama buatlah sebuah document baru dengan text editor anda, dan buat
          sebuah HTML form dengan script di bawah
        </p>
        <pre>
          <code>
            {`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml"> 
<head> 
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" /> 
 <title>Satuan - Contoh Tutorial Ajax</title> 
</head> 
<body> 
 <form id="form1" name="form1" method="post" action="">
 <fieldset>
 <legend><strong>Contact Us</strong></legend> 
 <div style="width:300px;" align="right" id="content"> 
 <label>ID Satuan : <input name="id_satuan" type="text" id="id_satuan" maxlength="50" /></label> 
 <p> <label>Nama Satuan : <input name="nama_satuan" type="text" id="nama_satuan" maxlength="50" /> </label> </p> 
 
 <p> <input type="button" name="Button" value="Save" /> 
 <input type="reset" name="Reset" value="Cancel" /> </p> 
 </div> 
 </fieldset> 
 </form> 
</body> 
</html>
`}
          </code>
        </pre>
        <br />
        <p>
          Simpan dengan nama file satuan.php di direktory web server anda.
          Script di atas untuk membentuk sebuah form seperti berikut.
        </p>
        <img src={Contohajax1} alt="" />
        <br />
        <h2>
          Langkah III. Membuat File Javascript untuk Membentuk XMLHttpRequest
        </h2>
        <p>
          Langkah selanjutnya adalah membuat JavaScript untuk membentuk
          XMLHttpRequest dan membuat function untuk mengirim data ke server.
          Buat kembali document baru dengan text editor anda dan ketik script
          berikut :
        </p>
        <pre>
          <code>
            {`// JavaScript Document
//file ajax.js
function getXMLHttpRequest(){
    if(window.ActiveXObject){
        return new ActiveXObject("Microsoft.XMLHTTP");
    }else if(window.XMLHttpRequest){
        return new XMLHttpRequest(); 
    }else alert("Status : Can not create XMLHttpRequest Object");
}

var xmlhttp=getXMLHttpRequest();
//function to send data
function sendData(handlePage,ElementID){
    var kd=document.getElementById('kode_satuan').value;
    var nm=document.getElementById('nama_satuan').value;
    // var filterEmail=/^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
    // var filterPhone=/^[0-9]+$/;
    
//validate user input
if(kd==""){
    alert("Input Kode Satuan First!");
}else if(nm==""){
    alert("Input Nama Satuan first!");
}else{
//data valid 
if(xmlhttp.readyState==4 || xmlhttp.readyState==0){
    var obj=document.getElementById(ElementID);
    var form=obj.innerHTML;
    obj.innerHTML='Saving data, please wait..';
    xmlhttp.open('POST',handlePage,true);
    xmlhttp.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    xmlhttp.onreadystatechange=function(){
    if(xmlhttp.readyState==4){
    if(xmlhttp.status==200){
    obj.innerHTML=xmlhttp.responseText+'<br>'+form;
    }else{
    alert('Error : '+xmlhttp.statusText);
    }
    }
}
var param='kode_satuan='+kd;
param+='&nama_satuan='+nm;
param+='&action=save';
xmlhttp.send(param);
`}
          </code>
        </pre>
        <br />
        <p>
          Kemudian simpan dengan nama ajax.js di directory yang sama dengan file
          satuan.php yang dibuat sebelumnya.
        </p>
        <br />
        <h2>Langkah IV. Membuat handlePage dan Menyimpan Data</h2>
        <p>
          Setelah selesai dengan langkah I dan II, selanjutnya adalah membuat
          handlePage untuk menangani data yang dikirim dan menyimpan data yang
          dikirim ke database. Perlu anda ingat, walaupun sebelum data dikirim
          telah divalidasi dengan javascript anda harus kembali melakukan
          validasi setelah data sampai di server dengan server side scripting
          seperti PHP. Ingat jangan pernah percaya kepada user anda dan jangan
          pernah percaya dengan apa yang diinputkan oleh user serta jangan
          percaya dengan apa yang dikirim oleh web browser anda. Sekarang
          buatlah sebuah document baru dengan text editor dan ketikkan script
          berikut.\
        </p>
        <br />
        <pre>
          <code>
            {`<?php
/*file save_data.php*/
    include "koneksi.php";
    if($_POST['action']=='save'){
     //validasi data
     $kd=$_POST['kode_satuan'];
     $nm=$_POST['nama_satuan'];
     settype($kd,'string');
     settype($nm,'string');
     //validasi email;
    //  if(!preg_match('/^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/',$email)){
    //  echo 'Ivalid Email Address'; exit();
    //  }
    //  //validasi phone
    //  if(!preg_match('/^[0-9]+$/',$phone)){
    //  echo 'Invalid phone number'; exit();
    //  }
     //saving data
     $query="INSERT INTO satuan VALUES ('$kd','$nm')";
     $hasil=@mysqli_query($conn,$query);
     if($hasil){
     echo '<font color="green">DATA HAS BEEN SAVED</font>';
     }else {
     echo '<font color="red">Error, CAN NOT SAVE DATA</font>';
`}
          </code>
        </pre>
        <br />
        <p>
          setelah selesai simpan dengan nama save_data.php di directory yang
          sama dengan file satuan.php.
        </p>
        <br />
        <h2>Langkah V. Finishing</h2>
        <p>
          Setelah selesai membuat ketiga file di atas, sekarang buka kembali
          file contact.php dan edit pada bagian yang diberi warna biru seperti
          berikut :
        </p>
        <pre>
          <code>{`<input type="button" name="Button" value="Save" />`}</code>
        </pre>
        <p>menjadi </p>
        <pre>
          <code>
            {`<script type="text/javascript" src="ajax.js"></script>
<input type="button" name="Button" value="Save" onclick="sendData('save_data.php','content'); return false;" />
`}
          </code>
        </pre>

        <p>LATIHAN</p>
        <p>
          Silahkan anda buat program ajax untuk menyimpan data ke tabel berikut.
        </p>
        <img src={contohajax3} alt="" />
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
          <a href="/Zulian_Perweb_akhir/Materitiga">
            <li>3. Paragraf Pada html</li>
          </a>
        </ol>
      </div>
    </div>
  );
};

export default Ajak;
