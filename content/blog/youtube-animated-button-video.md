---
title: YouTube - Animated Button - CSS Only
title_color: "#fcfcfc"
title_visible: Animated Button -&nbsp;CSS&nbsp;Only
author: Paul Ozyzniewski
category: Tutorials | YouTube
created_at: 2022-11-27T12:50:01.723Z
excerpt: A fabulous, <strong>animated button</strong> created with <strong>HTML</strong> and <strong>CSS</strong> only. <strong>Youtube video included!</strong>
# FIXME: Stop using cloudinary when this bug is fixed - https://github.com/nuxt/image/issues/638
# image: ./images/img1.jpg
image: https://res.cloudinary.com/oziocb/image/upload/v1667557680/img2.jpg
thumbnail--xs: https://res.cloudinary.com/oziocb/image/upload/v1669049332/thumbnail--xs.jpg
thumbnail--sm: https://res.cloudinary.com/oziocb/image/upload/v1669049331/thumbnail--sm.jpg
thumbnail--lg: https://res.cloudinary.com/oziocb/image/upload/v1669049331/thumbnail--lg.jpg
thumbnail--xxl: https://res.cloudinary.com/oziocb/image/upload/v1669049331/thumbnail--xxl.jpg
coverImg--xs: https://res.cloudinary.com/oziocb/image/upload/v1669301753/coverImg--xs.jpg
coverImg--sm: https://res.cloudinary.com/oziocb/image/upload/v1669301752/coverImg--sm.jpg
coverImg--lg: https://res.cloudinary.com/oziocb/image/upload/v1669301752/coverImg--lg.jpg
coverImg--xxl: https://res.cloudinary.com/oziocb/image/upload/v1669301753/coverImg--xxl.jpg
image_caption: Photo by OziOcb
tags: tutorials, youtube
---

## Animated Button -&nbsp;CSS&nbsp;Only

As a Senior Developer, I often miss creating simple things. That's why I decided to start making <strong>uncomplicated yet cool components</strong> every now and then. Such as this beautiful, <strong>animated button</strong> made using <strong>HTML</strong> and <strong>CSS</strong> only!

I invite all interested to watch and share your feedback in the comments section on <strong>youtube</strong>.

::youtubePlayer
---
videoId: wrtvBtNGUjU
title: CSS Animation Effect | Animated Button | CSS Only
---
::


### Source Code

