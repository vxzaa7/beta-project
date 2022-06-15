class MobileNavbar{
	constructor(mobileMenu,navList,navLinks) {
		this.mobileMenu = document.querySelector(mobileMenu);
		this.navList = document.querySelector(navList);
		this.navLinks = document.querySelector(navLinks);
		this.activeClass = "active";
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.navList.classList.toggle(this.activeClass);
	}

	addClickEvent() {
		this.mobileMenu.addEventListener('click', this.handleClick);
	}

	init() {
		if (this.mobileMenu) {
			this.addClickEvent();
		}
		return this;
	}
}

const mobileNavbar = new MobileNavbar(
	".mobile-nav",".main-nav__list",".main-nav__list li"
)

const mobileDarkNavbar = new MobileNavbar(
	".mobile-nav",".dark-nav__list",".dark-nav__list li"
)

const mobileLightNavbar = new MobileNavbar(
	".mobile-nav",".light-nav__list",".light-nav__list li"
)

mobileNavbar.init();

mobileDarkNavbar.init();

mobileLightNavbar.init();





function menuInput() {
	let menu = document.getElementById('menu');
	let menuTwo = document.getElementById('menuTwo');
	let menuThree = document.getElementById('menuThree');


	let txt = menu.options[menu.selectedIndex].text;

	let txtTwo = menuTwo.options[menuTwo.selectedIndex].text;
	let txtThree = menuThree.options[menuThree.selectedIndex].text;

	document.getElementById("menu__input").value = txt +'|'+ txtTwo  +'|'+ txtThree;
}





let list = document.querySelector('.project__list');
function rander(data){
	let str = '';
	data.forEach((i)=>{
			str+=`<div class="project__item" data-sort="${i.sort}">
			<img src="./img/project/${i.imgName}"
			alt="">

					<div class="project__txt">
						<p>${i.name}</p>
						<a href="#" class="project__more" onclick="morePost(${i.id})">more <svg xmlns="http://www.w3.org/2000/svg"
									 width="16"
									 height="16"
									 fill="currentColor"
									 class="bi bi-chevron-right"
									 viewBox="0 0 16 16">
								<path fill-rule="evenodd"
											d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
							</svg></a>
					</div>
				</div>
			`;
	});
	list.innerHTML = str;
}
rander(data);

let moreList = document.querySelector('.carousel-inner');
	const morePost = (id) => {
		const postInfo = data.find((i) => i.id === id);

		 moreList.innerHTML = `<div class="carousel-item active">
		 <img src="./img/project/${postInfo.imgName}"
					class="d-block w-100"
					alt="...">
		 <div class="carousel-caption d-none d-md-block">
			 <h5>${postInfo.name}</h5>
			 <p>${postInfo.txt}</p>
		 </div>
	 </div>
	 <div class="carousel-item">
		 <img src="./img/project/${postInfo.imgName2}"
					class="d-block w-100"
					alt="...">
		 <div class="carousel-caption d-none d-md-block">
			 <h5>${postInfo.name}</h5>
			 <p>${postInfo.txt}</p>
		 </div>
	 </div>
	 <div class="carousel-item">
		 <img src="./img/project/${postInfo.imgName3}"
					class="d-block w-100"
					alt="...">
		 <div class="carousel-caption d-none d-md-block">
			 <h5>${postInfo.name}</h5>
			 <p>${postInfo.txt}</p>
		 </div>
	 </div>
	 `;
	 mask.classList.add('active');
	 carousel.classList.remove('active');
	};




let more = document.querySelectorAll(".project__more");
let mask = document.querySelector(".layoutMask");
let carousel = document.querySelector(".carousel-all");
let close = document.querySelector(".close");


close.addEventListener('click', function () {
	mask.classList.remove('active');
		carousel.classList.add('active');
})




const tab = document.querySelector('.btn-group');
let sort = '全部';
tab.addEventListener('click', function(e){
	sort = e.target.dataset.sort;
  let tabs = document.querySelectorAll('.btn-group button');
  tabs.forEach((i) => {
    i.classList.remove('active');
  });
  e.target.classList.add('active');
  upData();
})


function upData() {
	let newData = [];
    if (sort == '全部') {
			newData = data;
		} else if (sort == '基樁') {
			newData = data.filter((i) => i.sort == '基樁');
		} else if (sort == '出租') {
			newData = data.filter((i) => i.sort == '出租');
		} else {
			newData = data.filter((i) => i.sort == '安全結構');
		}
		rander(newData);
  };
