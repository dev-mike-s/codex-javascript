// ============================================
// 2.1 BEDINGTE ANWEISUNGEN
// ============================================

// ============================================
// IF-ANWEISUNG (einfach)
// ============================================

let alter = 20;

if (alter >= 18) {
  console.log("Du bist volljährig"); // ✅ Wird ausgeführt
}

// Mehrere Statements im Block
if (alter >= 18) {
  console.log("Zugriff gewährt");
  console.log("Willkommen!");
}

// ============================================
// IF-ELSE (Entweder-Oder)
// ============================================

let temperatur = 15;

if (temperatur > 25) {
  console.log("Es ist warm");
} else {
  console.log("Es ist kühl"); // ✅ Wird ausgeführt
}

// Praktisches Beispiel: Gerade/Ungerade
let zahl = 7;

if (zahl % 2 === 0) {
  console.log(zahl, "ist gerade");
} else {
  console.log(zahl, "ist ungerade"); // ✅
}

// ============================================
// IF-ELSE IF-ELSE (Mehrere Bedingungen)
// ============================================

let punkte = 75;

if (punkte >= 90) {
  console.log("Note: A");
} else if (punkte >= 80) {
  console.log("Note: B");
} else if (punkte >= 70) {
  console.log("Note: C"); // ✅ Wird ausgeführt
} else if (punkte >= 60) {
  console.log("Note: D");
} else {
  console.log("Note: F");
}

// Wichtig: Nur der ERSTE zutreffende Block wird ausgeführt!
let score = 95;

if (score >= 50) {
  console.log("Bestanden"); // ✅ Stoppt hier, obwohl auch >= 90 zutrifft
} else if (score >= 90) {
  console.log("Sehr gut"); // Wird NICHT erreicht
}

// ✅ BESSER: Vom Spezifischen zum Allgemeinen
if (score >= 90) {
  console.log("Sehr gut"); // ✅ Wird ausgeführt
} else if (score >= 50) {
  console.log("Bestanden");
}

// ============================================
// VERSCHACHTELTE IF-STATEMENTS
// ============================================

console.log("\n--- Verschachtelte IFs ---");

let istAngemeldet = true;
let hatRechte = true;
let istAdmin = false;

if (istAngemeldet) {
  console.log("Benutzer ist angemeldet");

  if (hatRechte) {
    console.log("Zugriff gewährt"); // ✅

    if (istAdmin) {
      console.log("Admin-Panel verfügbar");
    } else {
      console.log("Standard-Benutzer"); // ✅
    }
  } else {
    console.log("Keine Rechte");
  }
} else {
  console.log("Bitte anmelden");
}

// ✅ BESSER: Kombiniere mit logischen Operatoren (lesbarer!)
if (istAngemeldet && hatRechte) {
  console.log("Zugriff gewährt (kombiniert)"); // ✅
}

if (istAngemeldet && hatRechte && istAdmin) {
  console.log("Admin-Zugriff");
}

// EARLY RETURN Pattern (häufig in Funktionen)
function prüfeZugriff(angemeldet, rechte) {
  if (!angemeldet) {
    console.log("Nicht angemeldet");
    return; // Früher Ausstieg
  }

  if (!rechte) {
    console.log("Keine Rechte");
    return; // Früher Ausstieg
  }

  // Hauptlogik nur wenn alles OK
  console.log("Zugriff gewährt");
}

prüfeZugriff(true, false);

// ============================================
// IF OHNE GESCHWEIFTE KLAMMERN
// ============================================

let x = 10;

// Funktioniert für EINE Zeile
if (x > 5) console.log("Größer als 5"); // ✅

// ⚠️ ABER VORSICHT: Kann zu Bugs führen!
if (x > 5) console.log("Zeile 1");
console.log("Zeile 2"); // ❌ Wird IMMER ausgeführt (nicht Teil des if!)

// ✅ BESTE PRAXIS: IMMER geschweifte Klammern verwenden!
if (x > 5) {
  console.log("Zeile 1");
  console.log("Zeile 2"); // ✅ Beide nur wenn Bedingung wahr
}

// ============================================
// TRUTHY & FALSY in IF-Bedingungen
// ============================================

console.log("\n--- Truthy/Falsy in Bedingungen ---");

// FALSY-WERTE: false, 0, "", null, undefined, NaN
let username = "Max";
if (username) {
  // String mit Inhalt = truthy
  console.log("Benutzername vorhanden:", username); // ✅
}

let emptyString = "";
if (emptyString) {
  // Leerer String = falsy
  console.log("Wird nicht ausgeführt");
} else {
  console.log("String ist leer"); // ✅
}

// Prüfe auf undefined/null
let user;
if (user) {
  console.log("User existiert");
} else {
  console.log("User ist undefined"); // ✅
}

// Prüfe auf 0
let count = 0;
if (count) {
  console.log("Count ist truthy");
} else {
  console.log("Count ist 0 (falsy)"); // ✅
}

