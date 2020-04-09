<template>
  <div class="page">
    <Aside />
    <Contacts />
  </div>
</template>

<script>
import Contacts from '@/components/Contacts/'
import Aside from '@/components/Aside/'

export default {
  components: {
    Contacts,
    Aside
  }
}
</script>

<style lang="scss" scoped></style>
