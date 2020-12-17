//var tweet = prompt("Compose your tweet: ");
//alert("You have written " + tweet.length + " characters, you have " + (140 - tweet.length) + " characters remaining.");



//Slice
//var tweet = prompt("Compose your tweet: ");
//var tweetUnder140 = tweet.slice(0,140);
//alert(tweetUnder140);


//var tweet = prompt("Compose your tweet:");
//alert(tweet.slice(0,140));


//alert(prompt("Compose your tweet:").slice(0,140));


//UpperCase e LowCase
//var name = "Angela";
//name.toUpperCase();

//var name = "Angela";
//name = name.toUpperCase();
//name = name.toLowerCase();



//UpperCase and Slice
//Easy way First letter


//var name = prompt("Type your name: ");
//var name2 = name.charAt(0).toUpperCase() + name.slice(1);
//alert("Hello "+ name2);



// Difficult way
//var name = prompt("Whats is your name?");
//var firstChar = name.slice(0,1);
//var upperCaseFirstChar = firstChar.toUpperCase();
//var restOfName = name.slice(1,name.length);
//var capitalisedName= upperCaseFirstChar + restOfName;
//alert("Hello, " + capitalisedName);

//Dog Age
//var dogAge = prompt("How old is your dog?");
//var humanAge = ((dogAge-2) * 4) + 21;
//alert ("Your dog is " + humanAge + " years old in human years.");

//Cat Age
/*var catAge = prompt("How old is your cat?");
var humanAge = catAge;
if(catAge == 1){humanAge = 15;} 
else if(catAge == 2){humanAge = 24;}
else if(catAge == 3){humanAge = 28;}
else if(catAge == 4){humanAge = 32;}
else if(catAge == 5){humanAge = 36;}
else if(catAge == 6){humanAge = 40;}
else if(catAge == 7){humanAge = 44;}
else if(catAge == 8){humanAge = 48;}
else if(catAge == 9){humanAge = 52;}
else if(catAge == 10){humanAge = 56;}
else if(catAge == 11){humanAge = 60;}
else if(catAge == 12){humanAge = 64;}
else if(catAge == 13){humanAge = 68;}
else if(catAge == 14){humanAge = 72;}
else if(catAge == 15){humanAge = 76;}
else if(catAge == 16){humanAge = 80;}
else if(catAge == 17){humanAge = 84;}
else if(catAge == 18){humanAge = 88;}
else if(catAge == 19){humanAge = 92;}
else if(catAge == 20){humanAge = 96;}

alert ("Your dog is " + humanAge + " years old in human years.");
*/




//Numeros positivos e negativos
/*
var n1 = prompt ("digite um número:");
var n2 = prompt ("digite um número:");
var n3 = prompt ("digite um número:");
var n4 = prompt ("digite um número:");
var n5 = prompt ("digite um número:");
var n6 = prompt ("digite um número:");
var pos = 0;
var neg = 0;

  if (n1 > 0) {pos = pos +1;}
  else if (n1 < 0){neg = neg +1;}

  if (n2 > 0){pos = pos+1;} 
  else if (n2 < 0){neg = neg+1;}

  if (n3 > 0){ pos = pos+1;}
  else if (n3 < 0){neg = neg+1;}

  if (n4 > 0) {pos = pos+1;}
  else if (n4 < 0){neg = neg+1;}

  if (n5 > 0) {pos = pos+1;}
  else if (n5 < 0){neg = neg+1;}
     
  if (n6 > 0) {pos = pos+1;}
  else if (n6 < 0){neg = neg+1;}
alert ("Valores positivos: " + pos + ".");
alert ("Valores negativos: " + neg + ".");
*/


//Numeros positivos
/*
var n1 = prompt ("digite um número:");
var n2 = prompt ("digite um número:");
var n3 = prompt ("digite um número:");
var n4 = prompt ("digite um número:");
var n5 = prompt ("digite um número:");
var n6 = prompt ("digite um número:");
var pos = 0;


  if (n1 > 0) {pos = pos +1;}

  if (n2 > 0){pos = pos+1;} 

  if (n3 > 0){ pos = pos+1;}


  if (n4 > 0) {pos = pos+1;}


  if (n5 > 0) {pos = pos+1;}

     
  if (n6 > 0) {pos = pos+1;}

alert ("Valores positivos: " + pos + ".");
*/


