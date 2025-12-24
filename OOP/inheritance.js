class Manusia {
    constructor(nama, umur) {
        this.nama = nama;
        this.umur = umur;
    }
}

class Fariz extends Manusia {
    constructor (nama, umur, hobi) {
        super(nama, umur);
        this.hobi = hobi;
    }
}

const fariz = new Fariz('Fariz', 20, 'Ngoding');
console.log(fariz);