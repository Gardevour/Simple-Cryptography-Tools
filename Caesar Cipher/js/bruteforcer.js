import {
  alphabet,
  ShiftMessageWithKey,
} from "../../Generic assets/js/caesarCipher.js";

//Listens for button click on the bruteforcer.html
document.querySelector("#btnDecrypt").addEventListener("click", BruteForce);

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
