<template>
  <main class="main">
    <div class="container">
      <Title :title="title" />
      <section class="work" v-if="getWorks">
        <!-- :to="{ name: 'Detail', params: { id: work.id }}" -->
        <router-link
          :to="{ name: 'Detail', params: { id: work._id }}"
          class="work__item"
          v-for="(work, index) in getWorks"
          :key="index"
        >
          <div class="work__wrap">
            <div class="work__img" v-if="work.image">
              <img class="work__background" :src="`http://localhost:5001${work.image.url}`" :alt="work.title" />
            </div>
            <!-- <div class="work__view">
              <div class="work__init">
                <span>View</span>
              </div>
            </div>-->
            <Material :i="index">
              <div class="work__body">
                <div class="work__title">
                  <h3>{{ work.title }}</h3>
                </div>
                <p class="work__text">{{ work.miniDescription }}</p>
              </div>
            </Material>
          </div>
        </router-link>
      </section>
    </div>
  </main>
</template>

<script>
import Title from '@/components/base/Title'
import Material from '@/components/base/Form/Material'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    Title,
    Material
  },
  data () {
    return {
      title: 'My works',
    }
  },
  async mounted() {
    this.$nextTick(() => {
      this.worksAction();
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
.main {
  width: calc(100% - 80px);
  height: 100%;

  &__container {
    display: flex;
    align-items: flex-start;
    height: 100%;
    justify-content: flex-start;
  }
}

.work {
  width: 100%;
  min-height: 200px;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;

  &__box {
    height: 90px;
    background: #232323;
    position: relative;
    box-shadow: -8px 8px 18px #232323;
  }

  &__item {
    min-height: 24vmax;
    flex: 0 0 33.333333%;
    padding-left: 15px;
    padding-right: 15px;
    margin-bottom: 30px;
  }
  &__wrap {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    width: 100%;
    height: 100%;
    margin: auto;
    // box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.08),
      0 1px 3px 1px rgba(0, 0, 0, 0.16);
    position: relative;
    background: #333333;
    border-radius: 6px;
    transition: 0.3s ease;

    &:hover {
      // .work__background {
      //   transform: scale(1.5);
      // }
      .work__img {
        &::before {
          background: none;
        }
      }
      .work__init {
        animation: a-init 1s ease-in-out 0s infinite;
      }
      // transform: scale(1.02);
    }
  }
  &__img {
    min-height: 18vmax;
    width: 100%;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.3);
      z-index: 1;
      transition: 0.3s ease-out;
    }
  }
  &__background {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    object-fit: cover;
  }

  &__body {
    padding: 20px;
  }

  &__title {
    font-size: 22px;
  }
  &__text {
    padding-top: 10px;
    font-size: 16px;
    line-height: 18px;
    max-height: 46px;
    overflow: hidden;
    font-weight: 100;
  }

  &__view {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__init {
    transition: 0.2s ease-in;
    display: flex;
    // opacity: 0;
    align-items: center;
    justify-content: center;
    font-size: 28px;
    text-transform: uppercase;
    font-family: "Open Sans Condensed", cursive;
    border-radius: 50%;
    height: 125px;
    width: 125px;
    padding: 20px;
    text-align: center;
    color: #fff;
    // background: #0bcf6b;
    background: transparent;
    box-shadow: 1px 1px 23px #fb334b;
    border: 5px solid #fb334b;
  }
}

@media (max-width: 991px) {
  .work {
    &__item {
      flex: 0 0 50%;
    }
    &__wrap {
    }
  }
}

@media (max-width: 768px) {
  .main {
    margin-top: 30px;
    width: 100%;
    height: 100%;
  }
  .work {
    &__item {
      flex: 0 0 100%;
      padding: 0;
      height: 60vmax;
    }
    &__wrap {
    }
  }
}
@keyframes a-init {
  from {
    box-shadow: 1px 1px 23px #fb334b;
  }
  50% {
    box-shadow: 1px 1px 40px #fb334b;
  }
  to {
    box-shadow: 1px 1px 23px #fb334b;
  }
}
</style>
