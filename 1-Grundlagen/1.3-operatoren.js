// ============================================
// 1.3 OPERATOREN
// ============================================

// ============================================
// ARITHMETISCHE OPERATOREN
// ============================================

// GRUNDRECHENARTEN
let summe = 5 + 3; // Addition
console.log("5 + 3 =", summe); // 8

let differenz = 5 - 3; // Subtraktion
console.log("5 - 3 =", differenz); // 2

let produkt = 5 * 3; // Multiplikation
console.log("5 * 3 =", produkt); // 15

let quotient = 5 / 3; // Division
console.log("5 / 3 =", quotient); // 1.6666666666666667

let rest = 5 % 3; // Modulo (Rest der Division)
console.log("5 % 3 =", rest); // 2

let potenz = 5 ** 3; // Potenzierung (ES2016)
console.log("5 ** 3 =", potenz); // 125

// MODULO - Praktische Anwendungen
console.log("\n--- Modulo Beispiele ---");

// Gerade oder Ungerade prüfen
let zahl = 7;
console.log("7 ist", zahl % 2 === 0 ? "gerade" : "ungerade"); // ungerade

// Jeden 3. Durchlauf
for (let i = 0; i < 10; i++) {
  if (i % 3 === 0) {
    console.log(i, "ist durch 3 teilbar");
  }
}

// REST-DIVISION vs. GANZZAHL-DIVISION
console.log("\n--- Division Details ---");
console.log(10 / 3); // 3.3333... (Float-Division)
console.log(Math.floor(10 / 3)); // 3 (Ganzzahl-Division)
console.log(10 % 3); // 1 (Rest)

// INKREMENT & DEKREMENT
console.log("\n--- Inkrement & Dekrement ---");

let counter = 5;

// Post-Inkrement (erst verwenden, dann erhöhen)
console.log(counter++); // 5 (gibt 5 zurück, dann erhöht)
console.log(counter); // 6

// Pre-Inkrement (erst erhöhen, dann verwenden)
console.log(++counter); // 7 (erst erhöht, dann zurückgegeben)
console.log(counter); // 7

// Post-Dekrement
console.log(counter--); // 7 (gibt 7 zurück, dann verringert)
console.log(counter); // 6

// Pre-Dekrement
console.log(--counter); // 5 (erst verringert, dann zurückgegeben)
console.log(counter); // 5

// ⚠️ VORSICHT: String-Konkatenation vs. Addition
console.log("\n--- String + Number ---");
console.log(5 + 3); // 8 (Number Addition)
console.log("5" + 3); // "53" (String Konkatenation!)
console.log("5" + "3"); // "53" (String Konkatenation)
console.log(5 + 3 + "2"); // "82" (erst 5+3=8, dann "8"+"2"="82")
console.log("2" + 5 + 3); // "253" (von links: "2"+"5"="25", dann "25"+"3"="253")

// ============================================
// ZUWEISUNGSOPERATOREN
// ============================================

console.log("\n--- Zuweisungsoperatoren ---");

// EINFACHE ZUWEISUNG
let wert = 10;
console.log("Start:", wert); // 10

// ADDITION ASSIGNMENT (+=)
wert += 5; // Entspricht: wert = wert + 5
console.log("Nach += 5:", wert); // 15

// SUBTRAKTION ASSIGNMENT (-=)
wert -= 3; // Entspricht: wert = wert - 3
console.log("Nach -= 3:", wert); // 12

// MULTIPLIKATION ASSIGNMENT (*=)
wert *= 2; // Entspricht: wert = wert * 2
console.log("Nach *= 2:", wert); // 24

// DIVISION ASSIGNMENT (/=)
wert /= 4; // Entspricht: wert = wert / 4
console.log("Nach /= 4:", wert); // 6

// MODULO ASSIGNMENT (%=)
wert %= 4; // Entspricht: wert = wert % 4
console.log("Nach %= 4:", wert); // 2

// POTENZ ASSIGNMENT (**=)
wert **= 3; // Entspricht: wert = wert ** 3
console.log("Nach **= 3:", wert); // 8

// WEITERE ASSIGNMENT-OPERATOREN
let text = "Hallo";
text += " Welt"; // String-Konkatenation
console.log(text); // "Hallo Welt"

// 💡 WICHTIG FÜR REACT:
// Verwende KEINE Assignment-Operatoren für State!
// ❌ Schlecht: count += 1
// ✅ Gut: setCount(count + 1)

// ============================================
// VERGLEICHSOPERATOREN
// ============================================

console.log("\n--- Vergleichsoperatoren ---");

// LOSE GLEICHHEIT (==) - Konvertiert Typen!
console.log("5 == '5':", 5 == "5"); // ✅ true (String wird zu Number konvertiert)
console.log("0 == false:", 0 == false); // ✅ true (false wird zu 0)
console.log("'' == false:", "" == false); // ✅ true (beide werden zu 0)
console.log("null == undefined:", null == undefined); // ✅ true (Spezialfall)

