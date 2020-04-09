<template>
  <div id="app" class="syapukovit">
    <!-- <article v-for="(location, idx) in locations" :key="idx">
      <img :src="location.image" />
      <h1>{{ location.name }}</h1>
    </article>-->
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";

export default {
  name: "App",
  data() {
    return {
      myApi: null
    };
  },
  async mounted() {
    this.getLocale(this.$i18n.locale);
    if(this.$localStorage.get('token')) {
      this.isAuthMutate(true);
      this.authLSAction({
        token: this.$localStorage.get('token')
      });
    }
  },
  computed: {
  },
  methods: {
    ...mapActions("user", ["getLocale", "authLSAction"]),
    ...mapMutations("user", ["isAuthMutate"])
  }
};
</script>

<style lang="scss">
@import "./assets/lib/reset.css";
@import url("https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,700&display=swap&subset=cyrillic");
@import url("https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&display=swap&subset=cyrillic,cyrillic-ext");
p {
  margin: 0;
}
body {
  background: #272727;
  font-family: "Roboto", sans-serif;
  color: #fff;
  font-weight: 300;
  font-size: 14px;
}
.page {
  display: flex;
  align-items: stretch;
  min-height: 100vh;
  width: 100%;
}

/* Адаптивный контейнер */

@media only screen and (min-width: 1200px) {
  .container {
    // max-width: 1140px;
  }
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .container {
    // max-width: 960px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .container {
    // max-width: 720px;
    padding-right: 20px;
    padding-left: 20px;
  }
}
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .container {
    // max-width: 540px;
  }
}
.container {
  width: 100%;
  height: 100%;
  // padding-top: 20px;
  // padding-bottom: 20px;
  // padding-right: 20px;
  // padding-left: 20px;
  padding: 30px;
  margin-right: auto;
  margin-left: auto;
}

.container_fluid {
  width: 100%;
  max-width: 100%;
  height: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

/* Иконочный шрифт для навигации */

@font-face {
  font-family: "syapukovit";
  font-display: auto;
  src: local("syapukovit"),
    url("/assets/fonts/syapukovit.eot") format("embedded-opentype"),
    url("/assets/fonts/syapukovit.ttf") format("truetype"),
    url("/assets/fonts/syapukovit.woff") format("woff"),
    url("/assets/fonts/syapukovit.svg?tgtwys##syapukovit") format("svg");
  font-weight: 100;
  font-style: normal;
  font-display: block;
}

[class*=" icon-"],
[class^="icon-"] {
  font-family: "syapukovit" !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 19px;
}

.icon-chat {
  &:before {
    content: "\e900";
  }
}
.icon-coding {
  &:before {
    content: "\e901";
  }
}
.icon-contact {
  &:before {
    content: "\e902";
  }
}
.icon-feedback-1 {
  &:before {
    content: "\e903";
  }
}
.icon-feedback {
  &:before {
    content: "\e904";
  }
}
.icon-laptop {
  &:before {
    content: "\e905";
  }
}
.icon-webpage {
  &:before {
    content: "\e906";
  }
}
.icon-cancel {
  &:before {
    content: "\e907";
  }
}
.icon-check {
  &:before {
    content: "\e908";
  }
}
.icon-heart {
  &:before {
    content: "\e909";
  }
}
.icon-home {
  &:before {
    content: "\e90a";
  }
}
.icon-maximize {
  &:before {
    content: "\e90b";
  }
}
.icon-menu {
  &:before {
    content: "\e90c";
  }
}
.icon-mouse {
  &:before {
    content: "\e90d";
  }
}
.icon-printer {
  &:before {
    content: "\e90e";
  }
}
.icon-search {
  &:before {
    content: "\e90f";
  }
}
.icon-settings {
  &:before {
    content: "\e910";
  }
}
.icon-shield {
  &:before {
    content: "\e911";
  }
}
.icon-smartphone {
  &:before {
    content: "\e912";
  }
}
.icon-speech-bubble {
  &:before {
    content: "\e913";
  }
}
.icon-star {
  &:before {
    content: "\e914";
  }
}
.icon-team {
  &:before {
    content: "\e915";
  }
}
.icon-telephone {
  &:before {
    content: "\e916";
  }
}
.icon-user-1 {
  &:before {
    content: "\e917";
  }
}

@media (max-width: 768px) {
  .page {
    display: block;
    height: 100%;
  }
}
</style>
