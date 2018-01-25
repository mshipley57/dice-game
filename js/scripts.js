//back-end logic

function Player(name) {
  this.name = name;
  this.score = 0; // total from previous round
  this.running = 0; //total from current round
  this.total = 0; //combined total
}

Player.prototype.playerScore = function() {
  return this.name + ": " + this.total;
}

Player.prototype.addScore = function(points) {
  this.score += this.running;
}

Player.prototype.rolledOnes = function() {
  this.running = 0;
}

//function userScore = function(dice) {
function randomNumber() {
  var number = Math.ceil(Math.random() * Math.ceil(6));
  if (number === 1) {
    return ("Back to zero! Next player up!");
  } else {
    console.log("Keep rolling! You scored " + number  + " this roll.");
  };
};
  // if (diceArray(i) === 0) {
  //   alert("Next player up!")
  // };
  // randomNumber();
// $(this).submit("input#new-name").val();
//  //front-end logic
$(document).ready(function(){
  $("#addButton").click(function(event){
    event.preventDefault();


    // var playerScore = randomNumber(min, max);
    var inputtedName = $("input#new-name").val();
    newPlayer1 = new Player(name);
    newPlayer2 = new Player(name);

        $("#output").text(inputtedName);
  });
});
