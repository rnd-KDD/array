

 let array=[23,12,423,324,53,654654,21312,4214,234,3254,235,435,122,6,54,67,75,12321]

 console.log(array.length)  


 console.log(array[1])

let numbers=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]

 numbers.splice(5,1) 

 numbers.splice(10,2)  
 numbers.splice(-10,4)

 numbers.unshift(-1)  
  numbers.splice(0,1)
 numbers.unshift(-2)  

 numbers.splice(0,0,"bbb")

 numbers.splice(11,5,"y")

let ten = numbers.slice(1,11)

console.log(numbers)
console.log(numbers.slice(1,4))
console.log(ten)

numbers.slice(1,4)