<template>
  <div>
    <svg width="100%" height="100%" viewBox="0 0 42 42" class="donut">
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#fb344c" />
          <stop offset="100%" stop-color="#ff364d" />
        </linearGradient>
      </defs>
      <circle class="donut-ring" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#d2d3d4" stroke-width="3" stroke-opacity=".4"></circle>
      <circle class="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="url(#gradient)" stroke-width="3" :stroke-dasharray="percentCalc" stroke-dashoffset="25"></circle>
      <text x="50%" y="50%" text-anchor="middle" fill="white" font-size="10" font-family="Arial" dy=".35em">{{ percent }}%</text>
    </svg>
  </div>
</template>

<script>
export default {
  name: "Diagram",
  data() {
    return {
      percent: 90
    }
  },
  computed: {
    percentCalc() {
      return `${this.percent} ${100 - this.percent}`
    }
  }
};
</script>

<style lang="scss" scoped>
.donut {
  &-segment {
    filter: drop-shadow( 3px 3px 2px rgba(0, 0, 0, .7));
  }
}
</style>
