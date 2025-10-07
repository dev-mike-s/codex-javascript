// ============================================
// 1.1 SYNTAX & BASISWISSEN - AUSFÜHRLICH
// ============================================

// ============================================
// CODE-STRUKTUR: STATEMENTS, SEMIKOLONS, CODEBLÖCKE
// ============================================

// STATEMENTS - vollständige Anweisungen
let name = "Max"; // Variable deklarieren
console.log("Hallo"); // Funktion aufrufen
let x = 5;
x = x + 1; // Berechnung durchführen

// SEMIKOLONS - JavaScript hat ASI (Automatic Semicolon Insertion)
// Semikolons sind oft optional
let a = 5;
let b = 10;
console.log(a + b); // Funktioniert! Ausgabe: 15

// ABER: Manchmal führt das zu Problemen!
let c = 5;
// [1, 2, 3].forEach(n => console.log(n))
// ❌ Error! JavaScript interpretiert: let c = 5[1, 2, 3]

// Beste Praxis: Semikolons verwenden (konsistent!)
let d = 5;
[1, 2, 3].forEach((n) => console.log(n)); // ✅ Sicher!

// STATEMENTS vs. EXPRESSIONS
// Statement (führt Aktion aus, gibt nichts zurück)
if (x > 5) {
  console.log("größer");
}

// Expression (ergibt einen Wert)
let result = x > 5 ? "größer" : "kleiner"; // Ternärer Operator
let sum = 2 + 3; // Arithmetische Expression
console.log("Result:", result);
console.log("Sum:", sum);

// 💡 WICHTIG FÜR REACT: JSX erlaubt nur Expressions, keine Statements!
// ❌ Geht nicht in JSX: <div>{if (true) { "Hallo" }}</div>
// ✅ Geht mit Expression: <div>{true ? "Hallo" : "Tschüss"}</div>

// ============================================
// CODEBLÖCKE - erzeugen eigenen Scope
// ============================================

// Codeblock in if-Statement
if (true) {
  let blockVar = "Nur hier verfügbar";
  console.log(blockVar); // ✅ "Nur hier verfügbar"
}
// console.log(blockVar); // ❌ ReferenceError! Variable existiert außerhalb nicht

// Codeblock in Schleife
for (let i = 0; i < 3; i++) {
  let loopVar = i;
  console.log("Loop:", loopVar); // ✅ 0, 1, 2
}
// console.log(loopVar); // ❌ ReferenceError!

// Standalone Codeblock (selten verwendet)
{
  let temp = "Temporär";
  console.log("Temp:", temp);
}
// console.log(temp); // ❌ ReferenceError!

// Block Scope vs. Function Scope Vergleich
{
  let blockScoped = "let/const sind block-scoped";
  var functionScoped = "var ist function-scoped";
}
// console.log(blockScoped); // ❌ ReferenceError
console.log(functionScoped); // ✅ "var ist function-scoped" - var ignoriert Blockgrenzen!

// ============================================
// KOMMENTARE
// ============================================

// Einzeiliger Kommentar - für kurze Erklärungen

/* 
   Mehrzeiliger Kommentar
   für längere Beschreibungen
   oder mehrere Zeilen Code
*/

/**
 * JSDoc-Kommentar (für Dokumentation)
 * Wird von IDEs erkannt und zeigt Hilfe an
 * @param {string} name - Der Name des Users
 * @returns {string} Begrüßungsnachricht
 */
function greet(name) {
  return `Hallo ${name}`;
}

// Kommentare für Debugging
console.log("Dieser Code läuft");
// console.log("Dieser Code ist temporär deaktiviert");

// Kommentare für TODOs
// TODO: Diese Funktion noch optimieren
// FIXME: Bug bei negativen Zahlen beheben
// HACK: Temporäre Lösung, später überarbeiten

// ⚠️ SCHLECHTE PRAXIS: Offensichtliches kommentieren
let age = 25; // Setze age auf 25 ← Überflüssig!

// ✅ GUTE PRAXIS: Warum, nicht was
let age2 = 25; // Minderjährige ausschließen

// ============================================
// CASE-SENSITIVITY (Groß-/Kleinschreibung)
// ============================================

// JavaScript unterscheidet STRENG zwischen Groß- und Kleinschreibung!

// Variablen
let username = "Max";
let userName = "Anna";
let UserName = "Tom";
// Alle drei sind unterschiedliche Variablen!

console.log(username); // "Max"
console.log(userName); // "Anna"
console.log(UserName); // "Tom"

// Funktionen
function sayHello() {
  return "Hi";
}
function SayHello() {
  return "Hello";
}
function sayhello() {
  return "Hey";
}
// Drei unterschiedliche Funktionen!

console.log(sayHello()); // "Hi"
console.log(SayHello()); // "Hello"
console.log(sayhello()); // "Hey"