Link to the [GitHub repository](https://github.com/OziOcb/yt-001-animated-button){:target="_blank"}

```html [index.html]
<button class="btn">
  <span class="btn__text">
    <span class="btn__text--base">Hover effect</span>
    <span class="btn__text--hover">Yeah!</span>
  </span>

  <span class="btn__line btn__line--right"></span>
  <span class="btn__line btn__line--top"></span>
  <span class="btn__line btn__line--left"></span>
  <span class="btn__line btn__line--bottom"></span>
</button>
```


```css [style.css]
/* SETUP */
@import 'https://fonts.googleapis.com/css?family=Poppins:900i';

:root {
  --font-size: 34px;
  --button-width: 300px;
  --button-height: 90px;
  --button-border-radius: 10px;
  --line-thickness: 4px;
  --padding: 0.7em;
  --color-text: #efefef;
  --color-border: #f2cf22;
  --color-bg: #282825;
}

* {
  box-sizing: border-box;
}

body {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: var(--color-bg);
}

/* BTN */
.btn {
  position: relative;
  width: var(--button-width);
  height: var(--button-height);
  overflow: hidden;
  font-size: var(--font-size);
  color: var(--color-text);
  cursor: pointer;
  background-color: transparent;
  border: var(--line-thickness) solid transparent;
  border-radius: var(--button-border-radius);
}

.btn .btn__text {
  position: relative;
  display: block;
  font-family: Poppins, sans-serif;
  transition: transform 0.8s ease-out 0.8s, color 0.4s 0.4s;
  transform: translateY(calc(var(--padding) / 1.1));
}

.btn .btn__text .btn__text--base,
.btn .btn__text .btn__text--hover {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  transform: translateY(-48%);
}

.btn .btn__text .btn__text--base {
  opacity: 1;
  transition: opacity 0.8s 0.8s;
}

.btn .btn__text .btn__text--hover {
  opacity: 0;
  transition: opacity 0s 0.4s;
}

.btn::before {
  position: absolute;
  top: 0;
  z-index: -1;
  display: block;
  width: 150%;
  height: 100%;
  content: '';
  background-color: var(--color-border);
  transform: skew(-45deg) translate(-115%);
  animation: bg-out 0.8s;
}

.btn::after {
  position: absolute;
  right: calc(var(--padding) * 1.55);
  bottom: 0;
  left: calc(var(--padding) * 1.55);
  height: var(--line-thickness);
  content: '';
  background: var(--color-border);
  transition: transform 1s ease-out 0.2s, right 0.2s ease-out 0.6s,
    left 0.4s ease-out 1s;
  transform-origin: left;
}

.btn__line {
  position: absolute;
  background: var(--color-border);
}

.btn__line--right,
.btn__line--left {
  top: 0;
  bottom: 0;
  width: var(--line-thickness);
  transform: scale3d(1, 0, 1);
}

.btn__line--top,
.btn__line--bottom {
  right: 0;
  left: 0;
  height: var(--line-thickness);
  transform: scale3d(0, 1, 1);
}

.btn__line--right {
  right: 0;
  transition: transform 0.2s ease-out 0.4s;
  transform-origin: top;
}

.btn__line--top {
  top: 0;
  transition: transform 0.2s ease-out 0.6s;
  transform-origin: left;
}

.btn__line--left {
  left: 0;
  transition: transform 0.2s ease-out 0.8s;
  transform-origin: bottom;
}

.btn__line--bottom {
  bottom: 0;
  transition: transform 0.2s ease-out;
  transform-origin: right;
}

/* ------------------------------ */
/* HOVER */
.btn:hover .btn__text {
  color: var(--color-bg);
  transition: transform 0.8s ease-out 0.4s, color 0.4s 0.4s;
  transform: translateY(0);
}

.btn:hover .btn__text .btn__text--base {
  opacity: 0;
  transition: opacity 0s 0.8s;
}

.btn:hover .btn__text .btn__text--hover {
  opacity: 1;
  transition: opacity 0s 1s;
}

.btn:hover::before {
  transform: skew(-45deg) translate(-15%);
  animation: bg-in 2s;
}

.btn:hover::after {
  right: 0;
  left: 0;
  transition: transform 0.6s ease-out 0.2s, right 0.2s ease-out, left 0s 0.6s;
  transform: scale3d(0, 1, 1);
  transform-origin: right;
}

.btn:hover .btn__line {
  transform: scale3d(1, 1, 1);
}

.btn:hover .btn__line--right {
  transition: transform 0.2s ease-out 0.2s;
  transform-origin: bottom;
}

.btn:hover .btn__line--top {
  transition: transform 0.2s ease-out 0.4s;
  transform-origin: right;
}

.btn:hover .btn__line--left {
  transition: transform 0.2s ease-out 0.6s;
  transform-origin: top;
}

.btn:hover .btn__line--bottom {
  transition: transform 0.2s ease-out 0.8s;
  transform-origin: left;
}

@keyframes bg-in {
  0% {
    transform: skew(-45deg) translate(-115%);
  }
  40% {
    transform: skew(-45deg) translate(-115%);
  }
  100% {
    transform: skew(-45deg) translate(-15%);
  }
}

@keyframes bg-out {
  from {
    transform: skew(-45deg) translate(-15%);
  }
  to {
    transform: skew(-45deg) translate(100%);
  }
}
```

Thanks!