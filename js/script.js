window.onload = function () {
  window.onscroll = function () {
    if (window.pageYOffset > 1000) {
      document.querySelector(".toTop").classList.remove("hide");
    } else {
      document.querySelector(".toTop").classList.add("hide");
    }
  };
};
