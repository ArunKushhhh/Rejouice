gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
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
  pinType: document.querySelector(".main").style.transform
    ? "transform"
    : "fixed",
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

const hero = document.querySelector(".hero-section");
const close = document.querySelector(".reel button");

// hero.addEventListener("mousemove", (e) => {
//   crsr.style.left = e.x + "px";
//   crsr.style.top = e.y + "px";
// });

// hero.addEventListener("click", () => {
//   reel.style.left = "0";
// });

// close.addEventListener("click", () => {
//   reel.style.left = "-100%";
// });

//loader
var tl = gsap.timeline();
tl.from(".loader h3", {
  x: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.1,
});

tl.to(".loader h3", {
  opacity: 0,
  x: -50,
  duration: 1,
  stagger: 0.1,
});
tl.to(".loader", {
  opacity: 0,
  display: "none",
});
tl.from(".hero-section h1 span", {
  y: 100,
  opacity: 0,
  stagger: 0.1,
  duration: 0.3,
  delay: -1,
});

//cursor movement
hero.addEventListener("mousemove", (e) => {
  gsap.to(".crsr", {
    x: e.x,
    y: e.y,
    ease: "linear",
    duration: 0.4,
  });
});

hero.addEventListener("mouseenter", () => {
  gsap.to(".crsr", {
    scale: 1,
    opacity: 1,
  });
});
hero.addEventListener("mouseleave", () => {
  gsap.to(".crsr", {
    scale: 0,
    opacity: 0,
  });
});

// reel

hero.addEventListener("click", () => {
  gsap.to(".reel", {
    left: 0,
    ease: "ease",
    duration: 0.8,
  });
});

close.addEventListener("click", () => {
  gsap.to(".reel", {
    left: "-100%",
    ease: "ease",
    duration: 0.8,
  });
});

// page2
gsap.fromTo(
  ".hr",
  { width: "70%" },
  {
    width: "100%",
    duration: 1.5,
    scrollTrigger: {
      trigger: ".page2",
      scroller: ".main",
      start: "top 50%",
      end: "top 43%",
      markers: false,
      scrub: 2,
    },
  }
);
gsap.from(".page2-top h3", {
  y: 40,
  stagger: 0.2,
  duration: 1,
  scrollTrigger: {
    trigger: ".page2",
    scroller: ".main",
    start: "top 50%",
    end: "top 43%",
    markers: false,
    scrub: 2,
  },
});

gsap.from(".elem h1", {
  y: 120,
  stagger: 0.2,
  duration: 1,
  scrollTrigger: {
    trigger: ".page2",
    scroller: ".main",
    start: "top 50%",
    end: "top 43%",
    markers: false,
    scrub: 2,
  },
});

//page3
gsap.from(".page3-top h2", {
  y: 80,
  stagger: 0.2,
  duration: 1,
  scrollTrigger: {
    trigger: ".page3",
    scroller: ".main",
    start: "top 80%",
    end: "top 67%",
    markers: false,
    scrub: 2,
  },
});

//page4
gsap.fromTo(
  ".hr2",
  { width: "30%" },
  {
    width: "100%",
    duration: 1,
    scrollTrigger: {
      trigger: ".page4",
      scroller: ".main",
      start: "top 50%",
      end: "top 43%",
      markers: false,
      scrub: 2,
    },
  }
);
gsap.from(".page4-top h3", {
  y: 40,
  stagger: 0.2,
  duration: 1,
  scrollTrigger: {
    trigger: ".page4",
    scroller: ".main",
    start: "top 50%",
    end: "top 43%",
    markers: false,
    scrub: 2,
  },
});

gsap.from(".page4-elem h1", {
  y: 120,
  stagger: 0.2,
  duration: 1,
  scrollTrigger: {
    trigger: ".page4",
    scroller: ".main",
    start: "top 50%",
    end: "top 43%",
    markers: false,
    scrub: 2,
  },
});

//page6
gsap.fromTo(
  ".hr6",
  { width: "30%" },
  {
    width: "100%",
    duration: 1,
    scrollTrigger: {
      trigger: ".page6",
      scroller: ".main",
      start: "top 50%",
      end: "top 43%",
      markers: false,
      scrub: 2,
    },
  }
);
gsap.from(".page6-top h3", {
  y: 40,
  stagger: 0.2,
  duration: 1,
  scrollTrigger: {
    trigger: ".page6",
    scroller: ".main",
    start: "top 50%",
    end: "top 43%",
    markers: false,
    scrub: 2,
  },
});

gsap.from(".page6-elem h1", {
  y: 120,
  stagger: 0.2,
  duration: 1,
  scrollTrigger: {
    trigger: ".page6",
    scroller: ".main",
    start: "top 50%",
    end: "top 43%",
    markers: false,
    scrub: 2,
  },
});

//page7
gsap.from(".page7-bottom h2", {
  y: 80,
  stagger: 0.1,
  duration: 1,
  scrollTrigger: {
    trigger: ".page7-bottom",
    scroller: ".main",
    start: "top 50%",
    end: "top 43%",
    markers: false,
    scrub: 2,
  },
});

//footer
gsap.from(".footer-top", {
  y: "200%",
  opacity: 0,
  stagger: 0.3,
  duration: 3,
  scrollTrigger: {
    trigger: ".page8",
    scroller: ".main",
    start: "top 50%",
    end: "top 5%",
    markers: false,
    scrub: 2,
  },
});

gsap.from(".footer-bottom", {
  y: "200%",
  opacity: 0,
  stagger: 0.3,
  duration: 3,
  scrollTrigger: {
    trigger: ".page8",
    scroller: ".main",
    start: "top 100%",
    end: "top 5%",
    markers: false,
    scrub: 2,
  },
});

tl.from(".footer-bottom h1 span", {
  y: -120,
  opacity: 0,
  stagger: 0.3,
  duration: 2,
  scrollTrigger: {
    trigger: ".page8",
    scroller: ".main",
    start: "top 30%",
    end: "top 0%",
    markers: false,
    scrub: 2,
  },
  delay: 2,
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  centeredSlides: false,
  spaceBetween: 25,
  loop: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: true,
  },
  speed: 30000,
  freeMode: true,
});

set;
