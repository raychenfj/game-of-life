<template>
  <div id="app">
    <h1>Conway's Game of Life</h1>
    <div class="main">
      <intro></intro>
      <game-of-life></game-of-life>
    </div>
  </div>
</template>

<script>
  import GameOfLife from './GameOfLife'
  import Intro from './Intro'

  export default {
    name: 'app',
    components: {
      GameOfLife,
      Intro
    }
  }
</script>

<style>
@media (min-width:1300px){
  .main{
    display: flex;
    flex-direction: row;
  }
}


html,body {
  width: 100%;
  height: 100%;
  margin: 0;
}

h1 {
  text-align: center;
}

button {
  font-size: 16px;
}
</style>