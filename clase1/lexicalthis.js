var bob = {
  _name: "Bob",
  _friends: [],
  addFriends: function (name) {
    this._friends.push(name)
  },
  printFriends: function () {
    this._friends.forEach(f =>
      console.log(this._name + " knows " + f)
    )
  }
}
bob.addFriends('Juan')
bob.printFriends()

var peter = {
  _name: "Peter",
  _friends: [],
  addFriends: function (name) {
    this._friends.push(name)
  },
  printFriends: function () {
    var self = this
    this._friends.forEach(function (f) {
      console.log(self._name + " knows " + f)
    })
  }
}
peter.addFriends('Juan')
peter.printFriends()
