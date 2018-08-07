// Andrew Ton
// Assignment 4 - Crazy Cat Person
// game.js


$(document).ready(function() {

    // Create global variables
    var goal;
    var cat1;
    var cat2;
    var cat3;
    var cat4;
    var wins = 0;
    var losses = 0;
    var score = 0;

    startGame(); // initial start



    // On-click function, adds value to score, checks for win and loss conditions
    $(".container").on("click", ".isButton", function() {
        // console.log(this.value);
        score += parseInt(this.value);
        $("#scoreText").text(score);

        // Lose condition
        if (score > goal) {
            alert("you lose");
            losses++;
            $("#lossesText").text(losses);
            startGame();
        }
        else if (score === goal) {
            alert("you win");
            wins++;
            $("#winsText").text(wins);
            startGame();
        }
    });

    // Reset game function
    function startGame() {
        goal = Math.floor(Math.random() * 50) + 19;
        cat1 = Math.floor(Math.random()*12)+1;
        cat2 = Math.floor(Math.random()*12)+1;
        cat3 = Math.floor(Math.random()*12)+1;
        cat4 = Math.floor(Math.random()*12)+21; // Because you are super crazy if you have a tiger
        score = 0;

        // check values
        console.log("============");
        console.log(goal, cat1, cat2, cat3, cat4);
        console.log("============");

        //Set value to buttons
        $("#button1").val(cat1);
        $("#button2").val(cat2);
        $("#button3").val(cat3);
        $("#button4").val(cat4);

        //print goal and score
        $("#goalText").text(goal);
        $("#scoreText").text(score);
    }
});
