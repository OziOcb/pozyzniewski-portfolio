import { onBeforeRouteLeave } from "vue-router";
import {
  enterPageWithBasicTransition,
  leavePageWithBasicTransition,
} from "@/utils/transitions.js";

export function useBasicPageTransitionEnter() {
  onMounted(() => {
    enterPageWithBasicTransition();
  });
}

export function useBasicPageTransitionLeave() {
  onBeforeRouteLeave((_to, _from, next) => {
    leavePageWithBasicTransition(next);
  });
}
