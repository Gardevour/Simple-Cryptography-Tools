export function GetKeyStream(key, messageLength) {
  let keyStream = "";
  let keyLength = key.length;

  //If the length of the key is the same as the messageLength, the keyStream is equal to the key.
  if (messageLength == keyLength) {
    keyStream = key;
  }
  //If the messageLength is smaller than the length of the key, only take the amount of characters equal to the message length as keyStream.
  else if (messageLength < keyLength) {
    keyStream = String(key).substr(0, messageLength);
  }
  //Check how often the can be repeated in the length of the message, then add them to the keyStream
  //Then check the remainder, and take the same amount of letters from the key to add to the keyStream
  else {
    let keyRepetitions = Math.floor(messageLength / keyLength);
    let KeyRemainder = messageLength % keyLength;

    //For each repetition of the key, add the key to the keystream
    for (let i = 1; i <= keyRepetitions; i++) {
      keyStream += String(key);
    }

    //Add the remainder to the keystream
    keyStream += String(key).substr(0, KeyRemainder);
  }

  return keyStream;
}
