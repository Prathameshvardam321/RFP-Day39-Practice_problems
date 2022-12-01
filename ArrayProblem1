//ArrayProblem
//MapProblem
console.log("")
let array = [10]
for(let i=0;i<10;i++){
let number = Math.floor(Math.random()*900)+100
array[i]=number
}
console.log(array)
let largestNumber = array[0]
let secondLargestNumber = array[9]
let smallestNumber = array[9]
let secondSmallestNumber = array[0]
for(element of array){
    if(element>largestNumber){
        secondLargestNumber = largestNumber
        largestNumber = element
    }else if(element>secondLargestNumber && element != largestNumber){
        secondLargestNumber = element
    }
    if(element<smallestNumber){
        secondSmallestNumber = smallestNumber
        smallestNumber = element
    }else if(element<secondSmallestNumber && element != smallestNumber){
        secondSmallestNumber = element
    }
}
console.log("Largest",largestNumber)
console.log("Secondlargest",secondLargestNumber)
console.log("Smallest",smallestNumber)
console.log("Secondsmallest",secondSmallestNumber)