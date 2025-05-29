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
  "#000000",
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function (e) {
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

hoverTargets.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    allCircles.forEach((circle) => circle.classList.add("hidden"));
  });

  el.addEventListener("mouseleave", () => {
    allCircles.forEach((circle) => circle.classList.remove("hidden"));
  });
});
// end of cursor

// gsap and scrollTrigger
// about section
gsap.registerPlugin(ScrollTrigger);

// gsap.from("#about h2", {
//   scrollTrigger: {
//     trigger: "#about",
//     start: "top 80%",
//   },
//   // y: 50,
//   opacity: 0,
//   duration: 2.5,
//   ease: "bounce.out",
//   y: -250,
// });

// gsap.from("#about p", {
//   scrollTrigger: {
//     trigger: "#about",
//     start: "top 80%",
//   },
//   y: 50,
//   opacity: 0,
//   delay: 0.2,
//   duration: 1,
//   ease: "power2.out",
// });

const template = document.querySelector("#skill-tag");
const skillTags = document.querySelectorAll("SkillTag");
skillTags.forEach((tag) => {
  const clone = template.content.cloneNode(true);
  clone.querySelector("span").textContent = tag.textContent;
  tag.replaceWith(clone);
});

// end of about section

// particlejs
window.onload = function () {
  // Enhanced Particles Configuration for portfolio section
  const enhancedParticlesConfig = {
    particles: {
      number: {
        value: 180, // Reduced for better performance
        density: {
          enable: true,
          value_area: 800, // Better particle distribution
        },
      },
      color: {
        value:  ["#ffffff"],  // Purple gradient colors
      },
      shape: {
        type: ["circle", "triangle"], // Mixed shapes
        stroke: {
          width: 0,
          color: "#000000",
        },
        polygon: {
          nb_sides: 5,
        },
      },
      opacity: {
        value: 0.7,
        random: true, // Random opacity for depth
        anim: {
          enable: true,
          speed: 1.5,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 4, // Slightly larger
        random: true,
        anim: {
          enable: true,
          speed: 3,
          size_min: 0.5,
          sync: false,
        },
      },
      move: {
        enable: true,
        speed: 1.5, // Slower, more elegant movement
        direction: "none",
        random: true,
        straight: false,
        out_mode: "bounce", // Particles bounce at edges
        bounce: true,
        attract: {
          enable: true,
          rotateX: 800,
          rotateY: 1600,
        },
      },
      line_linked: {
        enable: true,
        distance: 150, // Increased connection distance
        color: "#7C3AED", // Purple connections
        opacity: 0.4,
        width: 1.5,
        shadow: {
          enable: true,
          color: "#A855F7",
          blur: 5,
        },
      },
    },
    interactivity: {
      detect_on: "window",
      events: {
        onhover: {
          enable: true,
          mode: "bubble", // More interactive mode
          parallax: {
            enable: true,
            force: 25,
            smooth: 15,
          },
        },
        onclick: {
          enable: true,
          mode: "grab", // Particles repel on click
        },
        resize: true,
      },
      modes: {
        bubble: {
          distance: 120,
          size: 10,
          duration: 2,
          opacity: 0.8,
          speed: 1.5,
        },
        repulse: {
          distance: 100,
          duration: 0.5,
        },
        grab: {
          distance: 160,
          line_linked: {
            opacity: 0.8,
          },
        },
      },
    },
    retina_detect: true,
  };

  // Initialize both particle systems with the enhanced config
  particlesJS("particles-bottom-left", {
    ...enhancedParticlesConfig,
    particles: {
      ...enhancedParticlesConfig.particles,
      move: {
        ...enhancedParticlesConfig.particles.move,
        direction: "bottom-left", // Specific direction for this container
        out_mode: "out",
      },
    },
  });

  particlesJS("particles-top-right", {
    ...enhancedParticlesConfig,
    particles: {
      ...enhancedParticlesConfig.particles,
      move: {
        ...enhancedParticlesConfig.particles.move,
        direction: "top-right", // Specific direction for this container
        out_mode: "out",
      },
    },
  });

  // Initialize particles for the home section with a different configuration

  particlesJS("particles-home", {
    particles: {
      number: {
        value: 120, // Reduced for better performance
        density: {
          enable: true,
          value_area: 800, // Better particle distribution
        },
      },
      color: {
        value: ["#ffffff", "#9c27b0", "#673ab7"], // Multiple colors
      },
      shape: {
        type: ["circle", "triangle", "polygon"], // Mixed shapes
        stroke: {
          width: 0,
          color: "#000000",
        },
        polygon: {
          nb_sides: 5,
        },
      },
      opacity: {
        value: 0.5,
        random: true, // Random opacity for depth
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 3,
        random: true, // Random sizes
        anim: {
          enable: true,
          speed: 2,
          size_min: 0.1,
          sync: false,
        },
      },
      move: {
        enable: true,
        speed: 1.5, // Slower, more elegant movement
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out", // Particles fade out at edges
        bounce: false,
        attract: {
          enable: true,
          rotateX: 600,
          rotateY: 1200,
        },
      },
      line_linked: {
        enable: true,
        distance: 120, // Increased connection distance
        color: "#9c27b0", // Purple connections
        opacity: 0.2,
        width: 1,
        shadow: {
          enable: true,
          color: "#9c27b0",
          blur: 5,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "bubble", // More interactive mode
        },
        onclick: {
          enable: true,
          mode: "push", // Particles push away on click
        },
        resize: true,
      },
      modes: {
        bubble: {
          distance: 100,
          size: 8,
          duration: 2,
          opacity: 0.8,
          speed: 3,
        },
        push: {
          particles_nb: 4,
        },
        grab: {
          distance: 140,
          line_linked: {
            opacity: 0.8,
          },
        },
      },
    },
    retina_detect: true,
    config_demo: {
      hide_card: true,
    },
  });

  particlesJS("particles-contact", {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#6366f1", // indigo-500
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000",
        },
      },
      opacity: {
        value: 0.3,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 3,
        random: true,
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#6366f1",
        opacity: 0.2,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 140,
          line_linked: {
            opacity: 0.5,
          },
        },
        push: {
          particles_nb: 4,
        },
      },
    },
    retina_detect: true,
  });
};

