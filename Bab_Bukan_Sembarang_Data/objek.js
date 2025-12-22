// Buat objek 
const saya = {
    nama: "Fariz",
    hobi: "Jogging",
    umur: 19,
}

// Akses properti objek nama
console.log(saya.nama);

// Kalo mo ngehapus properti Hobi
delete saya.hobi;

// Kalo mo nambah properti pekerjaan
saya.pekerjaan = "Mahasiswa";

// Kalo mo ngubah properti umur
saya.umur = 20;

// Kalo mo nampilin objek setelah dihapus properti hobinya
console.log(saya);