// ⚠️ PROBLEM: 0 ist eine gültige Zahl, wird aber als falsy behandelt!
// ✅ LÖSUNG: Explizit vergleichen
if (count !== undefined && count !== null) {
  console.log("Count existiert:", count); // ✅ Auch bei 0!
}

// Oder mit Nullish Coalescing
let displayCount = count ?? "Keine Daten";
console.log("Display:", displayCount); // 0 (nicht "Keine Daten")

// ============================================
// VERGLEICHSOPERATOREN IN BEDINGUNGEN
// ============================================

console.log("\n--- Vergleiche in if ---");

let a = 5;
let b = "5";

// Lose Gleichheit (==) - NICHT EMPFOHLEN!
if (a == b) {
  console.log("5 == '5' ist true (Typ-Konvertierung)"); // ✅
}

// ✅ STRIKTE GLEICHHEIT (===) - IMMER VERWENDEN!
if (a === b) {
  console.log("Wird nicht ausgeführt");
} else {
  console.log("5 !== '5' (verschiedene Typen)"); // ✅
}

// Größer/Kleiner Vergleiche
let alter2 = 25;

if (alter2 >= 18 && alter2 < 65) {
  console.log("Arbeitsfähiges Alter"); // ✅
}

// ============================================
// LOGISCHE OPERATOREN IN BEDINGUNGEN
// ============================================

console.log("\n--- Logische Operatoren ---");

let istWochenende = true;
let hatUrlaub = false;

// UND (&&) - Beide müssen true sein
if (istWochenende && hatUrlaub) {
  console.log("Frei und entspannt");
} else {
  console.log("Mindestens eine Bedingung ist false"); // ✅
}

// ODER (||) - Mindestens eine muss true sein
if (istWochenende || hatUrlaub) {
  console.log("Freizeit!"); // ✅
}

// NICHT (!) - Negation
if (!hatUrlaub) {
  console.log("Kein Urlaub"); // ✅
}

// Komplexe Bedingungen
let stunde = 14;
let istWerktag = true;

if (stunde >= 9 && stunde < 17 && istWerktag) {
  console.log("Bürozeiten"); // ✅
}

// 💡 WICHTIG FÜR REACT:
// Conditional Rendering mit logischen Operatoren
// {isLoggedIn && <UserProfile />}
// {error || <DefaultMessage />}

// ============================================
// TERNÄRER OPERATOR (? :)
// ============================================

console.log("\n--- Ternärer Operator ---");

// SYNTAX: condition ? wertWennTrue : wertWennFalse

let alter3 = 20;
let status = alter3 >= 18 ? "Erwachsen" : "Minderjährig";
console.log("Status:", status); // "Erwachsen"

// VERGLEICH MIT IF-ELSE
let status2;
if (alter3 >= 18) {
  status2 = "Erwachsen";
} else {
  status2 = "Minderjährig";
}
console.log("Status 2:", status2); // "Erwachsen"

// Inline in console.log
console.log("Du bist", alter3 >= 18 ? "volljährig" : "minderjährig");

// In String-Templates
let name = "Max";
console.log(`Hallo ${name.length > 5 ? "langer" : "kurzer"} Name!`);

// VERSCHACHTELTE TERNÄRE OPERATOREN
let punkte2 = 75;
let note =
  punkte2 >= 90 ? "A" : punkte2 >= 80 ? "B" : punkte2 >= 70 ? "C" : punkte2 >= 60 ? "D" : "F";
console.log("Note:", note); // "C"

// ⚠️ Zu viele Verschachtelungen = unleserlich!
// ✅ Bei komplexer Logik: if-else verwenden!

// PRAKTISCHE ANWENDUNGEN
let userInput = "";
let finalValue = userInput ? userInput : "Standard";
console.log("Final Value:", finalValue); // "Standard"

// Oder kürzer mit ||
let finalValue2 = userInput || "Standard";
console.log("Final Value 2:", finalValue2); // "Standard"

// 💡 WICHTIG FÜR REACT:
// Ternärer Operator ist SEHR häufig in JSX!
// {isLoading ? <Spinner /> : <Content />}
// {error ? <ErrorMessage /> : null}
// className={isActive ? 'active' : 'inactive'}

// ============================================
// SWITCH-CASE ANWEISUNGEN
// ============================================

console.log("\n--- Switch-Case ---");

let wochentag = "Montag";

switch (wochentag) {
  case "Montag":
    console.log("Start der Woche"); // ✅
    break; // Wichtig! Sonst läuft es weiter
  case "Freitag":
    console.log("Fast Wochenende");
    break;
  case "Samstag":
  case "Sonntag": // Mehrere Cases für gleichen Code
    console.log("Wochenende!");
    break;
  default: // Optional: wenn nichts passt
    console.log("Ein normaler Tag");
}

// ⚠️ OHNE BREAK - Fall-Through!
console.log("\n--- Fall-Through Beispiel ---");

let note2 = "B";

