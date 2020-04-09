<template>
  <div class="page">
    <Aside />
    <Detail :id="$route.params.id"/>
  </div>
</template>

<script>
import Detail from '@/components/Work/Detail/'
import Aside from '@/components/Aside/'

export default {
  components: {
    Detail,
    Aside
  }
}
</script>

<style lang="scss" scoped></style>