// end of particlejs

// Skills section animations
// document.addEventListener("DOMContentLoaded", () => {
//   // Register ScrollTrigger plugin
//   gsap.registerPlugin(ScrollTrigger);

//   // Animate the title
//   gsap.from("#skills h1", {
//     scrollTrigger: {
//       trigger: "#skills",
//       start: "top 80%",
//       toggleActions: "play none none none",
//     },
//     y: 50,
//     opacity: 0,
//     duration: 0.8,
//     ease: "power2.out",
//   });

//   // Animate the decorative lines
//   gsap.from("#skills .relative div", {
//     scrollTrigger: {
//       trigger: "#skills",
//       start: "top 70%",
//       toggleActions: "play none none none",
//     },
//     height: 0,
//     stagger: 0.1,
//     duration: 1,
//     ease: "power2.out",
//   });

//   // Animate frontend skills
//   gsap.from(".frontend-skills h2", {
//     scrollTrigger: {
//       trigger: ".frontend-skills",
//       start: "top 80%",
//       toggleActions: "play none none none",
//     },
//     x: -50,
//     opacity: 0,
//     duration: 0.6,
//   });

//   gsap.from(".frontend-skills .skill-icon", {
//     scrollTrigger: {
//       trigger: ".frontend-skills",
//       start: "top 70%",
//       toggleActions: "play none none none",
//     },
//     y: 30,
//     opacity: 0,
//     stagger: 0.1,
//     duration: 0.5,
//     ease: "back.out(1.7)",
//   });

