
var userEmail = prompt("please enter your Email")
var userpass = prompt("please enter your password")
var number_of_tries = 0
while (userEmail != "aa" || userpass != "11") {
    number_of_tries++
    if (number_of_tries < 3) {
        var userEmail = prompt(" enter your Email again")
        var userpass = prompt(" enter your password again")
    }
    else {
        alert("you tried too many times")
        break
    }

}

if (userEmail == "aa" && userpass == "11") {
    alert("successfully logged in")
    var num_of_questions = +prompt("please enter your numbers of questions")
    var operators = ["+", "-", "*", "/"]
    var score = 0

    for (var i = 1; i <= num_of_questions; i++) {
        var num1 = Math.floor(Math.random() * 10)
        var num2 = Math.floor(Math.random() * 10)
        var operation = operators[Math.floor(Math.random() * operators.length)];
        var userAnswer = prompt(`${i}. ${num1} ${operation} ${num2}`)

        if (operation == "+") {
           var CorrectAwnser = num1 + num2;

        }
        else if (operation == "-") {
           var CorrectAwnser = num1 - num2;

        }
        else if (operation == "*") {
          var  CorrectAwnser = num1 * num2;

        }
        else if (operation == "/") {
          var  CorrectAwnser = num1 / num2;

        }
        if  (userAnswer == CorrectAwnser){
            score++
        }
    }
 alert(`your score is : ${score}/${num_of_questions}`)


}