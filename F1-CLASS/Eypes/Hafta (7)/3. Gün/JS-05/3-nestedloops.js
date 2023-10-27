// * ============================================
// *            NESTED LOOPS
// * ============================================
console.log("** NESTED FOR **");

//? 10+10=20

// for (let row = 1; row <= 10; row++) {}
// for (let col = 1; col <= 10; col++) {}

//? 10*10=100

let result;
let line = "";

for (let row = 1; row <= 10; row++) {
  for (let col = 1; col <= 10; col++) {
    result = row * col;
    // line = line + result + "\t"; //? \t : bir tab bosluk ekle
    line += result + "\t";
  }
  line += "\n"; //? \t : yeni bir satıra geçirir
  //   console.log(line);
}
console.log(line);
