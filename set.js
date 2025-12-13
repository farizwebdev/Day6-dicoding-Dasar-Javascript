const set = new Set([1, 2, 3]);
console.log(set);

set.add(10);
console.log(set);

for (const nilaiku of set){
    console.log(nilaiku);
}



set.forEach((nilai) => console.log(nilai));