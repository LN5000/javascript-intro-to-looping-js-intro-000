function forLoop() {
  array = []
  for (var i = 0; i <= 24; i++){
    array.push(`I am ${i+1} strange loop${i === 0 ? '' : 's'}.`)
  }
}
