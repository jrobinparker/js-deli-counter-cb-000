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

function currentLine(katzDeli) {
  var line = []
  if (katzDeli.length === 0) {
    return "The line is currently empty."
  } else if (katzDeli.length > 0) {
    for (var i = 0; katzDeli.length < 0; i++) {
      var theLine = katzDeli.join(" ")
      line.push(theLine)
    }
    var line
    return "The line is currently: " + line.join(" ")

  }
}