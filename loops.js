function forLoop(array) {
  array.push('I am 1 strange loop.')
  for (var i = 2; i <= 25; i++){
    array.push(`I am ${i} strange loops.`)
  }
  return array
}
