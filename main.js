// change navbar style on scroll

window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle
    ('window-scroll',window.scrollY > 0)
})

// show/hide faq answer

const faqs = document.querySelectorAll('.faq');
const faq_container = document.getElementsByClassName('faqs__container')[0];

faqs.forEach(faq => {
    faq.addEventListener('click',()=>{
        faq.classList.toggle('open');
        faq_container.classList.toggle("stretch")
        //change icon
        const icon = faq.querySelector('.faq__icon i');
        if(icon.className === 'uil uil-plus'){
            icon.className = "uil uil-minus";
        }else{
            icon.className = "uil uil-plus";
        }
    })
})


// show/hide nav menu
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click',()=>{
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

//close nav menu
const closeNav = () =>{
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click',closeNav)

// /==================== SHOW SCROLL UP ====================/
function scrollUp() {
  const scrollUp = document.getElementById('scroll-up');
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


// /==================== Learn More POPUP ====================/
const jee__popup_btn = document.getElementById('jee__popup_btn');
const cet__popup_btn = document.getElementById('cet__popup_btn');
const neet__popup_btn = document.getElementById('neet__popup_btn');

const jee__popup_cont = document.getElementById('jee__popup_container');
const cet__popup_cont = document.getElementById('cet__popup_container');
const neet__popup_cont = document.getElementById('neet__popup_container');



// open container
jee__popup_btn.addEventListener('click',()=>{
    jee__popup_cont.style.display = 'block';
    document.getElementById('close__popup__jee').addEventListener('click',()=>{
        jee__popup_cont.style.display = 'none';
    })
});
cet__popup_btn.addEventListener('click',()=>{
    cet__popup_cont.style.display = 'block';
    document.getElementById('close__popup__cet').addEventListener('click',()=>{
        cet__popup_cont.style.display = 'none';
    })
});
neet__popup_btn.addEventListener('click',()=>{
    neet__popup_cont.style.display = 'block';
    document.getElementById('close__popup__neet').addEventListener('click',()=>{
        neet__popup_cont.style.display = 'none';
    })
});

document.addEventListener('mouseup',(e)=>{
    if(!jee__popup_cont.contains(e.target)){
        jee__popup_cont.style.display='none'
    }
    if(!cet__popup_cont.contains(e.target)){
        cet__popup_cont.style.display='none'
    }
    if(!neet__popup_cont.contains(e.target)){
        neet__popup_cont.style.display='none'
    }
})
