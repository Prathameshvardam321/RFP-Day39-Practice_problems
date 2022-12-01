let birthMap = new Map()
for(let i =1;i<=50;i++){
    let birthMonth = Math.floor(Math.random()*12)+1
    birthMap.set(i,birthMonth)
}
for(let [key,value] of birthMap){
    console.log(key,value)
}
console.log("All child from 1st month are : ")
Array.from(birthMap.values()).forEach((x,y)=>{if(x==1)console.log("Birth number",y+1)})