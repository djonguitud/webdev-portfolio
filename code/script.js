/* Adding dynamic navbar. When scrolling down the nav disappears, then up the nav appears */

let behOne = window.pageYOffset;

window.onscroll = function() {

    let behTwo = window.pageYOffset;

    if (behOne > behTwo) {
      document.getElementById("navHide").style.top = "0";
    } else {
      document.getElementById("navHide").style.top = "-100%";
    }

    behOne = behTwo;
  } 