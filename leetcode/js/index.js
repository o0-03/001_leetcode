// 下拉菜单
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
// 广告动画
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

// 轮播图
var left = 0;
var timer;
const imglist = document.getElementsByClassName("imglist")[0];
run();
function run() {
  if (left <= -45) {
    left = 0;
  }
  imglist.style.marginLeft = left + "rem";
  var n = left % 15 ? 20 : 2000;

  timer = setTimeout(run, n);
  left -= 1;
}
const circle = document.getElementsByClassName("circle");
for (let i = 0; i < circle.length; i++) {
  circle[i].addEventListener("click", function (e) {
    let index = Number(e.target.getAttribute("index"));
    fix(index);
  });
}
circle.onmouseover = function () {
  clearTimeout(timer);
};
function fix(index) {
  var moving = index * -15;
  var a = 0;
  function move() {
    if (a >= moving) {
      imglist.style.marginLeft = a + "rem";
      a -= 1;
      setTimeout(move, 20);
    }
  }
  move();
}
// 不太对，还在想错误在哪
