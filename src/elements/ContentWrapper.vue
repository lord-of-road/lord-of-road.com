<template lang="pug">
div.content-wrapper
    SimpleBackground
    div.wrapper
        slot
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import { SimpleBackground } from "@/components"

@Component({
    components: {
        SimpleBackground,
    },
})
export default class ContentWrapper extends Vue {}
</script>

<style scoped lang="stylus">
.content-wrapper
    height: 100%
    width: 100%
    display: flex

    .wrapper
        z-index: 2
        height: 100%
        width: 100%
        display: flex
        flex-direction: column
        overflow: scroll
        justify-content: center
        align-items: center
</style>
