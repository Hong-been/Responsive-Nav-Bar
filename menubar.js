const menubar = document.querySelector("#menubar");

let width = document.body.clientWidth;
if (width < 800) {
	menubar.classList.remove("hidden");
} else if (screen.width >= 800) {
	menubar.classList.add("hidden");
}

function responsiveWidth(screen) {
	width = screen.target.innerWidth;

	if (width < 800) {
		menubar.classList.remove("hidden");
	} else if (width >= 800) {
		menubar.classList.add("hidden");
	}
}

window.addEventListener("resize", responsiveWidth);
