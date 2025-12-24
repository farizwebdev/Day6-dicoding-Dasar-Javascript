class Manusia {
    constructor(nama, umur, hobi) {
        this.nama = nama;
        this.umur = umur;
        this.hobi = hobi;
    }
}

class Mahasiswa extends Manusia {

    Keseharian() {
        console.log(`Keseharianku adalah belajar ${this.hobi}`);
    }
}

const fariz = new Mahasiswa('Fariz', 20, 'Ngoding');
console.log(fariz);

// Manggil Method yakk..
fariz.Keseharian();