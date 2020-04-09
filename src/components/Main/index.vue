<i18n>
{
  "en": {
    "title1": "Syapukov",
    "title2": "it"
  },
  "ru": {
    "title1": "Сяпуков",
    "title2": "ит"
  }
}
</i18n>
<template>
  <main class="main">
  </main>
</template>

<script>

export default {
  data () {
    return {
      locations: []
    }
  },
  firestore () {
    return {
      locations: 'asd'
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>

.main {
  width: calc(100% - 80px);
  position: relative;
  overflow: hidden;
  // height: 100%;
}
</style>
