function range(start, end) {
  return Array.from({ length: end - start + 1 }, (_, i) => i + start)
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
 *
 * @param {array} array
 */
function shuffle(arr) {
  let currentIndex = arr.length
  let temp, randomIndex

  while (currentIndex >= 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)

    temp = arr[currentIndex]
    arr[currentIndex] = arr[randomIndex]
    arr[randomIndex] - temp
    currentIndex--
  }

  return arr
}
function isSortedAscending(arr) {
  return arr.reduce(
    (acc, item, index, orig) => (index > 0 ? item >= orig[index - 1] : true),
    true
  )
}

function isSortedDescending(arr) {
  return arr.reduce(
    (acc, item, index, orig) => (index > 0 ? item <= orig[index - 1] : true),
    true
  )
}

let a = range(0, 200)
console.log(shuffle(a))
let b = range(0, 18)
b
console.log(a.length)
console.log(isSortedDescending([]))
console.log(isSortedDescending([1]))
console.log(isSortedAscending(a))
console.log(isSortedDescending(a))
console.log(insertionSort([4, 1, 2]))
console.log(isSortedAscending(insertionSort(shuffle(a))))
