# Pozyzniewski Portfolio

## Links
- Repository - [GitHub](https://github.com/OziOcb/pozyzniewski-portfolio)
- Live - [paulthedeveloper.com](https://www.paulthedeveloper.com/)

&nbsp;
## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.

&nbsp;
# My Notes

## TypeScript

- types/interfaces for elements used inside <head>
https://github.com/harlan-zw/zhead/tree/main/packages/schema/src

- Type checking on Dev is set to true, if you need to turn it off (for performance reasons) go to the `.nuxt.config.ts` file and set `typescript.typeCheck` to `false`

&nbsp;
## Icons
- This boilerplate comes with the `nuxt-icon` packaged - [github](https://github.com/nuxt-modules/icon)
- All icons that are available when using `nuxt-icon` package - [icones.js.org](https://icones.js.org/collection/ci)

### Usage 👌

**Props:**
- `name` (required): icon name, emoji or global component name
- `size`: icon size (default: `1em`)

#### Iconify dataset

You can use any name from the https://icones.js.org collection:

```html
<Icon name="uil:github" />
```

#### Emoji

```html
<Icon name="🚀" />
```

#### Vue component

```html
<Icon name="NuxtIcon" />
```

Note that `NuxtIcon` needs to be inside `components/global/` folder (see [example](./playground/components/global/NuxtIcon.vue)).


&nbsp;
## Pinia
- This boilerplate uses `Pinia` as a state management solution
- It auto-imports the `defineStore()`. This means you no longer have to manually import these from pinia whenever your defining your stores
- Also, it auto-imports every file that's inside `@/stores/`
```js
// stores/counter.ts
export const useCounterStore = defineStore('counter', {
  //         ^^^^^^^^^^^^^^^
  // ...
})
```

```js
// someComponent.vue
import { useCounterStore } from '@/stores/counter' // this line can be omitted thanks to auto-import!
const countStore = useCounterStore()
```

<!--
## GSAP & ScrollMagic

### 1. Setup:
```javascript
// main.js

// import { TweenMax } from "gsap/TweenMax" // This seems to be unnecessary
import  ScrollMagic  from  "scrollmagic"
import  "imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap"

// Load ScrollMagic's Indicators only on development environment
if (process.env.NODE_ENV  ===  "development") {
	require("imports-loader?define=>true!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators")
}

// Load any extra plugins from GreenSock like this:
// import SplitText from "../static/SplitText"

const  GSAPScrollMagic  =  {
	install(Vue)  {
		// GSAP
		Vue.prototype.$GSAP  =  {
			// TweenMax,
			TimelineMax,
			Linear,
			Power1,
			Power2,
			Power3,
			Back
		}

		// ScrollMagic
		Vue.prototype.$ScrollMagic  =  {
			Controller:  new  ScrollMagic.Controller(),
			Scene:  ScrollMagic.Scene
		}
	}
}

export  default  function(Vue,  {  router,  head,  isClient  })  {
	...
	// Add GSAP & ScrollMagic to the project
	Vue.use(GSAPScrollMagic)
}
```

### 2. Example:

```javascript
<script>
// inside any `.vue` file
export  default  {
	...
	mounted()  {
	// create a Tween
	const  testTween  =  new  this.$GSAP.TimelineMax()
	testTween
		.from(".smElement",  1.5,  { ease:  this.$GSAP.Power2.easeOut, opacity:  0  })
		.to(".smElement",  2,  { ease:  this.$GSAP.Back.easeInOut.config(5.2), fontSize:  "30px"  })
		.to(".smElement",  2,  { rotationY:  360  })

	// create a scene
	const  testScene  =  new  this.$ScrollMagic.Scene({
		triggerElement:  ".smElement",
		triggerHook:  0.7,
		duration:  300
	})
		.addIndicators() // TODO: Remove this line before sending to production
		.setTween(testTween)

	// Add the scene to the controller
	this.$ScrollMagic.Controller.addScene(testScene)
	}
}
</script>
```
-->

&nbsp;
## About Me Gallery Images

1.  Follow this sizes: (For image templates follow this [link](https://www.figma.com/file/FjVqnpkJ4mvdc3Y3CnFIDe/POzyzniewski_Portfolio_Project_Image_Breakpoints_Sizez_Template?node-id=0%3A1))

        Primary Image		-	h: 290px; w: 250px
        Secondary Image	    -	h: 380px; w: 380px

2.  All files must be places inside:

    - `/public/assets/img/jpg/`

3.  While passing the file name via props **use only the name without the extension**:
    - for example if your file is `portrait.jpg` use:

```html
<TheAboutMeGallery :gallery-details="galleryDetails" />
```

```javascript
data() {
	return {
		galleryDetails:  {
			primaryImg:  "portrait",
			primaryOverlayColor:  "rgba(0, 0, 255, 0.25)",
			secondaryImg:  "theAboutMeGallerySecondary",
			secondaryOverlayColor:  "rgba(155, 0, 0, 0.75)"
		}
	}
}
```

&nbsp;
## Portfolio Projects Background Images

To save visitors' bandwith (especially on mobile devices) it's important to follow these few rules.

1.  Each image **must** be provided in four specific size variations & follow the naming convention: (For image templates follow this [link](https://www.figma.com/file/FjVqnpkJ4mvdc3Y3CnFIDe/POzyzniewski_Portfolio_Project_Image_Breakpoints_Sizez_Template?node-id=0%3A1))

        IMAGE_NAME.jpg		-	h: 400px; w: 480px
        IMAGE_NAME--md.jpg	-	h: 400px; w: 1025px
        IMAGE_NAME--md.jpg	-	h: 290px; w: 1281px
        IMAGE_NAME--md.jpg	-	h: 290px; w: 1920px

2.  They **must** be placed inside:

    - `public/assets/img/jpg/projects-bgs/`

3.  While passing the file name via props **use only the name without the extension**:
    - for example if your file is `design.jpg` use:

```html
<PortfolioProject
  v-for="(project, index) in  portfolioProjects"
  :key="index"
  :project-info="project"
/>
```

```javascript
data() {
	return {
		portfolioProjects: [
			{
				....
				bgImage:  "design"
			}
		}
	}
}