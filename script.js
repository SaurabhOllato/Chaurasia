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
        number: { 
            value: 280,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: { 
            value: ["#333333", "#555555", "#777777"] // Darker grays for visibility
        },
        shape: { 
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000"
            }
        },
        opacity: {
            value: 0.9, // Increased opacity for better visibility
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.2,
                sync: false
            }
        },
        size: {
            value: 3, // Slightly larger particles
            random: true,
            anim: {
                enable: true,
                speed: 2,
                size_min: 0.5,
                sync: false
            }
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200
            }
        },
        line_linked: {
            enable: true,
            distance: 100,
            color: "#444444",  // Darker connections
            opacity: 0.3,  // More visible lines
            width: 1
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "grab",
                parallax: {
                    enable: true,
                    force: 30,
                    smooth: 10
                }
            },
            onclick: {
                enable: true,
                mode: "push"
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 0.7  // Stronger effect on hover
                }
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});
  particlesJS("particles-top-right", {
    particles: {
        number: { 
            value: 280,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: { 
            value: ["#333333", "#555555", "#777777"] // Darker grays for visibility
        },
        shape: { 
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000"
            }
        },
        opacity: {
            value: 0.5, // Increased opacity for better visibility
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.2,
                sync: false
            }
        },
        size: {
            value: 3, // Slightly larger particles
            random: true,
            anim: {
                enable: true,
                speed: 2,
                size_min: 0.5,
                sync: false
            }
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200
            }
        },
        line_linked: {
            enable: true,
            distance: 100,
            color: "#444444",  // Darker connections
            opacity: 0.3,  // More visible lines
            width: 1
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "grab",
                parallax: {
                    enable: true,
                    force: 30,
                    smooth: 10
                }
            },
            onclick: {
                enable: true,
                mode: "push"
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 0.7  // Stronger effect on hover
                }
            },
            push: {
                particles_nb: 4
            }
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

    // filtering
      const filterButtons = document.querySelectorAll(".filter-btn");
    const portfolioItems = document.querySelectorAll(".portfolio-item");

    filterButtons.forEach(button => {
      button.addEventListener("click", () => {
        // Remove active classes
        filterButtons.forEach(btn => btn.classList.remove("text-indigo-600", "border-b-2", "border-indigo-600", "pb-1"));

        // Add active to clicked
        button.classList.add("text-indigo-600", "border-b-2", "border-indigo-600", "pb-1");

        const filter = button.getAttribute("data-filter");

        portfolioItems.forEach(item => {
          if (filter === "all" || item.classList.contains(filter)) {
            item.classList.remove("hidden");
          } else {
            item.classList.add("hidden");
          }
        });
      });
    });

//  document.addEventListener('DOMContentLoaded', function() {
//     const filterBtns = document.querySelectorAll('.filter-btn');
//     const portfolioItems = document.querySelectorAll('.portfolio-item');

//     // Filter functionality
//     filterBtns.forEach(btn => {
//       btn.addEventListener('click', () => {
//         // Update active button
//         filterBtns.forEach(b => b.classList.remove('text-indigo-600', 'bg-indigo-50'));
//         btn.classList.add('text-indigo-600', 'bg-indigo-50');

//         const filter = btn.dataset.filter;
        
//         // Filter items
//         portfolioItems.forEach(item => {
//           if (filter === 'all' || item.dataset.category.includes(filter)) {
//             item.style.display = 'block';
//           } else {
//             item.style.display = 'none';
//           }
//         });
//       });
//     });

//     // Hover effect for grid items (optional)
//     portfolioItems.forEach(item => {
//       item.addEventListener('mouseenter', () => {
//         item.classList.add('transform', 'scale-105');
//       });
//       item.addEventListener('mouseleave', () => {
//         item.classList.remove('transform', 'scale-105');
//       });
//     });
//   });
  

