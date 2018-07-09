var katzDeli = []

function takeANumber(katzDeli, person) {
  if (katzDeli.length === 0) {
    katzDeli.unshift(person)
  } else {
    katzDeli.push(person)
  }
}

function nowServing(katzDeli) {
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    beingServed = katzDeli.shift();
    return "Now serving ${beingServed}"
  }
}

function currentLine(katzDeli) {
  if (katzDeli.length === 0) {
    return "The line is currently empty."
  } else {
    for (var i = 0; katzDeli.length < 0; i++) {
      return "The line is currently:" + katzDeli[i]
    }
  }
}