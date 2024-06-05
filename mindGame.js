function mindGame(number) {
    if (typeof number !== 'number') {
        console.log('please enter a number')
        return 'please enter a number'
    }

    const goonBy3 = number * 3
    const jogBy10 = goonBy3 + 10
    const vaggBy2 = jogBy10 / 2
    const biyogBy5 = vaggBy2 - 5
    console.log(biyogBy5)
    return mindGame
}
mindGame(5)
// ****** In mindGame function ,
// ****** first step :  the input value will be "*" multipliers by 3 ,
// ****** second step: the result got in first step, will be "+" add/plus by 10, 
// ****** third step: the result got in second step , will be "/" divided by 2,
// ****** fourth step: the result got in third step , will be "-" minus by 5,
// ****** last step: the result got in fourth step will be return as final/function value. 
