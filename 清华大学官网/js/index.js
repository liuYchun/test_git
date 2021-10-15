var contact_li = document.getElementById("contact_ul").children;
var ontact_img = [];
for (let i = 0; i < contact_li.length; i++) {
    contact_li[i].onmouseenter = function () {
        this.firstElementChild.style.transform = 'scale(1.3)'
    }
    contact_li[i].onmouseleave = function () {
        this.firstElementChild.style.transform = 'scale(1)'
    }

}

var index_ = document.getElementById('index_')
var middle = document.getElementById('middle')
var search_box = document.getElementById('search_box')
var template = document.getElementById('template')
index_.onclick = function () {
    template.style.display = "block";
    search_box.style.height = "580px";
    middle.style.display = "none"
    // console.log(1);
}
template.onclick = function () {
    template.style.display = "none";
    search_box.style.height = "0px";
    middle.style.display = "block"
}
// var img_ = document.getElementsByClassName('img_');
// for (let i = 0; i < img_.length; i++) {
//     img_[i].onmouseenter = function () {
//         this.style.transform = 'scale(1.3)'
//     }
//     img_[i].onmouseleave = function () {
//         this.style.transform = 'scale(1)'
//     }

// }