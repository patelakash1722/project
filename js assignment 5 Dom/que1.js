function displayRandomNumber() {
    var randomNumber = Math.floor(Math.random() * 41) - 20; // Generate random number between -20 and 20
    document.getElementById("num").innerText = randomNumber;

    var resultDiv = document.getElementById("result");
    resultDiv.innerText = ""; // Clear previous result

    if (randomNumber < 0) {
      resultDiv.innerText = "Cold";
    } else {
      resultDiv.innerText = "Hot";
    }
  }