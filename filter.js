// Finding elements in an array that match a certain
// criteria is a useful piece of functionality when
// creating websites. For example if I wanted to be able
// to find the people below who were registered to vote:

const voterList = [
    {name:'Steph', age: 56, registeredToVote: true},
    {name:'Robert', age: 42, registeredToVote: false},
    {name:'Liz', age: 19, registeredToVote: true},
    {name:'Geoff', age: 33, registeredToVote: false},
    {name:'Randy', age: 37, registeredToVote: true},
    {name:'Beth', age: 22, registeredToVote: true},
    {name:'Tim', age: 63, registeredToVote: false},
    {name:'Jop', age: 77, registeredToVote: true}
]

// This can be achieved ham-handedly using a for loop and
// some setup i.e.

let registeredVoters = []

for(let i=0; i<voterList.length; i++){
    if(voterList[i].registeredToVote == true){
        registeredVoters.push(voterList[i]);
    }
}

console.log(registeredVoters)

//Another way to do it uses the filter() method

// The filter method creates a new array by going through 
// each element in an array and applies a true/false test to it.

// If the test returns true (ie.e 1==1) then the original element 
// is added into the new array.

// If the test returns false (ie.e 1==2) then the original element 
// is NOT added into the new array.

// This leaves us with a new array that contains a subset of the original
// array that passes the test.

// let voters = voterList.filter(people => {
//     return (people.registeredToVote == true)
// })

// console.log(voters)


// Try filtering the voterList by ages over 35

// Try filtering the voterList for people under 50 who are not register
// to vote.