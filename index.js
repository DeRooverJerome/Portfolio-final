gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  let sections = document.querySelectorAll("section:not(#intro)");
  let menuLinks = document.querySelectorAll(".menu li a");
  let mm = gsap.matchMedia();

  mm.add("(min-width: 1024px)", () => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#intro",
        start: "top top",
        end: "+=300%",
        scrub: 1,
      },
    });
    tl.to(
      ".blue",
      {
        left: -100,
        width: 300,
        height: 300,
        rotate: 135,
        top: "calc(50% - 150px)",
        duration: 0.2,
      },
      0
    );
    tl.to(
      ".green",
      { left: "calc(100% - 200px)", rotate: 180, scale: 0.8, duration: 0.2 },
      0
    );
    tl.to(
      ".profile",
      {
        width: 120,
        height: 120,
        top: "calc(50% - 175px)",
        left: "1.5rem",
        duration: 0.2,
      },
      0
    );
    tl.to(
      "h1",
      {
        color: "#fff",
        fontSize: "1.1rem",
        left: "2rem",
        top: "calc(50% - 2.5rem)",
        duration: 0.2,
      },
      0
    );
    tl.to("h2", { left: "100%", duration: 0.2 }, 0);
    tl.to(".quote", { top: "100%", duration: 0.2 }, 0);
    tl.to(".menu", { display: "flex", opacity: 1, duration: 0.2 }, 0.1);
    tl.to(".green", { rotate: 580, top: "70%" }, 0.2);
  });

  window.addEventListener("scroll", () => {
    sections.forEach((section, i) => {
      if (
        section.getBoundingClientRect().y <
        window.innerHeight - window.innerHeight / 2
      ) {
        menuLinks.forEach((l) => l.removeAttribute("class"));
        menuLinks[i].setAttribut.add("class", "active");
      }
    });
  });
});
