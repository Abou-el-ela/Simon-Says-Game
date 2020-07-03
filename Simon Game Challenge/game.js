var buttonColors = ["red", "green", "yellow", "blue"];
var gamePattern = [];

var userClickedPattern = [];
var randomChosenColor;
var start = false;
var level = 0;
var userChosenColors;


$(document).keypress(function(){
    if(!start){
        newSequence();
        start = true;
    }
})



$(".btn").click(function(){

    userChosenColors = $(this).attr("id");
    userClickedPattern.push(userChosenColors);
    playSound(userChosenColors);
    
    $("#" + userChosenColors).fadeOut(100).fadeIn(100);
    checkAnswer(userClickedPattern.length-1);
})



function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        if(gamePattern.length === userClickedPattern.length){            
            
            userClickedPattern = [];
            setTimeout(function(){
                newSequence();
            }, 1000);
            
        }
    }

    else{
        $("body").css("background-color", "red");
        playSound("wrong");
        $("h1").text("Game Over. Press Any Key to Restart");
        startOver();
    }
}




function newSequence(){
    userClickedPattern = [];
    $("body").css("background-color", "#011F3F")
    level++;
    var randomNumber = Math.floor(Math.random()*4);
    randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeOut(100).fadeIn(100);

    $("h1").text("Level " + level);
    playSound(randomChosenColor);
}




function startOver(){
    level = 0;
    gamePattern = [];
    start = false;
}



function playSound(soundEffect){
    var sound = new Audio("sounds/" + soundEffect + ".mp3");
    sound.play();
}
