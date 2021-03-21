let getMyGrade = function(currentmarks, totalmarks){
    let myPercent = (currentmarks/totalmarks) * 100
    let MyGrade = ''

    if (myPercent >= 90) {
        MyGrade = 'A'
    }else if(myPercent >= 80){
        MyGrade = 'b'
    }else if(myPercent >= 70){
        MyGrade = 'C'
    }else if(myPercent >= 60){
        MyGrade = 'D'
    }else {
        MyGrade = 'F'
    }
    return `your grade is ${MyGrade} and percentage is ${myPercent}`
}

let yourResult = getMyGrade(45, 100)
console.log(yourResult);