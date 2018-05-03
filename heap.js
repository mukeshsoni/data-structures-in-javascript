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

function left(i) {
  return i * 2 + 1
}

function right(i) {
  return i * 2 + 2
}

function parent(i) {
  return Math.floor((i - 1) / 2)
}

function maxHeapify(A, i) {
  const l = left(i)
  const r = right(i)
  let largest = i

  if (l < A.heapSize && A[l] > A[i]) {
    largest = l
  }

  if (r < A.heapSize && A[r] > A[largest]) {
    largest = r
  }

  if (largest !== i) {
    let temp = A[i]
    A[i] = A[largest]
    A[largest] = temp
    maxHeapify(A, largest)
  }
}

let d = [2, 4, 5, 3, 0, 1, 6]
d.heapSize = d.length - 1
maxHeapify(d, 0)
console.log("maxHeapify(d, 0)", d)

function isMaxHeap(A) {
  let i = Math.floor(A.heapSize / 2) - 1

  for (i; i >= 0; i--) {
    if (A[i] > A[parent(i)]) {
      return false
    }
  }

  return true
}

function buildMaxHeap(arr) {
  arr.heapSize = arr.length
  let i = Math.floor((arr.length - 2) / 2)
  i
  // TODO - this will actually fail because the math only works
  // if the indexing starts from 1
  // in our case, if we have 7 elements, Math.floor(7/2) === 3, which is a leaf node and not one of the
  // parent nodes
  // if the indexing started from 1 (root node is 1), then Math.floor(7/2) === 3, which is the right
  // child to root and also a parent (not a leaf)
  // maybe we can fix it be changing the math to i = Math.floor(arr.length/2) - 1
  for (i; i >= 0; i--) {
    maxHeapify(arr, i)
  }
}

function heapSort(arr) {
  buildMaxHeap(arr)
  //   console.log(arr.length);

  for (let i = arr.length - 1; i >= 1; i--) {
    // exchange top of heap with last element in heap
    // console.log(i, arr);
    const temp = arr[i]
    arr[i] = arr[0]
    arr[0] = temp
    // console.log(i, arr)
    // maxHeapify butLast(arr)
    arr.heapSize = arr.heapSize - 1
    maxHeapify(arr, 0)
    // console.log(i, arr)
  }
}

let a = range(0, 6)
a

console.log(left(0))
console.log(right(0))
console.log(left(1))
console.log(right(1))
console.log(left(2))
console.log(right(2))

// let c = shuffle(a)
// c
// console.log(isMaxHeap(c))
// buildMaxHeap(c)
// console.log(c)
// console.log(isMaxHeap(c))

a = range(0, 6)
c = shuffle(a)
c
console.log(isSortedAscending(c))
heapSort(c)
c
console.log(isSortedAscending(c))
