  function XO(str) {
    //variables to track how many x's and o's are in the string

    let x = 0;
    let o = 0;
    //using the toUpperCase method to make str case insensitive (all will be caps)
    let newStr = str.toUpperCase();
    // need to loop through each letter in the string being passed in
    for (let i = 0; i < newStr.length; i++) {
      let letter = newStr[i];
        //check if the current is an x or and o and increment the x/o count
      if (letter === "X") {
        x++;
      } else if (letter === "O") {
        o++;
      }
    }
    return x === o;
  }

  // clean version:
  function XO(str) {
    let x = 0;
    let o = 0;
    let newStr = str.toUpperCase();
    for (let i = 0; i < newStr.length; i++) {
      let letter = newStr[i];
      if (letter === "X") {
        x++;
      } else if (letter === "O") {
        o++;
      }
    }
    return x === o;
  }
