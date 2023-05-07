// === typed text ===== 

var typed = new Typed (".fendi",{
    strings: ["fuseini abdul wahab"],
    typeSpeed: 60,
    backSpeed: 80,
    loop: true
})
// ========= Dark and light mode ====== 

const body = document.querySelector("body"),
      mode = body.querySelector(".mode");

      mode.addEventListener("click", (e) =>{
        e.preventDefault();
        body.classList.toggle("dark")
      })
  

// ==== sticky navigation ====
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section")
let links = document.querySelectorAll("nav a")

window.onscroll = () =>{
    
    navbar.classList.toggle("sticky", window.scrollY > 100)

    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id")

        if(top >=  offset && top < offset + height){
            links.forEach(link =>{
                link.classList.remove("change");
                document.querySelector("nav a[href*="+ id +"]").classList.add("change")
            })
        }
    }); 
};

// ======= Scroll Animation ====== 
const observer = new IntersectionObserver((sections) =>{
    sections.forEach((section) =>{
        if(section.isIntersecting){
            section.target.classList.add("appear")
        }else{
            section.target.classList.remove("appear")
        }
    })
})

const disappear = document.querySelectorAll(".disappear");
disappear.forEach((sect) => observer.observe(sect));


let nav = document.querySelector("nav");;

window.addEventListener("scroll", () =>{
    nav.classList.toggle("nav-scroll", window.scrollY > 0)
})

let back = document.querySelector(".back");

window.addEventListener("scroll", () =>{
    back.classList.toggle("back-scroll", window.scrollY >= 300)
})


// ==== skills and education ===== 
// const skill = document.getElementById("skill");
// const educ = document.getElementById("educ");
// const skills = document.getElementById("skills");
// const skills2 = document.getElementById("skills2");
// const education = document.getElementById("education");
// const percent = document.getElementById("percent");


// educ.addEventListener("click", () =>{
//     skills.style.display ="none"
//     skills2.style.display ="none"
//     education.style.display = "flex"
//     educ.classList.add("active")
//     skill.classList.remove("active")
// })
// skill.addEventListener("click", () =>{
//     skills.style.display ="block"
//     skills2.style.display ="block"
//     education.style.display = "none"
//     educ.classList.remove("active")
//     skill.classList.add("active")
// })


// ======== portfolio section ====== 
const allBtn = document.getElementById("allBtn");
const formBtn = document.getElementById("formBtn");
const foodBtn = document.getElementById("foodBtn");
const schoolBtn = document.getElementById("schoolBtn");
const work = document.getElementById("work");
const cloneBtn = document.getElementById("cloneBtn");
const dashBtn = document.getElementById("dashBtn");
const clone = document.getElementById("clone");
const food = document.getElementById("food");
const forms = document.getElementById("forms");
const school = document.getElementById("school");
const dash = document.getElementById("dash");

formBtn.addEventListener("click", (e) =>{
    e.preventDefault();
    work.style.display = "none"
    food.style.display = "none"
    forms.style.display = "block"
    formBtn.classList.add("active")
    foodBtn.classList.remove("active")
    allBtn.classList.remove("active")
    dashBtn.classList.remove("active")
    schoolBtn.classList.remove("active")
    cloneBtn.classList.remove("active")
})
foodBtn.addEventListener("click", (e) =>{
    e.preventDefault();
    work.style.display = "none"
    forms.style.display = "none"
    school.style.display = "none"
    food.style.display = "block"
    formBtn.classList.remove("active")
    foodBtn.classList.add("active")
    allBtn.classList.remove("active")
    dashBtn.classList.remove("active")
    schoolBtn.classList.remove("active")
    cloneBtn.classList.remove("active")
})
schoolBtn.addEventListener("click", (e) =>{
    e.preventDefault();
    work.style.display = "none"
    forms.style.display = "none"
    food.style.display = "none"
    clone.style.display = "none"
    dash.style.display = "none"
    school.style.display = "block"
    formBtn.classList.remove("active")
    foodBtn.classList.remove("active")
    allBtn.classList.remove("active")
    dashBtn.classList.remove("active")
    schoolBtn.classList.add("active")
    cloneBtn.classList.remove("active")
})
cloneBtn.addEventListener("click", (e) =>{
    e.preventDefault();
    work.style.display = "none"
    forms.style.display = "none"
    food.style.display = "none"
    school.style.display = "none"
    clone.style.display = "block"
    dash.style.display = "none"
    formBtn.classList.remove("active")
    foodBtn.classList.remove("active")
    allBtn.classList.remove("active")
    dashBtn.classList.remove("active")
    schoolBtn.classList.remove("active")
    cloneBtn.classList.add("active")
})
dashBtn.addEventListener("click", (e) =>{
    e.preventDefault();
    work.style.display = "none"
    forms.style.display = "none"
    food.style.display = "none"
    clone.style.display = "none"
    dash.style.display = "block"
    formBtn.classList.remove("active")
    foodBtn.classList.remove("active")
    allBtn.classList.remove("active")
    dashBtn.classList.add("active")
    schoolBtn.classList.remove("active")
    cloneBtn.classList.remove("active")
})
allBtn.addEventListener("click", (e) =>{
    e.preventDefault();
    work.style.display = "block"
    formBtn.classList.remove("active")
    foodBtn.classList.remove("active")
    allBtn.classList.add("active")
    dashBtn.classList.remove("active")
    schoolBtn.classList.remove("active")
    cloneBtn.classList.remove("active")
})


// ====== form validation ====== 

const submit = document.getElementById('submit');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   submit.value = 'Sending...';

   const serviceID = 'service_mon6fae';
   const templateID = 'template_42kwqac';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      submit.value = 'Send Message';
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
    });
});


let menuBar = document.querySelector("#menuBar")
let menu = document.querySelector(".menu")

menuBar.onclick = () =>{
    menuBar.classList.toggle("fa-close")
    menu.classList.toggle("show")
}
