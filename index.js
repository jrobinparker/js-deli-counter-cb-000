var katzDeli = []

function takeANumber(katzDeli, person) {
  if (katzDeli.length === 0) {
    katzDeli.unshift(person)
  } else {
    katzDeli.push(person)
  }
}

function nowServing(katzDeli, person) {
  if (katzDeli.length === 0) {
    return "The line is currently empty."
  } else {
    return "Now serving ${katzDeli[0]}";
    katzDeli.shift(person)
  }
}

function currentLine(katzDeli) {
  if (katzDeli.length === 0) {
    return "The line is currently empty."
  } else {
    
  }
}