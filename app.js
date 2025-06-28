// GSAP Animations
gsap.from(".nav div", {
  duration: 1,
  y: -100,
  opacity: 0,
  scrub: true,
  stagger: 0.3,
});

gsap.from(".content div", {
  duration: 1,
  delay: 1,
  y: 100,
  opacity: 0,
  stagger: 1,
});
gsap.from(".image-container", {
  duration: 1,
  delay: 1.5,
  y: 100,
  opacity: 0,
});

// GSAP ScrollTrigger Animations
gsap.from(".about .about-image", {
  scale: 0,
  duration: 0.5,
  opacity: 0,
  scrollTrigger: {
    trigger: ".about .about-image",
    scroller: "body",
    start: "top 80%",
    end: "bottom 40%",
    scrub: 2,
  },
});
gsap.from(".about .about-content", {
  scale: 0,
  duration: 0.5,
  opacity: 0,
  scrollTrigger: {
    trigger: ".about .about-content",
    scroller: "body",
    start: "top 80%",
    end: "bottom 40%",
    scrub: 2,
  },
});

gsap.from(".services .headline", {
  y: -100,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: ".services .headline",
    scroller: "body",
    start: "top 80%",
    end: "bottom 30%",
    scrub: 2,
  },
});
gsap.from(".service-container div", {
  y: -100,
  duration: 1,
  delay: 1,
  opacity: 0,
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".services .headline",
    scroller: "body",
    start: "top 80%",
    end: "bottom 30%",
    scrub: 2,
  },
});

gsap.from(".skills div", {
  y: -100,
  duration: 1,
  delay: 1,
  opacity: 0,
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".skills div",
    scroller: "body",
    start: "top 60%",
    scrub: 2,

  },
});

gsap.from(".projects .headline", {
  y: -100,
  duration: 1,
  delay: 1,
  opacity: 0,
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".projects .headline",
    scroller: "body",
    start: "top 80%",
    end: "bottom 30%",
    scrub: 2,
  },
});

gsap.from(".project-container .project", {
  y: -30,
  duration: 1,
  delay: 1,
  opacity: 0,
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".project-container .project",
    scroller: "body",
    start: "top 80%",
    end: "bottom 30%",
    scrub: 2,
  },
});


gsap.from(".contact div", {
  y: -100,
  duration: 1,
  delay: 1,
  opacity: 0,
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".contact div",
    scroller: "body",
    start: "top 80%",
    end: "bottom 20%",
    scrub: 2,
  },
});

// About Section
const data = [
  "Full Stack Developer",
  "Frontend Developer",
  "Backend Developer",
  "Mobile App Developer",
  "Web Developer",
];
let count = 0;
function changeName(data) {
  const elements = document.querySelectorAll("span");

  setInterval(() => {
    elements.forEach((element) => {
      element.innerText = data[count];
      element.classList.add("span");
      count += 1;
      if (count > data.length - 1) {
        count = 0;
      }
    });
  }, 2000);
}
changeName(data);

// My Skills Section
const linksArr = [
  "front-end",
  "back-end",
  "data-base",
  "other-tools",
  "version-control",
];
(function show() {
  const element = document.getElementById(linksArr[0]);
  element.classList.add("active");
})();
function showSkills(e) {
  console.log(e);
  const text = e.target.innerText.toLowerCase().replace(" ", "-");
  const element = document.getElementById(text);
  element.classList.add("active");
  let filtered = linksArr.filter((item) => item !== text);
  filtered.forEach((item) => {
    document.getElementById(item).classList.remove("active");
  });
}




// Custom Cursor
 const cursor = document.getElementById('customCursor');

    // Listen to mouse movement
    window.addEventListener('mousemove', (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: 'power2.out'
      });
    });