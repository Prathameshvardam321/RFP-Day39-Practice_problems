let arr = [23,54,24,56,3,122,4677,8632,13213,211]
let temp=0;

        for ( let i=0;i<arr.length;i++){
            for (let j=0;j< arr.length-1;j++){
                if (arr[j]>arr[j+1]){
                    temp=arr[j];
                    arr[j]=arr[j+1];
                    arr[j+1]=temp;
                }
            }
        }
        console.log(" Sorted array is : ");
        for (let k=0;k<arr.length;k++){
            console.log(arr[k]+" ");
        }
        console.log("Second larget",arr[arr.length-2])
        console.log("Second smallest",arr[1])