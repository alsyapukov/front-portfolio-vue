<template>
  <div class="textbox">
    <div class="textbox__wrap">
      <input
        class="textbox__inner"
        :type="type"
        :value="value"
        :required="required"
        :min="type && min ? min : null"
        :max="type && max ? max : null"
        placeholder=" "
        @input="updateSelf($event.target.value)"
      />
      <span class="textbox__title">{{ title }}</span>
      <span class="textbox__border"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TextBox',
  props: {
    title: {
      type: String
    },
    type: {
      type: String,
      default: 'text'
    },
    required: {
      type: Boolean,
      default: false
    },
    min: {
      type: String,
      default: '0'
    },
    max: {
      type: String,
      default: '100'
    }
  },
  data () {
    return {
      value: null
    }
  },
  methods: {
    updateSelf (name) {
      this.$emit('input', name)
    }
  }
}
</script>

<style lang="scss" scoped>
.textbox {
  padding-top: 20px;
  &__wrap {
    position: relative;
    width: 100%;
  }
  &__title {
    position: absolute;
    top: 16px;
    left: 0;
    font-size: 16px;
    color: #ececec;
    font-weight: 100;
    transform-origin: 0 0;
    transition: all 0.2s ease;
  }
  &__border {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    width: 100%;
    background: #ececec;

    &::before {
      content: "";
      background: #fb344c;
      position: absolute;
      bottom: 0;
      left: 0;
      height: 1px;
      transition: width 0.15s ease;
      width: 0;
    }
  }
  &__inner {
    outline: none;
    appearance: none;
    width: 100%;
    border: 0;
    font-family: inherit;
    padding: 12px 0;
    height: 48px;
    font-size: 16px;
    font-weight: 300;
    background: none;
    border-radius: 0;
    color: #ececec;
    position: relative;
    z-index: 1;

    &:focus + span {
      color: #fb344c;
      transform: translateY(-26px) scale(0.75);
    }
    &:focus + span + .textbox__border:before {
      width: 100%;
    }
    &:not(:placeholder-shown) + span {
      transform: translateY(-26px) scale(0.75);
    }
  }
}
</style>
