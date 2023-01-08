---
title: YouTube - Parallax Card
title_color: "#fcfcfc"
title_visible: Parallax Card
author: Paul Ozyzniewski
category: Tutorials | YouTube
created_at: 2023-01-07T12:10:01.723Z
excerpt: A fantastic looking <strong>parallax card</strong> created with <strong>HTML, CSS & JS</strong>. <strong>Youtube video included!</strong>
# FIXME: Stop using cloudinary when this bug is fixed - https://github.com/nuxt/image/issues/638
# image: ./images/img1.jpg
thumbnail--xs: https://res.cloudinary.com/oziocb/image/upload/v1673103325/yt-002/thumbnail--xs.jpg
thumbnail--sm: https://res.cloudinary.com/oziocb/image/upload/v1673103324/yt-002/thumbnail--sm.jpg
thumbnail--lg: https://res.cloudinary.com/oziocb/image/upload/v1673103324/yt-002/thumbnail--lg.jpg
thumbnail--xxl: https://res.cloudinary.com/oziocb/image/upload/v1673103326/yt-002/thumbnail--xxl.jpg
coverImg--xs: https://res.cloudinary.com/oziocb/image/upload/v1673103324/yt-002/coverImg--xs.jpg
coverImg--sm: https://res.cloudinary.com/oziocb/image/upload/v1673103324/yt-002/coverImg--sm.jpg
coverImg--lg: https://res.cloudinary.com/oziocb/image/upload/v1673103324/yt-002/coverImg--lg.jpg
coverImg--xxl: https://res.cloudinary.com/oziocb/image/upload/v1673103325/yt-002/coverImg--xxl.jpg
image_caption: Photo by OziOcb
tags: tutorials, youtube
---

## Parallax Card -&nbsp;HTML&nbsp;CSS&nbsp;Js

Another quick tutorial! This time I created this <strong>fantastic card</strong> with a <strong>unique parallax effect</strong>.

I invite all interested to watch and share your feedback in the comments section on <strong>youtube</strong>.

::youtubePlayer
---
videoId: D9Fy5OSvpbo
title: Parallax Card | Html Css Js
---
::


### Source Code

Link to the [GitHub repository](https://github.com/OziOcb/yt-002-parallax-card){:target="_blank"}

```html [index.html]
<div class="card">
  <div class="card__inner">
    <div
      class="card__background"
      style="background-image: url('https://picsum.photos/id/323/1300/1400');"
    ></div>

    <div class="card__textArea">
      <h3>Hey You!</h3>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
    </div>
  </div>
</div>

<div class="card">
  <div class="card__inner">
    <div
      class="card__background"
      style="background-image: url('https://picsum.photos/id/525/1300/1400');"
    ></div>

    <div class="card__textArea">
      <h3>Bye Bye!</h3>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
    </div>
  </div>
</div>
```


```scss [style.scss]
/* SETUP */
@import "https://fonts.googleapis.com/css?family=Poppins:900i";

$font-size: 16px;
$color-black: #070707;
$color-white: #efefef;
$color-bg: #282825;
$color-text: $color-white;

// Transitions
$duration-textArea-transition: 0.6s 1.6s ease;

* {
  box-sizing: border-box;
}

body {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: Poppins, sans-serif;
  font-size: $font-size;
  color: $color-text;
  background: $color-bg;
}

.card {
  margin: 10px;
  transform: perspective(600px);
  transform-style: preserve-3d;
  cursor: pointer;

  &__inner {
    position: relative;
    width: 280px;
    height: 360px;
    overflow: hidden;
    border-radius: 14px;
    box-shadow: 0 30px 60px 0 rgba($color-black, 0.5);
    transition: transform 1.2s ease;
    .card:hover & {
      transition-duration: 0.6s;
    }
    &::before,
    &::after {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      content: "";
    }
    &::before {
      background-color: rgba($color-black, 0.5);
    }
    &::after {
      margin: 6px;
      border: 1px solid rgba($color-black, 0.5);
      border-radius: 10px;
    }
  }

  &__background {
    position: absolute;
    top: -30px;
    right: -30px;
    bottom: -30px;
    left: -30px;
    z-index: -1;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    transition: transform 1.2s ease;
    .card:hover & {
      transition-duration: 0.6s;
    }
  }

  &__textArea {
    position: absolute;
    bottom: -60px;
    padding: 20px;
    transition: transform $duration-textArea-transition;
    .card:hover & {
      transition-delay: initial;
      transform: translateY(-54px);
    }

    h3 {
      margin-bottom: 4px;
      font-size: 24px;
    }

    p {
      margin: 0;
      font-size: 14px;
      text-shadow: 0 2px 3px $color-black;
      opacity: 0;
      transition: opacity $duration-textArea-transition;
      .card:hover & {
        opacity: 1;
        transition-delay: initial;
      }
    }
  }
}
```

```js [main.js]
const wrapper = document.querySelectorAll(".card");

wrapper.forEach((card) => {
  const cardInner = card.querySelector(".card__inner");
  const cardBackground = cardInner.querySelector(".card__background");

  const state = {
    mouseX: 0,
    mouseY: 0,
    cardHeight: card.clientHeight,
    cardWidth: card.clientWidth,
    cardOffsetLeft: card.offsetLeft,
    cardOffsetTop: card.offsetTop,
  };

  const mouseMove = (el) => {
    state.mouseX = el.pageX - state.cardOffsetLeft - state.cardWidth / 2;
    state.mouseY = el.pageY - state.cardOffsetTop - state.cardHeight / 2;

    const angleX = (state.mouseX / state.cardWidth) * 25;
    const angleY = (state.mouseY / state.cardHeight) * -25;

    const posX = (state.mouseX / state.cardWidth) * -60;
    const posY = (state.mouseY / state.cardHeight) * -60;

    cardInner.style.transform = `rotateX(${angleY}deg) rotateY(${angleX}deg)`;
    cardBackground.style.transform = `translateX(${posX}px) translateY(${posY}px)`;
  };

  const mouseOut = (el) => {
    cardInner.style.transform = `rotateX(0deg) rotateY(0deg)`;
    cardBackground.style.transform = `translateX(0px) translateY(0px)`;
  };

  card.addEventListener("mousemove", mouseMove);
  card.addEventListener("mouseout", mouseOut);
});
```

Thanks!