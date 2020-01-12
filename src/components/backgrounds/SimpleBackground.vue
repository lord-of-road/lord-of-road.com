<template lang="pug">
div.background
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component
export default class SimpleBackground extends Vue {}
</script>

<style scoped lang="stylus">
.background
    z-index: 1
    position: relative
    top: 0
    bottom: 0
    right: 0
    left: 0
    background-color: $background_color
</style>
