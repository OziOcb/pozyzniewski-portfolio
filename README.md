
#  Pozyzniewski Portfolio


## Install
### 1. Install Gridsome CLI tool if you don't have

`npm install --global @gridsome/cli`

### 2. Run the Project
1. Clone the Repository.
2.  `cd pozyzniewski-portfolio` to open the folder.
3.  `gridsome develop` to start a local dev server at `http://localhost:8080` 🎉🙌

## Base Components
Many components will be relatively generic, possibly only wrapping an element like an input or a button. We sometimes refer to these as [base components](https://vuejs.org/v2/style-guide/#Base-component-names-strongly-recommended) and they tend to be used very frequently across your components.

Thanks to `gridsome-plugin-base-components` plugin, all Components with names that start with `Base...` (`BaseButton.vue` etc.) will be globally available.

No need for doing below in every component that uses these `base-components`:
```javascript
<script>
import BaseButton from "@/components/BaseButton.vue"

export  default  {
	components:  {
		BaseButton,
	},
}
</script>
```

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

## FontAwesome 5

### 1. Setup: [here](https://gridsome.org/docs/assets-svg/#fontawesome-svg-icons)

### 2. Example:
```javascript
<font-awesome  :icon="['fab',  'github']"  />
<font-awesome  :icon="['fab',  'linkedin']"  />
```