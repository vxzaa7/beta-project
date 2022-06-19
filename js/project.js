let list = document.querySelector('.project__list');
function rander(data){
	let str = '';
	data.forEach((i)=>{
		if (i.id == null) {
			str+=`<div class="project__item" data-sort="${i.sort}">
			<img src="./img/project/${i.imgName}"
			alt="">

					<div class="project__txt">
						<p>${i.name}</p>
						<a href="product.html?id=${i.id}" tabindex="-1" aria-disabled="true" class="project__more pe-none" ">more <svg xmlns="http://www.w3.org/2000/svg"
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
		} else {
			str+=`<div class="project__item" data-sort="${i.sort}">
			<img src="./img/project/${i.imgName}"
			alt="">

					<div class="project__txt">
						<p>${i.name}</p>
						<a href="product.html?id=${i.id}" class="project__more" ">more <svg xmlns="http://www.w3.org/2000/svg"
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
		}
	});
	list.innerHTML = str;
}
rander(data);








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
