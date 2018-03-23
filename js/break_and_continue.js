 var pickNumber = confirm("Would you like to pick a number?");
    if (pickNumber) {
    var userNum;
    userNum = prompt("Please pick a number");

     if (!isNaN(userNum) ){

         if (isEven(userNum)) {
             alert("Your number is even");
         } else {
             alert("Your number is odd");
         }

         if(isPositive(userNum)){
             alert("Your number is positive");
         } else {
             alert("Your number is negative")
         }

         alert("Your number is "+ plusHundred(userNum));
     }
 }

 function isEven(number) {
     return(number%2===0);
}

 function plusHundred(number){
     return (parseInt(number) + 100);
 }

 function isPositive(number){
    return (number > 0);
}