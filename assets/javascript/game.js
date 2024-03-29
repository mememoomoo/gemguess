//Set up game
$(document).ready(function () {

    //Assign Random Numbers for Gem and Goal

    var goalNumber = Math.floor(Math.random() * 101 + 19);
    var gemOne = Math.floor(Math.random() * 11 + 1);
    var gemTwo = Math.floor(Math.random() * 11 + 1);
    var gemThree = Math.floor(Math.random() * 11 + 1);
    var gemFour = Math.floor(Math.random() * 11 + 1);

    //Score Board

    var gemTotal = 0;
    var wins = 0;
    var losses = 0;

    $("#userScore").text("Score: " + gemTotal);
    $("#wins").text("Wins: " + wins);
    $("#losses").text("Losses: " + losses);
    $("#goalNumber").text("Goal: " + goalNumber);

    //Gem Clicks

    $("#gemOne").click(function () {
        gemTotal = gemTotal + gemOne;
        $("#userScore").text("Score: " + gemTotal);
        winLoss();
    })

    $("#gemTwo").click(function () {
        gemTotal = gemTotal + gemTwo;
        $("#userScore").text("Score: " + gemTotal);
        winLoss();
    })

    $("#gemThree").click(function () {
        gemTotal = gemTotal + gemThree;
        $("#userScore").text("Score: " + gemTotal);
        winLoss();
    })

    $("#gemFour").click(function () {
        gemTotal = gemTotal + gemFour;
        $("#userScore").text("Score: " + gemTotal);
        winLoss();
    })

    //Win/Loss

    function winLoss() {
        if (gemTotal === goalNumber) {
            wins++;
            $("#wins").text("Wins: " + wins);
            $("#winnerLoser").text("You Win!");
            reset();
        } else if (gemTotal > goalNumber) {
            losses++;
            $('#losses').text('Losses: ' + losses);
            $("#winnerLoser").text("You Lose!");
            reset();
        }
    }

    //Reset Game

    function reset() {

        goalNumber = Math.floor(Math.random() * 101 + 19);
        gemOne = Math.floor(Math.random() * 11 + 1);
        gemTwo = Math.floor(Math.random() * 11 + 1);
        gemThree = Math.floor(Math.random() * 11 + 1);
        gemFour = Math.floor(Math.random() * 11 + 1);
        gemTotal = 0;

        $("#userScore").text("Score: " + gemTotal);
        $("#wins").text("Wins: " + wins);
        $("#losses").text("Losses: " + losses);
        $("#goalNumber").text("Goal: " + goalNumber);
        setTimeout(function(){
            $("#winnerLoser").empty("");
        }, 3000);
    }

});