<template>
  <div class="intro">
    <h3>Intro</h3>
    <p>
      The <a href="https://en.wikipedia.org/wiki/Conway's_Game_of_Life">Game of Life</a>, also known simply as Life, is a
      cellular automaton devised by the British mathematician John Horton Conway in 1970."
    </p>
    <p>Given a board with m by n cells, each cell has an initial state live (1) or dead (0). Each cell interacts with its eight
      neighbors (horizontal, vertical, diagonal) using the following four rules:
      <ul>
        <li>Any live cell with fewer than two live neighbors dies, as if caused by under-population.</li>
        <li>Any live cell with two or three live neighbors lives on to the next generation.</li>
        <li>Any live cell with more than three live neighbors dies, as if by over-population.</li>
        <li>Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.</li>
      </ul>
    </p>

    <h3>play</h3>
    <ul>
      <li>click on the board to toggle the state of a cell</li>
      <li>or choose a pattern from the list</li>
      <li>click <div class="icon start"></div>to start evolution</li>
      <li>click <div class="icon pause"></div>to pause evolution, you can manually change the cell's' state at this point, then click <div class="icon start"></div>to continue </li>
      <li>click <div class="icon stop"></div>to clear the everything, then can start over again</li>
    </ul>
  </div>

</template>

<script>
  export default {
    name: 'intro'
  }
</script>

<style>
.intro {
  padding:  10px;
  flex: 4;
}
</style>