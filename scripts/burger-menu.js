document.addEventListener("DOMContentLoaded", () => {
  /*burger menu*/
  let header__burger = document.querySelector(".header__burger");
  let header__menu = document.querySelector(".header__menu");
  let lock = document.querySelector("body");
  let header__list = document.querySelector(".header__list");

  header__burger.onclick = function () {
    header__burger.classList.toggle("active");
    header__menu.classList.toggle("active");
    lock.classList.toggle("lock");
  };

  header__list.onclick = function () {
    header__burger.classList.remove("active");
    header__menu.classList.remove("active");
    lock.classList.remove("lock");
  };

  document.addEventListener("click", (e) => {
    const outOfMenu = e.composedPath().includes(header__burger);

    if (!outOfMenu) {
      header__burger.classList.remove("active");
      header__menu.classList.remove("active");
      lock.classList.remove("lock");
    }
  });
});
