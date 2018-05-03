function range(start, end) {
  return Array.from({ length: end - start + 1 }, (_, i) => i + start)
}

function insertIntoSortedArray(arr, item) {
  let j = arr.length - 1

  while (item < arr[j] && j >= 0) {
    arr[j + 1] = arr[j]
    j--
  }

  arr[j + 1] = item
  return arr
}

function insertionSort(arr) {
  let currentIndex = 0
  let sortedArray = []
  sortedArray.push(arr[0])

  for (let i = 1; i < arr.length; i++) {
    let currentElement = arr[i]
    j = i - 1
    while (currentElement < sortedArray[j] && j >= 0) {
      sortedArray[j + 1] = sortedArray[j]
      j--
    }
    sortedArray[j + 1] = currentElement
  }

  return sortedArray
}

/**
 * recursive implemention for insertion sort
 * if one element in array, return array
 * else recursively sort n-1 element array and insert nth element in sorted array
 */
function insertionSortRecursive(arr) {
  if (arr.length < 2) {
    return arr
  }

  let lastElement = arr[arr.length - 1]
  let sortedSubArray = insertionSortRecursive(arr.slice(0, arr.length - 1))

  return insertIntoSortedArray(sortedSubArray, lastElement)
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

let a = range(0, 40)
a
let c = shuffle(a)
c
let d = shuffle(a)
d
console.log(isSortedDescending([]))
console.log(isSortedDescending([1]))
console.log(isSortedAscending(a))
console.log(isSortedDescending(a))

// test for normal loop based insertion sort
console.log(insertionSort([4, 1, 2, 123, 432, 12, 0, -10]))
console.log(isSortedAscending(c))
console.log(isSortedAscending(insertionSort(c)))
console.log(isSortedDescending(insertionSort(c)))

// test for recursive insertion sort
console.log(insertionSortRecursive([4, 1, 8, 0, -30, 3, 5, -4, -12]))
console.log(isSortedAscending(d))
console.log(isSortedAscending(insertionSortRecursive(d)))
console.log(isSortedDescending(insertionSortRecursive(d)))
