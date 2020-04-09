<template>
  <div :ref="`init${i}`" @mousedown="initClass($event)" class="init">
    <div class="init__circle" :style="`left: ${clientX}px; top: ${clientY}px`"></div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Init',
  props: {
    i: {
      default: 0
    }
  },
  data () {
    return {
      clientX: 0,
      clientY: 0
    }
  },
  methods: {
    initClass (e) {
      this.clientX = e.offsetX
      this.clientY = e.offsetY
    }
  },
  watch: {

  }
}
</script>

<style lang="scss" scoped>
.init {
  overflow: hidden;
  position: relative;
  cursor: pointer;
  display: inline-block;
  width: 100%;
  height: 100%;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .init__circle {
    content: "";

    position: absolute;
    // top: 50%;
    // left: 50%;
    // top: 0;
    // left: 0;
    z-index: 99;
    display: block;
    width: 0;
    padding-top: 0;

    border-radius: 100%;

    background-color: rgba(255, 255, 255, 0.1);
    transform: translate(-50%, -50%)
  }
  &:active .init__circle {
    width: 250%;
    padding-top: 250%;

    transition: width .5s ease-out, padding-top .5s ease-out;
  }
}
</style>
