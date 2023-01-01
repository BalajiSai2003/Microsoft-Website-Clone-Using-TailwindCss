let menubtn = document.getElementById("menubtn")
let menubtnele = document.getElementById("menu")
let crossbutton = document.getElementById("crossbtn")
let xbutton = document.getElementById("Xbutton")
let feature = document.getElementById("feature")
menubtn.addEventListener("click",function(){
    xbutton.classList.remove("hidden")
    menubtn.classList.add("hidden")
    feature.classList.remove("hidden")

})
crossbutton.addEventListener("click",function(){
    menubtn.classList.remove("hidden")
    xbutton.classList.add("hidden")
    feature.classList.add("hidden")
})
let slide1 = document.getElementById("slide1")
let slide2 = document.getElementById("slide2")
let forwardbtn = document.getElementById("forward")
let backward = document.getElementById("backward")
let hollow = document.getElementById("hollow")
let full = document.getElementById("full")
forwardbtn.addEventListener("click",function(){
    if (slide1.classList.contains("hidden")){
        slide1.classList.remove("hidden")
        slide2.classList.add("hidden")
        if (hollow.classList.contains("order-2")){
            null
        }
        else{
            full.classList.remove("order-2")
            hollow.classList.remove("order-3")
            hollow.classList.add("order-2")
            full.classList.add("order-3")
        }
    }
    else{
        slide2.classList.remove("hidden")
        slide1.classList.add("hidden")
        if (full.classList.contains("order-2")){
            null
        }
        else{
            hollow.classList.remove("order-2")
            full.classList.remove("order-3")
            full.classList.add("order-2")
            hollow.classList.add("order-3")
        }
    }
})
backward.addEventListener("click",function(){
    if (slide1.classList.contains("hidden")){
        slide1.classList.remove("hidden")
        slide2.classList.add("hidden")
        if (hollow.classList.contains("order-2")){
            null
        }
        else{
            full.classList.remove("order-2")
            hollow.classList.remove("order-3")
            hollow.classList.add("order-2")
            full.classList.add("order-3")
        }
    }
    else{
        slide2.classList.remove("hidden")
        slide1.classList.add("hidden")
        if (full.classList.contains("order-2")){
            null
        }
        else{
            hollow.classList.remove("order-2")
            full.classList.remove("order-3")
            full.classList.add("order-2")
            hollow.classList.add("order-3")
        }
    }
})