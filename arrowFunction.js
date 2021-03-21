const myTodos = [{
    title: 'Buy Bread',
    isDone: false,
},{
    title: 'Go TO Gym',
    isDone: false,
},{ 
    title: 'Homework',
    isDone: true,
},{
    title: 'Shower',
    isDone: false,
},{
    title: 'praying',
    isDone: true,
},{ 
    title: 'Sleeping',
    isDone: true,
}]

const thingsDone = myTodos.filter((todo) => todo.isDone === true)
thingsDone.forEach(things => console.log(things.title))