//LIFEINWEEKS
/*
function lifeInWeeks(age){
  var yearsRemaining = 90 - age;
  var days = yearsRemaining * 365;
  var weeks = yearsRemaining * 52;
  var months = yearsRemaining * 12;

  console.log("You have " + days = "days, "+ weeks + "weeks, and " + months + 
"months left.");
}

lifeInWeeks(12);
*/



//BMI Calculator
/*function bmiCalculator(weight, height){
  var bmi = weight / (height * height);
  return bmi;
  var bmi = bmiCalculator(65, 1.8);
  console.log(bmi); 
}
*/

/*function bmiCalculator(weight, height){
  var bmi = weight / Math.pow(height, 2);
  return bmi;
  var bmi = bmiCalculator(65, 1.8);
  console.log(bmi);

}
*/

/*function bmiCalculator(weight, height){
  var bmi = weight / (height * height);
  return Math.round(bmi);

}
*/

// Random numbers

/*var n = Math.random();
n = n * 6;
n = Math.floor(n) + 1;
console.log(n);
*/

/*
prompt ("digite um nome:");
prompt ("digite um nome:");
var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;
if(loveScore > 70){
    alert("Your love score is " + loveScore + "%. " + "You love each other like Kanye loves Kanye.");
  }
  if (loveScore > 30 && loveScore <= 70){
    alert("Your love score is " + loveScore + "%"); 
  }0
  else{
    alert("Your love score is " + loveScore + "%");
  }

*/

/*
function isLeap(year){
  if(year % 4 === 0){
    if(year % 100 === 0){
      if(year % 400 === 0){
        return "Leap year.";      
    } else {
      return "Not leap year.";
    }
  } else {
    return "Leap year.";
  }
} else {
  return "Not leap year.";
  } 
}
*/

//Arrays
/*
var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];

var guestName = prompt("Whats is your name?");
if (guestList.includes(guestName)) {
    alert("Welcome!");
} else {
    alert("Sorry! Maybe next time!");

}
*/


/*FIZZBUZZ
var output = [];
var count = 1;
function fizzBuzz() {

  if(count % 5 === 0 && count % 3 === 0){
    output.push("FizzBuzz");
  }

  else if (count % 3 === 0){
    output.push("Fizz");
  } 
  else if (count % 5 === 0){
    output.push("Buzz");
  }
  else {
    output.push(count);
  }
  count++;

  console.log(output);
}
*/

/*

*/
/* WHOS PAYING
function whosPaying(names) {
var numberOfPeople = names.length;
var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
var randomPerson = names[randomPersonPosition];

return randomPerson + " is going to buy lunch today!";

}
*/


/* WHILE LOOP
var output = [];
var count = 1;
function fizzBuzz() {

  while(count <=100){

  if(count % 5 === 0 && count % 3 === 0){
    output.push("FizzBuzz");
  }

  else if (count % 3 === 0){
    output.push("Fizz");
  } 
  else if (count % 5 === 0){
    output.push("Buzz");
  }
  else {
    output.push(count);
  }
  count++;
  }
  console.log(output);
}
*/

/*
var numberOfBottles = 99
while (numberOfBottles >= 0) {
    var bottleWord = "bottle";
    if (numberOfBottles === 1) {
        bottleWord = "bottles";
    } 
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
	numberOfBottles--;
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
}
*/

/*
var output = [];
var count = 1;
function fizzBuzz() {

  for(var count = 1; count < 101;count++){

  if(count % 5 === 0 && count % 3 === 0){
    output.push("FizzBuzz");
  }

  else if (count % 3 === 0){
    output.push("Fizz");
  } 
  else if (count % 5 === 0){
    output.push("Buzz");
  }
  else {
    output.push(count);
  }
  count++;
  }
  console.log(output);
}
*/


/*
function fibonacciGenerator (n){
  var output = [];
  if(n === 1){
      output = [0];
    }

  else if (n === 2){
      output = [0,1];
  }
  else{
    output = [0,1];

    for (var i=2;i<n;i++){
      output.push(output[output.length - 2] + output[output.length - 1]);
    }
  }
  return output;
}
output = fibonacciGenerator(5);
console.log(output);
*/