switch (note2) {
  case "A":
    console.log("Ausgezeichnet");
  // Kein break! Fällt durch
  case "B":
    console.log("Gut"); // ✅
  // Kein break! Fällt durch
  case "C":
    console.log("Bestanden"); // ✅ Wird auch ausgeführt!
    break;
  case "D":
  case "F":
    console.log("Nicht bestanden");
    break;
}

// SWITCH mit Zahlen
let monat = 3;

switch (monat) {
  case 1:
    console.log("Januar");
    break;
  case 2:
    console.log("Februar");
    break;
  case 3:
    console.log("März"); // ✅
    break;
  case 12:
    console.log("Dezember");
    break;
  default:
    console.log("Anderer Monat");
}

// SWITCH vs. IF-ELSE
console.log("\n--- Switch vs. If-Else ---");

// ✅ SWITCH gut für: Viele exakte Vergleiche (===)
let farbe = "rot";

switch (farbe) {
  case "rot":
    console.log("Stopp"); // ✅
    break;
  case "gelb":
    console.log("Achtung");
    break;
  case "grün":
    console.log("Los");
    break;
}

// ✅ IF-ELSE gut für: Bereiche, komplexe Bedingungen
let score2 = 85;

if (score2 >= 90) {
  console.log("A");
} else if (score2 >= 80) {
  console.log("B"); // ✅ Einfacher als 10 case-Statements!
} else if (score2 >= 70) {
  console.log("C");
}

// SWITCH mit Strings (häufig bei Actions/Commands)
let command = "start";

switch (command) {
  case "start":
    console.log("Programm gestartet"); // ✅
    break;
  case "stop":
    console.log("Programm gestoppt");
    break;
  case "pause":
    console.log("Programm pausiert");
    break;
  case "reset":
    console.log("Programm zurückgesetzt");
    break;
  default:
    console.log("Unbekannter Befehl");
}

// 💡 WICHTIG FÜR REACT:
// Switch häufig in Reducers (Redux, useReducer)
// switch (action.type) {
//   case 'INCREMENT': return { count: state.count + 1 };
//   case 'DECREMENT': return { count: state.count - 1 };
//   case 'RESET': return { count: 0 };
//   default: return state;
// }

// ============================================
// GUARD CLAUSES (Defensive Programmierung)
// ============================================

console.log("\n--- Guard Clauses ---");

function verarbeiteDaten(daten) {
  // Guard Clause 1: Prüfe auf null/undefined
  if (!daten) {
    console.log("Keine Daten vorhanden");
    return;
  }

  // Guard Clause 2: Prüfe auf leeres Array
  if (daten.length === 0) {
    console.log("Leeres Array");
    return;
  }

  // Guard Clause 3: Prüfe auf falschen Typ
  if (!Array.isArray(daten)) {
    console.log("Keine gültige Liste");
    return;
  }

  // Hauptlogik nur wenn alle Prüfungen bestanden
  console.log("Verarbeite", daten.length, "Einträge");
  daten.forEach((item) => console.log("Item:", item));
}

verarbeiteDaten([1, 2, 3]); // ✅ Funktioniert
verarbeiteDaten(null); // Guard Clause 1
verarbeiteDaten([]); // Guard Clause 2

// ✅ VORTEIL: Code ist flacher, lesbarer
// ❌ Ohne Guard Clauses: Tiefe Verschachtelung!

// ============================================
// ZUSAMMENFASSUNG
// ============================================

/*
BEDINGTE ANWEISUNGEN:

IF-ELSE:
✅ if für einfache Bedingungen
✅ if-else für Entweder-Oder
✅ if-else if-else für mehrere Bedingungen
✅ Verschachteln möglich, aber nicht übertreiben
✅ IMMER geschweifte Klammern verwenden
✅ Vom Spezifischen zum Allgemeinen prüfen

TERNÄRER OPERATOR:
✅ condition ? wennTrue : wennFalse
✅ Perfekt für einfache Bedingungen
✅ Sehr häufig in JSX (React)
✅ Nicht zu tief verschachteln

SWITCH-CASE:
✅ Gut für viele exakte Vergleiche (===)
✅ break nicht vergessen (sonst Fall-Through)
✅ Mehrere Cases für gleichen Code möglich
✅ default für "alles andere"
✅ Häufig in Reducers (React)

VERGLEICHSOPERATOREN:
✅ IMMER === statt == verwenden
✅ !==, >, <, >=, <=
✅ Truthy/Falsy Werte beachten

LOGISCHE OPERATOREN:
✅ && (UND), || (ODER), ! (NICHT)
✅ Für komplexere Bedingungen
✅ Short-Circuit Evaluation nutzen

BEST PRACTICES:
✅ === statt == (immer!)
✅ Geschweifte Klammern immer verwenden
✅ Guard Clauses für defensive Programmierung
✅ Ternärer Operator für einfache Fälle
✅ if-else für komplexe Logik
✅ switch für viele exakte Vergleiche
✅ Klammern für Klarheit bei komplexen Bedingungen
*/

console.log("\n✅ 2.1 Bedingte Anweisungen abgeschlossen!");
