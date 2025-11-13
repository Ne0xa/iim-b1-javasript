// This is an exemple of my lesson

// Exo 1 2 3 
// const name = "Benjamin";
// let age = 18;
// let weight1 = 15;
// let weight2 = 10;

// console.log(name);
// console.log(name, + age);

// let weightTotal = weight1 + weight2;
// let weightTotal2 = weight1 - weight2;
// let weightTotal3 = weight1 / weight2;
// let weightTotal4 = weight1 * weight2;
// console.log(weightTotal, weightTotal2, weightTotal3, weightTotal4);

// exo 4
// const doorState = true;

// if (doorState === true) {
//     console.log("La porte est ouverte");
// }else {
//     console.log("La porte est fermée");
// }

// // exo 5
// let prenom = prompt("Quel est ton prénom ?");
// console.log('Ton prénom est ${prenom}');

// // exo 6
// const code = "1109";

// let userCode = prompt("Quel est le code ?");

// if (code === userCode) {
//     console.log("Le coffre est ouvert");
// }else {
//     console.log("Code Incorrect, le coffre est fermé");
// }

// exercice 1

// function helloWorld() {
//     console.log("Putain on se fait chier");
// }

// helloWorld();

// // exercie 2

// function helloPrenom(name) {
//     console.log('Hello ${name} !');
// }

// helloPrenom();

// // Exercice 3

// function addition(a,b) {
//     console.log(a + b);
// }

// addition(10, 20);

// //exercice 4
// /**
//  * @param {int} a
//  * @param {int} b
//  * @param {bool} c
// */
// function operation(a, b, c) {
//     if (c) {
//         console.log(a + b);
//     }else {
//         console.log(a - b);
//     }
// }

// operation(10, 20, false);

// // exercie 5 

// // for (let i = 1; i < 6; i++) {
// //     console.log(i);
// // }

// // // exercice 6

// // function promptAndPrint() {
// //     let number = prompt('Choisissez un nombre');
// //     number = parseInt(number);

// //     if (isNaN(number) || number <= 0) {
// //         console.log("Veuillez entrer un nombre entier positif");
// //         return;
// //     }

// //     for (let i= 1; 1 <= number; i++) {
// //         console.log(i);
// //     }
// // }

// // promptAndPrint();

// // exercice 7

// const personnage = "Alya";
// let argent = 200;

// let productQuantity = 40;
// const productPrice = 19.99;

// let productBuy = 0;
// let rupture = false;

// while (argent >= productPrice && productQuantity > 0) {
//     argent -= productPrice;
//     productQuantity -= 1
//     productBuy += 1
// }

// if (productQuantity === 0) {
//     rupture = true;
// }

// console.log(`${personnage} a pu acheter X produits, il lui reste X euros`)
// if (rupture) {
//     console.log('Le produit est en rupture de stock');
// }else {
//     console.log('Le produit est toujours disponible');
// }

// exemple

// let fruits = ['pomme', 'poire', 'banane'];

// console.log(fruits[0]);

// fruits.forEach(function  (fruit) {
//     console.log(fruit)
// })
// // fonction plus rapide
// fruits.forEach(fruit => console.log(fruit));

// exemple 2

// let student = {
//     name: "Alya",
//     age: 20,
//     city: "Rueil"
// }

// console.log(student.name, student.age, student.city);

// Exercice 4

// let suo = {
//     name: "Suo",
//     age: 21,
//     sentMsg: false
// };

// Exercice 5

// let vivitler = {
//     name: "Vivitler",
//     age: 45,
//     sentMsg: false
// };

// let jcp = {
//     name: "Jcp",
//     age: 23,
//     sentMsg: false
// };

// let toi = {
//     name: "Toi",
//     age: 30,
//     sentMsg: false
// };

// let inspinope = {
//     name: "Inspinope",
//     age: 15,
//     sentMsg: false
// };

// let personnes = [vivitler, jcp, toi, inspinope];

// Exercice 6

// function estMajeur(age) {
//     return age >= 10;
// };

// for (let i = 0; 1 < personnes.length; i++) {
//     const personne = personnes[i];
//     if (estMajeur(personnes[i], age)) {
//         personne.sentMsg = true;
//     };
// };

// for (const personne of personnes) {
//     if (estMajeur(personnes[i], age)) {
//         personne.sentMsg = true;
//     };
// };

// console.log(`
// Toute les invitations ont été envoyée, sauf au mineures :
// ${personnes.filter(personne => personne.age < 18).map(personne.name).join(',')};
//`);
