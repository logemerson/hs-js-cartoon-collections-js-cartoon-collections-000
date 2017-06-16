function dwarfRollCall(dwarves) {
  var numberedDwarvesString = '';
  dwarves.forEach((dwarf, index) => {
    numberedDwarvesString += `${index + 1}. ${dwarf} `;
  });
  return numberedDwarvesString;
}

function summonCaptainPlanet(planeteerCalls){
  var newCalls = [];
  for (var i = 0; i < planeteerCalls.length; i++){
    newCalls.push(`${planeteerCalls[i].toUpperCase}!`);
  }
  return newCalls;
}

function longPlaneteerCalls(words) {
  for (var i = 0; i < words.length; i++){
    if (words[i].length > 4){
      return true;
    }else {
      return false;
    }
  }
}

function findTheCheese (foods) {
  var cheesesFound = [];
  foods.forEach(function (food) {
    if (food === "cheddar"){
      cheesesFound.push(food);
    }else if (food === "gouda"){
      cheesesFound.push(food);
    }else if (food === "camembert"){
      cheesesFound.push(food);
    }
  });
  if (cheesesFound.length > 0){
    return cheesesFound[0];
  }else {
    return "no cheese!";
  }
}
