export function setupScrollEffect() {
    var hideScroll = window.scrollY;
  
    window.onscroll = function() {
      var currentScrollPos = window.scrollY;
  
      if (hideScroll > window.scrollY) {
        document.getElementById("navbar").style.top = "0";
      } else {
        document.getElementById("navbar").style.top = "-100px";
      }
  
      hideScroll = currentScrollPos;
    };
  }
  