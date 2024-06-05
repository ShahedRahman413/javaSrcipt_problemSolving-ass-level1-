function gemsToDiamond(friend1, friend2, friend3) {
    if (typeof friend1!=='number') {
        console.log('please enter a object')
        return 'please enter a object'
    }
    if (typeof friend2!=='number') {
        console.log('please enter a object')
        return 'please enter a object'
    }
    if (typeof friend3!=='number') {
        console.log('please enter a object')
        return 'please enter a object'
    }
    const friend1Power =21;
    const friend2Power =32;
    const friend3Power =43;

    const friend1Diamond = friend1*friend1Power
    const friend2Diamond = friend2*friend2Power
    const friend3Diamond = friend3*friend3Power

    let totalDiamond = friend1Diamond+friend2Diamond+friend3Diamond
    if (totalDiamond > 1000*2) {
      totalDiamond -= 2000;
    }
    console.log(totalDiamond)
    return totalDiamond;
  }
   gemsToDiamond(20,200,50)
  
// ****** In "evenOdd" function ,
// ******  there is three input ,
// ******  the input value will multipliers with their  power and will be added as "total"
// ****** if "total" is greater than 1000's double, will minus by 2000 and it will be return




  