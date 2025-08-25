
(function(){

	document.addEventListener('DOMContentLoaded', () => { // transfer the element into body
		const body = document.querySelector("body");

		// start header
		if (document.querySelector('.header__burger-menu') && document.querySelector('.header__burger-menu').parentNode !== document.body) {
			document.body.appendChild(document.querySelector('.header__burger-menu'));
		}

		body.addEventListener("click", (el) => {
			let headerBurgerMenu = document.querySelector(".header__burger-menu");

				if (el.target.closest("#burger-menu-open-btn")){
					headerBurgerMenu.classList.add("active");
					body.classList.add("lock");
				} else if (el.target.closest("#burger-menu-close-btn") || el.target.matches(".header__burger-menu.active")) {
					headerBurgerMenu.classList.remove("active");
					body.classList.remove("lock");
				}

		})
		// finish header




		// start banner-pop-up
		const bannerPopup = document.querySelector('.banner-pop-up');
		const emailInput = document.getElementById('banner-pop-up-email');
		const submitBtn = document.getElementById('banner-pop-up-submit-btn');

		function setCookie(name, value, days) {
			const date = new Date();
			date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
			document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
		};

		function getCookie(name) {
			const value = `; ${document.cookie}`;
			const parts = value.split(`; ${name}=`);
			if (parts.length === 2) return parts.pop().split(';').shift();
		};

		if (!getCookie('bannerFormSubmitted')) {
			setTimeout(() => {
				bannerPopup.classList.add("active");
				body.classList.add("lock");
			}, 1000);
		};

		bannerPopup.addEventListener('click', (e) => {
				console.log("e.target",e.target)

			if (e.target.closest('#banner-pop-up-close-btn')) {
				bannerPopup.classList.remove('active');
				body.classList.remove('lock');
				return;
			}


			if (e.target == submitBtn) {

				const email = emailInput.value.trim();

				if (email) {
					e.preventDefault();
					setCookie('bannerFormSubmitted', 'true', 30);
					bannerPopup.classList.remove('active');
					body.classList.remove('lock');
				}
			}
		});
		// finish banner-pop-up




		// start banner Swiper
		const bannerSwiper = new Swiper('#bannerSwiper', {
			loop: true,
			autoplay: {
				delay: 1000,
				disableOnInteraction: false,
			},
			pagination: {
				el: '#bannerSwiper .swiper-pagination',
				clickable: true,
			},
			simulateTouch: true,
		});
		// finish banner Swiper




		// start product-card Swiper
		const featuredSwiper = new Swiper("#productCardsSwiper", {
			slidesPerView: 1.15,
			spaceBetween: 16,


			navigation: {
				nextEl: ".swiper-button-next.featured-nav",
				prevEl: ".swiper-button-prev.featured-nav",
			},

			breakpoints: {
				768: {
					slidesPerView: 2.5,
				},
				1281: {
					slidesPerView: 3.8,
					spaceBetween: 24,
				},
				1351: {
					slidesPerView: 4,
					spaceBetween: 24,
				},
			},

			on: {
				init: function () {
					updateNavButtons(this);
				},
				slideChange: function () {
					updateNavButtons(this);
				},
			},
		});
		function updateNavButtons(swiper) {
			const prevBtn = document.querySelector('.swiper-button-prev.featured-nav');
			const nextBtn = document.querySelector('.swiper-button-next.featured-nav');

			if (swiper.isBeginning) {
				prevBtn.classList.add('hidden');
			} else {
				prevBtn.classList.remove('hidden');
			}

			if (swiper.isEnd) {
				nextBtn.classList.add('hidden');
			} else {
				nextBtn.classList.remove('hidden');
			}
		}
		// finish product-card Swiper




		// start faq
		document.querySelectorAll('[data-faq]').forEach(item => {
			const question = item.querySelector('.faq-question');
			const toggle = item.querySelector('.faq-toggle');

			question.addEventListener('click', () => {
				document.querySelectorAll('[data-faq]').forEach(el => {
					if (el !== item) {
						el.classList.remove('active');
						el.querySelector('.faq-toggle').textContent = '+';
					}
				});

				const isActive = item.classList.contains('active');
				item.classList.toggle('active');
				toggle.textContent = isActive ? '+' : '−';
			});
		});
		// finish faq








		// 	MAIN product Swiper
		const redThumb = new Swiper(".red-sneakers", {
			spaceBetween: 10,
			slidesPerView: 3.5,
			breakpoints: {
				768: {
					  direction: 'vertical',
						slidesPerView: 5,
				},
			},
		});
		const redMain = new Swiper(".red-sneakers-2", {
			spaceBetween: 10,
			thumbs: {
				swiper: redThumb,
			},
		});

		const blackThumb = new Swiper(".dark-sneakers", {
			spaceBetween: 10,
			slidesPerView: 3.5,
			breakpoints: {
				768: {
					direction: 'vertical',
					slidesPerView: 5,
				},
			},
		});
		const blackMain = new Swiper(".dark-sneakers-2", {
			spaceBetween: 10,
			thumbs: {
				swiper: blackThumb,
			},
		});

		const whiteThumb = new Swiper(".white-sneakers", {
			spaceBetween: 10,
			slidesPerView: 3.5,
			breakpoints: {
				768: {
					direction: 'vertical',
					slidesPerView: 5,
				},
			},
		});
		const whiteMain = new Swiper(".white-sneakers-2", {
			spaceBetween: 10,
			thumbs: {
				swiper: whiteThumb,
			},
		});

		const colorImagesBtn = document.querySelectorAll(".color-options img");
		const sliders = {
			red: {
				main: document.querySelector(".red-sneakers-2"),
				thumbs: document.querySelector(".red-sneakers"),
			},
			black: {
				main: document.querySelector(".dark-sneakers-2"),
				thumbs: document.querySelector(".dark-sneakers"),
			},
			white: {
				main: document.querySelector(".white-sneakers-2"),
				thumbs: document.querySelector(".white-sneakers"),
			},
		};

		const sizeBtn = document.querySelectorAll(".size-options .size");

		function resetSizeSelection() {
			sizeBtn.forEach((btn) => btn.classList.remove("active"));
		}

		sizeBtn.forEach((btn) => {
			btn.addEventListener("click", () => {
				resetSizeSelection();
				btn.classList.add("active");
			});
		});

		colorImagesBtn.forEach((img) => {
			img.addEventListener("click", () => {

				colorImagesBtn.forEach((i) => i.classList.remove("active"));
				img.classList.add("active");

				Object.values(sliders).forEach(({ main, thumbs }) => {
					main.classList.remove("active");
					thumbs.classList.remove("active");
				});


				const selectedColor = img.dataset.color;
				sliders[selectedColor].main.classList.add("active");
				sliders[selectedColor].thumbs.classList.add("active");

				const price = img.dataset.price;
				document.getElementById("price").innerText = `$${price}`;


				resetSizeSelection();

				if (sizeBtn.length > 1) {
					sizeBtn[1].classList.add("active");
				}
			});
		});











		//help Form
		const form = document.getElementById('helpForm');

		form.addEventListener('submit', function (e) {
			e.preventDefault();

			alert('Thank you!');
			form.reset();
		});



		//footer
		const accordionBtns = document.querySelectorAll('.footer__accordion');

		accordionBtns.forEach((btn) => {
			btn.addEventListener('click', function () {
				const isExpanded = this.getAttribute('aria-expanded') === 'true';

				accordionBtns.forEach((otherBtn) => {
					otherBtn.setAttribute('aria-expanded', 'false');
					const otherSection = otherBtn.parentElement;
					const otherList = otherSection.querySelector('.footer__list');
					otherList.classList.remove('open');
				});

				if (!isExpanded) {
					this.setAttribute('aria-expanded', 'true');
					const section = this.parentElement;
					const list = section.querySelector('.footer__list');
					list.classList.add('open');
				}
			});
		});



	});




})();
