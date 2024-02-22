let showroom = {

model:'xuv 900',
year: 2020,
price:1200000,
variant:"petrol",
colour:["red","black","white","yellow"],
Age:2003,

audi:{

    eModel:"Audi 350T9",
    emodel: "tyu90"
},

 breeze(){

return `${this.model} ${this.year}
${this.price}${this.variant} `
},

}
let ExShowroom = {
 
    model : "breeze",
    colour:["maroon", "orange"],
    price: 4500000,

     CalAge(){
return new Date().getFullYear() - this.Age

     } 
}

// object merging syntax object.assign(value,value)

Object.assign(showroom,ExShowroom)

console.log(showroom);

// document.getElementById('trust').innerHTML = showroom.price
console.log(showroom.audi);
console.log(showroom.CalAge());
