import {
  alphabet,
  ShiftLetterWithKey,
} from "../../Generic assets/js/caesarCipher.js";

import { GetKeyStream } from "./common.js";

//Listens for button click on the encrypter.html
document
  .querySelector("#btnEncrypt")
  .addEventListener("click", StartEncryption);

function StartEncryption() {
  console.log("Start encryption");

  let key = document.getElementById("txbKey").value.toLowerCase();
  let message = document.getElementById("txbMessage").value.toLowerCase();
  let keyStream = GetKeyStream(key, message.length);
  let shiftedMessage = "";

  console.log("KeyStream: " + keyStream);

  //Loop through all characters in the message
  for (let i = 0; i <= message.length - 1; i++) {
    let messageLetter = String(message).charAt(i);

    let keyStreamChar = String(keyStream).charAt(i);
    let keyStreamCharIndex = alphabet.indexOf(keyStreamChar);

    let shiftedLetter = ShiftLetterWithKey(messageLetter, keyStreamCharIndex);
    shiftedMessage += shiftedLetter;
  }

  //Display result
  document.getElementById("txbResult").style.display = "block";
  document.getElementById("txbResult").value = shiftedMessage;
}
