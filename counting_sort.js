function range(start, end) {
  return Array.from({ length: end - start + 1 }, (_, i) => i + start)
}

/**
 *
 * @param {array} array
 */
function shuffle(arr) {
  let suffledArr = []
  let currentIndex = arr.length
  let temp, randomIndex

  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)

    temp = arr[currentIndex - 1]
    arr[currentIndex - 1] = arr[randomIndex]
    arr[randomIndex] = temp
    currentIndex--
  }

  return arr
}

function isSortedAscending(arr) {
  return arr.reduce(
    (acc, item, index, orig) =>
      acc ? (index > 0 ? item >= orig[index - 1] : true) : false,
    true
  )
}

function isSortedDescending(arr) {
  return arr.reduce(
    (acc, item, index, orig) => (index > 0 ? item <= orig[index - 1] : true),
    true
  )
}

let k = 6

function countingSort(arr) {
  let c = range(0, 5).map(_ => 0)
  for (let i = 0; i < arr.length; i++) {
    c[arr[i]] += 1
  }

  c
  for (let i = 1; i < k; i++) {
    c[i] = c[i] + c[i - 1]
  }
  c

  let b = []
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(b)
    b[c[arr[i]] - 1] = arr[i]
    c[arr[i]] -= 1
  }
  return b
}

function randBetween(p, q) {
  return Math.floor(Math.random() * (q - p)) + p
}

// console.log(randBetween(0, k));
// console.log(randBetween(0, k));
// console.log(randBetween(0, k));
// console.log(randBetween(0, k));
// console.log(randBetween(0, k));

function randArrayBetween(n, p, q) {
  return Array.from({ length: n }).map(i => {
    return randBetween(p, q)
  })
}

let n = 8
// console.log(randArrayBetween(n, 0, k));
// console.log(randArrayBetween(n, 0, k));
// console.log(randArrayBetween(n, 0, k));
// console.log(randArrayBetween(n, 0, k));
// console.log(randArrayBetween(n, 0, k));

let a = randArrayBetween(n, 0, k)
let c = shuffle(a)
console.log("array to sort", c)
console.log("is input array sorted", isSortedAscending(c))
let d = countingSort(c)
console.log("sorted array", d)
console.log(isSortedAscending(d))