document.addEventListener('DOMContentLoaded', function () {
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  // Hover logic
  portfolioItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      // Reset all
      portfolioItems.forEach(i => {
        i.classList.remove('col-span-2', 'hidden');
        i.classList.add('col-span-1');
      });

      // Expand hovered item
      item.classList.remove('col-span-1');
      item.classList.add('col-span-2');

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
            if (idx === 0) itm.classList.add('hidden');
          } else {
            // Hovered is first or middle → hide last
            if (idx === 2) itm.classList.add('hidden');
          }
        }
      });
    });

    item.addEventListener('mouseleave', () => {
      // Reset all on leave
      portfolioItems.forEach(i => {
        i.classList.remove('col-span-2', 'hidden');
        i.classList.add('col-span-1');
      });
    });
  });
});

 document.addEventListener('DOMContentLoaded', () => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    
    // Animate the title
    gsap.from("#skills h1", {
      scrollTrigger: {
        trigger: "#skills",
        start: "top 80%",
        toggleActions: "play none none none"
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out"
    });
    
    // Animate the decorative lines
    gsap.from("#skills .relative div", {
      scrollTrigger: {
        trigger: "#skills",
        start: "top 70%",
        toggleActions: "play none none none"
      },
      height: 0,
      stagger: 0.1,
      duration: 1,
      ease: "power2.out"
    });
    
    // Animate frontend skills
    gsap.from(".frontend-skills h2", {
      scrollTrigger: {
        trigger: ".frontend-skills",
        start: "top 80%",
        toggleActions: "play none none none"
      },
      x: -50,
      opacity: 0,
      duration: 0.6
    });
    
    gsap.from(".frontend-skills .skill-icon", {
      scrollTrigger: {
        trigger: ".frontend-skills",
        start: "top 70%",
        toggleActions: "play none none none"
      },
      y: 30,
      opacity: 0,
      stagger: 0.1,
      duration: 0.5,
      ease: "back.out(1.7)"
    });
    
    // Animate backend skills
    gsap.from(".backend-skills h2", {
      scrollTrigger: {
        trigger: ".backend-skills",
        start: "top 80%",
        toggleActions: "play none none none"
      },
      x: 50,
      opacity: 0,
      duration: 0.6
    });
    
    gsap.from(".backend-skills .skill-icon", {
      scrollTrigger: {
        trigger: ".backend-skills",
        start: "top 70%",
        toggleActions: "play none none none"
      },
      y: 30,
      opacity: 0,
      stagger: 0.1,
      duration: 0.5,
      ease: "back.out(1.7)"
    });
    
    // Animate tools section
    gsap.from(".tools-title", {
      scrollTrigger: {
        trigger: ".tools-container",
        start: "top 90%",
        toggleActions: "play none none none"
      },
      y: 30,
      opacity: 0,
      duration: 0.6
    });
    
    gsap.from(".tools-container .skill-icon", {
      scrollTrigger: {
        trigger: ".tools-container",
        start: "top 80%",
        toggleActions: "play none none none"
      },
      scale: 0,
      opacity: 0,
      stagger: {
        each: 0.1,
        from: "random"
      },
      duration: 0.5,
      ease: "elastic.out(1, 0.5)"
    });
    
    // Add hover animations
    document.querySelectorAll('.skill-icon').forEach(icon => {
      icon.addEventListener('mouseenter', () => {
        gsap.to(icon, {
          scale: 1.2,
          y: -5,
          duration: 0.3,
          ease: "power2.out"
        });
      });
      
      icon.addEventListener('mouseleave', () => {
        gsap.to(icon, {
          scale: 1,
          y: 0,
          duration: 0.3,
          ease: "power2.out"
        });
      });
    });
  });

  // document.addEventListener('DOMContentLoaded', () => {
  //   const text = "Developer";
  //   const container = document.getElementById("animated-text");

  //   // Split manually
  //   text.split("").forEach(char => {
  //     const span = document.createElement("span");
  //     span.textContent = char;
  //     span.classList.add("char", "inline-block");
  //     container.appendChild(span);
  //   });

  //   // GSAP animation
  //   gsap.set(".char", { opacity: 0, y: 20 });
  //   gsap.to(".char", {
  //     opacity: 1,
  //     y: 0,
  //     duration: 0.5,
  //     stagger: 0.1,
  //     ease: "back.out(1.5)",
  //     delay: 0.3
  //   });

  //   // Bounce the "l" if it exists
  //   const specialL = [...container.children].find(c => c.textContent === 'l');
  //   if (specialL) {
  //     gsap.to(specialL, {
  //       y: -10,
  //       duration: 0.5,
  //       repeat: -1,
  //       yoyo: true,
  //       ease: "sine.inOut",
  //       delay: 1.5
  //     });
  //   }

  //   // Underline animation
  //   gsap.to("#underline", {
  //     width: "100%",
  //     duration: 1,
  //     delay: 1.2,
  //     ease: "power2.out"
  //   });

  //   // Hover effects
  //   container.addEventListener('mouseenter', () => {
  //     gsap.to(specialL, {
  //       scale: 1.5,
  //       duration: 0.3,
  //       ease: "back.out(2)"
  //     });
  //     gsap.to("#underline", {
  //       height: 3,
  //       backgroundColor: "#9333ea",
  //       duration: 0.3
  //     });
  //     gsap.to(".char", {
  //       color: "#7c3aed",
  //       duration: 0.2,
  //       stagger: 0.05
  //     });
  //   });

  //   container.addEventListener('mouseleave', () => {
  //     gsap.to(specialL, {
  //       scale: 1,
  //       duration: 0.3,
  //       ease: "back.out(2)"
  //     });
  //     gsap.to("#underline", {
  //       height: 1,
  //       backgroundColor: "#7c3aed",
  //       duration: 0.3
  //     });
  //     gsap.to(".char", {
  //       color: "#000000",
  //       duration: 0.3,
  //       stagger: 0.05
  //     });
  //   });

  //   // Button hover
  //   const button = document.querySelector('button');
  //   button.addEventListener('mouseenter', () => {
  //     gsap.to(button, { scale: 1.05, duration: 0.2 });
  //   });
  //   button.addEventListener('mouseleave', () => {
  //     gsap.to(button, { scale: 1, duration: 0.2 });
  //   });
  // });