let p1=document.querySelector(".img1");
let p2=document.querySelector(".img2");
let n=Math.random()*6;
n=Math.floor(n)+1;
let m=Math.random()*6;
m=Math.floor(m)+1;
p1.src=`./images/dice${n}.png`;
p2.src=`./images/dice${m}.png`;
if(n>m){
    document.querySelector("h1").textContent="Player 1 wins!"
}
else if(n<m){
    document.querySelector("h1").textContent="Player 2 wins!"
}
else{
    document.querySelector("h1").textContent="It's a draw!"
}