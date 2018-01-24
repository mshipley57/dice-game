//back-end logic

function player(name, score) {
  this.name = name;
  this.score = score;
}

//function userScore = function(dice) {
function randomNumber() {
  var number = Math.ceil(Math.random() * Math.ceil(6));
  if (number === 1) {
    alert("Next player up!")
  }  else {
    (number === 2 || 3 || 4 || 5 || 6)
    alert("Keep rolling!")
  };
};
  // if (diceArray(i) === 0) {
  //   alert("Next player up!")
  // };
  randomNumber();
  console.log(randomNumber);

//  //front-end logic
// $(document).ready(function(){
//   $("#roll").click(function(event){
//     event.preventDefault();
//     var playerScore = randomNumber(min, max);
//
//
//
// });
// });
