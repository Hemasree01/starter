// assignment 1
let country = "India";
let continent = "Asia";
let population = 13;
console.log(country);
console.log(continent);
console.log(population);

//asignment 2
let isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

//assignment 3
language = "telugu";
const finland = 600000;
let description =
  "Portugal is in Europe, and its 11 million people speak portuguese";
console.log(population / 2);
console.log((population += 1));
console.log(population > finland);
//assignment 4
console.log(`Portugal is in Europe and
its ${11} million people speak portuguese`);
if (population > 33) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(
    `${country}'s population is ${33 - population} million
      below average`
  );
}
// challange 1
let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;
let BMIMark = massMark / (heightMark * heightMark);
let BMIJohn = massJohn / (heightJohn * heightJohn);
let markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, markHigherBMI);
//challenge 2
if (BMIMark < BMIJohn) {
  console.log(`"John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!"`);
} else {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
}
//challange 3
let scoreDolphins = (96 + 108 + 89) / 3;
let scoreKoalas = (88 + 91 + 110) / 3;
console.log(scoreDolphins);
console.log(scoreKoalas);
if (scoreDolphins > scoreKoalas) {
  console.log(
    `Dolphins win the trophy by ${
      scoreDolphins - scoreKoalas
    } points on average of three runs.`
  );
} else if (scoreDolphins < scoreKoalas) {
  console.log("Koalas win the trophy b ");
} else {
  console.log("Both win the trophy");
}
//challenge 4
let day = "tuesday";
if (day === "monday") {
  console.log("plan course struture");
} else if (day === "tuesday") {
  console.log("list the recordings");
} else if (day === "wednesday" || "thursday") {
  console.log("record videos");
}
//challenge 5
const bill = 275;
let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
