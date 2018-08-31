<template>
  <div class="game-of-life">
    <button v-if="isPaused" @click="start"><div class="icon start"></div>start</button>
    <button v-else @click="pause"><div class="icon pause"></div>pause</button>
    <button @click="stop"><div class="icon stop"></div>stop</button>
    &nbsp
    <label for="interval">interval</label>
    <input id="interval" type="range" v-model="interval" min="100" max="2000" step="100"> {{interval + ' ms'}}
    <Patterns @choose="choose"></Patterns>
    <canvas @click="onClickCanvas" id="canvas" width="910" height="910"></canvas>
  </div>
</template>

<script>
import Patterns from './Patterns.vue'

const length = 9 // width and height for each cell
const offset = 1 // cordinate offset
const dead = 0
const alive = 1
let canvas = null
let ctx = null

export default {
  name: 'game-of-life',
  data () {
    return {
      timer: 0,
      board: null,
      isPaused: true,
      int: 500
    }
  },
  computed: {
    interval: {
      get () {
        return this.int
      },
      set (value) {
        this.int = value
        if (!this.isPaused) {
          this.pause()
          this.start()
        }
      }
    }
  },
  components: {
    Patterns
  },
  created () {
    console.log(this.__a)
    // init the board and then the canvas
    window.addEventListener('load', () => {
      canvas = document.getElementById('canvas')
      ctx = canvas.getContext('2d')
      this.board = initBoard()
      render(this.board)
    })
  },
  methods: {
    /**
     * start the game
     */
    start () {
      this.isPaused = false
      this.timer = setInterval(() => {
        updateBoard(this.board)
        render(this.board)
      }, this.interval)
    },

    /**
     * pause the game
     */
    pause () {
      this.isPaused = true
      clearTimeout(this.timer)
    },

    /**
     * stop the game
     */
    stop () {
      this.isPaused = true
      clearTimeout(this.timer)
      clearBoard(this.board)
      render(this.board)
    },

    /**
     * choose a pattern
     */
    choose (pattern) {
      clearBoard(this.board)
      let points = pattern.points

      // for random pattern
      if (typeof points === 'function') {
        points = points()
      }

      points.forEach((point) => {
        this.board[point.x][point.y] = alive
      })
      render(this.board)
    },

    /**
     * when click, toggel the clicked cell's state, alive -> dead, and dead -> alive
     */
    onClickCanvas (event) {
      let pos = convertGlobalToCanvasPos(event)
      let point = covertPosToBoardIndex(pos)
      toggelPoint(this.board, point)
      renderPoint(this.board, point)
    }
  }
}
  /**
   * initialize the board
   */
function initBoard () {
  const width = 100
  const height = 100
  let board = []
  for (let x = 0; x < width; x++) {
    board[x] = []
    for (let y = 0; y < height; y++) {
      board[x][y] = dead
    }
  }
  return board
}

/**
 * clear the board, all dead
 */
function clearBoard (board) {
  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board[x].length; y++) {
      board[x][y] = dead
    }
  }
}

/**
 * update the board according to game rules
 */
function updateBoard (board) {
  let clone = cloneBoard(board)
  for (let x = 0; x < clone.length; x++) {
    for (let y = 0; y < clone[x].length; y++) {
      let count = countAliveNeighbors(clone, {x, y})
      // neighbors is fewer than 2 or more than 3, then the cell is dead
      if (count < 2 || count > 3) {
        board[x][y] = dead
      // neighbors is equal to 2, do noting, state remain, dead or alive
      // neighbors is equal to 3, the state is always alive, it will resurrect the cell if it's dead
      } else if (count === 3) {
        board[x][y] = alive
      }
    }
  }
}

/**
 * toggel a certain in the board
 */
function toggelPoint (board, point) {
  let {x, y} = point
  board[x][y] = alive - board[x][y] // dead to alive and alive to dead
}

/**
 * count the alvie neighbors of a cell given the cordinate point
 */
function countAliveNeighbors (board, point) {
  let count = 0
  let {x, y} = point
  for (let offsetX = -1; offsetX <= 1; offsetX++) {
    for (let offsetY = -1; offsetY <= 1; offsetY++) {
      // check if the cordinate is whtinin the boundary
      if (board[x + offsetX] && board[x + offsetX][y + offsetY]) {
        let cell = board[x + offsetX][y + offsetY]
        if ((offsetX !== 0 || offsetY !== 0) && cell) { // ignore the cell itself
          count++
        }
      }
    }
  }
  return count
}

/**
 * deep clone the board(two dimensional array)
 */
function cloneBoard (board) {
  let clone = []
  for (let x = 0; x < board.length; x++) {
    clone[x] = board[x].slice(0)
  }
  return clone
}

/**
 * render the canvas
 */
function render (board) {
  // const length = 9 // width and height for each cell
  // const offset = 1 // cordinate offset

  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board[x].length; y++) {
      renderPoint(board, {x, y})
    }
  }
}

/**
 * render a certain point of the board on canvas
 */
function renderPoint (board, point) {
  let {x, y} = point
  // draw border
  ctx.strokeStyle = 'grey'
  ctx.strokeRect(length * x + offset, length * y + offset, length, length)
  if (board[x][y] === alive) {
    // draw black block
    ctx.fillStyle = 'black'
    ctx.fillRect(length * x + offset, length * y + offset, length, length)
  } else {
    // draw white block
    ctx.fillStyle = 'white'
    ctx.fillRect(length * x + offset, length * y + offset, length, length)
  }
}

/**
 * convert the global cordination to canvas local cordination
 */
function convertGlobalToCanvasPos (event) {
  const canvas = document.getElementById('canvas')
  let rect = canvas.getBoundingClientRect()
  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top
  }
}

/**
 * convert the cordination to board's row and column index
 */
function covertPosToBoardIndex (pos) {
  return {
    x: Math.floor((pos.x - offset) / length),
    y: Math.floor((pos.y - offset) / length)
  }
}
</script>

<style>
.game-of-life {
  flex: 6;
  padding: 10px;
  width: 900px;
  /*float: left;*/
}

#canvas {
  display: block;
  margin-top:10px;
}
</style>