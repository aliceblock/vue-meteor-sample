<template lang="pug">
p
  span {{ player.name }} has {{ player.score }} point(s).
  span
    input(type="button" @click="removePoint(player._id)", value="-")
    input(type="button" @click="addPoint(player._id)", value="+")
    input(type="button" @click="removePlayer(player._id)", value="x")
</template>

<script>
import { Players } from '../api/Players'

export default {
  props: ['player'],
  methods: {
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
