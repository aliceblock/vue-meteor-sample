<template lang="pug">
div
  form(@submit.prevent="addPlayer")
    input(type="text", v-model="playerName")
    button(type="submit") Add Player
</template>

<script>
import { Players } from '../api/Players'

export default {
  data: () => ({
    playerName: ''
  }),
  methods: {
    addPlayer() {
      if(!this.playerName.trim()) return
      Players.insert({
        name: this.playerName.trim(),
        score: 0
      })
      this.playerName = ''
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
