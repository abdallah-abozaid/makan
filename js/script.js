window.onload = function () {
  window.onscroll = function () {
    if (window.pageYOffset > 1000) {
      document.querySelector(".toTop").classList.remove("hide");
    } else {
      document.querySelector(".toTop").classList.add("hide");
    }
    // ---------------------------
    if (window.pageYOffset > 10) {
      document
        .querySelector(".section2 > .container img:nth-of-type(1)")
        .classList.add("fstImg");
      document
        .querySelector(".section2 > .container img:nth-of-type(2)")
        .classList.add("secImg");
      document
        .querySelector(".section2 > .container img:nth-of-type(3)")
        .classList.add("therdImg");
    } else {
      document
        .querySelector(".section2 > .container img:nth-of-type(1)")
        .classList.remove("fstImg");
      document
        .querySelector(".section2 > .container img:nth-of-type(2)")
        .classList.remove("secImg");
      document
        .querySelector(".section2 > .container img:nth-of-type(3)")
        .classList.remove("therdImg");
    }
    // ---------------------
    if (window.pageYOffset > 600) {
      document
        .querySelector(
          ".section3 .row > div:last-of-type > .imgs img:nth-of-type(5)"
        )
        .classList.add("showHello");
    } else {
      document
        .querySelector(
          ".section3 .row > div:last-of-type > .imgs img:nth-of-type(5)"
        )
        .classList.remove("showHello");
    }
  };
};
