$(document).ready(function(){

//start the game function
       $("#startButton").click(function(){

        //Hide starting screen
             $("#startButton").hide();
             $("#title").hide();
             $("#ruleSection").hide();


        //make questions and timer appear

            $("#timer").css("visibility", "visible");
            $("#questions").css("visibility", "visible");
            $("#done").css("visibility", "visible");

        //call timer function
            run();

         });
          
//timer function

      var interval;
      var time = 30;

      function run() {
        interval = setInterval (function(){
          decrement();
        }, 1000);
      }

//decrement function
      function decrement() {
        time--;

        $("#timeRemaining").html("<h2>Time Remaining: " + time + "</h2>");

        if (time === 0){
          stop();
        }
      }

//stop function
        function stop() {
          clearInterval(interval);
            $("#timer").css("display", "none");
            $("#questions").css("display", "none");
            $("#done").css("display", "none");
            $("#questions").css("display", "none");
            $("#done").css("display", "none");

            $("#endingTitle").css("visibility", "visible");
            $("#finalCorrect").css("visibility", "visible");
            $("#finalIncorrect").css("visibility", "visible");

            $("#finalCorrect").html("Correct Answers: " + correct);
            $("#finalIncorrect").html("Incorrect Answers: " + incorrect);
        }



var correct = 0;
var incorrect = 0;

//Correct counter
    $(".correct").click(function(){
      correct++;
      console.log(correct);
    })
//incorrect counter
    $(".incorrect").click(function(){
      incorrect++;
      console.log(incorrect);
    })



//done function
$("#done").click(function(){
  $("#timer").css("display", "none");
  $("#questions").css("display", "none");
  $("#done").css("display", "none");

  $("#endingTitle").css("visibility", "visible");
  $("#finalCorrect").css("visibility", "visible");
  $("#finalIncorrect").css("visibility", "visible");

  $("#finalCorrect").html("Correct Answers: " + correct);
  $("#finalIncorrect").html("Incorrect Answers: " + incorrect);



})

  


//Need to put edit html to reflect countdown
//Need to track correct and incorrect answers
//need to update screen when time runs out or done button is hit






});