var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
katzDeliLine.push(name);
//var welcomeMessage = "Welcome, " + name + ". you are number " + katzDeliLine.length + " in line."
return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
//return  welcomeMessage;
}
//takeANumber("You are number 1.")

takeANumber(x) // you are number 1 
takeANumber(x) // you are number 2
nowServing(x) // currently serving 1 
nowServing(x) // currently serving 2
takeANumber(x) // you are number 3  





function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
       }
 var name = katzDeliLine.shift()''
return "Serving food to " + name +  "."


  }


  function currentLine(katzDeliLine) {
// for (var i = 0; i < katzDeliLine.length; i++) {
//
//   return "The line is currently " +  katzDeliLine

  if (katzDeliLine.length === 0) {
    return "The line is currently empty"
  } else {
      for (var i = 0; i < katzDeliLine.length; i++) {

      return "The line is currently " +  katzDeliLine
  }
}
}     
