//calculate birth


let calculate = {
    age :21,
calAge(){

    return new Date().getFullYear() -this.age
}


}
console.log(calculate.calAge());