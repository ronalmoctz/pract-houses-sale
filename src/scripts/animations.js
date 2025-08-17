// src/scripts/animations.js
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/all";

// Registrar plugins
gsap.registerPlugin(ScrollTrigger, SplitText);

// Función para inicializar todas las animaciones
export function initAnimations() {
  // Configuración global de GSAP
  gsap.defaults({ ease: "power2.out", duration: 1.2 });

  // Hero Animations (sin ScrollTrigger - se ejecuta inmediatamente)
  initHeroAnimations();

  // ScrollTrigger Animations
  initVideoAnimations();
  initTechnologiesAnimations();
  initHousePlanAnimations();
  initGalleryAnimations();
  initContactAnimations();
}

// Hero - Animación inicial (sin scroll)
function initHeroAnimations() {
  const title = document.querySelectorAll(".title");
  const subtitle = document.querySelectorAll(".subtitle");

  if (title) {
    const heroSplit = new SplitText(title, { type: "chars, words" });

    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
    });
  }

  if (subtitle) {
    const paragraphSplit = new SplitText(subtitle, { type: "lines" });
    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
      delay: 1,
    });
  }
}

// Video Section
function initVideoAnimations() {
  
  gsap.from("#video img", {
  y: 100, 
  opacity: 0,
  duration: 1.2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: "#video",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
  }
  });

  gsap.from("#video h2", {
    y: 50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: "#video h2",
      start: "top 85%",
      toggleActions: "play none none reverse",
    }
  });

  gsap.from("#video p", {
    y: 30,
    opacity: 0,
    duration: 1,
    delay: 0.2,
    scrollTrigger: {
      trigger: "#video p",
      start: "top 85%",
      toggleActions: "play none none reverse",
    }
  });
  gsap.utils.toArray(".revelation").forEach((el) => {
    gsap.from(el, {
      y: 100, 
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      }
    });
  });

}

// Technologies Section
function initTechnologiesAnimations() {
  // Imagen de fondo con parallax
  gsap.to("#tecnologies img", {
    yPercent: -20,
    ease: "none",
    scrollTrigger: {
      trigger: "#tecnologies",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    }
  });

  // Título con SplitText
  const techTitle = document.querySelector("#tecnologies h1");
  if (techTitle) {
    const titleSplit = new SplitText(techTitle, { type: "chars" });
    gsap.from(titleSplit.chars, {
      y: 100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.03,
      scrollTrigger: {
        trigger: techTitle,
        start: "top 80%",
        toggleActions: "play none none reverse",
      }
    });
  }

  // Cards de tecnologías
  gsap.from("#tecnologies .relative", {
    y: 80,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    scrollTrigger: {
      trigger: "#tecnologies .grid",
      start: "top 75%",
      toggleActions: "play none none reverse",
    }
  });
}

// House Plan Section
function initHousePlanAnimations() {
  // Título principal
  gsap.from("#house-plan h1", {
    scale: 0.8,
    opacity: 0,
    duration: 1.2,
    scrollTrigger: {
      trigger: "#house-plan h1",
      start: "top 80%",
      toggleActions: "play none none reverse",
    }
  });

  // Subtítulo
  gsap.from("#house-plan h2", {
    x: -50,
    opacity: 0,
    duration: 1,
    delay: 0.3,
    scrollTrigger: {
      trigger: "#house-plan h2",
      start: "top 85%",
      toggleActions: "play none none reverse",
    }
  });

  // Imagen del plano
  gsap.from("#house-plan img", {
    x: 100,
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
      trigger: "#house-plan img",
      start: "top 80%",
      toggleActions: "play none none reverse",
    }
  });

  // Lista de áreas
  gsap.from("#house-plan .flex.justify-between", {
    x: -80,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    scrollTrigger: {
      trigger: "#house-plan .grid",
      start: "top 80%",
      toggleActions: "play none none reverse",
    }
  });

}

// Gallery Section
function initGalleryAnimations() {
  gsap.from("#gallery h2", {
    scale: 0.9,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: "#gallery h2",
      start: "top 80%",
      toggleActions: "play none none reverse",
    }
  });

  gsap.from("#gallery .inline-flex", {
    y: 30,
    opacity: 0,
    duration: 0.8,
    scrollTrigger: {
      trigger: "#gallery .inline-flex",
      start: "top 85%",
      toggleActions: "play none none reverse",
    }
  });

  gsap.from("#gallery .gallery-item", {
    scale: 0.8,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    scrollTrigger: {
      trigger: "#gallery .grid",
      start: "top 75%",
      toggleActions: "play none none reverse",
    }
  });
}

