export const alphabet = [
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

//Get the shifted letter for the provided key
export function ShiftLetterWithKey(letterToShift, key) {
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
export function ShiftMessageWithKey(message, key) {
  let shiftedMessage = "";

  for (let i = 0; i < message.length; i++) {
    var letter = message[i];

    var shiftedLetter = ShiftLetterWithKey(letter, key);
    shiftedMessage += shiftedLetter;
  }

  return shiftedMessage;
}
