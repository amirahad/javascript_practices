let ahad = new Map()

ahad.set('name', 'Amir Ahad')
ahad.set('age', 19)
ahad.set('job', 'student')
ahad.set('os','windows')
ahad.set('mobileos','android')

console.log(ahad);
console.log(ahad.age);
console.log(ahad.size);

// ahad.forEach((value,key) => console.log(`key is :${key} and value is :${value}`))

for (const [key,value] of ahad.entries()) {
    console.log(`key is :${key} and value is :${value}`)
}
for (const [key,value] of ahad.entries()) {
    console.log(`${key} : ${value}`)
}

console.log(ahad.name);