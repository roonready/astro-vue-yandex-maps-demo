<template>
  <div><a href="https://github.com/yandex-maps-unofficial/vue-yandex-maps">vue-yandex-maps</a> demo
</div>
  <yandex-map
    :settings="{
      location: {
        center: [37.617644, 55.755819],
        zoom: 9,
      },
    }"
    height="100vh"
  >
    <yandex-map-default-scheme-layer :settings="{ theme: 'light' }" />
    <yandex-map-controls :settings="{ position: 'right' }">
      <yandex-map-zoom-control />
    </yandex-map-controls>
  </yandex-map>
</template>

<script setup lang="ts">
import {
  YandexMap,
  YandexMapControls,
  YandexMapDefaultSchemeLayer,
  YandexMapZoomControl,
} from "vue-yandex-maps";
</script>