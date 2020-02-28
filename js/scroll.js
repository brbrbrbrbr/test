let nv = document.querySelector('nav');
let wheel_handle = null;
let scrollTop = 0;

let mouse_wheel = function(event) {
    if(window.scrollY > scrollTop){
        console.log("Down");
        nv.classList.add('back');
        scrollTop = window.scrollY;
    }else if (window.scrollY < scrollTop){
        console.log("Up");
        scrollTop = window.scrollY;
        nv.classList.remove('back');
    }
}


window.onload = function() {
    if (window.addEventListener){
        window.addEventListener("scroll", mouse_wheel, false)
    }
    window.onmousewheel = document.onmousewheel = mouse_wheel;
} 