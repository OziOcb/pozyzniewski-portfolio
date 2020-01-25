<template>
  <section class="skills">
    <!-- GitHub Calendar -->
    <div class="calendarSection">
      <div class="calendarSection__column">
        <h2 class="calendarSection__title fixedSize">what am I good at?</h2>

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
      </div>

      <div class="calendarSection__column">
        <TheGithubCalendarDummy @open-modalGithubCalendar="$refs.modalGithubCalendar.open()" />
      </div>
    </div>
    <SweetModal ref="modalGithubCalendar" overlay-theme="dark">
      <TheGithubCalendar />
    </SweetModal>
    <!-- GitHub Calendar End -->

    <!-- SkillsGrid Calendar -->
    <div class="gridSection">
      <div class="gridSection__column gridSection__column--quote">
        <h2 class="gridSection__title fixedSize">skills and technologies</h2>
        <div class="gridSection__desc">
          <p>
            All my experience comes from hard work, practice, hours spent on reading technical docs
            and many sleepless nights.
          </p>
          <p>
            My main focus is to provide high-quality code that implements the newest standards while
            remembering about good practices
          </p>
        </div>
      </div>

      <div class="gridSection__column gridSection__column--grid">
        <TheSkillsGrid class="gridSection__skillsGrid" />
      </div>
    </div>
    <!-- SkillsGrid Calendar End -->
  </section>
</template>

<script>
// QuoteBlock
import QuoteBlock from "@/components/QuoteBlock.vue"
// Github Calendar
import TheGithubCalendar from "@/components/TheGithubCalendar.vue"
import TheGithubCalendarDummy from "@/components/TheGithubCalendar--dummy.vue"
import { SweetModal } from "sweet-modal-vue"
// SkillsGrid
import TheSkillsGrid from "@/components/TheSkillsGrid.vue"

export default {
  components: {
    TheGithubCalendar,
    TheGithubCalendarDummy,
    SweetModal,
    TheSkillsGrid,
    QuoteBlock
  }
}
</script>
