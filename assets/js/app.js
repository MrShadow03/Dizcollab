let home_section = document.querySelector("section.home");

window.addEventListener("scroll", function () {
	let offset = window.scrollY * 0.5;
	home_section.style.backgroundPositionY = offset + "px";
	console.log(offset);
});

/* text animation with Jquery
var TxtType = function(el, toRotate, period) {
	this.toRotate = toRotate;
	this.el = el;
	this.loopNum = 0;
	this.period = parseInt(period, 10) || 2000;
	this.txt = '';
	this.tick();
	this.isDeleting = false;
};

TxtType.prototype.tick = function() {
	var i = this.loopNum % this.toRotate.length;
	var fullTxt = this.toRotate[i];

	if (this.isDeleting) {
	this.txt = fullTxt.substring(0, this.txt.length - 1);
	} else {
	this.txt = fullTxt.substring(0, this.txt.length + 1);
	}

	this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

	var that = this;
	var delta = 200 - Math.random() * 100;

	if (this.isDeleting) { delta /= 2; }

	if (!this.isDeleting && this.txt === fullTxt) {
	delta = this.period;
	this.isDeleting = true;
	} else if (this.isDeleting && this.txt === '') {
	this.isDeleting = false;
	this.loopNum++;
	delta = 500;
	}

	setTimeout(function() {
	that.tick();
	}, delta);
};

window.onload = function() {
	var elements = document.getElementsByClassName('typewrite');
	for (var i=0; i<elements.length; i++) {
		var toRotate = elements[i].getAttribute('data-type');
		var period = elements[i].getAttribute('data-period');
		if (toRotate) {
		  new TxtType(elements[i], JSON.parse(toRotate), period);
		}
	}
	// INJECT CSS
	var css = document.createElement("style");
	css.type = "text/css";
	css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
	document.body.appendChild(css);
};
*/

var typed2 = new Typed('.typewrite', {
    strings: ['','TRANSFORM','POPULARIZE','GROW'],
    typeSpeed: 100,
    backSpeed: 30,
    loop: true
  });

  //swiper

  const swiper = new Swiper('.swiper', {
	speed: 400,
	spaceBetween: 50,
	autoplay: {
		delay:1000,
		stopOnLastSlide: false,
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true,
	},
	loop: true,
	loopFillGroupWithBlank: true,
	slidesPerView: 3,
  });

  //vanilla-tilt

//   VanillaTilt.init(document.querySelectorAll(".img-wrapper"), {
// 	max: 10,
// 	speed: 200,
// 	reverse: true,
// 	glare: true,
// 	"max-glare": .5,
// });