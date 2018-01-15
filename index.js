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
