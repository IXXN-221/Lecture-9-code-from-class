// Sometimes we want to create new information from
// an already existing array for example with the list below
// we wanted to generate name tags for them that said:
// "Hi I'm [name] and I study [subject]"

const studentList = [
    {name:'Steph', town: 'Wellington', age: 56, subjectStudying: 'Theatre'},
    {name:'Robert', town: 'Gore', age: 22, subjectStudying: 'Fine Arts'},
    {name:'Liz', town: 'Hawera', age: 19, subjectStudying: 'French'},
    {name:'Geoff', town: 'Napier', age: 33, subjectStudying: 'Design'},
    {name:'Randy', town: 'Christchurch', age: 37, subjectStudying: 'Politics'},
    {name:'Beth', town: 'Cust', age: 19, subjectStudying: 'Chemistry'},
    {name:'Tim', town: 'Cromwell', age: 23, subjectStudying: 'Law'},
    {name:'Jop', town: 'Whakatane', age: 27, subjectStudying: 'Biology'}
]

// Again we can ham-handedly use a for loop to achieve this result:

let nameTagArray = []
//console.log(nameTagArray)

for(let i=0; i<studentList.length; i++){
    nameTagArray[i] = `<div class='card'>Hi I'm ${studentList[i].name} and I study ${studentList[i].subjectStudying}!</div>`
}

//console.log(nameTagArray)

window.onload = () => document.getElementById("content").innerHTML = nameTagArray

// Or we can achieve this more elegantly through the
// map method. For a given array, the map method goes
// through each element of that array and returns
// something new based on what you have told it to
// do. 

// let newNameTagArray = studentList.map(student => {
//     return (`<div class='card'>Hi I'm ${student.name} and I study ${student.subjectStudying}!</div>`)
// })

// Using header tags try creating a heading for each student that 
// includes there name, age and home town.

