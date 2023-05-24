//Reseek - GSAP Animation
//Made by Reseek
const parceled = true;
let bgMenu = false;
//Scroll smooth
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
  orientation: 'vertical', // vertical, horizontal
  gestureOrientation: 'vertical', // vertical, horizontal, both
  smoothWheel: true,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
})

// Get scroll value. This is just for testing purposes. Delete this if you're not using the scroll value for anything.
lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
  //console.log({ scroll, limit, velocity, direction, progress })
})


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    lenis.scrollTo(this.getAttribute('href'))
  });
})




function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

// Grab all elements that have a "data-target" attribute

requestAnimationFrame(raf)

function checkScrollMenu(){
  if($('.menu-wrapper').hasClass('open')){
        lenis.stop();
      } else {
       lenis.start();
      }
  }
  checkScrollMenu();

  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.defaults({
    markers: false
  });

  lenis.on('scroll', ScrollTrigger.update)

  gsap.ticker.add((time)=>{
    lenis.raf(time * 1000)
  })

//GSAP loader 
const svg = document.getElementById("svg");
const l1 = document.getElementById("l1");
const l2 = document.getElementById("l2");
const l3 = document.getElementById("l3");
const l4 = document.getElementById("l4");
const tl2 = gsap.timeline();
const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z"; 

tl2.from(".loader-wrap-heading", {
  delay: 0.22,
  opacity:1,
}).to(".loader-wrap-heading", {
  delay: 0.18,
 opacity:0,
});

tl2.from(".loader-blur", {
  delay: 0,
    duration: 0.1,
  opacity:1,
}).to(".loader-blur", {
  delay: 0,
  duration: 0.1,
 opacity:0,
});
tl2.to(svg, {
  duration: 0.22,
  attr: { d: curve },
  force3D: false,
  ease: "power2.easeIn",
}).to(svg, {
  duration: 0.22,
  attr: { d: flat },
   force3D: false,
  ease: "power2.easeOut",
});

gsap.to(l1, {
  x:0,
  y:0,
  duration: 0.2,
  delay: 0.07,
 opacity:1,
 
});
gsap.to(l2, {
  x:0,
  y:0,
  duration: 0.2,
  delay: 0.07,
 opacity:1,
 
});
gsap.to(l3, {
  x:0,
  y:0,
  duration: 0.2,
  delay: 0.07,
 opacity:1,
 
});
gsap.to(l4, {
  x:0,
  y:0,
  duration: 0.2,
  delay: 0.07,
 opacity:1,
 
});


tl2.to(".loader-wrap", {
  y: -1500,
});
tl2.to(".loader-wrap", {
  zIndex: -1,
  display: "none",
});

//Start GSAP and animate elements


//round section 1 animation
$(".section-1").each(function (index) {
    let targetElementRound = $(".section-1-round .round-wrapp");
    const section1 = $(this);
    
    let tl = gsap.timeline({
        scrollTrigger: {
          trigger: section1,
          start: "0% 100%",
          end: "5% 100%",
          scrub: 0,
          toggleActions: "restar pause reverse pause",
        }
      });
      tl.to(targetElementRound, {
        height: 0,
        ease: "none"
      }, 0);
      
      });
    
//Round element footer
  
        let targetElementRound2 = $(".footer-round .round-wrapp-foot");
        const footerRound = $("#footer-w");
        
        let tlFoot = gsap.timeline({
            scrollTrigger: {
              trigger: footerRound,
              start: "10% 100%",
              end: "45% 100%",
              markers:false,
              scrub: 0,
              toggleActions: "restar pause reverse pause",
            }
          });
          tlFoot.to(targetElementRound2, {
            height: 0,
            ease: "none"
          }, 0);
          
     
   
// menu hide-show on scroll

var actionNav = gsap.to('.menu-wrapper', {y:'-=12vh', duration:0.5, ease:'power2.in', paused:true});
let mwrapp = false;


