'use strict';

let pic ='';
let name1 = prompt("Ваше имя?");

let admin = name1;
alert(admin);
console.log(admin);

let NumberOfPic = prompt("Введи номер картинки!!");
let FormatOfPic = prompt("Введи формат картинки .png или .jpg");

if (NumberOfPic <=11 && FormatOfPic === 'png' || FormatOfPic === 'jpg'){

    document.getElementById("pic").src = `images/${NumberOfPic}.${FormatOfPic}`;

} else  {
    alert('Ошибка, номер от 0-11 и поддерживаются форматы png или jpg');
}