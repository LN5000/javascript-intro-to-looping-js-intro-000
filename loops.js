function forLoop() {
  array = []
  for (var i = 0; i <= 33; i++){
    array.push(`I am ${i} strange loop${i === 0 ? '' : 's'}.`)
  }
  return array
}
