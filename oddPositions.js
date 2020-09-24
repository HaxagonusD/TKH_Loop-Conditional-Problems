const findOddPositions = (someArray) => {
  return someArray.filter((item, index) => index % 2 === 1);
};

let lunchArray = ["Burger", "Salad", "Lasagna", "Sushi", "Meatloaf"];
console.log(findOddPositions(lunchArray));
