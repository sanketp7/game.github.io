let user = document.getElementById("user-input");
let message = document.getElementById("message");
// let computerDisplay = document.getElementById("computer-Input");
let button = document.getElementById("button");

 let computerValue = document.getElementById("computer-value")
const click = ()=>{

    let computer =parseInt( Math.random()*3);

    let computerInput;
if(computer==0){
    computerInput="S";
}
else if(computer==1){
    computerInput="W";
}
else if(computer==2){
    computerInput="G";
}

 
//   computerValue.innerHTML=computerInput;

    message.innerHTML=matchIt(user.value,computerInput)

}


const matchIt = (user , computer) =>{

    // computerValue.innerHTML=computer;

    if (user == computer) {
        return "Match Ti"
    }
    else if (user == "S" && computer=="W") {
        computerValue.innerHTML=computer;
        return  "User Win!!"
    }
    else if (user == "W" && computer=="S") {
        computerValue.innerHTML=computer;
        return "Computer Win!!"
    }
    else if (user == "G" && computer=="S") {
        computerValue.innerHTML=computer;
        return "User Win!!"
    }
    else if (user == "S" && computer=="G") {
        computerValue.innerHTML=computer;
        return "Computer Win!!"
    }
    else if (user == "W" && computer=="G") {
        computerValue.innerHTML=computer;
        return "User Win!!"
    }
    else if (user == "G" && computer=="W") {
        computerValue.innerHTML=computer;
        return "Computer Win!!"
    }
    else if (user == "") {
        return "Please Enter SomeInput"
    }
    else{
        return "Please Enter The Correct Input"
    }
}
button.addEventListener('click', click);