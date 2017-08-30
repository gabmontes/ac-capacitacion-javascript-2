var n = 0
function sequence () {
  return n++
}
console.log(sequence())
console.log(sequence())
n = 5
console.log(sequence())

// ---

function sequence2 () {
  var current = 0
  return {
    next: function () {
      return current++
    }
  }
}
var seq = sequence2()
console.log(seq.next())
console.log(seq.next())
console.log(seq.next())

var seq2 = sequence2()
console.log(seq2.next())
console.log(seq2.next())
