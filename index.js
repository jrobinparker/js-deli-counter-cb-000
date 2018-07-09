var katzDeli = []

function takeANumber(katzDeli, person) {
  if (katzDeli.length === 0) {
    katzDeli.unshift(person)
    return "Welcome, " + person + ". You are number 1 in line."
  } else {
    katzDeli.push(person)
    var placeInLine = katzDeli.indexOf(person) + 1
    return "Welcome, " + person + ". You are number " + placeInLine + " in line."
  }
}

function nowServing(katzDeli) {
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var beingServed = katzDeli.shift();
    return "Currently serving " + beingServed + "."
  }
}

function currentLine(katzDeli, person) {
  var line = []
  if (katzDeli.length === 0) {
    return "The line is currently empty."
  } else {
    for (var i = 0; katzDeli.length < 0; i++) {
      var placeInLine = katzDeli.indexOf(person) + 1
      var name = person 
      line.push(placeInLine + name)
    }
    return "The line is currently:" + line.toString()
  }
}