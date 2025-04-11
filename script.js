let btnref=document.querySelectorAll(".icon");
let resetbtn=document.querySelector("#reset");
let newgamebtn=document.querySelector(".new-game");
let resultref=document.querySelector(".result-page");
let message=document.querySelector(".message");
let playerturn=document.querySelector(".player-turn")

//Array defenition for the winning

let winningPattern = [
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [2,5,8],
    [3,4,5],
    [1,4,7],
    [2,4,6],
    [6,7,8],
];

//Disable all buttons

const disableButtons = () =>{
    btnref.forEach((element) => (element.disabled=true));
    resultref.classList.remove("hide");

    
};

const enableButtons = () =>{
    btnref.forEach((element) => {
        element.innerText="";
        element.disabled=false
    })
    playerturn.innerHTML="X Turn";
    //Hide  result page.
    resultref.classList.add("hide");
}

//Announce the winner function
const winfunction = (letter) => {
    disableButtons(); 
    if(letter=="X"){
        message.innerText=" X Wins the Match";
    }
    else{
        message.innerText=" O wins the Match";
    }
 }

 //Function for draw
const drawFunction = () => {
    disableButtons();
    message.innerHTML = " It's a Draw";
  };
  //New Game
  newgamebtn.addEventListener("click", () => {
    count = 0;
    enableButtons();
  });

 resetbtn.addEventListener("click", () => {
    count = 0;
    enableButtons();
  });
  

//Winner function defenition 

const winnerCheck = ()=>{
    for(let i of winningPattern){
        let [element1,element2,element3] =
        [btnref[i[0]].innerText,
        btnref[i[1]].innerText,btnref[i[2]].innerText];
    

    if(element1 !="" && element2!="" && element3!=""){
        if(element1===element2 && element2===element3){
                winfunction(element1);
        }
    }
}
}

//Player X plays first

let xTurn=true
let count=0;
btnref.forEach((element) => {
      element.addEventListener("click", () => {
        if(count % 2==0){
            console.log(count);
            playerturn.innerHTML="O turn";
        }
        else{
            playerturn.innerHTML="X turn";
        }
    if (xTurn) {
    
      xTurn = false;
      //Display X
      element.innerText = "X";
      element.disabled = true;
    } else {
       
      xTurn = true;
      //Display Y
      element.innerText = "O";
      element.disabled = true;
    }
    //Increment count on each click
    count += 1;
    if (count == 9) {
      drawFunction();
    }
    //Check for win on every click
    winnerCheck();
  });
});

window.onload = enableButtons();
