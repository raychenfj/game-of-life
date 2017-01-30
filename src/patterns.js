function png (name) {
  return require(`./assets/patterns/${name}.png`)
}

function gif (name) {
  return require(`./assets/patterns/${name}.gif`)
}

function random () {
  const width = 100
  const height = 100
  let points = []
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      if (Math.round(Math.random())) {
        points.push({x, y})
      }
    }
  }
  return points
}

export default [
  {
    name: 'random',
    img: png('random'),
    points: random
  },
  {
    name: 'block',
    img: png('block'),
    points: [{x: 1, y: 1}, {x: 1, y: 2},
             {x: 2, y: 1}, {x: 2, y: 2}]
  },
  {
    name: 'beehive',
    img: png('beehive'),
    points: [{x: 2, y: 1}, {x: 3, y: 1},
             {x: 1, y: 2}, {x: 4, y: 2},
             {x: 2, y: 3}, {x: 3, y: 3}]
  },
  {
    name: 'loaf',
    img: png('loaf'),
    points: [{x: 2, y: 1}, {x: 3, y: 1},
             {x: 1, y: 2}, {x: 4, y: 2},
             {x: 2, y: 3}, {x: 4, y: 3},
             {x: 3, y: 4}]
  },
  {
    name: 'boat',
    img: png('boat'),
    points: []
  },
  {
    name: 'tub',
    img: png('tub'),
    points: [{x: 2, y: 1},
             {x: 1, y: 2}, {x: 3, y: 2},
             {x: 2, y: 3}]
  },
  {
    name: 'blinker',
    img: gif('blinker'),
    points: [{x: 1, y: 2}, {x: 2, y: 2}, {x: 3, y: 2}]
  },
  {
    name: 'toad',
    img: gif('toad'),
    points: [{x: 2, y: 2}, {x: 3, y: 2}, {x: 4, y: 2},
             {x: 1, y: 3}, {x: 2, y: 3}, {x: 3, y: 3}]
  },
  {
    name: 'beacon',
    img: gif('beacon'),
    points: [{x: 1, y: 1}, {x: 2, y: 1},
             {x: 1, y: 2},
             {x: 4, y: 3},
             {x: 3, y: 4}, {x: 4, y: 4}]
  },
  {
    name: 'pulsar',
    img: gif('pulsar'),
    points: [{x: 5, y: 1}, {x: 11, y: 1},
             {x: 5, y: 2}, {x: 11, y: 2},
             {x: 5, y: 3}, {x: 6, y: 3}, {x: 10, y: 3}, {x: 11, y: 3},
             {x: 1, y: 5}, {x: 2, y: 5}, {x: 3, y: 5}, {x: 6, y: 5}, {x: 7, y: 5}, {x: 9, y: 5}, {x: 10, y: 5}, {x: 13, y: 5}, {x: 14, y: 5}, {x: 15, y: 5},
             {x: 3, y: 6}, {x: 5, y: 6}, {x: 7, y: 6}, {x: 9, y: 6}, {x: 11, y: 6}, {x: 13, y: 6},
             {x: 5, y: 7}, {x: 6, y: 7}, {x: 10, y: 7}, {x: 11, y: 7},
             {x: 5, y: 9}, {x: 6, y: 9}, {x: 10, y: 9}, {x: 11, y: 9},
             {x: 3, y: 10}, {x: 5, y: 10}, {x: 7, y: 10}, {x: 9, y: 10}, {x: 11, y: 10}, {x: 13, y: 10},
             {x: 1, y: 11}, {x: 2, y: 11}, {x: 3, y: 11}, {x: 6, y: 11}, {x: 7, y: 11}, {x: 9, y: 11}, {x: 10, y: 11}, {x: 13, y: 11}, {x: 14, y: 11}, {x: 15, y: 11},
             {x: 5, y: 13}, {x: 6, y: 13}, {x: 10, y: 13}, {x: 11, y: 13},
             {x: 5, y: 14}, {x: 11, y: 14},
             {x: 5, y: 15}, {x: 11, y: 15} ]
  },
  {
    name: 'pentadecathlon',
    img: gif('pentadecathlon'),
    points: [{x: 4, y: 3}, {x: 5, y: 3}, {x: 6, y: 3},
             {x: 5, y: 4},
             {x: 5, y: 5},
             {x: 4, y: 6}, {x: 5, y: 6}, {x: 6, y: 6},
             {x: 4, y: 8}, {x: 5, y: 8}, {x: 6, y: 8},
             {x: 4, y: 9}, {x: 5, y: 9}, {x: 6, y: 9},
             {x: 4, y: 11}, {x: 5, y: 11}, {x: 6, y: 11},
             {x: 5, y: 12},
             {x: 5, y: 13},
             {x: 4, y: 14}, {x: 5, y: 14}, {x: 6, y: 14}]
  },
  {
    name: 'glider',
    img: gif('glider'),
    points: [{x: 3, y: 1},
             {x: 4, y: 2},
             {x: 2, y: 3}, {x: 3, y: 3}, {x: 4, y: 3}]
  },
  {
    name: 'spaceship',
    img: gif('spaceship'),
    points: [{x: 2, y: 1}, {x: 5, y: 1},
             {x: 6, y: 2},
             {x: 2, y: 3}, {x: 6, y: 3},
             {x: 3, y: 4}, {x: 4, y: 4}, {x: 5, y: 4}, {x: 6, y: 4} ]
  },
  {
    name: 'glider gun',
    img: png('glider-gun'),
    points: [{x: 25, y: 1},
             {x: 23, y: 2}, {x: 25, y: 2},
             {x: 13, y: 3}, {x: 14, y: 3}, {x: 21, y: 3}, {x: 22, y: 3}, {x: 35, y: 3}, {x: 36, y: 3},
             {x: 12, y: 4}, {x: 16, y: 4}, {x: 21, y: 4}, {x: 22, y: 4}, {x: 35, y: 4}, {x: 36, y: 4},
             {x: 1, y: 5}, {x: 2, y: 5}, {x: 11, y: 5}, {x: 17, y: 5}, {x: 21, y: 5}, {x: 22, y: 5},
             {x: 1, y: 6}, {x: 2, y: 6}, {x: 11, y: 6}, {x: 15, y: 6}, {x: 17, y: 6}, {x: 18, y: 6}, {x: 23, y: 6}, {x: 25, y: 6},
             {x: 11, y: 7}, {x: 17, y: 7}, {x: 25, y: 7},
             {x: 12, y: 8}, {x: 16, y: 8},
             {x: 13, y: 9}, {x: 14, y: 9} ]
  }
]
