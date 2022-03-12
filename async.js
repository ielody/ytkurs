//Timeouts, intervals

 function timeo(a, b) {
 console.log('JavaScript er gøy,', a, b)
 }

const timeoutTest = setTimeout(timeo, 1500, 'eller hva', 'Ingeborg')
clearInterval(timeoutTest)


const intervalTest = setInterval(timeo, 2000, 'i', 'dag')
clearInterval(intervalTest)


//flower callback
function pickFlower() {
  //console.log('pick flowers')
}

function waterFlower() {
  //console.log('water flowers')
}

//waterFlower(pickFlower)

const timeoutFlower = setTimeout(pickFlower, 2000)
const timeoutVase = setTimeout(waterFlower, 2500)


// let order = (call_production) => {
//   console.log('order placed')
//   call_production()
// }

// let cooking = () => {
//   console.log('order received, starting to cook')
// }

// order(cooking)

//storage-back-end, kitchen-front-end

// let stocks = {
//   Fruits: ['strawberry', 'grapes', 'watermelon'],
//   liquid: ['water', 'ice'],
//   holder: ['cone', 'cup', 'stick'],
//   toppings: ['chocolate', 'almonds']
// }

// let order = (Fruit_name, call_production) => {

//   setTimeout(() => {
//     console.log(`${stocks.Fruits[Fruit_name]} was selected`)
//     call_production()
//   }, 1000)

// }

//Callback hell
// let cooking = () => {
//   setTimeout(() => {
//     console.log('started cutting fruit')

//     setTimeout(() => {
//       console.log('fruit is done')

//       setTimeout(() => {
//         console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)

//         setTimeout(() => {
//           console.log(`${stocks.Fruits[0]}, ${stocks.liquid[0]} and ${stocks.liquid[1]} was added to ${stocks.holder[1]}`)

//           setTimeout(() => {
//             console.log(`${stocks.toppings[1]} was added to the order`)
//           }, 2000)
//         }, 1500)
//       }, 1000)
//     }, 2000)
//   },1000)
// }

// order(0, cooking)


//Promise - create, fulfill/reject

let stocks = {
  Fruits: ['strawberry', 'grapes', 'watermelon'],
  liquid: ['water', 'ice'],
  holder: ['cone', 'cup', 'stick'],
  toppings: ['chocolate', 'almonds']
}

let is_shop_open = true

let order = (time, work) => {

  return new Promise((resolve, reject) => {

    if(is_shop_open) {
      setTimeout(()=> {
        resolve(work())
      }, time)
    } else {
      reject(console.log('our shop is closed'))
    }
  })
}

order(2000, () => console.log(`${stocks.Fruits[0]} was selected`))

.then(() => {
  return order(1000, () =>
    console.log('Production has started'))
})

.then(() => {
  return order (2000, () =>
    console.log('fruit is done'))
})

.then(() => {
  return order(1000, () =>
    console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} were added`))
  })

.then(() => {
  return order(1000, () => {
    console.log(`${stocks.toppings[1]} was added`)
  })
})
