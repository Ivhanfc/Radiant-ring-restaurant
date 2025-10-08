import Lenis from "@studio-freight/lenis";

const lenis = new Lenis({
  duration: 1.8, // controla qué tan lento/suave se siente
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // curva suave
  smooth: true,
  smoothTouch: false,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
