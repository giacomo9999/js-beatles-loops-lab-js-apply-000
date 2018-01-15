function theBeatlesPlay(musicians,instrs) {
  var arrOut = [];
  for (var loop = 0; loop <= instrs.length-1; loop ++){
    arrOut[loop] = musicians[loop]+" plays "+instrs[loop];
  }
  return arrOut;
}

function johnLennonFacts(arrIn){
  var arrOut = [];
  for (var loop = 0; loop <= arrIn.length-1; loop ++){
    arrOut[loop] = arrIn[loop]+"!!!";
  }
  return arrOut;
}

function iLoveTheBeatles(num){
  var arrOut = ["I Love The Beatles!"];
  var loop = 0;
  if (num > 15){
    while (loop <= num){
      arrOut.push(""I Love The Beatles!"");
    }
  }
  return arrOut;
}
