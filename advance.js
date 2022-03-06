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
console.log(sum(2, 3, 5))

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
console.log(curriedSum(2)(3)(5))

const add2 = curriedSum(2)
const add3 = add2(3)
const add5 = add3(5)
console.log(add5)





