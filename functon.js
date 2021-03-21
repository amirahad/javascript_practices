let sayhello = function(name){
    console.log(`Greeting to ${name}`);
    console.log(`Hey ${name}`);
}

sayhello('Amir')



let fullNameMaker = function(firstname, lastname){
    console.log(`Welcome to LCO`);
    console.log(`Happy to have you, ${firstname} ${lastname}`);

}


fullNameMaker('Amir', 'Ahad' )


let myAdder = function(num1, num2){
    let added =num1 + num2
    return added
}

let result = myAdder(5,4)
console.log(result);

let myMultiplier = function(num1, num2){
    return num1 * num2
}
result = myMultiplier(10,5)
console.log(result);