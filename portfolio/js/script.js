const ham_menu = document.getElementById("ham-icon");
// console.log(ham_menu)

const nav_items = document.querySelector(".nav-cont .nav-items");
// console.log(nav_items)

ham_menu.addEventListener("click",()=>{
    // console.log("clicked")
    nav_items.classList.toggle("active");

})

const tl = gsap.timeline();

// tl.from("nav",{
//     x:-1300,
//     duration:.8,
//     delay:.5
// })

tl.from("nav .nav-cont h1, nav .nav-cont ul li",{
    y:-50,
    opacity:0,
    rotate:-180,
    duration:.6,
    stagger:.2,
    delay:.3

})
tl.from(".header-cont .right-cont",{

    scale:0,
    duration:.5,
    delay:.2
})
tl.from("header .header-cont .left-cont",{
    x:-50,
    opacity:0,
    duration:.5,
    delay:.4
})


let img = document.querySelector("#img");
console.log(img);
img.addEventListener("mouseover", () => {
  gsap.to("#heatwave", 2, {
    attr: { baseFrequency: "0.022  0.01" },
  });
});
img.addEventListener("mouseleave", () => {
  gsap.to("#heatwave", 2, {
    attr: { baseFrequency: "0.00 0.00" },
  });
});

window.addEventListener("mousemove",(chacha)=>{
    document.querySelector("#slidephoto").style.top =  `${chacha.clientY}px`
    document.querySelector("#slidephoto").style.left =  `${chacha.clientX}px`
    document.querySelector("#slidephoto").style.transform =  `translate(${-chacha.clientX*0.5}px, ${-chacha.clientY*0.4}px )`
})

document.querySelector("#chain")
.addEventListener("mousemove",()=>{
    document.querySelector("#slidephotos").style.marginTop = "0%"
    document.querySelector("#chain").style.color = "rgb(177,177,177)"

})
document.querySelector("#chain")
.addEventListener("mouseleave",()=>{
    // document.querySelector("#slidephotos").style.marginTop = "0%"
    document.querySelector("#chain").style.color = "initial"

})

document.querySelector("#chain2")
.addEventListener("mousemove",()=>{
    document.querySelector("#slidephotos").style.marginTop = "-120%"
    document.querySelector("#chain2").style.color = "rgb(177,177,177)"

})
document.querySelector("#chain2")
.addEventListener("mouseleave",()=>{
    // document.querySelector("#slidephotos").style.marginTop = "0%"
    document.querySelector("#chain2").style.color = "initial"

})

document.querySelector("#chain3")
.addEventListener("mousemove",()=>{
    document.querySelector("#slidephotos").style.marginTop = "-240%"
    document.querySelector("#chain3").style.color = "rgb(177,177,177)"

})
document.querySelector("#chain3")
.addEventListener("mouseleave",()=>{
    // document.querySelector("#slidephotos").style.marginTop = "0%"
    document.querySelector("#chain3").style.color = "initial"

})

document.querySelector("#chain4")
.addEventListener("mousemove",()=>{
    document.querySelector("#slidephotos").style.marginTop = "-360%"
    document.querySelector("#chain4").style.color = "rgb(177,177,177)"

})
document.querySelector("#chain4")
.addEventListener("mouseleave",()=>{
    // document.querySelector("#slidephotos").style.marginTop = "0%"
    document.querySelector("#chain4").style.color = "initial"

})
