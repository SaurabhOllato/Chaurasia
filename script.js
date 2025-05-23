//  particlesJS("particles-js", {
//     "particles": {
//       "number": {
//         "value": 180
//       },
//       "color": {
//         "value": "#ffffff"
//       },
//       "shape": {
//         "type": "circle"
//       },
//       "opacity": {
//         "value": 0.3
//       },
//       "size": {
//         "value": 3
//       },
//       "move": {
//         "enable": true,
//         "speed": 2
//       },
//       "line_linked": {
//         "enable": true,
//         "distance": 100,
//         "color": "#ffffff",
//         "opacity": 0.2,
//         "width": 1
//       }
//     },
//     "interactivity": {
//       "events": {
//         "onhover": {
//           "enable": true,
//           "mode": "grab"
//         }
//       }
//     },
//     "retina_detect": true
//   });
  
  // portfolio
 

//   fire cursor
 const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
  "#ffffff", // optional bright flicker
  "#f2f2f2",
  "#e6e6e6",
  "#cccccc",
  "#b3b3b3",
  "#999999",
  "#7f7f7f",
  "#666666",
  "#4d4d4d",
  "#333333",
  "#1a1a1a",
  "#0d0d0d",
  "#000000",
  "#000000",
  "#000000"
];


circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();

const hoverTargets = document.querySelectorAll(".disable-cursor-effect");
const allCircles = document.querySelectorAll(".circle");

hoverTargets.forEach(el => {
  el.addEventListener("mouseenter", () => {
    allCircles.forEach(circle => circle.classList.add("hidden"));
  });

  el.addEventListener("mouseleave", () => {
    allCircles.forEach(circle => circle.classList.remove("hidden"));
  });
});


// about section
 gsap.registerPlugin(ScrollTrigger);

  gsap.from("#about h2", {
    scrollTrigger: {
      trigger: "#about",
      start: "top 80%",
    },
    // y: 50,
    opacity: 0,
   duration:2.5,
    ease: "bounce.out",
y: -250
  });

  gsap.from("#about p", {
    scrollTrigger: {
      trigger: "#about",
      start: "top 80%",
    },
    y: 50,
    opacity: 0,
    delay: 0.2,
    duration: 1,
    ease: "power2.out"
  });

     const template = document.querySelector('#skill-tag');
    const skillTags = document.querySelectorAll('SkillTag');
    skillTags.forEach(tag => {
      const clone = template.content.cloneNode(true);
      clone.querySelector('span').textContent = tag.textContent;
      tag.replaceWith(clone);
    });

    // particle
     window.onload = function () {
    particlesJS("particles-top-right", {
    particles: {
      number: { value: 120 },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: { value: 0.3 },
      size: { value: 2 },
      move: { enable: true, speed: 1 },
      line_linked: { enable: true, distance: 60, color: "#ffffff", opacity: 0.2, width: 1 }
    },
    interactivity: {
      events: {
        onhover: { enable: true, mode: "grab" }
      }
    },
    retina_detect: true
  });

  particlesJS("particles-bottom-left", {
    particles: {
      number: { value: 120 },
      color: { value: ["#000000", "#444444", "#888888"] },
      shape: { type: "circle" },
      opacity: { value: 0.2 },
      size: { value: 3 },
      move: { enable: true, speed: 2 },
      line_linked: { enable: true, distance: 60, color: "#333333",  opacity: 0.1, width: 1 }
    },
    interactivity: {
      events: {
        onhover: { enable: true, mode: "grab" }
      }
    },
    retina_detect: true
  });

    particlesJS("particles-home", {
      particles: {
        number: { value: 120 },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: { value: 0.2 },
        size: { value: 3 },
        move: { enable: true, speed: 2 },
        line_linked: {
          enable: true,
          distance: 80,
          color: "#ffffff",
          opacity: 0.1,
          width: 1,
        },
      },
      interactivity: {
        events: { onhover: { enable: true, mode: "grab" } },
      },
      retina_detect: true,
    });
  };

    
  