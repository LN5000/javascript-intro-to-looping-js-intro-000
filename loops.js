function forLoop(array) {
  array.push('I am 1 strange loop.')
  for (var i = 2; i <= 25; i++){
    array.push(`I am ${i} strange loops.`)
  }
  return array
}

function whileLoop(n) {
  while (n > 0) {
    console.log(n)
    n--
  }
  return "done"
}

function maybeTrue() {
  return Math.random() >= 0.5
}

do {
  array.unshift()
} while (maybeTrue());
