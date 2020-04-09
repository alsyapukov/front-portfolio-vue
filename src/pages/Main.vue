<template>
  <div class="page">
    <Aside />
    <Main />
  </div>
</template>

<script>
import Main from '@/components/Main/'
import Aside from '@/components/Aside/'

export default {
  components: {
    Main,
    Aside
  }
}
</script>

<style lang="scss" scoped></style>
