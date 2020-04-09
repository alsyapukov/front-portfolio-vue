<template>
  <aside class="aside">
    <div class="aside__container">
      <div class="aside__logo">
        <i class="icon-heart"></i>
      </div>
      <Nav />
      <div class="aside__logo"></div>
    </div>
  </aside>
</template>

<script>
import Nav from '@/components/Aside/Nav'

export default {
  name: 'Aside',
  components: {
    Nav
  }
}
</script>

<style lang="scss" scoped>
.aside {
  background: #333333;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  width: 260px;
  flex-shrink: 0;
  position: relative;

  &__container {
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    height: 100vh;

    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
  }

  &__logo {
    width: 100%;
  }

  &__logo {
    // background: #181818;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fc0853;
  }
}

@media (max-width: 768px) {
  .aside {
    position: sticky;
    top: 0;
    width: 100%;
    box-shadow: 0 0 16px rgba(0, 0, 0, 0.2);
    height: initial;

    &__container {
      display: flex;
      flex-direction: row;
      height: 60px;
    }
  }
}
</style>