//   // Animate backend skills
//   gsap.from(".backend-skills h2", {
//     scrollTrigger: {
//       trigger: ".backend-skills",
//       start: "top 80%",
//       toggleActions: "play none none none",
//     },
//     x: 50,
//     opacity: 0,
//     duration: 0.6,
//   });

//   gsap.from(".backend-skills .skill-icon", {
//     scrollTrigger: {
//       trigger: ".backend-skills",
//       start: "top 70%",
//       toggleActions: "play none none none",
//     },
//     y: 30,
//     opacity: 0,
//     stagger: 0.1,
//     duration: 0.5,
//     ease: "back.out(1.7)",
//   });

//   // Animate tools section
//   gsap.from(".tools-title", {
//     scrollTrigger: {
//       trigger: ".tools-container",
//       start: "top 90%",
//       toggleActions: "play none none none",
//     },
//     y: 30,
//     opacity: 0,
//     duration: 0.6,
//   });

//   gsap.from(".tools-container .skill-icon", {
//     scrollTrigger: {
//       trigger: ".tools-container",
//       start: "top 80%",
//       toggleActions: "play none none none",
//     },
//     scale: 0,
//     opacity: 0,
//     stagger: {
//       each: 0.1,
//       from: "random",
//     },
//     duration: 0.5,
//     ease: "elastic.out(1, 0.5)",
//   });

//   // Add hover animations
//   document.querySelectorAll(".skill-icon").forEach((icon) => {
//     icon.addEventListener("mouseenter", () => {
//       gsap.to(icon, {
//         scale: 1.2,
//         y: -5,
//         duration: 0.3,
//         ease: "power2.out",
//       });
//     });

//     icon.addEventListener("mouseleave", () => {
//       gsap.to(icon, {
//         scale: 1,
//         y: 0,
//         duration: 0.3,
//         ease: "power2.out",
//       });
//     });
//   });
// });

// Home page animations using GSAP and ScrollTrigger

