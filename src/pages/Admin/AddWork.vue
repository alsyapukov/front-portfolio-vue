<template>
  <div class="page">
    <Aside />
    <AddWork />
  </div>
</template>

<script>
import AddWork from '@/components/Admin/AddWork'
import Aside from '@/components/Aside/'

export default {
  components: {
    AddWork,
    Aside
  }
}
</script>

<style lang="scss" scoped></style>
