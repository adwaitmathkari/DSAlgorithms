function ArrayChallenge(arr) { 
    let n = arr[0]
    let arr1 = arr.slice(1)
    console.log(arr1, n)
    let final = []
    for (let i = 0; i < arr1.length; i++ ){
      if (i-n+1 < 0){
        final.push(findMedian(arr1.slice(0,i+1)))
      } else{ 
        final.push(findMedian(arr1.slice(i-n+1, i+1)))
      }
  
    }
    // code goes here  
    return final; 
  
  }
  
  let findMedian = (arr) => {
    let ln = arr.length;
    let sortedArr = arr.sort()
    if (ln %2 == 0) {
      let mid = ln/2 -1 
      return (sortedArr[mid] + sortedArr[mid+1])/2
    } else { 
      return sortedArr[(ln-1)/2]
    }
  
  }
  
  console.log([2,3,4].slice(0,0))
  // keep this function call here 
  console.log(ArrayChallenge([5,2,3,4]));