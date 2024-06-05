function evenOdd (string){
    if (typeof string !=='string') {
        console.log('please enter a string')
        return 'please enter a string'
    }

    if (string.length %2 == 0) {
        console.log('even')
        return 'even'
      
    }
    else{
        console.log('odd')
        return 'odd'
    }
}
evenOdd('i always failed')

// ****** In "evenOdd" function ,
// ****** first step :  the input value length will divide by 2,
// ****** second step: if the "numerator" got in first step ,is  equal to "0 " it will return even", otherwise it will return "odd" 



