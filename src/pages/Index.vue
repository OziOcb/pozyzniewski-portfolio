<template>
  <layout>
    <h1 class="hero__lead">Hello</h1>
    <h1 class="hero__heading">It's Paul</h1>
    <p class="hero__extraLead">The Front End Developer you need!</p>

    <BaseButton>Button</BaseButton>
    <br />
    <br />
    <BaseButton disabled>Button (disabled)</BaseButton>

    <br />
    <br />

    <BaseLinkLikeButton to="/blog/">GIT</BaseLinkLikeButton>
    &nbsp;
    <BaseLinkLikeButton class="baseButton--outline">VIEW PROJECT</BaseLinkLikeButton>

    <br />
    <br />

    <div style="display:flex">
      <div><QuoteBlock align-right /></div>
      <div><QuoteBlock /></div>
    </div>

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
      decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because
      there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little
      Blind Text didn’t listen.
    </p>

    <h3>ITALIC MOUNTAINS H3</h3>
    <p>
      When she reached the first hills of the Italic Mountains, she had a last view back on the
      skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of
      her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she
      continued her way. On her way she met a copy. The copy warned the Little Blind Text, that
      where it came from it would have been rewritten a thousand times and everything that was left
      from its origin would be the word "and" and the Little Blind Text should turn around and
      return to its own, safe country.
    </p>

    <h4>The Bookmarksgrove H4</h4>
    <p>
      She packed her seven versalia, put her initial into the belt and made herself on the way. When
      she reached the first hills of the Italic Mountains, she had a last view back on the skyline
      of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own
      road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her
      way. On her way she met a copy.
    </p>

    <blockquote>
      <i>
        "The copy warned the Little Blind Text, that where it came from it would have been rewritten
        a thousand times and everything that was left from its origin would be the word "and" and
        the Little Blind Text should turn around and return to its own, safe country."
      </i>
    </blockquote>

    <p>
      But nothing the copy said could convince her and so it didn’t take long until a few insidious
      Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their
      agency, where they abused her for their projects again and again.
    </p>

    <h5>VOKALIA AND CONSONANTIA H5</h5>
    <p>
      And if she hasn’t been rewritten, then they are still using her. Far far away, behind the word
      mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
      Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language
      ocean. A small river named Duden flows by their place and supplies it with the necessary
      regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your
      mouth.
    </p>

    <h6>The Far World of Grammar H6</h6>
    <p>
      Even the all-powerful Pointing has no control about the blind texts it is an almost
      unorthographic life One day however a small line of blind text by the name of Lorem Ipsum
      decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because
      there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little
      Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and
      made herself on the way.
    </p>

    <footer>
      <small>
        Footnotes are notes placed at the bottom of a page. A small river named Duden flows by their
        place
      </small>
    </footer>
  </layout>
</template>

<script>
import QuoteBlock from "@/components/QuoteBlock.vue"
export default {
  metaInfo: {
    title: "Hello, world!"
  },
  components: {
    QuoteBlock
  },
  data() {
    return {
      msg: "Hello World!!",
      elo: 1
    }
  },
  methods: {
    // eslint-disable-next-line
    eslintTest(one, two, three) {
      console.log(one)
    },
    inputUpdate() {
      console.log("BaseInput")
    }
  }
}
</script>

<style lang="scss" scoped>
// TODO: describe in README.md how to use typhography like below
.hello {
  @extend %typography-xxlarge;
}

p {
  @extend %typography-small;
}

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
    margin-top: 0;
  }
}
</style>