// Contact Section
function initContactAnimations() {
  if (typeof gsap === "undefined") return;

  const bg = document.getElementById("contact"); // background div (ahora tiene rounded + overflow-hidden)
  const section = document.getElementById("contact-section") || document.querySelector("#contact-section");
  if (!section) return;

  const leftCol = section.querySelector(".contact-left") || section.querySelector(".flex-1:first-child");
  const rightCol = section.querySelector(".contact-right") || section.querySelector(".flex-1:last-child");
  const titleEl = section.querySelector(".contact-title") || section.querySelector("h1, h2");
  const descEl = section.querySelector(".contact-desc") || section.querySelector("p");
  const phoneEl = section.querySelector(".contact-phone") || section.querySelector("a[href^='tel']");
  const formWrap = section.querySelector(".contact-form") || section.querySelector("#contact-form-placeholder");
  const formFields = formWrap ? formWrap.querySelectorAll(".contact-field, input, textarea, .contact-button, button, .contact-privacy") : [];

  // hints to the browser to reduce jank
  [titleEl, descEl, phoneEl, formWrap, bg].forEach((el) => { if (el) el.style.willChange = "transform, opacity"; });

  const mm = gsap.matchMedia();

  mm.add(
    {
      isDesktop: "(min-width: 768px)",
      isMobile: "(max-width: 767px)",
    },
    (context) => {
      const { isDesktop } = context;

      // timeline orchestrado
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: section,
          start: "top 82%",
          toggleActions: "play none none reverse",
        },
      });

      // left column appear: use fromTo so it works even if element has opacity-0 in CSS
      if (leftCol) {
        const leftFrom = isDesktop ? { x: -40, opacity: 0 } : { y: 24, opacity: 0 };
        tl.fromTo(leftCol, leftFrom, { x: 0, y: 0, opacity: 1, duration: 0.9 }, 0);
      }

      // Title: prefer SplitText if available, otherwise fromTo fallback
      if (titleEl && typeof SplitText !== "undefined") {
        try {
          const split = new SplitText(titleEl, { type: "chars, words", charsClass: "contact-char" });
          tl.fromTo(
            split.chars,
            { yPercent: 110, opacity: 0 },
            { yPercent: 0, opacity: 1, duration: 0.95, stagger: 0.03 },
            0.06
          );
        } catch (e) {
          tl.fromTo(titleEl, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.85 }, 0.06);
        }
      } else if (titleEl) {
        tl.fromTo(titleEl, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.85 }, 0.06);
      }

      // description
      if (descEl) {
        tl.fromTo(descEl, { y: 12, opacity: 0 }, { y: 0, opacity: 1, duration: 0.75, stagger: 0.04 }, 0.18);
      }

      // phone
      if (phoneEl) {
        tl.fromTo(phoneEl, { y: 12, opacity: 0 }, { y: 0, opacity: 1, duration: 0.75 }, 0.26);
        // small hover micro-interaction
        phoneEl.addEventListener("mouseenter", () => gsap.to(phoneEl, { scale: 1.03, duration: 0.12 }));
        phoneEl.addEventListener("mouseleave", () => gsap.to(phoneEl, { scale: 1, duration: 0.12 }));
      }

      // right column (form)
      if (rightCol) {
        const rightFrom = isDesktop ? { x: 40, opacity: 0 } : { y: 24, opacity: 0 };
        tl.fromTo(rightCol, rightFrom, { x: 0, y: 0, opacity: 1, duration: 0.9 }, 0.22);
      }

      // form container and fields - fromTo to ensure opacity -> 1
      if (formWrap) {
        tl.fromTo(formWrap, { scale: 0.99, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.85 }, 0.3);

        if (formFields.length) {
          tl.fromTo(
            formFields,
            { y: 12, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, stagger: 0.06 },
            0.36
          );
        }

        // button interactions
        const sendBtn = formWrap.querySelector(".contact-button, button");
        if (sendBtn) {
          sendBtn.addEventListener("mouseenter", () =>
            gsap.to(sendBtn, { scale: 1.02, boxShadow: "0 8px 30px rgba(0,0,0,0.12)", duration: 0.16 })
          );
          sendBtn.addEventListener("mouseleave", () =>
            gsap.to(sendBtn, { scale: 1, boxShadow: "none", duration: 0.18 })
          );
        }
      }

      // return cleanup for matchMedia revert
      return () => {
        try {
          if (titleEl && SplitText && SplitText.revert) SplitText.revert(titleEl);
        } catch (e) { /* ignore */ }
      };
    }
  );

  // expose for possible SPA cleanup
  window.__GSAP_CONTACT_MM = mm;
}

