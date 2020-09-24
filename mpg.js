let mpg = 0;
if (mpg <= 10) {
  console.log("gas guzzler");
} else if (mpg >= 11 && mpg <= 16) {
  console.log("Planet still frowns upon this, and so does your wallet");
} else if (mpg >= 17 && mpg <= 20) {
  console.log("it’s palpable");
} else if (mpg >= 21 && mpg <= 29) {
  console.log("Atmosphere smiles at your decision");
} else if (mpg >= 30 && mpg <= 35) {
  console.log("Not many gas stops will be taken");
} else if (mpg === 120) {
  console.log("if you are using the Tom Ogle fuel system, props");
} else if (mpg > 35) {
  console.log("The fish of the sea smile at your conservation");
}
