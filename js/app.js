let banner = document.getElementById('banner');
let moon = document.getElementById('moon');
let planet1 = document.getElementById('planet-1');
let planet2 = document.getElementById('planet-2');
let rocks1 = document.getElementById('rocks-1');
let rocks2 = document.getElementById('rocks-2');
let btn = document.getElementById('btn');

window.addEventListener('scroll',function(){
    let valueScrollY = window.scrollY;
    moon.style.top=valueScrollY*-2.9+'px';
    moon.style.left=valueScrollY*-2.1+'px';
    planet1.style.top=valueScrollY*-1.3+'px';
    planet1.style.left=valueScrollY*2.3+'px';
    planet2.style.top=valueScrollY*-2.3+'px';
    planet2.style.left=valueScrollY*1.4+'px';
    rocks1.style.left=valueScrollY*0.6+'px';
    rocks2.style.left=valueScrollY*-1.3+'px';
    rocks2.style.top=valueScrollY*0.03+'px';
    rocks1.style.top=valueScrollY*0.03+'px';
    banner.style.top=40+valueScrollY*0.06+'vh';
    btn.style.top=0+valueScrollY*8+'bh';
});