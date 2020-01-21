<template>
  <layout>
    <h1>Elements Page</h1>

    <!-- Hero Text -->
    <section>
      <div class="elementsSectionTitle">Hero Section Text</div>

      <p class="hero__lead">Hello</p>
      <p class="hero__heading">It's Paul</p>
      <h1 class="hero__extraLead">The Front End Developer you need!</h1>
    </section>
    <!-- Hero Text End -->

    <!-- Buttons -->
    <section>
      <div class="elementsSectionTitle">Buttons</div>

      <BaseButton>Button</BaseButton>
      <br />
      <br />
      <BaseButton disabled>Button (disabled)</BaseButton>
      <br />
      <br />
      <BaseLinkLikeButton to="/blog/">GIT</BaseLinkLikeButton>
      <br />
      <br />
      <BaseLinkLikeButton class="baseButton--outline">VIEW PROJECT</BaseLinkLikeButton>
    </section>
    <!-- Buttons End -->

    <!-- QuoteBlock -->
    <section>
      <div class="elementsSectionTitle">QuoteBlock</div>

      <QuoteBlock align-right>
        Tell me and I forget,
        <br />
        teach me and I may premember,
        <br />
        involve me and I learn

        <template #cite>
          Benjamin Franklin
        </template>
      </QuoteBlock>

      <QuoteBlock>
        If you don't have a plan,
        <br />
        then you are not a man
      </QuoteBlock>
    </section>
    <!-- QuoteBlock End -->

    <!-- About Me Gallery -->
    <section>
      <TheAboutMeGallery :gallery-details="galleryDetails" />
    </section>
    <!-- About Me Gallery End -->

    <!-- GitHub Calendar -->
    <section>
      <div class="elementsSectionTitle">GitHub Calendar</div>

      <div class="calendarTest">
        <div class="calendarTest__column">Some Text</div>

        <div class="calendarTest__column">
          <TheGithubCalendarDummy @open-modalGithubCalendar="$refs.modalGithubCalendar.open()" />
        </div>
      </div>
      <SweetModal ref="modalGithubCalendar" overlay-theme="dark">
        <TheGithubCalendar />
      </SweetModal>
    </section>
    <!-- GitHub Calendar End -->

    <!-- SkillsGrid Calendar -->
    <section>
      <div class="elementsSectionTitle">SkillsGrid</div>

      <div class="theSkillsGridTest">
        <div class="theSkillsGridTest__column theSkillsGridTest__column--grid">
          <TheSkillsGrid class="theSkillsGridTest__skillsGrid" />
        </div>

        <div class="theSkillsGridTest__column theSkillsGridTest__column--quote">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur fuga accusamus debitis
          nobis excepturi aliquid, laboriosam, iusto nisi maiores deleniti illum? Fugiat pariatur
          officia consequatur nesciunt odio provident nostrum accusantium. Lorem ipsum dolor sit
          amet consectetur, adipisicing elit. Possimus dolores non repellendus velit qui laudantium
          fuga libero officiis delectus laboriosam, veritatis odio distinctio illum. Omnis libero
          dolorum voluptatum accusamus excepturi. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Quis cum fugit consectetur eligendi fuga non vero accusantium optio dolore
          temporibus, ipsa et aperiam voluptates ducimus suscipit dolor, minus quam ullam? Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Odit esse, ratione labore natus
          deleniti pariatur tempore hic facilis, earum quisquam doloremque voluptate provident minus
          sed distinctio, excepturi eveniet. Veritatis, sit.
        </div>
      </div>
    </section>
    <!-- SkillsGrid Calendar End -->

    <!-- PortfolioProject -->
    <section>
      <div class="elementsSectionTitle">Portfolio Project</div>

      <PortfolioProject
        v-for="(project, index) in portfolioProjects"
        :key="index"
        :project-info="project"
      />
    </section>
    <!-- PortfolioProject End -->

    <!-- Contact Form -->
    <section>
      <div class="elementsSectionTitle">Contact Form</div>

      <ContactMeForm />
    </section>
    <!-- Contact Form End -->

    <!-- Typography -->
    <section>
      <div class="elementsSectionTitle">Typography</div>

      <h1>Predictions H1</h1>
      <h2>World of Grammar H2</h2>
      <p>
        Far far away,
        <strong>behind the word</strong>
        mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
        Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language
        ocean. A small river named Duden flows by their place and supplies it with the necessary
        regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your
        mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost
        unorthographic life One day however a small line of blind text by the name of Lorem Ipsum
        decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so,
        because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but
        the Little Blind Text didn’t listen.
      </p>

      <h3>ITALIC MOUNTAINS H3</h3>
      <p>
        When she reached the first hills of the Italic Mountains, she had a last view back on the
        skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of
        her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she
        continued her way. On her way she met a copy. The copy warned the Little Blind Text, that
        where it came from it would have been rewritten a thousand times and everything that was
        left from its origin would be the word "and" and the Little Blind Text should turn around
        and return to its own, safe country.
      </p>

      <h4>The Bookmarksgrove H4</h4>
      <p>
        She packed her seven versalia, put her initial into the belt and made herself on the way.
        When she reached the first hills of the Italic Mountains, she had a last view back on the
        skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of
        her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she
        continued her way. On her way she met a copy.
      </p>

      <blockquote>
        <i>
          "The copy warned the Little Blind Text, that where it came from it would have been
          rewritten a thousand times and everything that was left from its origin would be the word
          "and" and the Little Blind Text should turn around and return to its own, safe country."
        </i>
      </blockquote>

      <p>
        But nothing the copy said could convince her and so it didn’t take long until a few
        insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her
        into their agency, where they abused her for their projects again and again.
      </p>

      <h5>VOKALIA AND CONSONANTIA H5</h5>
      <p>
        And if she hasn’t been rewritten, then they are still using her. Far far away, behind the
        word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
        Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language
        ocean. A small river named Duden flows by their place and supplies it with the necessary
        regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your
        mouth.
      </p>

      <h6>The Far World of Grammar H6</h6>
      <p>
        Even the all-powerful Pointing has no control about the blind texts it is an almost
        unorthographic life One day however a small line of blind text by the name of Lorem Ipsum
        decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so,
        because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but
        the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the
        belt and made herself on the way.
      </p>

      <footer>
        <small>
          Footnotes are notes placed at the bottom of a page. A small river named Duden flows by
          their place
        </small>
      </footer>
    </section>
    <!-- Typography End -->

    <section></section>
  </layout>
