let info = document.querySelector('.info__list');


function render(newsData){
	let str = '';
	newsData.forEach((i)=>{
		str +=`
		<article class="info__item">
		<h2>${i.date}</h2>
		<p>${i.title}
		</p>
		<a href="./news-page.html?id=${i.id}">more</a>
	</article>`;
	});
	info.innerHTML = str;
}
render(newsData);
