function menuInput() {
  let menu = document.getElementById('menu');
  let menuTwo = document.getElementById('menuTwo');
  let menuThree = document.getElementById('menuThree');

  let txt = menu.options[menu.selectedIndex].text;

  let txtTwo = menuTwo.options[menuTwo.selectedIndex].text;
  let txtThree = menuThree.options[menuThree.selectedIndex].text;

  document.getElementById('menu__input').value =
    txt + '|' + txtTwo + '|' + txtThree;
}
