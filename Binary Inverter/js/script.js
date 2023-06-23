//Listens for button click on the index.html
document.querySelector("#btnInvert").addEventListener("click", InvertMessage);

function InvertMessage() {
  console.log("Inverting message");
  let message = document.getElementById("txbInput").value.toLowerCase();
  let messageInBinary = "";
  let invertedBinary = "";

  //Loop through all characters in the message
  for (var i = 0; i < message.length; i++) {
    messageInBinary += message[i].charCodeAt(0).toString(2) + " ";
  }

  //Invert binary string
  for (var i = 0; i < messageInBinary.length; i++) {
    var currentChar = messageInBinary[i];

    if (currentChar == "0") {
      invertedBinary += "1";
    } else if (currentChar == 1) {
      invertedBinary += "0";
    } else {
      invertedBinary += currentChar;
    }
  }

  console.log(messageInBinary);
  console.log(invertedBinary);
}
