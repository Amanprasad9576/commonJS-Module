function LinearSearching(arr,val){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===val);
        return i;
    }
    return -1;
}

function BinarySearching(arr,val){
    let start= 0;
    let end=arr.length-1;
    let mid=Math.floor((start+end)/2);
    while(start<=end){
        if(arr[mid]===val) 
            return mid;
        else if(arr[mid]<val ) {
            return start=mid+1;
        }
        else{
           end=mid-1;
        }
    }
}
module.exports ={
    LinearSearching,
    BinarySearching
}
