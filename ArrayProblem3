let arr = [undefined]
let number = 1235
let count = 0
let index = 0
for(let i =2;i<number;i++){
    if(number%i==0){
        count = 0
        for(let j =2;j<i;j++){
            if(i%j==0){
                count = 1
                break
            }
        }
      if(count==0){
        arr[index] = i
        index++
      }  
    }
}
for(let element of arr){
    console.log(element)
}