$(document).ready(function () {
  // Split letters
  $("#text-line-1").lettering();
  $("#text-line-2").lettering();
  $("#text-line-3").lettering();
  $("body").addClass("prevent-scroll");

  // Create master timeline
  const master = gsap.timeline();

  // Text animation timeline
  const textIntro = gsap.timeline();

  // Animate "I'm a" with more dynamic effects
  textIntro.from("#text-line-1 span", {
    opacity: 0,
    x: -30,
    rotation: -5,
    stagger: {
      amount: 0.5,
      from: "random",
    },
    duration: 1.2,
    ease: "back.out(1.2)",
  });

  // Animate "Web Developer" with more personality
  textIntro.from(
    "#text-line-2 span",
    {
      opacity: 0,
      y: 40,
      scale: 0.5,
      rotation: 10,
      transformOrigin: "50% 0%",
      stagger: {
        each: 0.08,
        from: "center",
      },
      duration: 1,
      ease: "elastic.out(1, 0.5)",
    },
    "-=0.8"
  );

  // Animate subheading with smoother effect
  textIntro.from(
    "#text-line-3 span",
    {
      opacity: 0,
      y: 20,
      filter: "blur(5px)",
      stagger: {
        each: 0.03,
        from: "random",
      },
      duration: 1,
      ease: "power2.out",
    },
    "-=0.8"
  );

  // Add underline animation for "Developer"
  textIntro.to(
    "#underline",
    {
      width: "100%",
      duration: 0.8,
      ease: "power2.inOut",
    },
    "-=0.5"
  );

  // Particles animation
  textIntro.from(
    "#particles-home",
    {
      opacity: 0,
      duration: 1,
      ease: "power2.inOut",
    },
    "-=0.5"
  );

  // UI animation timeline
  const uiIntro = gsap.timeline();

  // Animate header elements with staggered effect
  // uiIntro.from("header h1, header nav ", {
  //   opacity: 0,
  //   y: -30,
  //   duration: 0.8,
  //   stagger: 0.1,
  //   ease: "back.out(1.5)",
  // });

  // uiIntro.fromTo(
  //   ".download-cv",
  //   { opacity: 0, y: -30 },
  //   { opacity: 1, y: 0, duration: 0.8, ease: "back.out(1.5)" }
  // );

  function isLargeScreen() {
  return window.innerWidth >= 1024; // Tailwind lg breakpoint
}
// mobile view home page
if (isLargeScreen()) {
  uiIntro.from("header img, header nav", {
    opacity: 0,
    y: -30,
    duration: 0.8,
    stagger: 0.1,
    ease: "back.out(1.5)",
  });

  uiIntro.fromTo(
    ".download-cv",
    { opacity: 0, y: -30 },
    { opacity: 1, y: 0, duration: 0.8, ease: "back.out(1.5)" }
  );
}

if ($("#text-line-1-mobile").length) {
    $("#text-line-1-mobile").lettering();
    $("#text-line-2-mobile").lettering();
    $("#text-line-3-mobile").lettering();

    const mobileIntro = gsap.timeline();
    mobileIntro.from("#text-line-1-mobile span", {
      opacity: 0,
      x: -30,
      rotation: -5,
      stagger: { amount: 0.5, from: "random" },
      duration: 1.2,
      ease: "back.out(1.2)",
    });

    mobileIntro.from("#text-line-2-mobile span", {
      opacity: 0,
      y: 40,
      scale: 0.5,
      rotation: 10,
      transformOrigin: "50% 0%",
      stagger: { each: 0.08, from: "center" },
      duration: 1,
      ease: "elastic.out(1, 0.5)",
    }, "-=0.8");

    mobileIntro.from("#text-line-3-mobile span", {
      opacity: 0,
      y: 20,
      filter: "blur(5px)",
      stagger: { each: 0.03, from: "random" },
      duration: 1,
      ease: "power2.out",
    }, "-=0.8");
  }
// end of mobile

  // Enhanced triangle animation
  uiIntro.from(
    ".triangle-png",
    {
      opacity: 0,
      x: -100,
      rotation: -15,
      duration: 1.5,
      ease: "expo.out",
    },
    "-=0.5"
  );

  uiIntro.from(
    ".triangle-black",
    {
      opacity: 0,
      x: -80,
      rotation: -10,
      duration: 1.2,
      ease: "expo.out",
    },
    "-=1"
  );

  // Add subtle pulse animation to triangle after intro
  uiIntro.to(
    ".triangle-container",
    {
      y: 10,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    },
    "+=1"
  );

  

  // Add scroll ability after animations complete
  master
    .add(textIntro)
    .add(uiIntro)
    .eventCallback("onComplete", () => {
      $("body").removeClass("prevent-scroll");
      gsap.to(".scroll-indicator", {
        y: 10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

  // Add scroll indicator (add this HTML element if needed)
  // if (!$(".scroll-indicator").length) {
  //   $("section").append('<div class="scroll-indicator">↓ Scroll Down ↓</div>');
  // }
});

// Add CSS for cursor follower (add to your stylesheet)

setTimeout(() => {
  $("body").removeClass("prevent-scroll");
}, 5000); // fallback in 5s
// end of home page animations

// Contact section animations using GSAP and ScrollTrigger
// Register ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

// Animation for the left side
// gsap.from(".contact-heading", {
//   scrollTrigger: {
//     trigger: "#contact",
//     start: "top 80%",
//     toggleActions: "play none none none"
//   },
//   y: 50,
//   opacity: 0,
//   duration: 0.8,
//   ease: "power3.out"
// });

// gsap.from(".contact-text", {
//   scrollTrigger: {
//     trigger: "#contact",
//     start: "top 70%",
//     toggleActions: "play none none none"
//   },
//   y: 30,
//   opacity: 0,
//   duration: 0.8,
//   delay: 0.2,
//   ease: "power3.out"
// });

// gsap.from(".contact-item", {
//   scrollTrigger: {
//     trigger: "#contact",
//     start: "top 60%",
//     toggleActions: "play none none none"
//   },
//   x: -20,
//   opacity: 0,
//   duration: 0.5,
//   stagger: 0.15,
//   delay: 0.4,
//   ease: "power3.out"
// });

// // Animation for the form
// gsap.from(".contact-form", {
//   scrollTrigger: {
//     trigger: "#contact",
//     start: "top 70%",
//     toggleActions: "play none none none"
//   },
//   y: 50,
//   opacity: 0,
//   duration: 0.8,
//   delay: 0.3,
//   ease: "power3.out"
// });

// gsap.from(".form-input", {
//   scrollTrigger: {
//     trigger: "#contact",
//     start: "top 60%",
//     toggleActions: "play none none none"
//   },
//   y: 20,
//   opacity: 0,
//   duration: 0.5,
//   stagger: 0.1,
//   delay: 0.5,
//   ease: "power3.out"
// });

// gsap.from(".form-button", {
//   scrollTrigger: {
//     trigger: "#contact",
//     start: "top 50%",
//     toggleActions: "play none none none"
//   },
//   scale: 0.8,
//   opacity: 0,
//   duration: 0.6,
//   delay: 0.8,
//   ease: "elastic.out(1, 0.5)"
// });

// end of contact section animations

// about section animations using GSAP and ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Master timeline for better sequencing
const aboutTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: "#about",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
    // markers: true, // uncomment for debug
  },
});

// Animate heading with a more dramatic entrance
aboutTimeline.from("#about h2", {
  opacity: 0,
  y: 60,
  duration: 0.8,
  ease: "power3.out",
});

// Animate Paragraph with a slight delay
aboutTimeline.from(
  "#about p",
  {
    opacity: 0,
    y: 40,
    duration: 0.8,
    ease: "power2.out",
  },
  "-=0.5"
);

// Animate blockquote with a fade-in effect
aboutTimeline.from(
  "#about blockquote",
  {
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: "power2.out",
  },
  "-=0.3"
);

// Enhanced list item animation with better staggering
gsap.from("#about ul li", {
  scrollTrigger: {
    trigger: "#about ul",
    start: "top 75%",
    toggleActions: "play none none none", // No reverse to keep them visible
  },
  opacity: 0,
  y: 30,
  duration: 0.6,
  stagger: {
    each: 0.2,
    from: "start",
  },
  ease: "power2.out",
  delay: 0.3, // Slight delay after other elements
});

// Bonus: Add a subtle scale effect to the border accents
gsap.from("#about .border-l-4", {
  scrollTrigger: {
    trigger: "#about",
    start: "top 85%",
    toggleActions: "play none none reverse",
  },
  scaleY: 0,
  duration: 1.2,
  ease: "power3.out",
  transformOrigin: "top center",
});
// Background color transition on scroll (white to lightgray)
// gsap.to("#about", {
//   scrollTrigger: {
//     trigger: "#about",
//     start: "top center",
//     end: "bottom center",
//     scrub: true,
//   },
//   background: "linear-gradient(to bottom right, #ffffff, #d3d3d3)", // white to lightgray
// });

// Initialize particles.js
document.addEventListener("DOMContentLoaded", function () {
  if (document.getElementById("particles-js")) {
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: "#6366f1", // indigo-500
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000",
          },
        },
        opacity: {
          value: 0.3,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 3,
          random: true,
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#6366f1",
          opacity: 0.2,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "grab",
          },
          onclick: {
            enable: true,
            mode: "push",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 140,
            line_linked: {
              opacity: 0.5,
            },
          },
          push: {
            particles_nb: 4,
          },
        },
      },
      retina_detect: true,
    });
  }

  // Enhanced GSAP animations for skills section
  gsap.registerPlugin(ScrollTrigger);

  // Master timeline for skills section
  const skillsTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#skills",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none none",
    },
  });

  // Title animation
  skillsTimeline.from("#skills h1", {
    opacity: 0,
    y: 40,
    duration: 0.8,
    ease: "power2.out",
  });

  // Vertical lines animation
  skillsTimeline.from(
    "#skills .absolute.w-\\[2px\\]",
    {
      scaleY: 0,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
      transformOrigin: "top center",
    },
    "-=0.5"
  );

  // Frontend skills animation
  skillsTimeline.from(".frontend-skills h2", {
    opacity: 0,
    x: -40,
    duration: 0.6,
    ease: "back.out(1.2)",
  });

  skillsTimeline.from(
    ".frontend-skills .skill-icon",
    {
      opacity: 0,
      y: 30,
      scale: 0.8,
      duration: 0.6,
      stagger: 0.1,
      ease: "back.out(1.2)",
    },
    "-=0.3"
  );

  // Backend skills animation
  skillsTimeline.from(
    ".backend-skills h2",
    {
      opacity: 0,
      x: 40,
      duration: 0.6,
      ease: "back.out(1.2)",
    },
    "-=0.5"
  );

  skillsTimeline.from(
    ".backend-skills .skill-icon",
    {
      opacity: 0,
      y: 30,
      scale: 0.8,
      duration: 0.6,
      stagger: 0.1,
      ease: "back.out(1.2)",
    },
    "-=0.3"
  );

  // Tools animation
  skillsTimeline.from(
    ".tools-title",
    {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: "power2.out",
    },
    "-=0.3"
  );

  skillsTimeline.from(
    ".tools-container .skill-icon",
    {
      opacity: 0,
      y: 30,
      scale: 0.8,
      duration: 0.6,
      stagger: 0.05,
      ease: "back.out(1.2)",
    },
    "-=0.3"
  );

  // Add hover effects to skill icons
  document.querySelectorAll(".skill-icon").forEach((icon) => {
    icon.addEventListener("mouseenter", () => {
      gsap.to(icon, {
        scale: 1.2,
        y: -5,
        duration: 0.3,
        ease: "power2.out",
      });
    });
    icon.addEventListener("mouseleave", () => {
      gsap.to(icon, {
        scale: 1,
        y: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    });
  });
});

