<template lang="pug">
div.container
  PlayerList(:players="playerList")
  AddPlayer
</template>

<script>
import { Players } from './api/Players'
import * as _ from 'lodash'

import PlayerList from './components/PlayerList'
import AddPlayer from './components/AddPlayer'

export default {
  data: () => ({
    playerList: []  // As default value
  }),
  meteor: {
    data: {
      playerList() {
        return Players.find().fetch()
      }
    }
  },
  components: {
    PlayerList,
    AddPlayer
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 20%;
}
</style>
