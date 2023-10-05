const body = window.document.body;

const userAgent = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },

  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },

  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },

  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },

  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },

  any: function () {
    return userAgent.Android() || userAgent.BlackBerry() || userAgent.iOS() || userAgent.Opera() || userAgent.Windows();
  },
};

(() => {
  if (userAgent.any()) {
    const sectionMobile = body.querySelector(".mobile");

    const sectionArr = body.querySelectorAll("[data-section]");

    sectionArr.forEach((section) => {
      section.remove();
    });

    return (sectionMobile.style.display = "flex");
  }

  (() => {
    const watchButton = body.querySelector("[data-watch-button]");

    const startSection = document.querySelector(".start");

    const helloSection = body.querySelector(".hello");

    watchButton.addEventListener("click", () => {
      startSection.style.display = "none";
      helloSection.style.display = "flex";
    });
  })();
})();

(() => {
  body.querySelector(".text-show-button").addEventListener("click", (e) => {
    e.target.style.display = "none";

    body.querySelector("[data-show-text]").style.display = "inline";
  });
})();
