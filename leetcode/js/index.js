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
const searchInput = document.getElementById("searchInput");
clear.addEventListener("click", function () {
  searchInput.value = " ";
});

// 轮播图
var left = 0;
var timer;
var currentIndex;
var moving;
const imglist = document.getElementsByClassName("imglist")[0];
run();

function run() {
  if (left <= -45) {
    left = 0;
  }

  imglist.style.marginLeft = left + "rem";
  var n = left % 15 ? 20 : 2000;
  clearTimeout(timer);
  timer = setTimeout(run, n);
  left -= 1;
}

function moveLeft() {
  clearTimeout(timer);
  currentIndex = Math.abs(left / 15) % 3;
  moving = currentIndex * -15;
  imglist.style.marginLeft = left + "rem";
  if (left !== moving) {
    if (left > moving) {
      left -= 1;
    } else {
      left += 1;
    }
    if (left <= -45) {
      left = 0;
    }

    timer = setTimeout(moveLeft, 20);
  }
}

const circles = document.querySelectorAll(".circle");
for (let i = 0; i < circles.length; i++) {
  circles[i].onmouseover = function () {
    clearTimeout(timer);
  };
  circles[i].onmouseout = function () {
    setTimeout(run, 1000);
  };
  window.addEventListener("click", (e) => {
    if (circles[i].contains(e.target)) {
      clearTimeout(timer);
      moveLeft();
    }
  });
}