// STRIKTE GLEICHHEIT (===) - Keine Typ-Konvertierung!
console.log("\n--- Strikte Gleichheit (EMPFOHLEN) ---");
console.log("5 === '5':", 5 === "5"); // ❌ false (Number !== String)
console.log("0 === false:", 0 === false); // ❌ false (Number !== Boolean)
console.log("'' === false:", "" === false); // ❌ false (String !== Boolean)
console.log("null === undefined:", null === undefined); // ❌ false

// ✅ BESTE PRAXIS: IMMER === verwenden!
console.log("5 === 5:", 5 === 5); // true
console.log("'Hallo' === 'Hallo':", "Hallo" === "Hallo"); // true

// LOSE UNGLEICHHEIT (!=)
console.log("\n--- Lose vs. Strikte Ungleichheit ---");
console.log("5 != '5':", 5 != "5"); // false (werden gleich konvertiert)
console.log("5 != 6:", 5 != 6); // true

// STRIKTE UNGLEICHHEIT (!==)
console.log("5 !== '5':", 5 !== "5"); // ✅ true (verschiedene Typen)
console.log("5 !== 6:", 5 !== 6); // true

// GRÖßER/KLEINER VERGLEICHE
console.log("\n--- Größer/Kleiner ---");
console.log("5 > 3:", 5 > 3); // true
console.log("5 < 3:", 5 < 3); // false
console.log("5 >= 5:", 5 >= 5); // true (größer oder gleich)
console.log("5 <= 5:", 5 <= 5); // true (kleiner oder gleich)

// ⚠️ VORSICHT bei String-Vergleichen
console.log("\n--- String-Vergleiche ---");
console.log("'10' > '9':", "10" > "9"); // ❌ false (lexikografisch: '1' < '9')
console.log("10 > 9:", 10 > 9); // ✅ true (numerisch)
console.log("'apple' < 'banana':", "apple" < "banana"); // true (alphabetisch)

// OBJEKT-VERGLEICHE (Referenzen!)
console.log("\n--- Objekt-Vergleiche ---");
let obj1 = { name: "Max" };
let obj2 = { name: "Max" };
let obj3 = obj1;

console.log("obj1 === obj2:", obj1 === obj2); // ❌ false (verschiedene Referenzen!)
console.log("obj1 === obj3:", obj1 === obj3); // ✅ true (gleiche Referenz)

// 💡 WICHTIG FÜR REACT:
// Objekte immer mit === vergleichen (Referenzgleichheit)
// Für tiefe Vergleiche: JSON.stringify() oder Bibliotheken wie lodash

// ============================================
// LOGISCHE OPERATOREN
// ============================================

console.log("\n--- Logische Operatoren ---");

let a = true;
let b = false;

// UND-OPERATOR (&&) - Beide müssen true sein
console.log("true && true:", true && true); // true
console.log("true && false:", true && false); // false
console.log("false && false:", false && false); // false
console.log("a && b:", a && b); // false

// ODER-OPERATOR (||) - Mindestens einer muss true sein
console.log("\ntrue || true:", true || true); // true
console.log("true || false:", true || false); // true
console.log("false || false:", false || false); // false
console.log("a || b:", a || b); // true

// NICHT-OPERATOR (!) - Negation
console.log("\n!true:", !true); // false
console.log("!false:", !false); // true
console.log("!a:", !a); // false
console.log("!!a:", !!a); // true (doppelte Negation = zu Boolean konvertieren)

// SHORT-CIRCUIT EVALUATION
console.log("\n--- Short-Circuit Evaluation ---");

// && stoppt beim ersten false
let result1 = false && console.log("Wird nicht ausgeführt");
console.log("Result:", result1); // false (console.log wird übersprungen)

let result2 = true && "Zweiter Wert";
console.log("Result:", result2); // "Zweiter Wert"

// || stoppt beim ersten true
let result3 = true || console.log("Wird nicht ausgeführt");
console.log("Result:", result3); // true

let result4 = false || "Zweiter Wert";
console.log("Result:", result4); // "Zweiter Wert"

// PRAKTISCHE ANWENDUNG: Default-Werte
console.log("\n--- Default-Werte mit || ---");
let username = "";
let displayName = username || "Gast"; // Wenn username leer, dann "Gast"
console.log("Display Name:", displayName); // "Gast"

let username2 = "Max";
let displayName2 = username2 || "Gast";
console.log("Display Name 2:", displayName2); // "Max"

// ⚠️ PROBLEM: || behandelt 0, "", false als falsy
let count = 0;
let displayCount = count || "Keine"; // ❌ 0 wird als falsy behandelt
console.log("Count:", displayCount); // "Keine" (nicht das was wir wollen!)

// ✅ LÖSUNG: Nullish Coalescing (??)
let displayCount2 = count ?? "Keine"; // Nur bei null/undefined
console.log("Count 2:", displayCount2); // 0 (richtig!)

// 💡 WICHTIG FÜR REACT:
// Conditional Rendering mit &&
// {isLoggedIn && <UserProfile />}
// {users.length > 0 && <UserList />}

// TRUTHY & FALSY WERTE
console.log("\n--- Truthy & Falsy Werte ---");

