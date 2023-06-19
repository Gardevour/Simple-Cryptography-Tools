const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

//Populate the dropdown with all key shifts
function FillSelect() {
  let keySelect = document.getElementById("sltKey");
  let key = 0;

  //Generate a number for each letter in the alphabet to be used as modifier key
  for (let i = 0; i < alphabet.length - 1; i++) {
    key = i + 1;
    keySelect.options[keySelect.options.length] = new Option(key, key);
  }
}

//Convert the entire message with the selected key
function ConvertWithKey() {
  let key = parseInt(document.getElementById("sltKey").value);
  let message = document.getElementById("txbInput").value.toLowerCase();
  let shiftedMessage = ShiftMessageWithKey(message, key);

  //Display result
  document.getElementById("txbResult").style.display = "block";
  document.getElementById("txbResult").value = shiftedMessage;
}

//Get the shifted letter for the provided key
function ShiftWithKey(letterToShift, key) {
  let result = "";
  let letterIndex = alphabet.indexOf(letterToShift);

  //If letterIndex is smaller than 0, skip shifting
  if (letterIndex < 0) {
    result = letterToShift;
  } else {
    let totalShiftIndex = letterIndex + key;

    //If the totalShiftIndex is larger than the alphabet, start add 0 and add the remaining numbers to get the true shift key.
    if (totalShiftIndex > alphabet.length - 1) {
      totalShiftIndex -= alphabet.length;
    }

    //Return character at the totalShiftIndex
    result = alphabet[totalShiftIndex];
  }

  return result;
}

//Shift the entire message with the provided key
function ShiftMessageWithKey(message, key) {
  let shiftedMessage = "";

  for (let i = 0; i < message.length; i++) {
    var letter = message[i];

    var shiftedLetter = ShiftWithKey(letter, key);
    shiftedMessage += shiftedLetter;
  }

  return shiftedMessage;
}

//Try every possible key to decrypt the message
function BruteForce() {
  let message = document.getElementById("txbInput").value.toLowerCase();

  let table = document.getElementById("tblResults");
  let tblBody = table.createTBody();
  table.style.display = "block";

  //Loop through all keys
  for (let key = 1; key < alphabet.length; key++) {
    let shiftedMessage = ShiftMessageWithKey(message, key);

    //Create table row and cells for this key
    let row = tblBody.insertRow(); //Add key param
    let KeyCell = row.insertCell(0);
    let textCell = row.insertCell(1);

    //Populate row
    KeyCell.innerHTML = key;
    textCell.innerHTML = shiftedMessage;
  }
}
