<template>
  <div class="map">
    <yandex-map :settings="{ apiKey: keyMap }" :coords="initialCenter" :zoom="initialZoom">
      <ymap-marker marker-id="123" :icon="initialMarkerIcon" :coords="initialCenter"></ymap-marker>
    </yandex-map>
  </div>
</template>

<script>
import { yandexMap, ymapMarker } from 'vue-yandex-maps'

export default {
  components: {
    yandexMap,
    ymapMarker
  },
  data () {
    return {
      keyMap: 'c0bc84b6-7dec-45b4-be8a-85945e742d4b',
      initialCenter: [54.314192, 48.403123],
      initialZoom: 12,
      initialMarkerIcon: {
        layout: 'default#imageWithContent',
        imageHref: require('assets/img/point.png'),
        imageSize: [20, 32],
        imageOffset: [-20, -32]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.map {
  width: 100%;
  height: 100%;

  .ymap-container {
    width: 100%;
    height: 100%;
    position: relative;
    // filter: invert(100%);
    // -ms-filter: invert(100%);
    // -webkit-filter: invert(100%);
    // -moz-filter: invert(100%);
    // -o-filter: invert(100%);
    // filter: grayscale(100%) brightness(20%);
    // -webkit-filter: grayscale(100%) brightness(20%);
  }
}
</style>
