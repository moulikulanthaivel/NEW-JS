var chocolate = 'mouli'
var $chocolate = 'hhhh'
var _chocolate = 'hhhh'
var chocolate = 'khjhjh'


console.log( "LOCAL SCOPE" + chocolate , $chocolate , _chocolate);


//  1.global scope
//  2.local scope

//function 
//function kulla var vantha local scope.
//function veliya var vantha local scope.

function changeColor(){
    var icecream = 'vanilla'
  var chocolate = "diary milk"
    console.log( "GLOBAL SCOPE " + $chocolate,chocolate , icecream); // this is a local scope

   
}
changeColor();


//disadvantage of var


/*
var is a only using function
*/

let movieName = 'jailer' //  this a global scope

function changeMovie(){
// function scope

let movieName = 'leo'

console.log(movieName);
}
changeMovie();

for(var i=0 ; i<=13; i+=5){  //  this a block scope
    console.log('rows',i );
}
// console.log(i);


//constant variable
//const variable ah change panna mudiyathu 



// const array la use panniklam

const favPerson = ['amma']
favPerson.push('appa')
favPerson.push('bro and sis')
console.log(favPerson);
