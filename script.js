var i = 0;
var life;
var score = 0;

//Click Start Button
$("#startButton").click(function(){
    //generate 1 random fruit at random position, and start falling
    generateFruit();
    //hide start button
    $(this).css("visibility","hidden");
    //show reset button
    $("#resetButton").css("visibility","visible");
    //show scorebar, set score = 0
    $("#scorebar").css("visibility","visible");
    score = 0;
    $("#score").text(score);
    //show lifebar, set life = 3
    $("#lifebar").css("visibility","visible");
    $(".heart").css("visibility","visible");
    life = 3;
});

//Click reset button
$("#resetButton").click(function(){
    //Reload the page
    location.reload();
});


function generateFruit(){
    //Set i-th new fruit
    i++;
    //Generate a random fruit at random position
    var fruitSet = ["apple", "banana", "orange", "pear"];
    var fruitId = Math.floor(4*Math.random());
    
    $("#main").append('<div>' + '<img class="fruit" id="fruit' + i + '" src="image/' + fruitSet[fruitId] + '.png"></div>');
    var x = Math.floor(930*Math.random());
    $("#fruit"+ i).css("left", x+'px');
    
    //Fruit falling down at random speed
    var y = 0;
    var fallSpeed = Math.ceil(10*Math.random());
    var counter = setInterval(function(){
        $("#fruit" + i).css("top", y+"px");
        y++;
        //when fruit reaches bottom
        if(y > 540){
            $("#fruit" + i).hide();
           clearInterval(counter);
            life--;
            $("#heart"+life).css("visibility","hidden");
            if(life<1){
                $("#gameOver").css("visibility","visible");
                $("#finalScore").text(score);
               }else{
                   generateFruit();
               };
           };
        
        //when mouseover the fruit
        $("#fruit"+ i).mouseover(function(){clearInterval(counter);                    
                                           });
    },fallSpeed);
    
    //Mouseover a fruit
    $(".fruit").mouseover(function(){
    $(this).hide('explode', { pieces: 4 }, 200);
    score++;
    $("#score").text(score);
    
    //Repeat the steps
    setTimeout(function(){generateFruit()},201);
});
}