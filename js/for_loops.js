// function showMultiplicationTable(num){
//     for (var i = 1; i <= 10; i++) {
//         console.log( num + 'x' + i + "=" + (num * i));
//     }
// }
// showMultiplicationTable(7)
//


for (var i=0; i< 10; i++){
    var number = Math.floor(Math.random() * 180) + 20;


     console.log(number + odd(number));
}

function odd(number){
          if( number%2>0 ){
          return " is odd";}
          else{ return " is even";}
          }


for (var i = 1; i <=9; i++) {
    i= i.toString();
    console.log(i.repeat(i));
}
for (var i = 100;i>=5; i -= 5) {
    console.log(i);
}