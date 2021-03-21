const days = ['sat', 'sun', 'mon', 'tue', 'wed', 'thr', 'fri']

for (let index = 0; index < days.length; index++) {
    console.log(days[index]);
}

for (let index = days.length-1; index >= 0; index--) {
    console.log(days[index]) 
}

const myToDo = []

myToDo.unshift('Shoping')
myToDo.unshift('Coding')
myToDo.unshift('WorkOut')

for (let index = 0; index < myToDo.length; index++) {
    console.log(`Your task no. ${index +1} is: ${myToDo[index]}`);
}

myToDo.forEach(function (todo, index) {
    
    console.log(`Your task no. ${index +1} is: ${todo}`);
    
});