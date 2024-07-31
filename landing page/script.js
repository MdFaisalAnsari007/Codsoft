gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform
    ? "transform"
    : "fixed",
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

let h1 = document.querySelector(
  "#page1 .page1-left-cont .page1-cont .main-heading1"
);

// console.log(h1Text)

var h1textContent = h1.textContent;

var splittedText = h1textContent.split("");

// console.log(splittedText)
// console.log(h1textContent)
let halfValue = Math.floor(splittedText.length / 2);

var clutter = "";

splittedText.forEach((elem, idx) => {
  // console.log(elem)
  if (idx < halfValue) {
    clutter += `<span class="a">${elem}</span>`;
  } else {
    clutter += `<span class="b">${elem}</span>`;
  }
});

// console.log(clutter)
h1.innerHTML = clutter;

let tl = gsap.timeline();

tl.from(
  "#page1 .page1-left-cont nav .nav-cont h1",
  {
    y: -70,
    opacity:0,
    duration: 1,
    ease: "power4.out",
  },
  "c"
);

tl.from(
  "#page1 .page1-left-cont nav .nav-cont .ham-btn",
  {
    y: -70,
    opacity:0,
    duration: 1,
    ease: "power4.out",
  },
  "c"
);

tl.from(
  "#page1 .page1-left-cont nav .nav-cont .nav-items li a",
  {
    y: -50,
    delay: 0.2,
    opacity: 0,
    duration: 0.9,
    stagger: 0.15,
    ease: "power4.out",
  },
  "c"
);

tl.from(
  "#page1 .page1-left-cont .page1-cont .main-heading1 .a",
  {
    y: 50,
    duration: 0.6,
    opacity: 0,
    stagger: 0.15,
    ease: "power4.out",
  },
  "a"
);
tl.from(
  "#page1 .page1-left-cont .page1-cont .main-heading1 .b",
  {
    y: 50,
    duration: 0.6,
    opacity: 0,
    stagger: -0.15,
    ease: "power4.out",
  },
  "a"
);
tl.from("#page1 .page1-left-cont .page1-cont .main-heading2", {
  x: -60,
  duration: 0.8,
  opacity: 0,
  // ease:"power4.out"
  ease: "bounce.out",
});
tl.from("#page1 .page1-left-cont .page1-cont p.para", {
  duration: 0.6,
  opacity: 0,
  ease: "power4.out",
});
tl.to("#page1 .page1-left-cont .page1-cont a", {
  duration: 0.4,
  opacity: 1,
  ease: "power4.out",
});
tl.from("#page1 #prompt", {
  duration: 0.4,
  opacity: 0,
  ease: "power4.out",
});

function ham_menu() {
  let ham_btn = document.querySelector(".ham-btn");
  console.log(ham_btn);
  let sidebar = document.querySelector("#sidebar");
  console.log(sidebar);
  let close_btn = document.querySelector(".close-btn");
  console.log(close_btn);

  ham_btn.addEventListener("click", (e) => {
    e.preventDefault();
    sidebar.classList.add("sidebar-active");
  });

  close_btn.addEventListener("click", () => {
sidebar.classList.remove("sidebar-active")
  });
}

ham_menu();