// ❌ HÄUFIGER ANFÄNGERFEHLER
let myArray = [1, 2, 3];
// console.log(myarray);  // ❌ ReferenceError: myarray is not defined

// Keywords sind case-sensitive
const PI = 3.14; // ✅ const in Kleinbuchstaben
// Const pi = 3.14;  // ❌ SyntaxError: Unexpected identifier

// ============================================
// NAMING CONVENTIONS (Benennungsregeln)
// ============================================

// camelCase für Variablen und Funktionen (STANDARD!)
let firstName = "Max";
let userAge = 30;
function getUserData() {
  return { firstName, userAge };
}

// PascalCase für Klassen und Konstruktoren
class UserAccount {
  constructor(name) {
    this.name = name;
  }
}

// UPPER_CASE für Konstanten
const MAX_SIZE = 100;
const API_KEY = "abc123";
const DATABASE_URL = "mongodb://localhost";

// kebab-case NICHT möglich (Minus-Zeichen = Operator!)
// let user-name = "Max";  // ❌ SyntaxError
// Stattdessen:
let user_name = "Max"; // ✅ snake_case (in JS unüblich)
let userName2 = "Max"; // ✅ camelCase (bevorzugt!)

// 💡 WICHTIG FÜR REACT: Komponenten müssen mit Großbuchstaben beginnen!
// ✅ Richtig: function UserProfile() { return <div>Profile</div>; }
// ❌ Falsch: function userProfile() { return <div>Profile</div>; }
//            wird als HTML-Tag interpretiert!

// ============================================
// INTERPRETER vs. COMPILER
// ============================================

/*
GRUNDSÄTZLICHER UNTERSCHIED:

Kompilierte Sprache (z.B. C++, Java):
  Quellcode → Compiler → Maschinencode → Ausführung
  (Übersetzung VOR Ausführung)

Interpretierte Sprache (klassisch):
  Quellcode → Interpreter → Zeile für Zeile ausführen
  (Übersetzung WÄHREND Ausführung)

JAVASCRIPT nutzt BEIDES - JIT-Compilation (Just-In-Time):
  1. Parser liest den Code (Syntax-Check)
  2. Interpreter führt Code aus (schneller Start)
  3. JIT-Compiler optimiert häufig genutzten Code (bessere Performance)
  4. Optimierter Maschinencode wird ausgeführt
*/

// Beispiel: Häufig genutzte Funktion
function calculateSum(a, b) {
  return a + b;
}

// Bei vielen Aufrufen optimiert der JIT-Compiler diese Funktion
for (let i = 0; i < 10; i++) {
  calculateSum(i, i); // JIT erkennt: oft genutzt → optimieren!
}

// PRAKTISCHE AUSWIRKUNGEN:

// 1. Fehler werden zur LAUFZEIT erkannt
// console.log(nichtDefiniert);  // ReferenceError zur Laufzeit

// 2. Code kann dynamisch ausgeführt werden
let code = "console.log('Dynamisch ausgeführt')";
// eval(code);  // ⚠️ Wird zur Laufzeit interpretiert (UNSICHER!)

// 3. Kein Kompilierschritt nötig
// Code direkt im Browser ausführbar - einfach HTML-Datei öffnen!

// 4. Performance-Optimierung zur Laufzeit
// Moderne Engines (V8, SpiderMonkey) sind sehr schnell durch JIT

// ============================================
// VERGLEICH: JavaScript vs. TypeScript
// ============================================

/*
JavaScript:
  - Keine Typen
  - Fehler zur Laufzeit
  - Kein Build-Prozess nötig
  
TypeScript:
  - Mit Typen: let name: string = "Max"
  - Fehler beim Kompilieren (vor Ausführung!)
  - Wird zu JavaScript kompiliert:
    TypeScript → Compiler → JavaScript → Interpreter/JIT
*/

// ============================================
// ZUSAMMENFASSUNG & CHECKLISTE
// ============================================

/*
✅ Statements sind vollständige Anweisungen
✅ Semikolons oft optional, aber bei [, (, /, +, - am Zeilenanfang aufpassen
✅ Expressions ergeben Werte (wichtig für JSX!)
✅ Codeblöcke {} erzeugen eigenen Scope für let/const
✅ JavaScript ist case-sensitive - username ≠ userName
✅ Naming Conventions: camelCase (Standard), PascalCase (Klassen), UPPER_CASE (Konstanten)
✅ JavaScript nutzt JIT-Compilation (Mix aus Interpreter + Compiler)
✅ Fehler werden zur Laufzeit erkannt
✅ TypeScript fügt Kompilierschritt hinzu
*/

console.log("\n✅ Alle Beispiele ausgeführt - Syntax & Basiswissen abgeschlossen!");
