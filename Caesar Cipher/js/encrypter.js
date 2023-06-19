import {
  alphabet,
  ShiftMessageWithKey,
} from "../../Generic assets/js/caesarCipher.js";

window.onload = function () {
  FillSelect();
};

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

//Listens for button click on the encrypter.html
document.querySelector("#btnEncrypt").addEventListener("click", ConvertWithKey);

//Convert the entire message with the selected key
function ConvertWithKey() {
  let key = parseInt(document.getElementById("sltKey").value);
  let message = document.getElementById("txbInput").value.toLowerCase();
  let shiftedMessage = ShiftMessageWithKey(message, key);

  //Display result
  document.getElementById("txbResult").style.display = "block";
  document.getElementById("txbResult").value = shiftedMessage;
}
