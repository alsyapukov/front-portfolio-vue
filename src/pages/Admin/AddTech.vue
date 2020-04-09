<template>
  <div class="page">
    <Aside />
    <AddTech />
  </div>
</template>

<script>
import AddTech from '@/components/Admin/AddTech'
import Aside from '@/components/Aside/'

export default {
  components: {
    AddTech,
    Aside
  }
}
</script>

<style lang="scss" scoped></style>
