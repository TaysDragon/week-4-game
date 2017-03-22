console.log("connected");

//start score at 0
var score = 0;
var startNumber = 0;
var crystal1 = Math.floor(Math.random() * (12 - 1) + 1);
var crystal2 = Math.floor(Math.random() * (12 - 1) + 1);
var crystal3 = Math.floor(Math.random() * (12 - 1) + 1);
var crystal4 = Math.floor(Math.random() * (12 - 1) + 1);                          
var targetNumber= Math.floor(Math.random() * (120 - 19) + 19);
var win;
var lose;

console.log(targetNumber, crystal1,crystal2,crystal3,crystal4 );


//function when the user clicks crystal 1 they get the randomly assigned points added to their running total
//var startNumber = 0;
$('button').click(function (currentvalue){
	console.log("CLICKED"+" " + crystal1);
   total = startNumber +  crystal1;
   console.log(total);
    $('.total').text("Total: "+startNumber);   
    document.getElementById("total").innerHTML = total;     
});












//$('.total').text(startNumber); 

//function to compare running total to randomly generated target number

// stop game when user makes over target points or makes target points



//
//parseInt()
// = n === ()
// = n <||>()



