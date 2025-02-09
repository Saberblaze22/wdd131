const reviewCount=document.querySelector("#reviews")
let numreviews=Number(window.localStorage.getItem("review"))||0;
numreviews++;
localStorage.setItem("review",numreviews);
reviewCount.textContent=numreviews