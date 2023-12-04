randomNumber1 = Math.floor(Math.random()*6)+1;
randomNumber2 = Math.floor(Math.random()*6)+1;
let randomImage = `dice${randomNumber1}.png`;
let randomImage2 = `dice${randomNumber2}.png`;
let Image = `images\\${randomImage}`;
let Image2 = `images\\${randomImage2}`;
document.getElementsByTagName("img")[0].setAttribute('src', Image);
document.querySelectorAll("img")[1].setAttribute('src', Image2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins🚩"
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Player 2 wins"
}
else {
    document.querySelector("h1").innerHTML = "Draw"
}
