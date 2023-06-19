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
  let shiftedMessage = "";

  //Shift every letter in the message
  for (let i = 0; i < message.length; i++) {
    var letter = message[i];
    console.log("Shifting letter: " + letter);
    var shiftedLetter = ShiftWithKey(letter, key);
    console.log("Shifted to: " + shiftedLetter);
    shiftedMessage += shiftedLetter;
  }

  //Display result
  document.getElementById("txbResult").style.display = "block";
  document.getElementById("txbResult").value = shiftedMessage;
}

//Get the shifted letter for the provided key
function ShiftWithKey(letterToShift, key) {
  let letterIndex = alphabet.indexOf(letterToShift);
  let totalShiftIndex = letterIndex + key;

  //If the totalShiftIndex is larger than the alphabet, start add 0 and add the remaining numbers to get the true shift key.
  if (totalShiftIndex > alphabet.length - 1) {
    totalShiftIndex -= alphabet.length;
  }

  //Return character at the totalShiftIndex
  return alphabet[totalShiftIndex];
}

window.onload = function () {
  FillSelect();
};
