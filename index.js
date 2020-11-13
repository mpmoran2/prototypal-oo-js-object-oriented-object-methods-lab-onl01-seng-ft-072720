// In `index.js`, write a constructor function called `BoardMember` that sets the following properties: `name`, `homeState`, and `training`.
function BoardMember (name, homeState, training) {
  this.name = name
  this.homeState = homeState
  this.training = training
}
// Add following methods to the class:
// - `veto` — returns `No, I must disagree`
BoardMember.prototype.veto = function() {
  return `No, I must disagree`
}

// - `approve` — returns `You can do that!`
BoardMember.prototype.approve = function() {
  
}

// - `doCharity` — returns `I like to help people.`
BoardMember.prototype.doCharity = function() {
  
}

// - `releasePressStatement` — returns `You will see great things from Scuber.`
BoardMember.prototype.releasePressStatement = function() {
  
}

// - `sayHi` — returns `"Hi, my name is <name>. I am from <homestate>, and I was trained in <training>.`
BoardMember.prototype.sayHi = function() {
  
}