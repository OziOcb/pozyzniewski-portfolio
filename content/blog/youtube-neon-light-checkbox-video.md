---
title: YouTube - Neon Light Checkbox - CSS Only
title_color: "#fcfcfc"
title_visible: Neon Light Checkbox -&nbsp;CSS&nbsp;Only
author: Paul Ozyzniewski
category: Tutorials | YouTube
created_at: 2023-01-18T20:10:01.723Z
excerpt: A futuristic, <strong>Neon Light Checkbox</strong> created with <strong>HTML</strong> and <strong>CSS</strong> only. <strong>Youtube video included!</strong>
# FIXME: Stop using cloudinary when this bug is fixed - https://github.com/nuxt/image/issues/638
# image: ./images/img1.jpg
thumbnail--xs: https://res.cloudinary.com/oziocb/image/upload/v1674069637/yt-003/thumbnail--xs.jpg
thumbnail--sm: https://res.cloudinary.com/oziocb/image/upload/v1674069637/yt-003/thumbnail--sm.jpg
thumbnail--lg: https://res.cloudinary.com/oziocb/image/upload/v1674069637/yt-003/thumbnail--lg.jpg
thumbnail--xxl: https://res.cloudinary.com/oziocb/image/upload/v1674069638/yt-003/thumbnail--xxl.jpg
coverImg--xs: https://res.cloudinary.com/oziocb/image/upload/v1674069637/yt-003/coverImg--xs.jpg
coverImg--sm: https://res.cloudinary.com/oziocb/image/upload/v1674069637/yt-003/coverImg--sm.jpg
coverImg--lg: https://res.cloudinary.com/oziocb/image/upload/v1674069638/yt-003/coverImg--lg.jpg
coverImg--xxl: https://res.cloudinary.com/oziocb/image/upload/v1674069638/yt-003/coverImg--xxl.jpg
image_caption: Photo by OziOcb
tags: tutorials, youtube
---

## Neon Light Checkbox -&nbsp;CSS&nbsp;Only

Another quicky! This time I created this <strong>futuristic html checkbox</strong> with a <strong>unique neon light effect</strong>.

I invite all interested to watch and share your feedback in the comments section on <strong>youtube</strong>.

::youtubePlayer
---
videoId: zMZGr8euSjY
title: Neon Light Checkbox | Animated Checkbox | CSS Only
---
::


### Source Code

Link to the [GitHub repository](https://github.com/OziOcb/yt-003-neon-light-checkbox){:target="_blank"}

```html [index.html]
<div class="cBox">
  <input class="cBox__input" id="checkbox" type="checkbox" />

  <label class="cBox__label" for="checkbox">
    <span class="cBox__border cBox__border--top"></span>
    <span class="cBox__border cBox__border--right"></span>
    <span class="cBox__border cBox__border--left"></span>
    <span class="cBox__border cBox__border--bottom"></span>
    <span class="cBox__tick"></span>
  </label>
</div>
```


```scss [style.scss]
/* SETUP */
@import "https://fonts.googleapis.com/css?family=Poppins:900i";

$font-size: 16px;

// Colors
$color-black: #070707;
$color-grey: #3f3f3f;
$color-white: #efefef;
$color-bg: #282825;
$color-text: $color-white;
$color-primary: #00f613;

// Sizes
$size-checkbox-width: 200px;
$size-checkbox-height: 200px;
$size-checkbox-border-thickness: 6px;
$size-checkbox-border-radius: 12px;
$size-tick-width: 80px;
$size-tick-height: 140px;
$size-tick-thickness: 24px;

// Transitions
$duration-transition-base: 0.25s;

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

.cBox {
  &__input {
    position: absolute;
    height: 0;
    opacity: 0;
  }

  &__label {
    position: relative;
    display: block;
    width: $size-checkbox-width;
    height: $size-checkbox-height;
    overflow: hidden;
    cursor: pointer;
    background-color: lighten($color-bg, 5%);
    border-radius: $size-checkbox-border-radius;
    transition: background-color $duration-transition-base ease-out,
      box-shadow $duration-transition-base ease-out;
    &:hover {
      background-color: lighten($color-bg, 2%);
    }
    .cBox__input:checked + & {
      background-color: $color-primary;
      box-shadow: 0 0 10px $color-primary, 0 0 40px $color-primary,
        0 0 80px $color-primary;
      transition-delay: $duration-transition-base * 4;
    }
  }

  &__border {
    position: absolute;
    .cBox__input:checked + .cBox__label & {
      transition: transform $duration-transition-base * 4;
    }

    &--top,
    &--bottom {
      width: 100%;
      height: $size-checkbox-border-thickness;
    }
    &--right,
    &--left {
      width: $size-checkbox-border-thickness;
      height: 100%;
    }
    &--top {
      top: 0;
      background: linear-gradient(90deg, transparent, $color-primary);
      transform: translateX(-100%);
      .cBox__input:checked + .cBox__label & {
        transform: translateX(100%);
      }
    }
    &--right {
      right: 0;
      background: linear-gradient(180deg, transparent, $color-primary);
      transform: translateY(-100%);
      .cBox__input:checked + .cBox__label & {
        transition-delay: $duration-transition-base;
        transform: translateY(100%);
      }
    }
    &--bottom {
      bottom: 0;
      background: linear-gradient(270deg, transparent, $color-primary);
      transform: translateX(100%);
      .cBox__input:checked + .cBox__label & {
        transition-delay: $duration-transition-base * 2;
        transform: translateX(-100%);
      }
    }
    &--left {
      left: 0;
      background: linear-gradient(360deg, transparent, $color-primary);
      transform: translateY(100%);
      .cBox__input:checked + .cBox__label & {
        transition-delay: $duration-transition-base * 3;
        transform: translateY(-100%);
      }
    }
  }

  &__tick {
    position: absolute;
    top: 50%;
    left: 50%;
    width: $size-tick-width;
    height: $size-tick-height;
    border: solid transparent;
    border-width: 0 $size-tick-thickness $size-tick-thickness 0;
    transform: translate(-50%, -58%) rotate(40deg);
    .cBox__input:checked + .cBox__label & {
      border-color: darken($color-primary, 20%);
      transition-delay: $duration-transition-base * 4.5;
    }
  }
}
```

Thanks!