// FALSY-WERTE (werden zu false konvertiert):
console.log("Boolean(false):", Boolean(false)); // false
console.log("Boolean(0):", Boolean(0)); // false
console.log("Boolean(''):", Boolean("")); // false
console.log("Boolean(null):", Boolean(null)); // false
console.log("Boolean(undefined):", Boolean(undefined)); // false
console.log("Boolean(NaN):", Boolean(NaN)); // false

/*
zur Filterung von nur wahren Werten:
const items = [null, "Banane", "", "Apfel", undefined];
const validItems = items.filter(Boolean);
console.log(validItems); // ["Banane", "Apfel"]
*/

// TRUTHY-WERTE (alles andere wird zu true):
console.log("Boolean(1):", Boolean(1)); // true
console.log("Boolean('text'):", Boolean("text")); // true
console.log("Boolean([]):", Boolean([])); // true
console.log("Boolean({}):", Boolean({})); // true
console.log("Boolean('0'):", Boolean("0")); // true (String "0" ist truthy!)

// ============================================
// TERNÄRER OPERATOR (? :)
// ============================================

console.log("\n--- Ternärer Operator ---");

// SYNTAX: condition ? wertWennTrue : wertWennFalse

let alter = 20;
let status = alter >= 18 ? "Erwachsen" : "Minderjährig";
console.log("Status:", status); // "Erwachsen"

// VERGLEICH MIT IF-ELSE
let status2;
if (alter >= 18) {
  status2 = "Erwachsen";
} else {
  status2 = "Minderjährig";
}
console.log("Status 2:", status2); // "Erwachsen"

// VERSCHACHTELTE TERNÄRE OPERATOREN (sparsam verwenden!)
let punkte = 75;
let note = punkte >= 90 ? "A" : punkte >= 80 ? "B" : punkte >= 70 ? "C" : punkte >= 60 ? "D" : "F";
console.log("Note:", note); // "C"

// ⚠️ Zu viele Verschachtelungen = unleserlich!
// ✅ Besser: if-else oder switch verwenden bei komplexer Logik

// PRAKTISCHE ANWENDUNGEN
console.log("\n--- Praktische Beispiele ---");

// In String-Templates
let name = "Max";
console.log(`Hallo ${name.length > 5 ? "langer" : "kurzer"} Name!`);

// Für Default-Werte
let userInput = "";
let finalValue = userInput ? userInput : "Standard";
console.log("Final Value:", finalValue); // "Standard"

// Inline-Berechnungen
let preis = 100;
let rabatt = 10;
let endpreis = rabatt > 0 ? preis - (preis * rabatt) / 100 : preis;
console.log("Endpreis:", endpreis); // 90

// 💡 WICHTIG FÜR REACT:
// Ternärer Operator ist SEHR häufig in JSX!
// {isLoading ? <Spinner /> : <Content />}
// {error ? <ErrorMessage /> : null}
// className={isActive ? 'active' : 'inactive'}

// ============================================
// OPERATOR-RANGFOLGE (Precedence)
// ============================================

console.log("\n--- Operator-Rangfolge ---");

// Multiplikation vor Addition
console.log("2 + 3 * 4:", 2 + 3 * 4); // 14 (nicht 20!)

// Klammern ändern Rangfolge
console.log("(2 + 3) * 4:", (2 + 3) * 4); // 20

// && vor ||
console.log("true || false && false:", true || (false && false)); // true
// Wird gelesen als: true || (false && false)

// Klammern für Klarheit
console.log("(true || false) && false:", (true || false) && false); // false

// ✅ BESTE PRAXIS: Klammern verwenden für Klarheit!
let komplexerAusdruck = (alter >= 18 && alter < 65) || status === "Student";

// ============================================
// ZUSAMMENFASSUNG
// ============================================

/*
ARITHMETISCHE OPERATOREN:
✅ +, -, *, /, % (Modulo), ** (Potenz)
✅ ++ (Inkrement), -- (Dekrement)
✅ Vorsicht: "5" + 3 = "53" (String-Konkatenation!)

ZUWEISUNGSOPERATOREN:
✅ =, +=, -=, *=, /=, %=, **=
✅ Kurzschreibweise für wert = wert + x

VERGLEICHSOPERATOREN:
✅ IMMER === statt == verwenden (strikte Gleichheit)
✅ !==, >, <, >=, <=
✅ Objekte werden per Referenz verglichen

LOGISCHE OPERATOREN:
✅ && (UND), || (ODER), ! (NICHT)
✅ Short-Circuit Evaluation nutzen
✅ ?? (Nullish Coalescing) für bessere Default-Werte
✅ Truthy/Falsy Werte kennen

TERNÄRER OPERATOR:
✅ condition ? wennTrue : wennFalse
✅ Perfekt für JSX in React
✅ Nicht zu tief verschachteln

BEST PRACTICES:
✅ === statt == (immer!)
✅ Klammern für Klarheit verwenden
✅ ?? statt || für Default-Werte (wenn 0 oder "" gültig sind)
✅ Ternärer Operator für einfache Bedingungen
✅ if-else für komplexe Logik
*/

console.log("\n✅ 1.3 Operatoren abgeschlossen!");
