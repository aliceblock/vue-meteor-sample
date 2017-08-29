<template lang="pug">
div
  Player(v-for="player in players", :key="player._id.toString()", :player="player")
</template>

<script>
import Player from './Player'

export default {
  props: ['players'],
  components: {
    Player
  }
}
</script>

<style lang="scss" scoped>
</style>
