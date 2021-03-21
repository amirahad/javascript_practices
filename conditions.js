var whoIsHere = 'te'

if(whoIsHere === 'user'){
    console.log('Greeting user')
    console.log('Allow access')
}else if(whoIsHere === 'teacher'){
    console.log('Greeting teacher')
    console.log('Allow access to his course')
}else{
    console.log('Please varify your email for varification')
}



// grade problem

var mark = 4

if(mark >= 10){
    console.log('Amazing')
}else if(mark >= 5){
    console.log("Good")
}else if(mark >= 3){
    console.log('Poor')
}else{
    console.log('Fail')
}