// contact section animations using Vanta.js and GSAP
document.addEventListener("DOMContentLoaded", function () {
  // Initialize Vanta.js
  if (document.getElementById("contact")) {
    VANTA.NET({
      el: "#contact",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x3fce4e,
      backgroundColor: 0x0,
      points: 12.0,
      maxDistance: 22.0,
      spacing: 18.0,
    });
  }

  // GSAP animations for contact section
  gsap.registerPlugin(ScrollTrigger);

  const contactTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#contact",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  // Animate heading
  contactTimeline.from(".contact-heading", {
    opacity: 0,
    y: 40,
    duration: 0.8,
    ease: "power2.out",
  });

  // Animate text
  contactTimeline.from(
    ".contact-text",
    {
      opacity: 0,
      y: 30,
      duration: 0.7,
      ease: "power2.out",
    },
    "-=0.3"
  );

  // Animate contact info items
  contactTimeline.from(
    ".contact-item",
    {
      opacity: 0,
      x: -20,
      duration: 0.6,
      stagger: 0.15,
      ease: "power2.out",
    },
    "-=0.2"
  );

  // Animate form elements
  contactTimeline.from(
    ".form-input",
    {
      opacity: 0,
      y: 20,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out",
    },
    "-=0.3"
  );

  contactTimeline.from(
    ".form-button",
    {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: "elastic.out(1, 0.5)",
    },
    "-=0.2"
  );

  // Form submission handling
  const contactForm = document.getElementById("contact-form");
  const formStatus = document.getElementById("form-status");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Simulate form submission (replace with actual form handling)
      formStatus.classList.remove("hidden");
      gsap.from(formStatus, {
        opacity: 0,
        y: 10,
        duration: 0.5,
      });

      // Reset form after 3 seconds
      setTimeout(() => {
        contactForm.reset();
        gsap.to(formStatus, {
          opacity: 0,
          y: -10,
          duration: 0.5,
          onComplete: () => formStatus.classList.add("hidden"),
        });
      }, 3000);
    });
  }
});