</template>

<script>
// QuoteBlock
import QuoteBlock from "@/components/QuoteBlock.vue"

// About Me Gallery
import TheAboutMeGallery from "@/components/TheAboutMeGallery.vue"

// Github Calendar
import TheGithubCalendar from "@/components/TheGithubCalendar.vue"
import TheGithubCalendarDummy from "@/components/TheGithubCalendar--dummy.vue"
import { SweetModal } from "sweet-modal-vue"

// SkillsGrid
import TheSkillsGrid from "@/components/TheSkillsGrid.vue"

// PortfolioProject
import PortfolioProject from "@/components/PortfolioProject.vue"

// Contact Form
import ContactMeForm from "@/components/ContactMeForm.vue"

export default {
  components: {
    // QuoteBlock
    QuoteBlock,

    // About Me Gallery
    TheAboutMeGallery,

    // Github Calendar
    TheGithubCalendar,
    TheGithubCalendarDummy,
    SweetModal,

    // SkillsGrid
    TheSkillsGrid,

    //  PortfolioProject
    PortfolioProject,

    // Contact Form
    ContactMeForm
  },
  data() {
    return {
      // About Me Gallery
      galleryDetails: {
        primaryImg: "portrait"
        // primaryOverlayColor: "rgba(0, 0, 255, 0.25)",
        // secondaryImg: "theAboutMeGallerySecondary",
        // secondaryOverlayColor: "rgba(155, 0, 0, 0.75)"
      },

      //  PortfolioProject
      portfolioProjects: [
        {
          year: 2020,
          title: "POzyzniewski Portfolio",
          desc: "Design & Development",
          repoUrl: "https://github.com/OziOcb/pozyzniewski-portfolio",
          projectUrl: "https://www.twitter.com",
          colorGradientPrimary: "rgba(111,255,111,0.9)",
          colorGradientSecondary: "rgba(255,255,255,0.5)",
          bgImage: "design"
        },
        {
          year: 2019,
          title: "Dude is this another TODO list?",
          desc: "Design & Development",
          repoUrl: "https://github.com/OziOcb/Dude-is-this-another-Todo-List",
          projectUrl: "https://dude-is-this-another-todolist3.web.app/auth",
          colorGradientPrimary: "#0091ea",
          colorGradientSecondary: "rgba(255,255,255,0.5)",
          bgImage: "default"
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
// Hero Text
.hero {
  &__lead {
    @extend %typography-hero-lead;
    margin: 0 0 -0.2em -0.06em;
  }
  &__heading {
    @extend %typography-hero;
    margin: 0 0 0 -0.07em;
  }
  &__extraLead {
    @extend %typography-small;
    margin-top: 0;
  }
}
// Hero Text End

// Github Calendar
.calendarTest {
  @media (min-width: $breakpoint-lg) {
    display: flex;
  }

  &__column {
    flex: 1;
    text-align: center;
  }
}
// Github Calendar End

// SkillsGrid
.theSkillsGridTest {
  @media (min-width: $breakpoint-lg) {
    display: flex;
  }

  &__column {
    flex: 1;

    &--grid {
      position: relative;
      margin-left: -($size-skills-grid-width / 2 + $size-skills-grid-gap / 2) / 2;
      padding-top: 10px;
      padding-bottom: 35px;
      display: flex;
      overflow: hidden;
      justify-content: center;
      @media (min-width: $breakpoint-lg) {
        margin-left: 0;
        height: $size-skills-grid-width * 6.7;
      }
      @media (min-width: $breakpoint-xl) {
        height: $size-skills-grid-width * 6;
      }
    }
    &--quote {
      display: flex;
      align-items: flex-end;
    }
  }
  &__skillsGrid {
    @media (min-width: $breakpoint-lg) {
      position: absolute;
      right: 100px;
    }
  }
}
// SkillsGrid End

// Base Styles
section {
  padding: 10rem 0;
  overflow: hidden;
  &:nth-child(2n) {
    background-color: $color-body-bg-light;
  }
}
.elementsSectionTitle {
  @extend %typography-large;
  text-align: center;
}
// Base Styles End
</style>
