let home_section = document.querySelector("section.home");
let viewport_width = window.innerWidth;

if(viewport_width > 768){
	window.addEventListener("scroll", function () {
		let offset = window.scrollY * 0.5;
		home_section.style.backgroundPositionY = offset + "px";
		console.log(offset);
	});
}


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
    strings: ['','TRANSFORM','POPULARIZE','GROW','BOOST'],
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

  if(viewport_width <= 576){
	const swiper_sm = new Swiper('.swiper', {
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
		slidesPerView: 2,
	  });
  }

  //vanilla-tilt

//   VanillaTilt.init(document.querySelectorAll(".img-wrapper"), {
// 	max: 10,
// 	speed: 200,
// 	reverse: true,
// 	glare: true,
// 	"max-glare": .5,
// });
let expandButton = $('#expand-btn');
let answerPara = $('#answer-para');
let question1 = $('#question-1');

question1.on('click', function(){

   if(answerPara.attr('class') == 'custom-para answer invisible'){
	  answerPara.removeClass('invisible');
	  answerPara.addClass('visible');
	  expandButton.html('<i class="fas fa-chevron-up"></i>');
   }
   else if(answerPara.attr('class') == 'custom-para answer visible'){
	  answerPara.removeClass('visible');
	  answerPara.addClass('invisible');
	  expandButton.html('<i class="fas fa-chevron-down"></i>');
   }
   
});

let expandButton1 = $('#expand-btn1');
let answerPara1 = $('#answer-para1');
let question2 = $('#question-2');

question2.on('click', function(){

   if(answerPara1.attr('class') == 'custom-para answer invisible'){
	  answerPara1.removeClass('invisible');
	  answerPara1.addClass('visible');
	  expandButton1.html('<i class="fas fa-chevron-up"></i>');
   }
   else if(answerPara1.attr('class') == 'custom-para answer visible'){
	  answerPara1.removeClass('visible');
	  answerPara1.addClass('invisible');
	  expandButton1.html('<i class="fas fa-chevron-down"></i>');
   }
   
});

let expandButton2 = $('#expand-btn2');
let answerPara2 = $('#answer-para2');
let question3 = $('#question-3');

question3.on('click', function(){

   if(answerPara2.attr('class') == 'custom-para answer invisible'){
	  answerPara2.removeClass('invisible');
	  answerPara2.addClass('visible');
	  expandButton2.html('<i class="fas fa-chevron-up"></i>');
   }
   else if(answerPara2.attr('class') == 'custom-para answer visible'){
	  answerPara2.removeClass('visible');
	  answerPara2.addClass('invisible');
	  expandButton2.html('<i class="fas fa-chevron-down"></i>');
   }
   
});

let expandButton3 = $('#expand-btn3');
let answerPara3 = $('#answer-para3');
let question4 = $('#question-4');

question4.on('click', function(){

   if(answerPara3.attr('class') == 'custom-para answer invisible'){
	  answerPara3.removeClass('invisible');
	  answerPara3.addClass('visible');
	  expandButton3.html('<i class="fas fa-chevron-up"></i>');
   }
   else if(answerPara3.attr('class') == 'custom-para answer visible'){
	  answerPara3.removeClass('visible');
	  answerPara3.addClass('invisible');
	  expandButton3.html('<i class="fas fa-chevron-down"></i>');
   }
   
});

let expandButton4 = $('#expand-btn4');
let answerPara4 = $('#answer-para4');
let question5 = $('#question-5');

question5.on('click', function(){

   if(answerPara4.attr('class') == 'custom-para answer invisible'){
	  answerPara4.removeClass('invisible');
	  answerPara4.addClass('visible');
	  expandButton4.html('<i class="fas fa-chevron-up"></i>');
   }
   else if(answerPara4.attr('class') == 'custom-para answer visible'){
	  answerPara4.removeClass('visible');
	  answerPara4.addClass('invisible');
	  expandButton4.html('<i class="fas fa-chevron-down"></i>');
   }
   
});