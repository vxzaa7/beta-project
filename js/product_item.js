const productMain = document.querySelector('.product__main');


// 取得目前網站的 query
const query = getQ();

// 取得 item 的項目資訊，注意這邊使用的是兩個 ==，因為 id 轉過來會是字串，因此故意讓他直接做型態轉換
const productInfo = data.find((item) => item.id == query.id);
// console.log(productInfo);// 可以查看搜尋出來的項目
// console.log(query);

window.onload = function () {
  const productItemUI =
	`<div id="carouselExampleIndicators"
class="carousel slide product__slide"
data-bs-ride="carousel">
<div class="carousel-indicators">
<button type="button"
			 data-bs-target="#carouselExampleIndicators"
			 data-bs-slide-to="0"
			 class="active"
			 aria-current="true"
			 aria-label="Slide 1"></button>
<button type="button"
			 data-bs-target="#carouselExampleIndicators"
			 data-bs-slide-to="1"
			 aria-label="Slide 2"></button>
<button type="button"
			 data-bs-target="#carouselExampleIndicators"
			 data-bs-slide-to="2"
			 aria-label="Slide 3"></button>
</div>
<div class="carousel-inner">
<div class="carousel-item active">

 <img src="./img/project/${productInfo.imgName}"
			class="d-block w-100"
			alt="...">
</div>
<div class="carousel-item">
 <img src="./img/project/${productInfo.imgName2}"
			class="d-block w-100"
			alt="...">
</div>
<div class="carousel-item">
 <img src="./img/project/${productInfo.imgName3}"
			class="d-block w-100"
			alt="...">
</div>
</div>
<button class="carousel-control-prev"
		 type="button"
		 data-bs-target="#carouselExampleIndicators"
		 data-bs-slide="prev">
<span class="carousel-control-prev-icon"
		 aria-hidden="true"></span>
<span class="visually-hidden">Previous</span>
</button>
<button class="carousel-control-next"
		 type="button"
		 data-bs-target="#carouselExampleIndicators"
		 data-bs-slide="next">
<span class="carousel-control-next-icon"
		 aria-hidden="true"></span>
<span class="visually-hidden">Next</span>
</button>
</div>

<article class="product__text">
<h2>${productInfo.name}<span>｜${productInfo.sort}</span></h2>

<p>${productInfo.txt}</p>
</article>`;
  productMain.innerHTML = productItemUI;
};