// 信息界面

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
  const userIntroClone = userIntro.cloneNode(true);

  // arr1[i].addEventListener("mouseout", function () {
  //   const userIntroClone = arr2[i].querySelector(".userIntro");
  //   if (userIntroClone) {
  //     userIntroClone.style.display = "none";
  //     userIntroClone.remove();
  //   }
  // });

  window.addEventListener("mouseover", function (event) {
    const mouse = event.target;
    if (arr1[i].contains(mouse)) {
      userIntroClone.style.display = "block";
      userIntroClone.style.animation = "opa 0.5s";
      arr2[i].append(userIntroClone);
    }
    setTimeout(function () {
      if (!userIntroClone.contains(mouse) && !arr1[i].contains(mouse)) {
        userIntroClone.remove();
      }
    }, 1);
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
const scrollImg = document.createElement("div");
scrollImg.innerHTML = `<img src="../images/up.png" alt="" />`;
scroll.append(scrollImg);
scroll.addEventListener("mouseover", function () {
  scroll.innerText = "回到顶部";
  scrollImg.remove();
});
scroll.addEventListener("mouseout", function () {
  scroll.innerText = "";
  scroll.append(scrollImg);
});

const feedback = document.getElementById("feedback");
const feedImg = document.createElement("div");
feedImg.innerHTML = `<img src="../images/question.png" alt="" />`;
feedback.append(feedImg);
feedback.addEventListener("mouseover", function () {
  feedback.innerText = "问题反馈";
  feedImg.remove();
});
feedback.addEventListener("mouseout", function () {
  feedback.innerText = "";
  feedback.append(feedImg);
});

//mode
const html = document.querySelector("html");
var mode = html.getAttribute("color-mode");
var modeName = document.getElementById("switch");

function changeMode() {
  html.style.transition = "all 0.5s";
  if (mode === "light") {
    mode = "dark";
  } else {
    mode = "light";
  }
  html.setAttribute("color-mode", mode);
}

//login
function login() {
  var loginPage = document.createElement("div");
  loginPage.id = "loginPart";
  loginPage.innerHTML = `
    <div class="contain"><img src="../images/leetcode.svg" alt=""></div>
      <p>账号密码登录</p>
      <form action="#" onsubmit="return submitUser()">
        <input id="text" type="text" placeholder="手机/邮箱">
        <input id="password" type="password" placeholder="输入密码">
        <input id="submit" type="submit" value="登录">
      </form>
      <div>
        <a href="#" id="btnRegister">验证码登录/注册</a>
        <a href="#">忘记密码</a>
      </div>
      <p>注册或登录即代表您同意《用户协议》和《隐私协议》</p>`;
  const body = document.body;
  body.append(loginPage);
  var mask = document.createElement("div");
  mask.id = "mask";
  body.append(mask);
  const btnRegister = document.getElementById("btnRegister");
  btnRegister.addEventListener("click", function () {
    loginPage.remove();
    mask.remove();
    register();
  });
  setTimeout(function () {
    if (loginPage) {
      window.addEventListener("click", function (event) {
        const target = event.target;
        if (!loginPage.contains(target)) {
          loginPage.remove();
          mask.remove();
        }
      });
    }
  }, 1); //据说一个人点鼠标最快一秒能点16下，所以……应该没问题吧
}

function register() {
  var registerPage = document.createElement("div");
  registerPage.id = "loginPart";
  registerPage.innerHTML = `
    <div class="contain"><img src="../images/leetcode.svg" alt=""></div>
      <p>验证码登录/注册</p>
      <form action="#" onsubmit="return submitUser()">
        <input id="text" type="text" placeholder="手机/邮箱">
        <input id="password" type="password" placeholder="验证码">
        <input id="submit" type="submit" value="登录/注册">
      </form>
      <div>
        <a href="#" id="btnLogin">密码登录</a>
        <a href="#">忘记密码</a>
      </div>
      <p>注册或登录即代表您同意《用户协议》和《隐私协议》</p>`;
  const body = document.body;
  body.append(registerPage);
  var mask = document.createElement("div");
  mask.id = "mask";
  body.append(mask);
  const btnLogin = document.getElementById("btnLogin");
  btnLogin.addEventListener("click", function () {
    registerPage.remove();
    mask.remove();
    login();
  });
  setTimeout(function () {
    if (registerPage) {
      window.addEventListener("click", function (event) {
        const target = event.target;
        if (!registerPage.contains(target)) {
          registerPage.remove();
          mask.remove();
        }
      });
    }
  }, 1);
}

function submitUser() {
  var text = document.getElementById("text");
  var password = document.getElementById("password");
  if (text.value == "123" && password.value == "123") {
    const user = document.getElementById("user");
    user.style.display = "block";
    const noLogin = document.getElementById("noLogin");
    noLogin.style.display = "none";
    const loginPart = document.getElementById("loginPart");
    loginPart.remove();
    const mask = document.getElementById("mask");
    mask.remove();
    return true;
  } else {
    alert("登录失败");
    return false;
  }
}

const out = document.getElementById("out");
out.addEventListener("click", function () {
  const user = document.getElementById("user");
  user.style.display = "none";
  const noLogin = document.getElementById("noLogin");
  noLogin.style.display = "flex";
});

//搜索

const historyPart = document.getElementById("history");
const hisItem = document.getElementById("hisItem");
var historyTextArray = [];

window.addEventListener("click", function (event) {
  const target = event.target;
  if (searchInput.contains(target) || historyPart.contains(target)) {
    historyPart.style.display = "block";
    event.stopPropagation();
  } else {
    historyPart.style.display = "none";
  }
});
function deleteHistoryItem(n) {
  const historyItems = document.querySelectorAll(".newHistoryItem");
  if (n >= 0 && n <= historyItems.length) {
    historyItems[n].remove();
    historyTextArray.splice(n, 1);
    localStorage.setItem("historyTextArray", JSON.stringify(historyTextArray));
  }
  if (historyItems.length == 1) {
    historyItems[0].remove();
  }
  for (let i = 0; i < historyItems.length; i++) {
    historyItems[i].setAttribute("data-index", i);
  }
}

function createHistoryItem(text) {
  const newHistoryItem = document.createElement("div");
  newHistoryItem.className = "newHistoryItem";
  newHistoryItem.innerHTML = `
    <img src="../images/history.png" alt="">
    <p class="historyText">${text}</p>
    <img class="clearOne" src="../images/clearone.png" alt="">
  `;
  hisItem.append(newHistoryItem);
  return newHistoryItem;
}

function updateHistory() {
  hisItem.innerHTML = "";
  historyTextArray.forEach((text, i) => {
    const newHistoryItem = createHistoryItem(text);
    newHistoryItem.setAttribute("data-index", i);
    const clearOne = newHistoryItem.querySelector(".clearOne");
    clearOne.addEventListener("click", function () {
      const index = parseInt(this.parentElement.getAttribute("data-index"));
      deleteHistoryItem(index);
    });
  });
}

searchInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    const inputValue = searchInput.value.trim();
    if (inputValue !== "") {
      const newHistoryItem = createHistoryItem(inputValue);
      historyTextArray.push(inputValue);
      localStorage.setItem(
        "historyTextArray",
        JSON.stringify(historyTextArray)
      );
      searchInput.value = " ";
      updateHistory();
    }
  }
});

document.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("historyTextArray")) {
    historyTextArray = JSON.parse(localStorage.getItem("historyTextArray"));
    updateHistory();
  }
});
