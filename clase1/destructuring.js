var juan = {
  first: 'Juan',
  last: 'Pérez',
  age: 74,
  children: [ 'Ricardo', 'Pedro' ],
  wife: { first: 'Norma', last: 'Gutiérrez', age: 55 }
}

function printName ({
  first,
  last,
  age,
  gender = 'to be defined',
  children: [ firstSon ],
  wife: { first: wifeName }
}) {
  console.log(`${last}, ${first} has ${age} years old.`)
  console.log(`${first} is ${age > 60 ? 'an old' : 'a young'} man.`)
  console.log(`His first son is ${firstSon}`)
  console.log(`His wife's name is ${wifeName}`)
  console.log(`${first} is ${gender}`)
}

printName(juan)
