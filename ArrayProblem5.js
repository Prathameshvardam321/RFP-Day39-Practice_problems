let array = [1,3,7,8,-3,1,0,-1]
for(let i=0;i<array.length;i++){
    for(let j=i+1;j<array.length;j++){
        for(let k=i+1;k<array.length;k++){
                if(array[i]+array[j]+array[k]==0){
                    console.log(array[i],array[j],array[k])
                }
        }
    }
}