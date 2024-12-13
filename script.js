


// function fibonacci(raqam){
//     const arr = [];

//     for(let i = 1; i <= raqam ; i++){
//         switch(i){
//                         case 1:
//                             arr.push(0);
//                             break;
//                             case 2:
//                                 arr.push(1);
//                                 break;
//                                 default:
            
//                                     arr.push ( arr[arr.length-1] + arr[arr.length-2]);
//                                     break;
//                     }
            
//               }
//               return arr;

//     }
//     console.log(fibonacci(10));



// haftaKunlari



// let haftakunlari = Number( prompt()) ;



// if(haftakunlari === 1){
//     alert("dushanba");
// } else if(haftakunlari === 2){
//     alert("seshanba");
// } else if(haftakunlari === 3){
//     alert("chorashanba");
// } else if(haftakunlari === 4){
//     alert("payshanba");
// } else if(haftakunlari === 5){
//     alert("juma");
// } else if(haftakunlari === 6){
//     alert("shanba");
// } else if(haftakunlari === 7){
//     alert("yakshanba");
// }else {
//     alert("Error");
// }



// mahsulotlar


const karta = 160000;

let olmaNarxi = 12000;
let bananNarxi = 25000;
let aplesinNarxi = 14000;

alert(`Dokonimizga xush kelibsiz ! 😊 Mevalar : \n 
         🍎Olma:${olmaNarxi} \n
         🍌Banan:${bananNarxi} \n
         🍊Apelsin:${aplesinNarxi} \n  `);


let olma = +prompt("qancha olma sotib olasiz?🍎");
let banan = +prompt("qancha banan sotib olasiz?🍌");
let apelsin = +prompt("qancha apelsin sotib olasiz?🍊");

let umumiyOlma = olmaNarxi * olma;
let umumiyBanan = bananNarxi * banan;
let umumiyApelsin = aplesinNarxi * apelsin;

let jamiSumma = umumiyOlma + umumiyBanan + umumiyApelsin;
alert(`${jamiSumma} so'm🙄`);

if(karta >= jamiSumma){
    alert(`Xaridingiz uchun rahmat🤗`);

}else if(karta < jamiSumma){
    alert(`sizda ${karta - jamiSumma} so'm yetarli emas😮`);
}



