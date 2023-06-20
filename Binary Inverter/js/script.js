//Listens for button click on the index.html
document.querySelector("#btnInvert").addEventListener("click", InvertMessage);

function InvertMessage() {
  console.log("Inverting message");
  let message = document.getElementById("txbInput").value.toLowerCase();
  let messageInBinary = "";

  //Loop through all characters in the message
  for (var i = 0; i < message.length; i++) {
    messageInBinary += message[i].charCodeAt(0).toString(2) + " ";
  }

  console.log(messageInBinary);
}
