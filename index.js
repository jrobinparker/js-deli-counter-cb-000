var katzDeli = []

function takeANumber(person) {
  if (katzDeli.length === 0) {
    katzDeli.unshift(person)
  } else {
    katzDeli.push(person)
  }
}

functin