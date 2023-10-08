// Contoh program JavaScript dengan if, else, nested if 
var nilaiUjian = 30;

if (nilaiUjian >= 70) {
  console.log("Selamat! Anda lulus ujian.");
} else {
  console.log("Maaf, Anda belum lulus ujian.");

  if (nilaiUjian >= 40) {
    console.log("Namun, Anda dapat mengikuti ujian remedial.");
  } else {
    console.log("Dan Anda tidak memenuhi syarat untuk mengikuti ujian remedial.");
  }
}

// Contoh program JavaScript dengan switch-case
var hari = "Minggu";

switch (hari) {
  case "Senin":
    console.log("hari ini hari Senin.");
    break;
  case "Selasa":
    console.log("hari ini hari Selasa.");
    break;
  case "Rabu":
    console.log("hari ini hari Rabu.");
    break;
  case "Kamis":
    console.log("hari ini hari Kamis.");
    break;
  case "Jumat":
    console.log("hari ini hari Jumat.");
    break;
  case "Sabtu":
    console.log("hari ini hari Sabtu.");
    break;
  case "Minggu":
    console.log("hari ini hari Minggu.");
    break;
  default:
    console.log("Hari yang dimasukkan tidak valid.");
}

// Contoh program JavaScript dengan menggunakan for statement
const kataKata = ["Halo", "Saya", "Sedang","Belajar", "Program", "JavaScript"];

for (let i = 0; i < kataKata.length; i++) {
  console.log(kataKata[i]);
}

// Contoh program JavaScript dengan menggunakan while, do while
//while
var huruf = 'A';

while (huruf <= 'E') {
  console.log(huruf);
  huruf = String.fromCharCode(huruf.charCodeAt(0) + 1);
}

//do while
var count = 0;

do {
  console.log('Ini angka ' + (count + 1));
  count++;
} while (count < 5);


// Contoh program JavaScript dengan menggunakan function
//  Menghitung Luas Segitiga
function hitungLuasSegitiga(alas, tinggi) {
    var luas = (alas * tinggi) / 2;
    return luas;
  }
  
var alasSegitiga = 5;
var tinggiSegitiga = 8;
var luasSegitiga = hitungLuasSegitiga(alasSegitiga, tinggiSegitiga);
  
console.log('Luas segitiga = alas x tinggi = ' + alasSegitiga + ' X ' + tinggiSegitiga + ' = ' + luasSegitiga);
