<template>
  <section class="detail" v-if="getWorks">
    <div class="container">
      <div class="detail__info">
        <div class="detail__back">
        <Button :theme="`coral`" @click="$router.push({name: 'Work'})" :radius="true">Back to works</Button>
      </div>
        <div class="detail__img">
          <Slider :media="getWorks.images" />
        </div>
        <div class="detail__description">
          <h3 class="detail__title">{{ getWorks.title }}</h3>
          <div class="hr"></div>
          <p class="detail__text">{{ getWorks.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Slider from '@/components/Work/Detail/Slider'
import Button from '@/components/base/Form/Button'
import { mapActions, mapGetters } from 'vuex'

export default {
  props: {
    id: {
      type: Number
    }
  },
  components: {
    Slider,
    Button
  },
  async mounted() {
    this.$nextTick(() => {
      this.worksAction(this.id);
    })
  },
  computed: {
    ...mapGetters("works", ["getWorks"])
  },
  methods: {
    ...mapActions("works", ["worksAction"])
  }
}
</script>

<style lang="scss" scoped>
.detail {
  width: 100%;

  &__info {
    background: #282828;
    padding: 30px;
    // border-radius: 5px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    box-shadow: -10px 10px 20px rgba(0, 0, 0, 0.5);
    color: #fff;
  }

  &__back {
    width: 100%;
    margin-bottom: 20px;
  }

  &__img {
    width: 40%;
    max-height: 550px;
  }
  &__description {
    padding-top: 20px;
    padding-left: 20px;
    width: 60%;
  }

  &__title {
    font-size: 36px;
  }

  .hr {
    width: 100%;
    height: 3px;
    background: #fb344c;
    margin: 20px auto 20px auto;
    padding: 0 15px;
  }

  &__text {
    font-size: 22px;
    font-weight: 300;
    line-height: 28px;
  }
}
@media screen and (max-width: 1024px) {
  .detail {
    &__info {
      flex-direction: column;
    }

    &__img {
      width: 100%;
      height: 400px;
    }
    &__description {
      padding-left: 0px;
      width: 100%;
    }
  }
}
</style>
