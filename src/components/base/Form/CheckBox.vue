<template>
  <div class="checkbox" :class="{ 'checkbox_checked': value }" for="chbx" @click="drag()">
    <div class="checkbox__box box" :class="{ 'box_drag': dragValue }">
      <input v-model="value" name="chbx" id="chbx" class="box__inner" type="checkbox" />
      <div class="box__view">
        <div class="view__uncheck" v-if="!value"></div>
        <svg class="view__check" viewBox="0 0 24 24" v-else>
          <path
            class="mdc-box__checkmark-path"
            fill="none"
            stroke="white"
            d="M1.73,12.91 8.1,19.28 22.79,4.59"
          />
        </svg>
      </div>
      <div class="box__around"></div>
    </div>
    <div class="checkbox__text" v-if="text">{{ text }}</div>
  </div>
</template>

<script>
export default {
  name: 'CheckBox',
  props: {
    checked: {
      type: String
    },
    unchecked: {
      type: String
    },
    text: {
      type: String
    }
  },
  mounted () {},
  data () {
    return {
      value: false,
      dragValue: false
    }
  },
  methods: {
    drag () {
      // if (this.dragValue) {
      //   this.dragValue = false;
      //   v = this;
      //   setTimeout(function() {
      //     v.dragValue = true;
      //   }, 500);
      // } else {
      this.value = !this.value
      this.dragValue = true
      // }
      var v = this
      setTimeout(function () {
        v.dragValue = false
      }, 300)
    }
  }
}
</script>

<style lang="scss" scoped>
.checkbox {
  display: flex;
  align-items: center;

  &_checked {
    .box__view .view__check {
      opacity: 1;
    }
  }

  &__text {
    padding-left: 12px;
    cursor: pointer;
  }
  .box {
    margin-left: -12px;
    margin-right: -12px;
    width: 40px;
    height: 40px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
      .box__around {
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.03);
      }
    }
    &_drag.box {
      .box__around {
        animation: drag-animation 0.3s ease 0s alternate;
        background: rgba(255, 255, 255, 0.1);
      }
    }

    &__inner {
      display: none;
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      width: 40px;
      height: 40px;
      opacity: 0;
      margin: 0;
      &:checked + .box__view .view__check {
        opacity: 1;
      }
    }
    &__around {
      width: 0;
      height: 0;
      border-radius: 50%;
      position: absolute;
      transition: background 0.2s;
    }
    &__view {
      position: relative;
      z-index: 1;
      width: 16px;
      height: 16px;

      .view {
        &__uncheck,
        &__check {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          border: 1px solid #fb344c;
          border-radius: 2px;
          transition: 0.2s;
        }
        &__uncheck {
          opacity: 1;
        }
        &__check {
          opacity: 0;
          background: #fb344c;
        }
      }
    }
  }
}
@keyframes drag-animation {
  from {
    width: 30%;
    height: 30%;
  }
  to {
    width: 100%;
    height: 100%;
  }
}
</style>
