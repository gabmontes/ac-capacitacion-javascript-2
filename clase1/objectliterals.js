var juan = {
  name: 'Juan',
  lastname: 'Pérez',
  age: 31
}

var name = 'Alfredo'
var lastname = 'González'
var age = 54

function getFullName () {
  return this.name + ' ' + this.lastname
}

var propName = 'gender'

var alfredo = {
  name: name,
  lastname: lastname,
  age: age,
  getFullName: getFullName,
  nextAge: function () { return this.age + 1}
}
alfredo[propName] = 'm'
console.log(alfredo.getFullName())

var alfredo2 = {
  name,
  lastname,
  age,
  getFullName,
  nextAge () { return this.age + 1 },
  ['_' + propName]: 'm'
}
console.log(alfredo2.getFullName())
console.log(alfredo2.nextAge())
