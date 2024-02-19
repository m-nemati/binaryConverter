function baseConvert() {
  var rValue = document.getElementById("resultValue"); // for show value of converted

  // Get Inputs
  var inputNumber = document.getElementById("userInput").value;

  if (isNaN(inputNumber)) {
    document.getElementById("result").innerHTML =
      "لطفاً مقادیر صحیح را برای ورودی وارد نمایید.";
    return;
  }

  //Convert
}
