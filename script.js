let count=0;
function gameFun(){
    count++;
    console.log(count);

    if(count===1){
        document.getElementById('sawal').innerHTML="Choose a number between 1 and 10.";
    }
    else if(count===2){
        document.getElementById('sawal').innerHTML="Now multiply the chosen number by 2";
    }
    else if(count===3){
        document.getElementById('sawal').innerHTML="Choose an even number to use yourself. Add number to the one in your head.";
    }
    else if(count===4){
        document.getElementById('sawal').innerHTML="Divide the new number by 2.";
    }
    else if(count===5){
        document.getElementById('sawal').innerHTML="Subtract original number from the new number.";
    }
    else if(count===6){
        document.getElementById('sawal').innerHTML="The answer is half of the even number you chose initially.";
    }
    else{
        document.getElementById('sawal').innerHTML="Thank you for playing";
        
    }
}