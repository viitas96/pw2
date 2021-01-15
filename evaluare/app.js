// 1
// Создайте массив из n чисел и выводите его в консоль 5 разными способами:
// for, while, do … while
// for in
// for of
// forEach
// map
//log
let masiv = [1,5,8,4,8,9,7,5,4,6]
console.log(masiv);
//for
console.log("for");
for (let index = 0; index < masiv.length; index++) {
    console.log(masiv[index]);
}
//while
console.log("while");
let index = 0;
while ( index < masiv.length) {
    console.log(masiv[index]);
    index++;
}
//do wihile
console.log("dowhile");
do {
    console.log(masiv[index]);
    index++;
} while ( index < masiv.length) 
//for of
console.log("for of");
for (const element of masiv) {
    console.log(element);
}
//for in
console.log("for in");
for (const key in masiv) {
    if (Object.hasOwnProperty.call(masiv, key)) {
        console.log(masiv[key]); 
    }
}
//for each
console.log("foreach");
masiv.forEach(element => {
    console.log(element);
});

//map
console.log("map");
let newMassiv = masiv.map(masiv => masiv * 1.05);
console.log(newMassiv);

//2
let studenti = [
    {name: "First", marks: [8,6,9,10,7]},{name: "Second", marks: [8,6,6,5,7]},
    {name: "Thrid", marks: [8,10,8,10,7]},{name: "4-th", marks: [8,6,7,10,5]},
    {name: "5-th", marks: [8,5,9,10,7]},{name: "6-th", marks: [8,6,9,10,7]},
    {name: "7-th", marks: [8,6,9,10,7]},{name: "8-th", marks: [4,5,4,4,4]}
]
// console.log(studenti);
// console.table(studenti);
// function media(arr){
//     for(i = 0; i < arr.length; i++){
//         for(j = 0; j < )
//     }
// }
// studenti.values.

//2.3
let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[Math.floor((styles.length - 1) / 2)] = "Classics";
styles.unshift("Rap", "Reggae");
console.log(styles);

//2.4


function sumInputNumbers(ar){
alert("itroduceti numere!");
let isEnd = true;
while(isEnd){
    let val = prompt('introduceti numarul: ')
    if(val === 0 || val > 0 || val < 0){
        ar.push(val);
    }
    else{
        isEnd = false;
    }
}
console.log(ar);
}
let sm = [];
sumInputNumbers(sm);