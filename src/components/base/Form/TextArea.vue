<template>
  <div class="textarea">
    <div class="textarea__wrap" for="inp">
      <textarea
        class="textarea__inner"
        :value="value"
        type="text"
        id="inp"
        placeholder=" "
        @input="updateSelf($event.target.value)"
      />
      <span class="textarea__title">{{ title }}</span>
      <span class="textarea__border"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TextArea",
  props: {
    title: {
      type: String
    }
  },
  data() {
    return {
      value: null
    };
  },
  methods: {
    updateSelf(name) {
      this.$emit("input", name);
    }
  }
};
</script>

<style lang="scss" scoped>
.textarea {
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
    width: 100%;
    min-height: 200px;
    border: 0;
    font-family: inherit;
    padding: 12px 0;
    height: 48px;
    font-size: 16px;
    font-weight: 300;
    background: none;
    border-radius: 0;
    color: #ececec;
    resize: none;
    position: relative;
    z-index: 1;

    &:focus + span {
      color: #fb344c;
      transform: translateY(-26px) scale(0.75);
    }
    &:focus + span + .textarea__border:before {
      width: 100%;
    }
    &:not(:placeholder-shown) + span {
      transform: translateY(-26px) scale(0.75);
    }
  }
}
</style>
