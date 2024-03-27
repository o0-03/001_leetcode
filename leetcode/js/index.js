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

// 信息界面

// 和css一样而且还麻烦，还得循环

let userIntro = document.createElement("div");

userIntro.className = "userIntro";
userIntro.innerHTML = `
<div class="userIntro1">
    <a href="#"><img src="../images/user.webp" alt="" /></a>
    <div class="userIntro11">
        <p>
            <a href="#"><span class="name">用户名</span></a>
            <span class="ip">ip:湖北</span>
        </p>
        <p>
            <span>全站排名</span><span class="number">9999+</span>
        </p>
    </div>
</div>
<div class="userIntro2">
    <p>被阅读<br />0</p>
    <p>被点赞<br />0</p>
    <p>被收藏<br />0</p>
    <p>关注数<br />0</p>
</div>
<div class="userIntro3">
    <button type="submit">私信</button>
    <button type="submit">关注</button>
</div>
`;

const arr1 = document.querySelectorAll(".see");

const arr2 = document.querySelectorAll(".page");

arr1.forEach(function (e, i) {
  arr1[i].addEventListener("mouseover", function () {
    const userIntroClone = userIntro.cloneNode(true);
    userIntroClone.style.display = "block";
    userIntroClone.style.animation = "opa 0.5s";
    arr2[i].append(userIntroClone);
  });
  arr1[i].addEventListener("mouseout", function () {
    const userIntroClone = arr2[i].querySelector(".userIntro");
    userIntroClone.addEventListener("mouseout", function () {
      if (userIntroClone) {
        userIntroClone.style.display = "none";
        userIntroClone.remove();
      }
    });

    //有问题
  });
});

//回顶
const scroll = document.getElementById("scroll");
window.onscroll = function () {
  const scrollTop = document.documentElement.scrollTop;
  if (scrollTop > 200) {
    scroll.style.display = "inline";
  } else {
    scroll.style.display = "none";
  }
};

scroll.addEventListener("click", function () {
  const time = setInterval(function () {
    scrollTop = document.documentElement.scrollTop;
    if (scrollTop <= 0) {
      clearInterval(time);
    } else {
      window.scroll(0, scrollTop - 50);
    }
  }, 10);
});
