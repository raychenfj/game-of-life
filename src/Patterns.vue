<template>
  <div class="patterns">
    <h3>patterns</h3>
    <div class="patterns-row">
      <div v-for="pattern in patterns" class="pattern" @click="$emit('choose',pattern)">
        <img class="pattern-img" :src="pattern.img" :alt="pattern.name">
        <span class="pattern-name">{{pattern.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import patterns from './patterns'

export default {
  name: 'patterns',
  data () {
    return {
      patterns
    }
  }
}
</script>

<style>
.patterns-row {
  width: 900px;
  overflow-x: scroll;
  display: flex;
  flex-direction: row;
  height: 60px;
}

.patterns-column {
  width: 50px;
  display: flex;
  flex-direction: column;
}

.pattern{
  padding: 0 5px;
}

.pattern-img {
  display: block;
  height: 40px;
  margin: 0 auto;
}

.pattern-name{
  display: block;
  text-align: center;
}
</style>