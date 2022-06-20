



// class MobileNavbar{
// 	constructor(mobileMenu,navList,navLinks) {
// 		this.mobileMenu = document.querySelector(mobileMenu);
// 		this.navList = document.querySelector(navList);
// 		this.navLinks = document.querySelector(navLinks);
// 		this.activeClass = "active";
// 		this.handleClick = this.handleClick.bind(this);
// 	}

// 	handleClick() {
// 		this.navList.classList.toggle(this.activeClass);
// 	}

// 	addClickEvent() {
// 		this.mobileMenu.addEventListener('click', this.handleClick);
// 	}

// 	init() {
// 		if (this.mobileMenu) {
// 			this.addClickEvent();
// 		}
// 		return this;
// 	}
// }

// const mobileNavbar = new MobileNavbar(
// 	".mobile-nav",".main-nav__list",".main-nav__list li"
// )

// const mobileDarkNavbar = new MobileNavbar(
// 	".mobile-nav",".dark-nav__list",".dark-nav__list li"
// )

// const mobileLightNavbar = new MobileNavbar(
// 	".mobile-nav",".light-nav__list",".light-nav__list li"
// )

// mobileNavbar.init();

// mobileDarkNavbar.init();

// mobileLightNavbar.init();





function menuInput() {
	let menu = document.getElementById('menu');
	let menuTwo = document.getElementById('menuTwo');
	let menuThree = document.getElementById('menuThree');


	let txt = menu.options[menu.selectedIndex].text;

	let txtTwo = menuTwo.options[menuTwo.selectedIndex].text;
	let txtThree = menuThree.options[menuThree.selectedIndex].text;

	document.getElementById("menu__input").value = txt +'|'+ txtTwo  +'|'+ txtThree;
}
