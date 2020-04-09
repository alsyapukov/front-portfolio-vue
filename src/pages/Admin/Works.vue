<template>
  <div class="page">
    <Aside />
    <Works />
  </div>
</template>

<script>
import Works from '@/components/Admin/Works'
import Aside from '@/components/Aside/'

export default {
  components: {
    Works,
    Aside
  }
}
</script>

<style lang="scss" scoped></style>
