function theBeatlesPlay(instrs,musicians) {
  var arrOut = [];
  for (var loop = 0; loop <= instrs.length-1; loop ++){
    arrOut[loop] = musicians[loop]+" plays "+instrs[loop];
  }
  return arrOut;
}
