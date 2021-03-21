const myTodos = [{
    tittle: 'Buy Bread',
    isDone: false,
},{
    tittle: 'Go TO Gym',
    isDone: false,
},{ 
    tittle: 'Homework',
    isDone: true,
}]

// let index = myTodos.findIndex(function(todo){
//     return todo.tittle === 'Homework'
// })
// console.log(index);


const findTodo = function(myTodos, tittle){
    const index = myTodo.findIndex(function(todo, index){
        return todo.tittle.toLowerCase() === tittle.toLowerCase()
    })
    return myTodos[index]
}
let a = findTodo(myTodos, 'go to gym')
console.log(a);


