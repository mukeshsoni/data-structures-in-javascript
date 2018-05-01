function normalFib(n) {
  if (n <= 2) {
    return 1
  }

  return normalFib(n - 1) + normalFib(n - 2)
}

function fibMemoized(n) {
  if (n <= 2) {
    return 1
  }

  if (fibMemoized[n]) {
    return fibMemoized[n]
  }

  let result = fibMemoized(n - 1) + fibMemoized(n - 2)
  fibMemoized[n] = result
  return result
}

function topDownFib(n) {
  let fnminusone = 1
  let fnminustwo = 1
  let fib = fnminusone

  for (let i = 3; i <= n; i++) {
    fib = fnminusone + fnminustwo
    fnminustwo = fnminusone
    fnminusone = fib
  }

  return fib
}
let a
let n = 35

console.time("normalFib")
a = normalFib(n)
a
console.timeEnd("normalFib")

console.time("fib memoized")
a = fibMemoized(n)
a
console.timeEnd("fib memoized")

console.time("dp_top_down_fib")
a = topDownFib(n)
a
console.timeEnd("dp_top_down_fib")
