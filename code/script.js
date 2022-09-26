/* Adding dynamic navbar. When scrolling down the nav disappears, then up the nav appears */

let behOne = window.pageYOffset; // starting at 0 pixels vertically

console.log(behOne); // console.log for visual purpose

// Event scrolling vertically
window.onscroll = function () {
	
	let behTwo = window.pageYOffset; 
	console.log(behTwo, behOne); // console.log for visual purpose

	if (behOne > behTwo) { 
		document.getElementById("navHide").style.top = "0"; // When scrolling up beOne is greater than beTwo
		
	} else {
		document.getElementById("navHide").style.top = "-100%"; // When scrolling down beTwo is greater than behOne, nav disappears. 
		
	
	}

	behOne = behTwo;
};
