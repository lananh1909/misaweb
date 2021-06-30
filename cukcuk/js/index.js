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

    document.querySelector(".toggle-icon").addEventListener("click", () => toMiniSize());
    var miniButton = document.querySelector(".buttonMinisize");
    miniButton.addEventListener("click", () => {
        toMiniSize();
        var i = miniButton.querySelector("i");
        if(i.classList.contains("fa-chevron-left")){
            i.classList.remove("fa-chevron-left");
            i.classList.add("fa-chevron-right");
        } else {
            i.classList.remove("fa-chevron-right");
            i.classList.add("fa-chevron-left");
        }
    });
    // toggle minisize
    function toMiniSize(){
        var leftbar = document.querySelector(".left-bar");
        leftbar.classList.toggle("minisize");
        var listmenu = Array.from(document.getElementsByClassName("menu-item"));
        if(listmenu){
            listmenu.forEach(item => {
                item.querySelector("div").classList.toggle("hide");
            })
        }
        document.querySelector(".right-content").classList.toggle("changeMargin");
    }

    //onclick table row show modal 
    var mymodal = document.getElementById("detail");
    var table = document.getElementById("mytable");
    var row = Array.from(document.querySelector("tbody").getElementsByTagName("tr"));
    row.forEach(item => {
        item.addEventListener('click', () => {
            showModal();
        })
    })
    window.onclick = function(event) {
        if (event.target == mymodal) {
            closeModal();
        }
    }

    document.getElementById('closeBtn').onclick = closeModal;
    
    function showModal() {
        mymodal.style.display = "block";
    }
    function closeModal() {
        mymodal.style.display = 'none';
    }

    // validate salary
    function getNumber(str){
        var arr = str.split('');
        var res = new Array();
        for(var i = 0; i < arr.length; i++){
            if(isNaN(arr[i]) === false){
                res.push(arr[i]);
            }
        }
        return Number(res.join(''));
    }
    function updateTextView(obj){
        var num = getNumber(obj.value);
        if(num == 0){
            obj.value = '';
        } else {
            obj.value = num.toLocaleString().replaceAll(',', '.');
        }
    }
    var inputSalary = document.getElementById('salary');
    inputSalary.oninput = () => {
        updateTextView(inputSalary);
    }
}, false)