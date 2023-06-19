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
}
