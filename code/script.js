/* Adding dynamic navbar. When scrolling down the nav disappears, then up the nav appears */

let behOne = window.pageYOffset;

window.onscroll = function () {
	let behTwo = window.pageYOffset;

	if (behOne > behTwo) {
		document.getElementById("navHide").style.top = "0";
	} else {
		document.getElementById("navHide").style.top = "-100%";
	}

	behOne = behTwo;
};

/* Change slogan to different languajes */
let sloganWelcome = [
	"HELLO! I AM DIEGO. FULLSTACK WEB DEVELOPER",
	"HOLA! SOY DIEGO. DESARROLLADOR WEB FULLSTACK",
	"SALUT! JE SUIS DIEGO. DÉVELOPPEUR WEB FULLSTACK",
	"CIAO! IO SONO DIEGO. SVILUPPATORE WEB COMPLETO",
	"HALLO! ICH BIN DIEGO. FULLSTACK-WEBENTWICKLER",
];

let sloganRandom = function (max) {
	return Math.floor(Math.random() * max);
};

let getIndex = sloganWelcome[sloganRandom(sloganWelcome.length)];

let el = document.getElementById("langChange");
