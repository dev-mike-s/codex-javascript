// 1.2 Variablen & Konstanten
//

// var, let, const
var alteVariable = "Dies ist eine alte Variable"; // Vermeide die Verwendung von var
let veränderbareVariable = "Dies ist eine veränderbare Variable";
const konstanteVariable = "Dies ist eine konstante Variable";

// Unterschied zwischen Blockscope (let/const) und Functionscope (var)
{
  let blockVariable = "Nur im Block sichtbar";
  const blockKonstante = "Auch nur im Block sichtbar";
  var funktionVariable = "Im gesamten Funktionsbereich sichtbar";
}
// console.log(blockVariable); // Fehler: blockVariable ist nicht definiert
// console.log(blockKonstante); // Fehler: blockKonstante ist nicht definiert
console.log(funktionVariable); // Funktioniert: "Im gesamten Funktionsbereich sichtbar"

// Wann man const verwendet (Standard)
// Verwende const, wenn der Wert nicht neu zugewiesen werden soll
const unveränderlich = "Dieser Wert bleibt gleich";
// unveränderlich = 'Neuer Wert'; // Fehler: Zuweisung an eine Konstante

// Reassigning vs. Immutable Variablen
let veränderlich = "Ursprünglicher Wert";
veränderlich = "Neuer Wert"; // Kein Problem

// Datentypen

// Primitive Typen
let stringTyp = "Text";
let numberTyp = 42;
let booleanTyp = true;
let nullTyp = null;
let undefinedTyp;
let symbolTyp = Symbol("einzigartig");
let bigintTyp = 1234567890123456789012345678901234567890n;

// Beispiel Symboltyp
const geheim = Symbol("geheim");
let daten = {
  öffentlich: "sichtbar",
  [geheim]: "versteckt",
};

for (let key in daten) {
  console.log(key); // nur "öffentlich"
}

console.log(Object.getOwnPropertySymbols(daten)); // [Symbol(geheim)]

// Referenztypen
let objektTyp = { key: "value" };
let arrayTyp = [1, 2, 3];
let funktionTyp = function () {
  return "Ich bin eine Funktion";
};

// Typeof-Operator
console.log(typeof stringTyp); // "string"
console.log(typeof numberTyp); // "number"
console.log(typeof booleanTyp); // "boolean"
console.log(typeof nullTyp); // "object" (bekannter Fehler in JavaScript)
console.log(typeof undefinedTyp); // "undefined"
console.log(typeof symbolTyp); // "symbol"
console.log(typeof bigintTyp); // "bigint"
console.log(typeof objektTyp); // "object"
console.log(typeof arrayTyp); // "object"
console.log(typeof funktionTyp); // "function"

// Dynamische Typisierung
let dynamisch = "Ich bin ein String";
dynamisch = 42; // Jetzt bin ich eine Zahl
