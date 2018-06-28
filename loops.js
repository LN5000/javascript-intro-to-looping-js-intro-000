function forLoop(array){
  for (var i = 25; i < 100; i++) {
    array[i] = "I am ${i} strange loop${i === 0 ? '' : 's'}."
  }
}
