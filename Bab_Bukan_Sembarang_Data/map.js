//Buat Map
const map = new Map();

//Tambahin properti nama
map.set('nama', 'fariz');

//Tambahin properti hobi
map.set('hobi', 'jogging');

//Akses properti nama
console.log(map.get('nama'));

//Hapus properti Hobi
map.delete("hobi");

//Nampilin Map setelah properti hobi dihapus
console.log(map);