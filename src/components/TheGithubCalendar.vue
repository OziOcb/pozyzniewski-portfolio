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
      responsive: true,
      global_stats: false,
      summary_text: " "
    })
  }
}
</script>

<style>
.calendar {
  margin: 0 auto;
  min-height: 243px;
  font-family: Helvetica, sans-serif;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 3px;
}

.calendar-graph text.wday,
.calendar-graph text.month {
  font-size: 10px;
  fill: #aaa;
}

.contrib-legend {
  padding: 0 14px 10px 0;
  display: inline-block;
  float: right;
  text-align: right;
}

.contrib-legend .legend {
  position: relative;
  bottom: -1px;
  margin: 0 5px;
  padding: 0;
  display: inline-block;
  list-style: none;
}

.contrib-legend .legend li {
  display: inline-block;
  width: 10px;
  height: 10px;
}

.text-small {
  font-size: 12px;
  color: #767676;
}

.calendar-graph {
  padding: 5px 0 0;
  text-align: center;
}

.contrib-column {
  padding: 15px 0;
  font-size: 11px;
  text-align: center;
  border-top: 1px solid #ddd;
  border-left: 1px solid #ddd;
}

.contrib-column-first {
  border-left: 0;
}

.table-column {
  padding-right: 10px;
  padding-left: 10px;
  display: table-cell;
  width: 1%;
  vertical-align: top;
}

.contrib-number {
  display: block;
  font-size: 24px;
  line-height: 1.3em;
  font-weight: 300;
  color: #333;
}

.calendar img.spinner {
  margin-top: 50px;
  width: 70px;
  min-height: 70px;
}

.monospace {
  font-family: monospace;
  text-align: center;
  color: #000;
}

.monospace a {
  text-decoration: none;
  color: #1d75ab;
}

.contrib-footer {
  padding: 0 10px 12px;
  box-sizing: border-box;
  width: 100%;
  height: 26px;
  font-size: 11px;
  text-align: left;
}

.left.text-muted {
  margin-left: 9px;
  float: left;
  color: #767676;
}
.left.text-muted a {
  text-decoration: none;
  color: #4078c0;
}
.monospace a:hover,
.left.text-muted a:hover {
  text-decoration: underline;
}

h2.f4.text-normal.mb-3 {
  display: none;
}

.float-left.text-gray {
  float: left;
}
#user-activity-overview {
  display: none;
}
</style>
