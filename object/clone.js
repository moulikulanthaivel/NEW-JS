let Name = {
name:"mouli",
age:21

}
let eName ={
name : "navani",
age:22

}
let nameChanged = Object.assign({},eName)
console.log(Name,nameChanged);


//spread operator

let fullData = {...Name , ...eName}
console.log(fullData);
