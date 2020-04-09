<template>
  <button
    ref="btn"
    :type="type"
    @mousedown="initClass($event)"
    class="button button__theme_coral button__radius"
    :class="{ 'button__size_small': size == 'small', 'button__size_medium': size == 'medium' }"
    @click="$emit('click')"
  >
    <div ref="circ" class="circle" :style="`left: ${clientX}px; top: ${clientY}px`"></div>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    type: {
      type: String,
      default: 'button'
    },
    theme: {
      type: String,
      default: ''
    },
    radius: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'small'
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
  }
}
</script>

<style lang="scss" scoped>
.button {
  overflow: hidden;
  position: relative;
  cursor: pointer;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 100;
  text-transform: uppercase;
  outline: none;
  text-decoration: none;
  display: inline-block;
  border: 1px solid #fff;
  background: transparent;
  color: #fff;
  transition: background-color 0.3s;

  .circle {
    content: "";

    position: absolute;
    // top: 50%;
    // left: 50%;
    // top: 0;
    // left: 0;

    display: block;
    width: 0;
    padding-top: 0;

    border-radius: 100%;

    background-color: rgba(255, 255, 255, 0.1);
    transform: translate(-50%, -50%);
  }
  &:active .circle {
    width: 200%;
    padding-top: 200%;

    transition: width 0.5s ease-out, padding-top 0.5s ease-out;
  }

  &__theme {
    &_coral {
      border: 0px solid transparent;
      background: #fb344c;
      background: -webkit-gradient(
        linear,
        right top,
        left bottom,
        from(#fb344c),
        to(#e72f44)
      );
      background: linear-gradient(to bottom left, #fb344c, #e72f44);
      &:hover {
        opacity: 0.9;
      }
    }
  }

  &__radius {
    border-radius: 4px;
  }

  &__size {
    &_small {
    }
    &_medium {
      padding: 14px 24px;
      font-size: 15px;
    }
  }
}
</style>
