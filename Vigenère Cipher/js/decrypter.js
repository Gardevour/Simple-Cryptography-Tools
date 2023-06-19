import { alphabet } from "../../Generic assets/js/caesarCipher.js";
import { GetKeyStream } from "./common.js";

//Listens for button click on the encrypter.html
document
  .querySelector("#btnDecrypt")
  .addEventListener("click", StartDecryption);

function StartDecryption() {
  console.log("Start decryption");

  let key = document.getElementById("txbKey").value.toLowerCase();
  let message = document.getElementById("txbMessage").value.toLowerCase();
  let keyStream = GetKeyStream(key, message.length);
  let shiftedMessage = "";

  console.log("KeyStream: " + keyStream);

  //Loop through all characters in the message
  for (let i = 0; i <= message.length - 1; i++) {
    let messageLetter = String(message).charAt(i);
    let messageLetterIndex = alphabet.indexOf(messageLetter);

    //If messageLetterIndex is smaller than 0 it is not a letter, and can be added to the shiftedMessage in its current form
    if (messageLetterIndex < 0) {
      shiftedMessage += messageLetter;
    } else {
      let keyStreamChar = String(keyStream).charAt(i);
      let keyStreamCharIndex = alphabet.indexOf(keyStreamChar);

      //Manually perform ShiftLetterWithKey as it is a subtraction
      let key = messageLetterIndex - keyStreamCharIndex;

      //If larger than 0 shiftedLetter is found at that key
      if (key >= 0) {
        shiftedMessage += alphabet[key];
      }
      //else subtract negative numbers from alphabet length
      else {
        console.log("negative Key is: " + key);
        key = alphabet.length + key;
        console.log("After mod: " + key);
        shiftedMessage += alphabet[key];
      }
    }
  }

  //Display result
  document.getElementById("txbResult").style.display = "block";
  document.getElementById("txbResult").value = shiftedMessage;
}