// portfolio gsap on scroll

// document.addEventListener("DOMContentLoaded", function () {
//   const filterButtons = document.querySelectorAll(".filter-btn");
//   const portfolioItems = document.querySelectorAll(".portfolio-item");

//   filterButtons.forEach((button) => {
//     button.addEventListener("click", () => {
//       // Remove active classes
//       filterButtons.forEach((btn) =>
//         btn.classList.remove(
//           "text-indigo-600",
//           "border-b-2",
//           "border-indigo-600",
//           "pb-1"
//         )
//       );

//       // Add active to clicked
//       button.classList.add(
//         "text-indigo-600",
//         "border-b-2",
//         "border-indigo-600",
//         "pb-1"
//       );

//       const filter = button.getAttribute("data-filter");

//       portfolioItems.forEach((item) => {
//         if (filter === "all" || item.classList.contains(filter)) {
//           item.classList.remove("hidden");
//         } else {
//           item.classList.add("hidden");
//         }
//       });
//     });
//   });

//   portfolioItems.forEach((item) => {
//     item.addEventListener("mouseenter", () => {
//       // Reset all
//       portfolioItems.forEach((i) => {
//         i.classList.remove("col-span-2", "hidden");
//         i.classList.add("col-span-1");
//       });

//       // Expand hovered item
//       item.classList.remove("col-span-1");
//       item.classList.add("col-span-2");

