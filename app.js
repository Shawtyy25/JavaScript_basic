// Változók, típusok 

/* 
var, let -> let a = 23;
let -> block scope
var -> function scope
Állandó: 
const a = 10; block scope

Elemi típusok:
- string, `string (template) literal ${változó}`
- number: 3, 3.12 parseInt(), Number(), parseFloat(), (NaN egy number "érték")
- boolean
- undefined (érték és egyben típus) -> nincs definiálva, de majd lesz
- null -> Vagy null az értéke, vagy semmit adtak értékül a változónak

Operátor:
+ (túlterhelt), *, -, /, % (modulus), = (értékadó), ++ (inkrementálás), -- (dekrementálás)

összehasonlító operátorok:
<, >, <=, >=, ==, ===

Logikai operátorok:
negálás -> !, and -> &&, or -> ||

A JS gyengén típusos nyelv: ==, 3+"4" -> '34', 3*"4" -> 12

*/


// HTML elemek elérése:
const edit = document.querySelector('ul li:last-child a')
const card = document.querySelector('.card')

edit.textContent = 'Uj szöveg'
edit.style.backgroundColor = 'rgb(150,41,89)'
edit.style.display = 'none'
console.log(edit)

card.style.backgroundColor = 'red'

const floatDiv = document.querySelector('.float-div')

floatDiv.appendChild()