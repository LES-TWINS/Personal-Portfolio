
const afterLoader = document.querySelector(".afterLoader")
afterLoader.style.display ="none"
const viewMoreBtn = document.querySelector("#view_more");
const projects = document.querySelectorAll(".more_proj");
const burgerMenu = document.querySelector("#burgerMenu");
const navbar = document.querySelector(".navbar");
const lists = document.querySelectorAll("li")
const loader = document.querySelector(".title-container");


let stateCheck = setInterval(() => {
   if (document.readyState === 'complete') {
     clearInterval(stateCheck);
     loader.style.display= "none";
   }
   afterLoader.style.display ="block";
   gsap.from('.poster', { duration: 1, y:'-400%',ease:'bounce.out',  delay: 1, });
   gsap.from('.resume', { opacity:0, y:"-50%",  delay:2.7  });
   gsap.from('#burgerMenu', {duration: 0.5, opacity:0, x:"50%", delay:2.7  });
   gsap.from('.prof', {y:'-100%',  opacity: 0,  delay: 2});
   gsap.from('.name', {y:"100%", opacity: 0,  delay: 2});
   gsap.from('.icon_box a', {duration: 0.7, x:'-100%', ease:'bounce.out', opacity: 0,  delay: 3, stagger: .1});
   gsap.from('.arrow_scroll', {duration: 0.5, y:'-100%',  opacity: 0,  delay: 3.8});
   gsap.from('.recent_proj', {duration: 0.7,  opacity:0,  delay:5});
   gsap.fromTo(".project_title",
 {opacity:0,},{
   scrollTrigger:{
   trigger:".project_title",
   start:"top center",
   end:"top center",
   toggleActions:"restart none reverse none",
   }, 
   y:"0%",
   duration:0.3,
   opacity:1,
 });

gsap.fromTo(".row",
 {opacity:0,},{
   scrollTrigger:{
   trigger:".row",
   start:"top center",
   end:"top center",
   toggleActions:"restart none reverse none",
   }, 
   y:"0%",
   duration:0.3,
   opacity:1,
   stagger:.1
 });
 }, 2000);



 burgerMenu.addEventListener('click',function(){
   navbar.classList.toggle("show");
   burgerMenu.classList.toggle("zindex")
   gsap.fromTo('.navbar', {y:"-100%"}, { duration: 0.1, y:'0%',  delay: 0.3, }); 
   lists.forEach(list => {
    list.addEventListener("click",function(){
        navbar.classList.remove("show");
         navbar.classList.add("hide");
         burgerMenu.classList.remove("burger_animation"); 
    })
   })
   burgerMenu.classList.toggle("burger_animation");
    gsap.fromTo('li', {opacity: "0"}, { duration: 0.5, y:'0%', opacity:1, delay: 0.5, stagger:.1}); 
})

viewMoreBtn.addEventListener("click",function(){
   projects.forEach(proj =>{
    if(proj.classList.toggle("more_proj")){
       viewMoreBtn.textContent = "View More"
    } else{
        viewMoreBtn.textContent = "View Less"
    }
   })
})