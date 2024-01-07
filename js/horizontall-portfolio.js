(function () {
  let w = window.innerWidth;
  if (w > 768) {

    function scrollHorizontally(e) {

      e = window.event || e;
      var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
      document.documentElement.scrollLeft -= (delta * 60); // Multiplied by 40
      document.body.scrollLeft -= (delta * 60); // Multiplied by 40
      e.preventDefault();
    }
    if (window.addEventListener) {
      // IE9, Chrome, Safari, Opera
      window.addEventListener("mousewheel", scrollHorizontally, false);
      // Firefox
      window.addEventListener("DOMMouseScroll", scrollHorizontally, false);
    } else {
      // IE 6/7/8
      window.attachEvent("onmousewheel", scrollHorizontally);
    }
  }
})();

