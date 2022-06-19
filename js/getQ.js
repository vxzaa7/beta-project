// 這個函式因為很常用到，因此我們通常會包在其他檔案讓其可以共用
const getQ = () => {
  // 建立一個變數來存放 query 最終的結果
  let query = {};
  // window.location.search 會顯示除了本頁面連結外 ? 後面的資訊
  // substring 會刪除字串第一個文字並回傳新的字串
  const queryString = window.location.search.substring(1);
  // console.log(window.location);
  // console.log(queryString);
  // console.log(query);

  // 通常我們會搜尋的條件可能有多個條件，而不同的條件會使用 & 隔開
  // 可以把網址改成 product.html?id=1&price=220 看效果
  const queryArray = queryString.split('&');
  // console.log(queryArray); // 查看出來的字串效果

  // 對陣列進行 迴圈 操作
  queryArray.forEach((item) => {
    // 將資料結構轉換為 [id,1] 這種結構以方便操作，概念上是讓他的 key 與 value 可以分離出來
    let itemArray = item.split('=');

    // 判斷轉換出來的結果是否 key 與 value 都有值，若沒有值則不進行運作
    if (itemArray[0] && itemArray[1]) {
      // 用物件操作的方式，將 query 用 key 操作的方式寫入相應的數值
      query[itemArray[0]] = itemArray[1];
    }
  });

  // 函式運作完之後去回傳 query
  return query;
};
