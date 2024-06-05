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
    return biyogBy5;
    }
    mindGame(44)