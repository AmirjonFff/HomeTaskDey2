// // Task 1
// //1
// function sumTwoNumberDec(a,b,c) {
//     return a+b+c;
// }
// console.log(sumTwoNumberDec(10,20,30));
// //2
// let sumTwoNumberExp1 = (a,b,c) => {
//     return a+b+c;
// }
// console.log(sumTwoNumberExp1(2,5,6));

// //3
// let  sumTwoNumberExp2 =function (a,b,c) {
//     return a+b+c;
// }
// console.log(sumTwoNumberExp2(5,2,3));

// Task 2
//1
// function maxOfNumber(a,b,c) {
//     return Math.max(a,b,c)
// }
// console.log(maxOfNumber(2,8,10));

// //2
// let maxOfNumberExp1= function (a,b,c) {
//     return Math.max(a,b,c)
// }
// console.log(maxOfNumberExp1(2,8,10));

// //3
// let maxOfNumberExp2= (a,b,c) => {
//     return Math.max(a,b,c)
// }
// console.log(maxOfNumberExp2(2,8,10));

//Task 3
//1
// function sumTwoNumber(n) {
//     let a=n%10;
//     let b=Math.floor(n/10)%10;
//     let c=Math.floor(n/100);
//     return a+b+c;
// }
// console.log(sumTwoNumber(185));

// //2
// let sumTwoNumberExp1= function (n) {
//     let a=n%10;
//     let b=Math.floor(n/10)%10;
//     let c=Math.floor(n/100);
//     return a+b+c;
// }
// console.log(sumTwoNumberExp1(185));

// //3
// let sumTwoNumberExp2= (n) => {
//     let a=n%10;
//     let b=Math.floor(n/10)%10;
//     let c=Math.floor(n/100);
//     return a+b+c;
// }
// console.log(sumTwoNumberExp2(185));
//Task  4
//1
// function endNine(n) {
//     let endNum = n%10;
//     if(endNum===9){
//         return "YES";
//     } else{
//         return "NO";
//     }
// }
// console.log(endNine(89));

// //2
// let endNineExp1 = function(n) {
//     let endNum = n%10;
//     if(endNum===9){
//         return "YES";
//     } else{
//         return "NO";
//     }
// }
// console.log(endNineExp1(89));

// //3
// let endNineExp2 = (n) => {
//     let endNum = n%10;
//     if(endNum===9){
//         return "YES";
//     } else{
//         return "NO";
//     }
// }
// console.log(endNineExp2(88));

//Task 5
// let century = n => Math.ceil(n/100);


// console.log(century(2000));
// console.log(century(1905));

// Task 6

// let century = n => n*60;

// console.log(century(5));
// console.log(century(3));

// Task 7
// let calcAge = n => n*365;

// console.log(calcAge(65));
// console.log(calcAge(0));

// Task 8

// let findPerimetr = (a,b) => (a+b)*2;

// console.log(findPerimetr(6,7));
// console.log(findPerimetr(20,10));

//Task 9
// let lessThan100 = (a,b) => {
//     return (a+b)<100?true:false;
// }

// console.log(lessThan100(20,10));
// console.log(lessThan100(80,100));

// Task 10
// let addUp = n => {
//     let sum=0;
//     for (let i = 1; i <= n; i++) {
//         sum += i;        
//     }
//     return sum;
// }
// console.log(addUp(13));

// Task 11
// function equa(a,b,c) {
//     if(a===b && b===c){
//         return 3;
//     }else if(a!==b && b!==c && a!==c){
//         return 0;
//     }else {
//         return 2;
//     }
// }

// console.log(equa(1,2,3));
// console.log(equa(2,2,2));
// console.log(equa(2,2,1));

// Task 12

// function isSummetrical(n) {
//     let ranpolind = n;
//     let polind = 0;
//     while (n > 0) {
//         let mod = n % 10;
//         n = Math.floor(n/10);
//         polind += mod;
//         polind *= 10;
//     }
//     return (Math.floor(polind/10) === ranpolind)?true:false;
// }

// console.log(isSummetrical(441));

// Task 13

// function primeNumbers(n) {
//     let prim = 0;
//     for (let i = 1; i <= n; i++) {
//         let c = 0;
//         for (let j = 1; j <= i; j++) {
//             if (i % j === 0) {
//                 c++;
//             }
//         }
//         if (c === 2) {
//            prim++; 
//         }
//     }
//     return prim;
// }

// console.log(primeNumbers(30));
// console.log(primeNumbers(20));
// console.log(primeNumbers(10));

// Task 14

// let pow = (x,n) => {
//     if (n >= 0) {        
//         let powa = 1;
//         for (let i = 0; i < n; i++) {
//             powa *= x;        
//         }
//         return powa;
//     }else {
//         let powa = 1;
//         for (let i = 0; i < n*(-1); i++) {
//             powa *= x;        
//         }
//         return 1/powa;
//     }
// }

// console.log(pow(2,10));
// console.log(pow(2,-2));

// Task 15

// let circuitPower = (U, I) => U * I;

// console.log(circuitPower(8,15));
// console.log(circuitPower(8,10));

// Task 16

// let canculatorFour = n => ((n % 5) === 0)?true:false;

// console.log(canculatorFour(55));
// console.log(canculatorFour(-55));
// console.log(canculatorFour(57));

// Task 17

// let isSameSumm = (a, b) => (a === b)?true:false;

// console.log(isSameSumm(10, 10));
// console.log(isSameSumm(10, 5));

// Task 18

// function longestTime(h, m, s) {
//     let a = h * 3600;
//     let b = m * 60;
//     return (Math.max(a,b,s) === a)?h:(Math.max(a,b,s) === b)?m:s;
// }

// console.log(longestTime(1, 59, 3598));
// console.log(longestTime(2, 300, 15000));
// console.log(longestTime(15, 955, 59400));

// Task 19

// let oneOddOneEven = n => {
//     let a = Math.floor(n/10);
//     let b = n%10;
//     return (a%2===0 && b%2===1 || b%2===0 && a%2===1)?true:false;    
// }

// console.log(oneOddOneEven(22));
// console.log(oneOddOneEven(55));
// console.log(oneOddOneEven(41));

// Task 20

// let negativeNum = n => (n > 0)?n*(-1):n;

// console.log(negativeNum(22));
// console.log(negativeNum(-8));
// console.log(negativeNum(10));






