<template>
  <section class="aboutMe">
    <div class="aboutMe__inner container row">
      <div class="column">
        <h2 class="aboutMe__title aboutMe__title--mobile">who am I ?</h2>
        <TheAboutMeGallery />
      </div>

      <div class="column">
        <h2 class="aboutMe__title aboutMe__title--desktop">who am I ?</h2>
        <p class="aboutMe__description">
          In 2017 I had chosen to follow my passion and become a programmer. After a rough start -
          coding late at night while still working full time - I've decided to dedicate to
          programming. Since then, I strive to perfect my coding by educating myself towards
          creating clean, easy to enlargement code. I gathered enough experience in front end
          development to be a valuable employee and to make the web a beautiful place with every
          line of code.
        </p>

        <h2 class="aboutMe__title">in more details</h2>
        <ul class="aboutMe__detailsList">
          <li>Name: Paul Ozyzniewski</li>
          <li>Age: 32</li>
          <li>Town: Barnsley</li>
          <li>Mail: pozyzniewski@yahoo.com</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import TheAboutMeGallery from "@/components/TheAboutMeGallery.vue"

export default {
  components: {
    TheAboutMeGallery
  }
}
</script>
