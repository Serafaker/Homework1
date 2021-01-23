

let name = "Василий";

let admin = name;
alert(admin);
console.log(admin);

let NumberOfPic = prompt("Введи номер картинки!");
let FormatOfPic = prompt("Введи формат картинки .png или .jpg");

if (NumberOfPic !=NaN && FormatOfPic !=NaN ){

document.getElementById('pic').src = `images/${NumberOfPic}${FormatOfPic}`;
console.log(pic);
}