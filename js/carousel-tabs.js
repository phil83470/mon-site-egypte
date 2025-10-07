(function ($) {
  $(function () {
    console.log("script.js chargé et exécuté.");

    // 🎠 Carrousel Slick
    $(".carousel").slick({
      dots: true,
      infinite: true,
      speed: 500,
      cssEase: "linear",
    });

    // 🗂 Onglets
    const tabsContainers = document.querySelectorAll(".tabs-container");

    tabsContainers.forEach((container) => {
      const tabButtons = container.querySelectorAll(".tab-button");
      const tabPanes = container.querySelectorAll(".tab-pane");

      if (tabButtons.length > 0) {
        tabButtons[0].classList.add("active");
        tabPanes[0].classList.add("active");
      }

      tabButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
          tabButtons.forEach((btn) => btn.classList.remove("active"));
          tabPanes.forEach((pane) => pane.classList.remove("active"));
          button.classList.add("active");
          tabPanes[index].classList.add("active");
        });
      });
    });
  });
})(jQuery);
