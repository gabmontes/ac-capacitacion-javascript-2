var values = [2, 5, 6]

var results = []
for (var i = 0; i < values.length; i++) {
  results.push(values[i] + 1)
}
console.log(results) // [3, 6, 7]

var results2 = values.map(function (n) {
  return n + 1
})
console.log(results2) // the same

var results3 = values.map(n => n + 1)
console.log(results3) // the same

var sum1 = function (n) {
  return n + 1
}
console.log(values.map(sum1))

var sum1arrow = n => n + 1
console.log(values.map(sum1arrow))
