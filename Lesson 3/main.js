const family = [["Bo", 58], ["Me", 54], ["Chi", 31], ["Toi", 26]];
// Bo 58
// Me 54
// Chi 31
// Toi 26
// Su dung for, while, do while (3 cach)
console.log("Cach 1 dung for");
for (let index = 0; index < family.length; index++) {
  console.log(family[index][0] + ' ' + family[index][1]);
}

console.log("Cach 2: Dung While");
let count = 0;
while(count < 4){
  console.log(family[count][0] + ' ' + family[count][1]);
  count++;
}

console.log("Cach 3: Dung do while");
let count1 = 0;
do {
  console.log(family[count1][0] + ' ' + family[count1][1]);
  count1++;
} while (count1 < 4);
