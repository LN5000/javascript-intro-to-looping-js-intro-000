function forLoop(array){
  for (var i = 1; i < 25; i++) {
    array[i] = "I am ${i} strange loop${i === 0 ? '' : 's'}."
  } 
}
