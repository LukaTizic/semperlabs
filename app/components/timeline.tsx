"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
import "./timeline.css"; // CSS from your snippet

export default function Timeline() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger, Draggable);

    const sections = gsap.utils.toArray<HTMLElement>("section");
    const track = document.querySelector<HTMLElement>("[data-draggable]");
    const navLinks = gsap.utils.toArray<HTMLElement>("[data-link]");
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const lastItemWidth = () =>
      (navLinks.at(-1) as HTMLElement)?.offsetWidth || 0;

    const getUseableHeight = () =>
      document.documentElement.offsetHeight - window.innerHeight;

    const getDraggableWidth = () =>
      (track?.offsetWidth || 0) * 0.5 - lastItemWidth();

    const updatePosition = () => {
      if (!track) return;
      const left = track.getBoundingClientRect().left * -1;
      const width = getDraggableWidth();
      const useableHeight = getUseableHeight();
      const y = gsap.utils.mapRange(0, width, 0, useableHeight, left);
      st.scroll(y);
    };

    const tl = gsap.timeline().to(track, {
      x: () => getDraggableWidth() * -1,
      ease: "none",
    });

    const st = ScrollTrigger.create({
      animation: tl,
      scrub: 0,
    });

    Draggable.create(track, {
      type: "x",
      inertia: true,
      bounds: {
        minX: 0,
        maxX: getDraggableWidth() * -1,
      },
      edgeResistance: 1,
      onDragStart: () => st.disable(),
      onDragEnd: () => st.enable(),
      onDrag: updatePosition,
      onThrowUpdate: updatePosition,
    });

    const initSectionAnimation = () => {
      if (prefersReducedMotion.matches) return;

      sections.forEach((section, index) => {
        const heading = section.querySelector("h2");
        const image = section.querySelector(".section__image");

        gsap.set(heading, { opacity: 0, y: 50 });
        gsap.set(image, { opacity: 0, rotateY: 15 });

        const sectionTl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top center",
            end: `+=${window.innerHeight}`,
            toggleActions: "play reverse play reverse",
          },
        });

        sectionTl
          .to(image, { opacity: 1, rotateY: -5, duration: 6, ease: "elastic" })
          .to(heading, { opacity: 1, y: 0, duration: 2 }, 0.5);

        gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 20px",
            end: "bottom top",
            onToggle: ({ isActive }) => {
              const sectionLink = navLinks[index];
              if (sectionLink) {
                sectionLink.classList.toggle("is-active", isActive);
              }
            },
          },
        });
      });
    };

    initSectionAnimation();
  }, []);

  return (
    <>
      <nav>
        <div className="marker"></div>
        <div className="nav__track" data-draggable>
          <ul className="nav__list">
            {[
              "1993",
              "1995",
              "1997",
              "2000",
              "2001",
              "2003",
              "2007",
              "2011",
              "2016",
            ].map((year, i) => (
              <li key={year}>
                <a href={`#section_${i + 1}`} className="nav__link" data-link>
                  <span>{year}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <main>
        {[
          ["1993", "Pablo Honey", "radiohead_pablo-honey.jpg"],
          ["1995", "The Bends", "radiohead_the-bends.webp"],
          ["1997", "OK Computer", "radiohead_ok-computer.webp"],
          ["2000", "Kid A", "radiohead_kid-a.webp"],
          ["2001", "Amnesiac", "radiohead_amnesiac.webp"],
          ["2003", "Hail to the Thief", "radiohead_hail-to-the-thief.webp"],
          ["2007", "In Rainbows", "radiohead_in-rainbows.webp"],
          ["2011", "The King of Limbs", "radiohead_king-of-linbs.webp"],
          ["2016", "A Moon Shaped Pool", "radiohead_a-moon-shaped-pool.webp"],
        ].map(([year, title, img], i) => (
          <section
            id={`section_${i + 1}`}
            key={i}
            style={{ ["--i" as any]: i }}
          >
            <div className="container">
              <h2 className="section__heading">
                <span>{year}</span>
                <span>{title}</span>
              </h2>
              <div className="section__image">
                <img
                  src={`https://assets.codepen.io/85648/${img}`}
                  alt={title}
                />
              </div>
            </div>
          </section>
        ))}
      </main>
    </>
  );
}
