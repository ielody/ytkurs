//Scope: block, function, global(nested)
function sum(a, b, c) {
  return a + b + c
}
console.log(sum(2, 3, 5))

let a = 10
function outer() {
  let b = 20
  function inner() {
    let c = 30
    console.log(a, b, c)
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
   console.log(`${navn} er ${alder} år og adressen er ${gate} ${husnummer} i ${by}`)
  }
  adresse()
}
person()

function outer() {
  let counter = 5
  function inner() {
    counter++
    console.log(counter)
  }
  return inner
}
const fn = outer()
fn()
fn()








