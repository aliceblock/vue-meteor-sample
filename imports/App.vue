<template lang="pug">
div
  p(v-for="player in playerList")
    span {{ player.name }} has {{ player.score }} point(s).
    span
      input(type="button" @click="removePoint(player._id)", value="-")
      input(type="button" @click="addPoint(player._id)", value="+")
      input(type="button" @click="removePlayer(player._id)", value="x")
  form(@submit.prevent="addPlayer")
    input(type="text", v-model="playerName")
    button(type="submit") Add Player
</template>

<script>
import { Players } from './api/Players'
import * as _ from 'lodash'

export default {
  data: () => ({
    playerName: '',
    playerList: []  // As default value
  }),
  meteor: {
    data: {
      playerList() {
        return Players.find().fetch()
      }
    }
  },
  methods: {
    addPlayer() {
      if(!this.playerName.trim()) return
      Players.insert({
        name: this.playerName.trim(),
        score: 0
      })
      this.playerName = ''
    },
    removePlayer(id) {
      Players.remove({
        _id: id
      })
    },
    removePoint: _.throttle((id) => {
      Players.update({ _id: id }, {
        $inc: {
          score: -1
        }
      })
    }, 200),
    addPoint: _.throttle((id) => {
      Players.update({ _id: id }, {
        $inc: {
          score: 1
        }
      })
    }, 200)
  }
}
</script>

<style lang="scss" scoped>
div {
  width: 20%;
}
p {
  display: flex;
  flex-flow: row wrap;
  padding: 10px;
  &:hover {
    background-color: lightgrey;
  }
  span {
    flex: 1 50%;
    justify-content: center;
    &:nth-child(1) {
      text-align: center;
    }
    &:nth-child(2) {
      text-align: left;
    }
  }
}
</style>
