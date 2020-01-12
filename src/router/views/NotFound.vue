<template lang="pug">
ContentWrapper.not-found
    h1 Page not found
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import { ContentWrapper } from "@/elements"

@Component({
    components: {
        ContentWrapper,
    },
    metaInfo: {
        meta: [
            {
                name: "description",
                content: "Best online off-road vehicle shop ever!",
            },
            {
                name: "keywords",
                content: "cars,4x4,offroad",
            },
        ],
    },
})
export default class Main extends Vue {}
</script>

<style scoped lang="stylus"></style>
