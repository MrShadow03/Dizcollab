let home_section = document.querySelector("section.home");

window.addEventListener("scroll", function () {
	let offset = window.scrollY * 0.5;
	home_section.style.backgroundPositionY = offset + "px";
	console.log(offset);
});
