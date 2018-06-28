function forLoop(array){
  for (var i = 0; i < 24; i++) {
    array[i] = "I am ${i} strange loop${i === 0 ? '' : 's'}."
  }
}
