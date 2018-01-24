//back-end logic

function Player(name, score, running, total) {
  this.name = name;
  this.score = score; // total from previous round
  this.running = running; //total from current round
  this.total = total; //combined total
}

Player.prototype.playerScore = function() {
  return this.name + ": " + this.total;
}

Player.prototype.addScore = function(points) {
  this.total += points
}

Player.prototype.rolledOnes = function() {
  this.score = 0
}

//function userScore = function(dice) {
function randomNumber() {
  var number = Math.ceil(Math.random() * Math.ceil(6));
  if (number === 1) {
    console.log ("Back to zero! Next player up!");
  } else {
    console.log("Keep rolling! You scored " + number + " this roll.");
  };
};
  // if (diceArray(i) === 0) {
  //   alert("Next player up!")
  // };
  // randomNumber();

//  //front-end logic
$(document).ready(function(){
  $("#roll").click(function(event){
    event.preventDefault();
    var playerScore = randomNumber(min, max);
    var inputtedName = $(this).submit("input#new-name").val();
    var newPlayer = new Player (inputtedName);


  });
});
