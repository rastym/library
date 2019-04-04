window.onload = function(){

    var services = document.querySelector('.services');
    services.addEventListener('click',handler)

    function handler(e){
    var target = e.target;
    var nextElement = target.parentElement.nextElementSibling;
    if(target.classList.contains('services-item-img')){
        nextElement.style.display = "block";
        var overlay = nextElement.querySelector('.overlay');
        var galleryId = nextElement.querySelector('ul').getAttribute("id");
        $("#" + galleryId).lightSlider({
            gallery:true,
            item:1,
            loop:true,
            thumbItem:9,
            slideMargin:0,
            enableDrag: false,
            currentPagerPosition:'left',
            pager: false,
            auto:true,
            pause: 3000,
            speed: 2000,
            mode: "fade",
       
        })

        overlay.onclick = function(){
            this.parentElement.style.display ="none";
        }    
    }
    }

    var phone = document.querySelector('.phone');

    phone.addEventListener('click',handler2)
    function handler2(e){
        var target = e.target;
        if(target.tagName == "A"){
            e.preventDefault()
            let a = this.querySelectorAll('a');
            a.forEach(element =>  element.parentElement.innerHTML = element.parentElement.dataset.number );        
        }
    }

}
