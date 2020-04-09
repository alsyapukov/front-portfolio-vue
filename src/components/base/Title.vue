<template>
  <div>
    <div class="section__title">
      <div class="section__box">
        <h3 class="section__text">{{ title }}</h3>
      </div>
    </div>
    <div class="hr"></div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      require: true,
      default: 'SyapukovIT'
    }
  }
}
</script>

<style lang="scss" scoped>
.section {
  width: 100%;
  // min-height: 200px;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;

  &__title {
    padding: 15px;
    width: fit-content;
    // height: 180px;
  }

  &__box {
    height: 90px;
    // background: #0E1832;
    background: #fb344c;
    background: -webkit-gradient(linear, right top, left bottom, from(#fb344c), to(#e72f44));
    background: linear-gradient(to bottom left, #fb344c, #e72f44);
    position: relative;
    box-shadow: -8px 8px 30px rgba(0, 0, 0, 0.2);
    animation: myAnim 2s ease-in-out 0s alternate;
  }

  &__text {
    transform: translate(45px, 30px);
    height: 90px;
    font-size: 90px;
    text-transform: uppercase;
    display: block;
    color: #f2f2f2;
    animation: myNaAnim 2s ease-in-out 0s alternate;
    // animation: myNaAnim 2s ease-in-out 0s alternate;
  }
}
.hr {
  width: calc(100% - 30px);
  height: 5px;
  background: #333333;
  margin: 40px auto;
  padding: 0 15px;
  box-shadow: 0px 0px 20px #232323;
}

@media (max-width: 768px) {
  .section {
    &__title {
      padding: 15px 0;
    }

    &__box {
      height: 45px;
    }

    &__text {
      transform: translate(15px, 20px);
      height: 45px;
      font-size: 45px;
    }
  }
  .hr {
    width: 100%;
  }
}

@keyframes myAnim {
  from {
    opacity: 0;
    transform: translate(150px, 0px);
  }
  10% {
    transform: translate(150px, 0px);
  }
  20% {
    transform: translate(-130px, 0px);
  }
  30% {
    opacity: 1;
    transform: translate(100px, 0px);
  }
  40% {
    transform: translate(-90px, 0px);
  }
  50% {
    transform: translate(50px, 0px);
  }
  60% {
    transform: translate(-25px, 0px);
  }
  70% {
    transform: translate(10px, 0px);
  }
  80% {
    transform: translate(-5px, 0px);
  }
  90% {
    transform: translate(3px, 0px);
  }
  to {
    transform: translate(0px, 0px);
  }
}
@keyframes myNaAnim {
  from {
    opacity: 0;
    transform: translate(170px, 30px);
  }
  10% {
    transform: translate(160px, 30px);
  }
  20% {
    transform: translate(-130px, 30px);
  }
  30% {
    opacity: 1;
    transform: translate(110px, 30px);
  }
  40% {
    transform: translate(-100px, 30px);
  }
  50% {
    transform: translate(80px, 30px);
  }
  60% {
    transform: translate(-65px, 30px);
  }
  70% {
    transform: translate(50px, 30px);
  }
  80% {
    transform: translate(30px, 30px);
  }
  90% {
    transform: translate(47px, 30px);
  }
  to {
    transform: translate(45px, 30px);
  }
}
</style>