//       const index = Array.from(portfolioItems).indexOf(item);

//       // Find row-mates (3 items per row)
//       const start = Math.floor(index / columns) * columns;
//       const rowItems = Array.from(portfolioItems).slice(start, start + 3);

//       // Hide one of the others in the same row (but not the hovered)
//       rowItems.forEach((itm, idx) => {
//         if (itm !== item) {
//           // Hide the last one if hovered is last, else hide the last in row
//           if (index % 3 === 2) {
//             // Hovered is last in row → hide previous
//             if (idx === 0) itm.classList.add("hidden");
//           } else {
//             // Hovered is first or middle → hide last
//             if (idx === 2) itm.classList.add("hidden");
//           }
//         }
//       });
//     });

//     item.addEventListener("mouseleave", () => {
//       // Reset all on leave
//       portfolioItems.forEach((i) => {
//         i.classList.remove("col-span-2", "hidden");
//         i.classList.add("col-span-1");
//       });
//     });
//   });

//   // Load GSAP and ScrollTrigger
 
// });

const filterButtons = document.querySelectorAll(".filter-btn");
const portfolioItems = document.querySelectorAll(".portfolio-item");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active classes
    filterButtons.forEach((btn) =>
      btn.classList.remove(
        "text-indigo-600",
        "border-b-2",
        "border-indigo-600",
        "pb-1"
      )
    );

    // Add active to clicked
    button.classList.add(
      "text-indigo-600",
      "border-b-2",
      "border-indigo-600",
      "pb-1"
    );

    const filter = button.getAttribute("data-filter");

    portfolioItems.forEach((item) => {
      if (filter === "all" || item.classList.contains(filter)) {
        item.classList.remove("hidden");
      } else {
        item.classList.add("hidden");
      }
    });
  });
});


