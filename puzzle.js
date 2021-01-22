
// make the shuffle for the starting point of the game 

function shuffle () {
	puzzlePieces.sort(function() {return Math.random() - 0.5});
//	console.log(puzzlePieces);

getPuzzle ()
updateCountdown ();
} 

function unSelect() {
  for (let boxes=0;boxes<=8;boxes++) {
    document.getElementById("img_" + boxes).style.border = null;
    }
}

//get this function when we select a picture of the Table

function select (box) {



//counting selects on boxes
  clickNumber = clickNumber + 1;
  
  console.log ("click numero" + clickNumber)

  if (clickNumber == 1){
    firstClickNumber= box;
    unSelect();
    document.getElementById("img_" + box).style.border = "solid 2px red";
    console.log("memorizo el primer click" + firstClickNumber); 
  }



  if (clickNumber == 2)
    {
        let secondClickNumber = box;

        // change value positions on the array
        let content = puzzlePieces[firstClickNumber];

        // change value positions on the array
        
        puzzlePieces[firstClickNumber] = puzzlePieces[secondClickNumber];

        // change the valur for the second click in the first one.

        puzzlePieces[secondClickNumber] = content;

        clickNumber = 0 ;

        getPuzzle();
        unSelect();

            // check if the puzzle is complete
      let win = completePuzzle();
      if (win == true) {
        setTimeout(function(){
           alert("Congratulation you win");
        }, 300);
      }
    }
  }


  function completePuzzle (){
    
    //Step through the entire array and check all the values are in the correct position
    let win = true;
    for (let i=0;i<=8;i++) {
      if (puzzlePieces[i] != i) {
        win = false;
      }
    }
    return win;
  }
  


function getPuzzle (){
  for (let boxes=0;boxes<=8;boxes++) {
    // get the number from the array 
    let image = puzzlePieces[boxes];
    // take the img from the number that we get from the array
    document.getElementById("img_" + boxes).src = "img/img_" + image + ".jpg";
    }
}



let puzzlePieces = [0,1,2,3,4,5,6,7,8];

//second selection 

var clickNumber = 0;

var firstClickNumber;

const startingTime = 10;

let time = startingTime * 60;

const countdownElement = document.getElementById("time");

setInterval(updateCountdown, 1000);

function updateCountdown (){
  const minutes = Math.floor (time / 60);
  let seconds = time % 60;

  seconds = seconds < 10 ? '0' + seconds : seconds;

  countdownElement.innerHTML= `${minutes}: ${seconds}`;
  time--;
  
}
