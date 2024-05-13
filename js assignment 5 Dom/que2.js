function ageChange(event) {
    var ageInput = event.target.value;
    var errorsHolder = document.getElementById("errors-holder");
    var submitButton = document.querySelector("form button[type='submit']");

    if (ageInput < 5) {
      errorsHolder.innerText = 'You need to be at least 5 years old to participate';
      submitButton.disabled = true;
    } else {
      errorsHolder.innerText = '';
      submitButton.disabled = false;
    }
  }
  function handleSubmit(event) {
    event.preventDefault();

    var ageInput = parseInt(document.getElementById("q_age").value);
    var ownsPhoneCheckbox = document.getElementById("q_owns_phone").checked;
    var resultHolder = document.getElementById("result-holder");

    if (isNaN(ageInput) || ageInput === 0) {
      resultHolder.innerText = 'Please choose age';
      return;
    }

    if (ownsPhoneCheckbox) {
      if (ageInput < 13) {
        resultHolder.innerText = 'You are too young to have a phone';
      } else {
        resultHolder.innerText = 'Use your phone in moderation';
      }
    } else {
      if (ageInput < 13) {
        resultHolder.innerText = 'You will get a phone soon';
      } else {
        resultHolder.innerText = 'You should get a phone';
      }
    }
  }