import { gsap } from "gsap";

const gsapTransition = ({ onComplete, pageEnter }) => {
  const tl = gsap.timeline({ onComplete });
  // prettier-ignore
  tl
  .fromTo(".pageTransitionWrapper", durationTransitionForWrapper, { autoAlpha: 1 }, { autoAlpha: 0 }, 0)
  .fromTo(".pageTransitionOverlay", durationTransitionForOverlay, { autoAlpha: 0 }, { autoAlpha: 1 }, 0.3)

  return pageEnter ? tl.reverse(0) : tl.play();
};

// EXPORTS
export const durationTransitionForOverlay = 0.6;
export const durationTransitionForWrapper = 0.6;

export const enterPageWithBasicTransition = () => {
  gsapTransition({ pageEnter: true });
};

export const leavePageWithBasicTransition = (next) => {
  gsapTransition({ onComplete: next });
};
