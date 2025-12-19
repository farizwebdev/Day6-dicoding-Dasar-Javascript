const anak_yuin = true;

console.log("Yeay, aku anak Yuin!")


// Contoh else
if (anak_yuin) {
    console.log("Sanaa, sholattt duluu!");
} else {
    console.log("Aku anak Yuin kok bukan anak Budi");
};


// Contoh else if
const nilai_tbo = 78;

if (nilai_tbo >= 89){
    console.log("Yeayy, Nilai A");
} else if (nilai_tbo >= 79){
    console.log("Waduh, Nilai B");
} else if (nilai_tbo >= 69){
    console.log("Yahh, Nilai C");
};

// Ternary Operator
const anak_pionic = true;
const duetku = 5000;
const diskon_jajan = anak_pionic ? 0.1 : 0;


// Tampilin lahh
console.log(`Cihuyy, lu dapet diskon jajan jadi cuman bayar ${diskon_jajan * duetku}`);