//favorite-food
/*
const food = document.getElementById("favorite-img1");
const deagu = document.getElementById("favorite-img2");

const favoriteContainer = document.getElementById("favorite");

food.onmouseover = function () {
  const foodname = document.createElement("div");
  foodname.className = "foodname";
  foodname.textContent = "ポルチム(たらの頭の蒸し物)";

  food.append(foodname);
  foodname.append(favoriteContainer);
};*/

//like & dislike botton
const like = document.getElementById("like-btn");
const dislike = document.getElementById("dislike-btn");
const likeContainer = document.getElementById("like-container");
const dislikeContainer = document.getElementById("dislike-container");

let countLike = 0;
let countDislike = 0;

like.onclick = function () {
  if (countLike >= 0) {
    countLike += 1;
    likeContainer.textContent = countLike;
    console.log();
  }
};

dislike.onclick = function () {
  if (countDislike >= 0) {
    countDislike += 1;
    dislikeContainer.textContent = countDislike;
  }
};
