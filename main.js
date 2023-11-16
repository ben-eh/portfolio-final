// // When the user scrolls the page, execute myFunction 
// window.onscroll = function() {myFunction()};

// // Get the header
// var header = document.getElementById("myHeader");

// // Get the offset position of the navbar
// var sticky = header.offsetTop;

// // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }

let windowWidth = window.screen.width;
let windowHeight = window.screen.height;

const updateWindowSize = () => {
	// widthElement.textContent = window.innerWidth;
	// heightElement.textContent = window.innerHeight;
	const windowWidth = window.screen.width;
	const cardLength = windowWidth / 2;
	const cardChild2s = document.querySelectorAll('.card-child-2');
	cardChild2s.forEach(element => {
		element.style.marginTop = '-200px';
	});
	console.log(window.screen.width);
}


const observer = new IntersectionObserver((entries) => {
	 entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add('show');
		} else {
			entry.target.classList.remove('show');
		}
	})
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


window.addEventListener('DOMContentLoaded', () => {
	const headerHeight = document.querySelector('.header-left').offsetHeight;
	const mainTitleHeight = document.querySelector('.main-title').offsetHeight;
	const bodyHeight = document.querySelector('.first-section');
	bodyHeight.style.marginTop = `-${headerHeight}px`;
	bodyHeight.style.height = `calc(100vh + ${headerHeight}px)`;
	// bodyHeight.style.height = `calc(100vh - ${headerHeight}px)`;
	// bodyHeight.style.marginTop = `- (${headerHeight}px + ${mainTitleHeight}px)`;
})

// window.addEventListener('resize', updateWindowSize);