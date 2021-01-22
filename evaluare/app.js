// // 1
// // Создайте массив из n чисел и выводите его в консоль 5 разными способами:
// // for, while, do … while
// // for in
// // for of
// // forEach
// // map
// //log
// let masiv = [1,5,8,4,8,9,7,5,4,6]
// console.log(masiv);
// //for
// console.log("for");
// for (let index = 0; index < masiv.length; index++) {
//     console.log(masiv[index]);
// }
// //while
// console.log("while");
// let index = 0;
// while ( index < masiv.length) {
//     console.log(masiv[index]);
//     index++;
// }
// //do wihile
// console.log("dowhile");
// do {
//     console.log(masiv[index]);
//     index++;
// } while ( index < masiv.length) 
// //for of
// console.log("for of");
// for (const element of masiv) {
//     console.log(element);
// }
// //for in
// console.log("for in");
// for (const key in masiv) {
//     if (Object.hasOwnProperty.call(masiv, key)) {
//         console.log(masiv[key]); 
//     }
// }
// //for each
// console.log("foreach");
// masiv.forEach(element => {
//     console.log(element);
// });

// //map
// console.log("map");
// let newMassiv = masiv.map(masiv => masiv * 1.05);
// console.log(newMassiv);

//2
// let studenti = [
//     {name: "First", marks: [9,6,9,10,7]},{name: "Second", marks: [8,6,9,5,7]},
//     {name: "Thrid", marks: [8,10,8,10,7]},{name: "4-th", marks: [8,6,7,10,5]},
//     {name: "5-th", marks: [8,5,9,10,7]},{name: "6-th", marks: [7,6,9,10,7]},
//     {name: "7-th", marks: [8,6,4,10,7]},{name: "8-th", marks: [4,5,3,5,4]}
// ];
// function calcMedia(arr) {
//     let total = 0;
//     let media = 0;
//     for(let i = 0; i <= arr.length - 1; i++){
//         console.log('numele: ' + arr[i].name);
//         for(let j = 0; j <= arr[i].marks.length - 1; j++){
//             total += arr[i].marks[j];
//             if(j == arr[i].marks.length - 1){
//                 media = total / arr[i].marks.length;
//             }
//         }
//         console.log('nota medie este de: ' + media);
//         arr[i].marks.unshift(media);
//         total = 0;
//     }
// }
// calcMedia(studenti);
// function noteMinime(arr) {
//     console.log('Elevi cu medie mai mica de 5: ');
//     for(let i = 0; i <= arr.length - 1; i++){
//             if(arr[i].marks[0] < 5){
//                 console.log('numele: ' + arr[i].name);
//                 console.log('nota medie este de: ' + arr[i].marks[0]);
//             }
//     }
// }
// function minMax(arr) {
//     console.log('Cea mai mare si cea mai mica nota: ');
//     let max = 0;
//     let min = 10;
//     let name = '';
//     for(let i = 0; i <= arr.length - 1; i++){
//         for(let j = 0; j <= arr[i].marks.length - 1; j++){
//             let currentValue = arr[i].marks[0];
//             if(currentValue > max){
//                 max = currentValue;
//                 name = arr[i].name;
//             }
//         }
//     }
//     console.log('Cea mai mare medie: ' + name + ' ' +max);
//     for(let i = 0; i <= arr.length - 1; i++){
//         for(let j = 0; j <= arr[i].marks.length - 1; j++){
//             let currentValue = arr[i].marks[0];
//             if(currentValue < min){
//                 max = currentValue;
//                 name = arr[i].name;
//             }
//         }
//     }
//     console.log('Cea mai mica medie: ' + name + ' ' +max);
// }
// function descSort(arr) {
//     console.log('De la mic la mare: ');
//     arr.sort(function(a, b){
//         if(a.marks < b.marks){
//             return 1;
//         }
//         if(a.marks > b.marks){
//             return -1;
//         }
//         return 0;
//     })
//     for(let i = 0; i <= arr.length - 1; i++){
//         console.log('numele: ' + arr[i].name);
//         console.log('nota medie este de: ' + arr[i].marks[0]);
//         }
//     }
// console.log(" ");
// descSort(studenti);
//2.3
// let styles = ["Jazz", "Blues"];
// styles.push("Rock-n-Roll");
// styles[Math.floor((styles.length - 1) / 2)] = "Classics";
// styles.unshift("Rap", "Reggae");
// console.log(styles);

// //2.4


// function sumInputNumbers(ar){
// alert("itroduceti numere! Pentru stop introduceti un caracter text!");
// let isEnd = true;
// while(isEnd){
//     let val = prompt('introduceti numarul: ')
//     if(val == 0 || val > 0 || val < 0){
//         ar.push(val);
//     }
//     else{
//         isEnd = false;
//     }
// }
// console.log(ar);
// }
// let sm = [];
// sumInputNumbers(sm);

// //2.6

// let m = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// m.splice(4, 1, 0, 0, 0);

// console.log(m);