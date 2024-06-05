function isLGSeven(number) {
    if (typeof number!=='number') {
        console.log('please enter a number')
        return 'please enter a number'
    }
    let difference = number - 7;
    if (difference < 7) {
        console.log(difference)
      return difference;
    } else {
        console.log(number*2)
      return number *2;
    }
  }

isLGSeven(15)

// ****** In "isLGSeven" function ,
// ****** first step :  the input value will be minus by 7, it is called difference 
// ****** second step: if the "difference" got in first step ,is less than 7 , it will return the "difference" , otherwise it will return the input value's double. 




 

