var banner_three = document.getElementById("banner_three");
var banner_li = banner_three.children;


var banner_four = document.getElementById('banner_four');
var banner_div = banner_four.children;

for (var i = 0; i < banner_li.length; i++) {
    banner_li[i].ind = i;
    banner_li[i].onmouseenter = function () {
        slide(this.ind)
    }

}
function slide(index) {
    // console.log(index);
    for (var j = 0; j < banner_li.length; j++) {
        if (index == j) {
            banner_li[j].classList.add('li_')
            banner_div[j].style.display = 'block'

        } else {
            banner_li[j].classList.remove('li_')
            banner_div[j].style.display = 'none'
        }
    }
}
slide(0)
