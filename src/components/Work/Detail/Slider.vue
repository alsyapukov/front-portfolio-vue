<template>
  <hooper :settings="settingsSlider">
    <slide v-for="img in media">
      <img class="img" :src="`${host}${img.url}`" alt />
    </slide>
    <hooper-navigation slot="hooper-addons"></hooper-navigation>
    <hooper-pagination slot="hooper-addons" mode="fraction"></hooper-pagination>
  </hooper>
</template>

<script>
import {
  Hooper,
  Slide,
  Navigation as HooperNavigation,
  Pagination as HooperPagination
} from 'hooper'

export default {
  props: {
    media: {
      type: Array
    }
  },
  components: {
    Hooper,
    Slide,
    HooperNavigation,
    HooperPagination
  },
  data () {
    return {
      settingsSlider: {
        itemsToShow: 1,
        infiniteScroll: true,
        transition: 700
      },
      host: 'http://localhost:5001'
    }
  }
}
</script>

<style lang="scss">
.hooper {
  height: 100%;
  overflow: hidden;
  &:hover,
  &:active,
  &:focus {
    outline: none;
  }

  &-slide {
    // background: #0bcf6b;
  }

  &-list {
    position: relative;
    height: 100%;
    outline: none;
  }
  &-track {
    position: absolute;
    display: flex;
    height: 100%;
  }
  .img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &-navigation {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;

    .hooper-prev,
    .hooper-next {
      position: relative;
      width: 100px;
      background: transparent;
      border: 0;
      outline: none;
      padding: 0;
      display: flex;
      align-items: center;
      cursor: pointer;

      &:before {
        content: "";
        display: block;
        height: 40px;
        width: 40px;
        border-radius: 4px;
        background: url("~assets/img/arrow.png");
        background-size: contain;
        background-repeat: no-repeat;
        // background:
      }

      .icon {
        display: none;
      }
    }

    .hooper-prev {
      justify-content: flex-start;
    }
    .hooper-next {
      justify-content: flex-end;
      &:before {
        transform: rotate(180deg);
      }
    }
  }
  &-liveregion {
    display: none;
  }
  &-pagination {
    position: absolute;
    bottom: 10px;
    background: rgba(3, 3, 3, 0.7);
    color: #f1f1f1;
    padding: 10px;
    left: 50%;
    transform: translate(-50%, 0);
  }
}
@media screen and (max-width: 1024px) {
  .hooper {
    .img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}
</style>
