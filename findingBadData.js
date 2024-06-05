function findingBadData(numbers) {
    if (typeof numbers!=='object') {
        console.log('please enter a object')
        return 'please enter a object'
    }
    
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] < 0) {
        count++;
      }
    }
    console.log(count)
    return count;
  }
const number=[-1,-4,-354,-634,24,24,252,245,-4]

findingBadData(number)


// ****** In "findingBadData" function ,
// ******  for loop will print every  single value from the array by it index number.
// ****** IF the index number is less then zero "0", it will be print as BadData. 
// ****** BadData will be count and the count number will be return.  



