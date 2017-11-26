const $ = require('jquery')

$(document).ready(function () {
  const header = $('<header/>')
  header.append('<h1>Hola Skynet!</h1>')

  $('#root').append(header)
})
