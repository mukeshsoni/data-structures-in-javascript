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

    randomIndex
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

function swap(arr, i, j) {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

/**
 * partitions an array from index p to r
 * and returns and index q between p and r
 * such that forall i < q, array[i] <= array[q] and forall i > q, array[i] > array[q]
 * @param {Array} arr
 * @param {int} p
 * @param {int} r
 */
function partition(arr, p, r) {
  let pivot = arr[r]
  let i = p - 1
  i
  for (let j = p; j < r; j++) {
    if (arr[j] <= pivot) {
      arr
      j
      i++
      i
      swap(arr, i, j)
    }
  }

  swap(arr, i + 1, r)
  return i + 1
}

let a = [12, 1, 43, 0, 3]
let q = partition(a, 0, a.length - 1)
console.log("partition index", q)
console.log("after partition", a)

function quickSort(arr, p, r) {
  if (p < r) {
    const q = partition(arr, p, r)
    quickSort(arr, p, q - 1)
    quickSort(arr, q + 1, r)
  }
}

a = range(0, 6)
c = shuffle(a)
c
console.log(isSortedAscending(c))
quickSort(c, 0, c.length - 1)
c
console.log(isSortedAscending(c))