ScrollTrigger.create({
  trigger: ".menu-wrapper",
  start: "10px top",
  end: 99999,
  onUpdate: ({progress, direction, isActive}) => {
    if (direction == -1) {
      actionNav.reverse()
    } if (direction == 1 && !mwrapp ) {
      actionNav.play()
    } else if (direction == 1 && isActive == true && !mwrapp) {
      actionNav.play()
    } else if (direction == -1 && mwrapp) {
      actionNav.reverse()
    } 
  }
});


//menu trigger

const ham = document.querySelector(".menu-button-wrapper");
const menu = document.querySelector('.menu-links-wrapper');
const link1 = document.querySelector('.link-menu-1.l1');
const link2 = document.querySelectorAll('.link-menu-1.l2');
const link3 = document.querySelectorAll('.link-menu-1.l3');
const link4 = document.querySelectorAll('.link-menu-1.l4');
const link5 = document.querySelectorAll('.link-menu-1.l5');

var tlMenu = gsap.timeline({ paused: true });

tlMenu.to(".overlay-blur", 0.2, {opacity:1, display:"flex"});

function checkBgMenu(){

    if (bgMenu === true) {
     if(!$('.menu-wrapper').hasClass('open')){
      gsap.to('#open', { duration: 0.2, color: '#100E0E'})
      gsap.to('#close', { duration: 0.2, color: '#100E0E'})
      gsap.to('.logo-svg', { duration: 0.2, color: '#100E0E'})
      gsap.to('.background-blur-menu', { duration: 0.2, backgroundColor: '#ffffff59'})
     
      } else {
         gsap.to('#open', { duration: 0.2, color: '#ffffff'})
         gsap.to('#close', { duration: 0.2, color: '#ffffff'})
         gsap.to('.logo-svg', { duration: 0.2, color: '#ffffff'})
         gsap.to('.background-blur-menu', { duration: 0.2, backgroundColor: '#100e0e59'})
      }
     
     } else {
      gsap.to('#open', { duration: 0.2, color: '#ffffff'})
       gsap.to('#close', { duration: 0.2, color: '#ffffff'})
       gsap.to('.logo-svg', { duration: 0.2, color: '#ffffff'})
       gsap.to('.background-blur-menu', { duration: 0.2, backgroundColor: '#100e0e59'})

     }
};

// menu animation timeline

tlMenu.to(menu, {
  duration: 0.4,
  opacity: 1,
  width: '100%', 
  x:0,
  ease: 'power3.easeInOut',
})
tlMenu.to(link1, {
delay:0.1,
  duration: 0.35,
  y: 0,
  opacity: 1,
  stagger: 0.2,
  ease: 'power3.easeInOut',
}, "-=0.5");

tlMenu.to(link2, {
delay:0.15,
  duration: 0.35,
  y: 0,
  opacity: 1,
  stagger: 0.2,
  ease: 'power3.easeInOut',
}, "-=0.5");

tlMenu.to(link3, {
delay:0.18,
  duration: 0.35,
  y: 0,
  opacity: 1,
  stagger: 0.2,
  ease: 'power3.easeInOut',
}, "-=0.5");

tlMenu.to(link4, {
delay:0.2,
  duration: 0.35,
  y: 0,
  opacity: 1,
  stagger: 0.2,
  ease: 'power3.easeInOut',
}, "-=0.5");

tlMenu.to(link5, {
  delay:0.22,
    duration: 0.35,
    y: 0,
    opacity: 1,
    stagger: 0.2,
    ease: 'power3.easeInOut',
  }, "-=0.5");

tlMenu.reverse();

ham.addEventListener('click', () => {
  tlMenu.reversed(!tlMenu.reversed());
  $('.menu-wrapper').toggleClass('open');
   checkBgMenu();
    if($('.menu-wrapper').hasClass('open')){
      mwrapp = true;
      $('body').addClass('no-scroll');
      checkScrollMenu();
    } else {
      mwrapp = false;
      checkScrollMenu();
      tlMenu.to(".overlay-blur", 0.05, {opacity:0, display:"none"});
      $('body').removeClass('no-scroll');
    }
});

document.querySelectorAll('.link-menu-1').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    ham.click();
    var href = $(this).attr("href");  
    window.location.href = href;  
  });
})

//test
   
