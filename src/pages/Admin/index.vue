<template>
  <div class="page">
    <Aside />
    <Admin />
  </div>
</template>

<script>
import Admin from '@/components/Admin/'
import Aside from '@/components/Aside/'

export default {
  components: {
    Admin,
    Aside
  }
}
</script>

<style lang="scss" scoped></style>