// Portfolio hover effect
document.addEventListener("DOMContentLoaded", function () {
  const portfolioItems = document.querySelectorAll(".portfolio-item");

  // Hover logic
  portfolioItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      // Reset all
      portfolioItems.forEach((i) => {
        i.classList.remove("col-span-2", "hidden");
        i.classList.add("col-span-1");
      });

      // Expand hovered item
      item.classList.remove("col-span-1");
      item.classList.add("col-span-2");

      const index = Array.from(portfolioItems).indexOf(item);

      // Find row-mates (3 items per row)
      const start = Math.floor(index / 3) * 3;
      const rowItems = Array.from(portfolioItems).slice(start, start + 3);

      // Hide one of the others in the same row (but not the hovered)
      rowItems.forEach((itm, idx) => {
        if (itm !== item) {
          // Hide the last one if hovered is last, else hide the last in row
          if (index % 3 === 2) {
            // Hovered is last in row → hide previous
            if (idx === 0) itm.classList.add("hidden");
          } else {
            // Hovered is first or middle → hide last
            if (idx === 2) itm.classList.add("hidden");
          }
        }
      });
    });

    item.addEventListener("mouseleave", () => {
      // Reset all on leave
      portfolioItems.forEach((i) => {
        i.classList.remove("col-span-2", "hidden");
        i.classList.add("col-span-1");
      });
    });
  });

  // Scroll animation for particles
  // function animateParticles() {
  //   const particlesTop = document.getElementById('particles-top-right');
  //   const particlesBottom = document.getElementById('particles-bottom-left');
  //   const scrollPosition = window.scrollY;
    
  //   particlesTop.style.transform = `translateY(${scrollPosition * 0.2}px) rotate(${scrollPosition * 0.05}deg)`;
  //   particlesBottom.style.transform = `translateY(-${scrollPosition * 0.2}px) rotate(-${scrollPosition * 0.05}deg)`;
  // }

  // Intersection Observer for items
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fadeInUp');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe portfolio items and section header
  document.querySelectorAll('.portfolio-item, #projects .text-center').forEach(el => {
    observer.observe(el);
  });

  // Scroll event listener
  window.addEventListener('scroll', () => {
    animateParticles();
    
    // Parallax effect for project items
    const projectsSection = document.getElementById('projects');
    const rect = projectsSection.getBoundingClientRect();
    const sectionTop = rect.top;
    const sectionHeight = rect.height;
    
    if (sectionTop < window.innerHeight && sectionTop + sectionHeight > 0) {
      const scrollPercent = Math.min(1, Math.max(0, (window.innerHeight - sectionTop) / window.innerHeight));
      
      portfolioItems.forEach((item, index) => {
        const delay = index * 0.05;
        const translateY = (1 - scrollPercent) * 20 * (index % 2 === 0 ? 1 : -1);
        item.style.transform = `translateY(${translateY}px)`;
        item.style.transitionDelay = `${delay}s`;
      });
    }
  });

  // Filter functionality
  const filterButtons = document.querySelectorAll('.filter-btn');
  const portfolioGrid = document.getElementById('portfolioGrid');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Update active button
      filterButtons.forEach(btn => {
        btn.classList.remove('text-indigo-600', 'bg-indigo-50');
        btn.classList.add('hover:text-indigo-600', 'hover:bg-indigo-50');
      });
      
      button.classList.add('text-indigo-600', 'bg-indigo-50');
      button.classList.remove('hover:text-indigo-600', 'hover:bg-indigo-50');
      
      // Filter items
      const filterValue = button.getAttribute('data-filter');
      const items = portfolioGrid.querySelectorAll('.portfolio-item');
      
      items.forEach(item => {
        if (filterValue === 'all' || item.getAttribute('data-category')?.includes(filterValue)) {
          item.style.display = 'block';
          item.classList.add('animate-fadeIn');
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
});

// navbar
document.getElementById('mobile-menu-button').addEventListener('click', function() {
    const navContent = document.getElementById('nav-content');
    navContent.classList.toggle('hidden');
    navContent.classList.toggle('flex');
  });