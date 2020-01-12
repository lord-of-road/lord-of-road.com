<template lang="pug">
div#app
    router-view
</template>

<style lang="stylus">
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,800&display=swap')

html
    overflow: hidden

body
    overscroll-behavior-y: none
    overflow: auto

html, body
    height: 100%
    width: 100%
    margin: 0
    padding: 0
    background: $background_color

    input, textarea, button, select, a
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0)

#app
    height: 100%
    width: 100%
    font-family: 'Montserrat'
    text-align: center
    color: $text_color
</style>
