document.addEventListener("DOMContentLoaded", () => {
  let header__body = document.querySelector(".header__body");

  function scrollFunction() {
    if (document.documentElement.clientWidth >= 768) {
      window.onscroll = function () {
        if (
          document.body.scrollTop > 80 ||
          document.documentElement.scrollTop > 80
        ) {
          header__body.style.height = "50px";
        } else {
          header__body.style.height = "80px";
        }
      };
    } else {
      window.onscroll = function () {
        if (
          document.body.scrollTop > 70 ||
          document.documentElement.scrollTop > 70
        ) {
          header__body.style.height = "50px";
        } else {
          header__body.style.height = "70px";
        }
      };
    }
  }
  scrollFunction();
  window.addEventListener(
    "resize",
    () => {
      scrollFunction();
    },
    true
  );
});
