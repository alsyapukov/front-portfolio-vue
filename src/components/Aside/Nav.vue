<template>
  <nav class="nav__list">
    <!-- <div class="nav__item" v-if="userData">
      <p>{{ userData.email }}</p>
      <p>{{ userData.uid }}</p>
    </div>
    <div class="nav__item" v-if="userData">
      <a @click="logoutUserAction()">Выход</a>
    </div>
    <div class="nav__item">
      <select v-model="selectLoacle">
        <option>en</option>
        <option>ru</option>
      </select>
    </div> -->
    <router-link
      :to="link.value"
      v-for="(link, index) in links"
      :key="link.name"
      active-class="nav__item_active"
      class="nav__item"
    >
      <Material :i="index">
        <div class="nav__inner">
          <i :class="`icon-${link.icon}`"></i>
          <span class="nav__text">{{ link.name }}</span>
        </div>
      </Material>
    </router-link>
  </nav>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import Material from '@/components/base/Form/Material'
import links from '@/components/Aside/links.json'

export default {
  components: {
    Material
  },
  data () {
    return {
      links,
      lang: 'en'
    }
  },
  computed: {
    ...mapState('user', ['locale', 'userData', 'isAuth']),
    selectLoacle: {
      get () {
        return this.locale || 'en'
      },
      set (value) {
        this.getLocale(value)
      }
    }
  },
  methods: {
    ...mapMutations('user', ['setLocale']),
    ...mapActions('user', ['getLocale', 'logoutUserAction'])
  },
  watch: {
    lang (val) {
      this.$i18n.locale = val
      this.getLocale(val)
    }
  }
}
</script>

<style lang="scss" scoped>
.nav {
  &__list {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  &__item {
    width: 100%;
    height: 60px;
    // padding: 20px;
    color: #fff;
    background: transparent;
    transition: 200ms ease-in-out;
    position: relative;

    &_active {
      background: #404040;
      &::before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        width: 3px;
        background: #fb344c;
        background: -webkit-linear-gradient(top right, #fb344c, #e72f44);
        background: -moz-linear-gradient(top right, #fb344c, #e72f44);
        background: linear-gradient(to bottom left, #fb344c, #e72f44);
      }
    }

    .nav__text {
      font-family: "Open Sans Condensed", cursive;
      font-size: 13px;
      text-transform: uppercase;
      font-weight: 100;
      letter-spacing: 2px;
      padding-left: 20px;
    }

    &:hover,
    &:active {
      background: #fb344c;
      background: -webkit-linear-gradient(top right, #fb344c, #e72f44);
      background: -moz-linear-gradient(top right, #fb344c, #e72f44);
      background: linear-gradient(to bottom left, #fb344c, #e72f44);
      // background: -webkit-linear-gradient(top left, #3FBCEE, #007FCE);
      // background: -moz-linear-gradient(top left, #3FBCEE, #007FCE);
      // background: linear-gradient(to bottom right, #3FBCEE, #007FCE);
    }
  }
  &__inner {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 20px;
  }
}
@media (max-width: 768px) {
  .nav {
    &__list {
      flex-direction: row;
      height: 100%;
    }
    &__item {
      display: flex;
      width: 60px;
      height: 100%;
    }
  }
}
</style>
