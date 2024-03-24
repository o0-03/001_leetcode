const down = document.getElementById("down");
const list = document.getElementsByClassName("list")[0];
var flag = 0;
down.addEventListener("click", function () {
  flag = !flag;
  if (flag == 1) {
    list.style.display = "block";
  } else {
    list.style.display = "none";
  }
});

const move = document.getElementById("move");

move.addEventListener("mouseover", function () {
  move.style.animation = "move 0.5s linear forwards";
});

move.addEventListener("mouseleave", function () {
  move.style.animation = "moveback 0.5s forwards";
});

const clear = document.getElementById("clear");
const search = document.getElementById("input");
clear.addEventListener("click", function () {
  search.value = " ";
});
