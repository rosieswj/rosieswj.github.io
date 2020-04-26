//calculate the percentage for progress
function makeProgressBar() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myProgressBar").style.width = scrolled + "%";
}

// adopted from example: https://git.blivesta.com/animsition/
$(document).ready(function () {
  if (document.getElementsByClassName("animsition") != null) {
    $(".animsition").animsition({
      // inClass: "fade-in-down",
      // outClass: "fade-out-down",
      // inDuration: 1200,
      // outDuration: 800,
      linkElement: ".animsition-link",
      loading: false,
      loadingParentElement: "body",
      loadingClass: "animsition-loading",
      loadingInner: "",
      timeout: false,
      timeoutCountdown: 1000,
      onLoadEvent: true,
      browser: ["animation-duration", "-webkit-animation-duration"],
      overlay: false,
      overlayClass: "animsition-overlay-slide",
      overlayParentElement: "body",
      transition: function (url) {
        window.location.href = url;
      },
    });
  }
});

//resize the viz based on browser size
$(window).resize(function () {
  makeWinHeight();
});

//home page animation scroll effect
$(window).on("scroll", function () {
  var header = $("header");
  if (header != null) {
    var scrollTop = $(this).scrollTop(),
      height = header.outerHeight(),
      offset = height / 1.7,
      calc = 1 - (scrollTop - offset + 200) / 200;

    header.css({ opacity: calc });
    if (calc > "1") {
      header.css({ opacity: 1 });
    } else if (calc < "0") {
      header.css({ opacity: 0 });
    }
  }

  //progress bar

  if (document.getElementById("myProgressBar") != null) {
    makeProgressBar();
  }
});

//call rellax framework for parallax effect
if (document.getElementsByClassName("rellax") != null) {
  var rellax = new Rellax(".rellax");
}
