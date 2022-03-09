//Scope: block, function, global(nested)

let a = 10
function outer() {
  let b = 20
  function inner() {
    let c = 30
    //console.log(a, b, c)
  }
  inner()
}
outer()

let navn = 'Sofia Lund'
function person() {
  let gate = 'Helmersstraat'
  let alder = 16
  function adresse() {
    let husnummer = 19
    let by = 'Amsterdam'
   //console.log(`${navn} er ${alder} år og adressen er ${gate} ${husnummer} i ${by}`)
  }
  adresse()
}
person()

function outer() {
  let counter = 5
  function inner() {
    counter++
    //console.log(counter)
  }
  return inner
}
const fn = outer()
fn()
fn()


//Function currying
//(function f(a,b,c) transforms, not call, to f(a)(b)(c))

function sum(a, b, c) {
  return a + b + c
}
//console.log(sum(2, 3, 5))

//argument hver for seg
function curry(fn) {
  return function(a) {
    return function(b) {
      return function(c) {
        return(a,b,c)
      }
    }
  }
}
const curriedSum = curry(sum)
//console.log(curriedSum(2)(3)(5))

const add2 = curriedSum(2)
const add3 = add2(3)
const add5 = add3(5)
console.log(add5)


function citytrip(sight, restaurant, pub) {
  return `See ${sight} in Paris, eat at ${restaurant} in Rome and have a drink at ${pub} in Amsterdam.`
}
console.log(citytrip('Eiffel tower', 'Trevi', 'OReillys'))

function sightseeing(fn) {
  return function (sight) {
    return function (restaurant) {
      return function (pub) {
        return (sight, restaurant, pub)
      }
    }
  }
}
const planning = sightseeing(citytrip)
console.log(planning('Eiffel tower')('Trevi')('OReillys'))

const plan1 = planning('Eiffel tower')
const plan2 = plan1('Trevi')
const plan3 = plan2('Oreillys')

console.log(plan3)


