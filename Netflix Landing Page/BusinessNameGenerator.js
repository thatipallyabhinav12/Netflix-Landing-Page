// function giveAdjective() {
//     const a = "Crazy"
//     const b = "Amazing"
//     const c = "Fire"

//     let random = Math.floor(Math.random() * 3 + 1)

//     if(random == 1) return a
//     else if(random == 2) return b
//     else return c
// }

// function giveShopName() {
//     const a = "Engine"
//     const b = "Foods"
//     const c = "Garments"

//     let random = Math.floor(Math.random() * 3 + 1)

//     if(random == 1) return a
//     else if(random == 2) return b
//     else return c
// }

// function giveAnotherWord() {
//     const a = "Bros"
//     const b = "Limited"
//     const c = "Hub"

//     let random = Math.floor(Math.random() * 3 + 1)

//     if(random == 1) return a
//     else if(random == 2) return b
//     else return c
// }

// console.log(`${giveAdjective()} ${giveShopName()} ${giveAnotherWord()}`);


// delete arr[2]
// console.log(arr.concat([5,6,7,8], [1,2,3]));
// console.log(arr.splice(1,0,222,222,222));
// console.log(arr);



let arr = [1, 2, 3, 4]

// let newA = arr.map((e, i) => {
//     return e*i
// })

// console.log(arr.filter(e => {
//     if(e > 2) {
//         return true
//     }
//     return false
// }));

const red = (a, b) => {
    return a * b
}

// console.log(arr.reduce(red));

function fact(size) {
    let a = Array.from(Array(size+1).keys())
    const c = a.slice(1,).reduce((a, b) => {
        return a * b
    })

    console.log(c);
}

fact(5)









