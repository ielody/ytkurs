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
  console.log('pick flowers, and get vase')
}

function waterFlower() {
  console.log('water flowers')
}

//waterFlower(pickFlower)

const timeoutFlower = setTimeout(pickFlower, 2000)
const timeoutVase = setTimeout(waterFlower, 2500)


let order = (call_production) => {
  console.log('order placed')
  call_production()
}

let cooking = () => {
  console.log('order received, starting to cook')
}

order(cooking)

//storage-back-end, kitchen-front-end


//Promise - create, fulfill/reject
