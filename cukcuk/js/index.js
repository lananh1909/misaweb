document.addEventListener('DOMContentLoaded', function(){
    // change menu side bar 
    var sidelist = document.querySelector(".list-menu").childNodes;
    sidelist.forEach(item => {
        if(item.classList && item.classList.contains('menu-item')){
            item.addEventListener('click', () => {
                sidelist.forEach(child => {
                    if(child.classList && child.classList.contains('active'))
                        child.classList.remove('active');
                })
                item.classList.add('active');
            })
        }
    })
    //change page
    var pageNum = Array.from(document.getElementsByClassName("pageNum"));
    pageNum.forEach(item => {
        item.addEventListener("click", () => {
            pageNum.forEach(item1 => {
                if(item1.classList && item1.classList.contains("active"))
                    item1.classList.remove("active");
            })
            item.classList.add("active");
        })
    })
}, false)