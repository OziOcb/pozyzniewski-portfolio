// import { useMediaQuery } from "@vueuse/core";
// import bp from "@/utils/breakpoints";

// function queryString(min: number, max?: number) {
//   if (max) return `(min-width: ${min}px) and (max-width: ${max - 1}px)`;
//   return `(min-width: ${min}px)`;
// }

// const mediaQueries: { [key: string]: boolean } = {
//   xs: useMediaQuery(queryString(bp.xs, bp.sm)).value,
//   sm: useMediaQuery(queryString(bp.sm, bp.md)).value,
//   md: useMediaQuery(queryString(bp.md, bp.lg)).value,
//   lg: useMediaQuery(queryString(bp.lg, bp.xl)).value,
//   xl: useMediaQuery(queryString(bp.xl, bp.xxl)).value,
//   xxl: useMediaQuery(queryString(bp.xxl)).value,
// };

// export function currentMediaQuery() {
//   return `${Object.keys(mediaQueries).filter((key) => mediaQueries[key])}`;
// }

// export function correctImageSize() {
//   return (
//     {
//       xs: "xs",
//       sm: "sm",
//       md: "sm",
//       lg: "lg",
//       xl: "lg",
//       xxl: "xxl",
//     }[currentMediaQuery()] || "xs"
//   );
// }
