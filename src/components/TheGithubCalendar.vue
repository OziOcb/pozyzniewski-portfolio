<template>
  <div class="calendar">
    <!-- Loading stuff -->
    Loading the data just for you.
  </div>
</template>

<script>
import GithubCalendar from "github-calendar"

export default {
  mounted() {
    GithubCalendar(".calendar", "OziOcb", {
      responsive: true
    })
  }
}
</script>

<style lang="scss">
.calendar {
  font-family: Helvetica, sans-serif;
  border-radius: 0.625em;
  box-shadow: 0px 0.6em 1.25em $color-github-calendar-shadow;

  @media (min-width: $breakpoint-lg) {
    padding-top: 25px;
    display: flex;
    overflow: hidden;
    height: 390px;
    justify-content: flex-end;
    align-items: center;

    div:first-child {
      transform: scale(2);
      transform-origin: 96%;
    }
  }
}

.calendar-graph {
  padding: 0.25em 0 0;

  text.wday,
  text.month {
    font-size: 0.625em;
    fill: #aaa;
  }
  /* level 1 (no commits) */
  rect.day[fill="#ebedf0"] {
    fill: rgba($color-secondary, 0.05);
  }
  /* level 2 */
  rect.day[fill="#c6e48b"] {
    fill: rgba($color-secondary, 0.3);
  }
  /* level 3 */
  rect.day[fill="#7bc96f"] {
    fill: rgba($color-secondary, 0.6);
  }
  /* level 4 */
  rect.day[fill="#239a3b"] {
    fill: rgba($color-secondary, 0.8);
  }
  /* level 5 */
  rect.day[fill="#196127"] {
    fill: rgba($color-secondary, 1);
  }
}

.contrib-column {
  padding: 0.625em 0;
  font-size: 0.6875rem;
  border-top: 1px solid #ddd;
  border-left: 1px solid #ddd;
  &-first {
    border-left: 0;
  }
}

.table-column {
  text-align: center;

  @media (min-width: $breakpoint-sm) {
    display: inline-block;
    width: 33.333333%;
  }
  @media (min-width: $breakpoint-lg) {
    display: none;
  }
}

.contrib-number {
  display: block;
  font-size: 1.5rem;
  line-height: 1.3em;
  font-weight: 300;
  color: #333;
}

#user-activity-overview,
.contrib-footer {
  display: none;
}
</style>
