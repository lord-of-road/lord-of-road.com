<template lang="pug">
ContentWrapper.main
    h1 🔥 Lord of Road 🔥
    h3 Will be available soon!
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
