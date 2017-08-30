var splitName = name => {
  var parts = name.split(' ')
  return {
    firstname: parts[0],
    lastname: parts[1]
  }
}
console.log(splitName('Juan Pérez'))

var joinName = (firstname, lastname) => firstname + ' ' + lastname
console.log(joinName('Juan', 'Pérez'))

var getRandom = () => Math.random()
console.log(getRandom())
