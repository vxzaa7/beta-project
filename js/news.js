let newsList = document.querySelector('.news__ul');

function render(newsData){
	let str = '';
	newsData.forEach((i)=>{
			str+=`<li>
			<h3>${i.date}</h3>
			<p>${i.title}</p><a href="./news-page.html?id=${i.id}">read</a>
		</li>
			`;
	});
	newsList.innerHTML = str;
}
render(newsData);
