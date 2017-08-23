$(document).ready(function() {
	var randomNumber;
	var wins = 0;
	var losses = 0;
	var stones = []; //store random stone values
	var score = 0; //round score

//Randomly generate number to guess & numbers for stones (4 total)
function random(){
	//randomly generated number
	randomNumber = Math.floor(Math.random()*120) + 19;
		$("#random-number").html(randomNumber);

	//Random value for each stone
	for (i = 0; stones.length < 4; i++) {

		var stoneValue = Math.floor(Math.random()*12)+1;

		stones.push(stoneValue);
	}
}

random();

//check
console.log(randomNumber);
console.log(stones);

// - - - - - - - - - - - - - - - - - - - - //

function roundScore(){
	if (score === randomNumber){

//check
console.log('you win');	
		wins++;
		score = 0;
		$("#wins").html(wins);
		random(); //reset random numbers
	}	
	else if (score >= randomNumber){
//check
console.log('you lose');			
		losses++;
		score = 0;
		$("#losses").html(losses);		
		random(); //reset random numbers	
	}
}
// - - - - - - - - - - - - - - - - - - - - //

//Add random value of stone to each stone via id
	var mindStoneValue = $("#mind-stone");
		mindStoneValue.attr("data-storevalue", stones[0]);

	var powerStoneValue = $("#power-stone");
		powerStoneValue.attr("data-storevalue", stones[1]);

	var spaceStoneValue = $("#space-stone");
		spaceStoneValue.attr("data-storevalue", stones[2]);

	var timeStoneValue = $("#time-stone");
		timeStoneValue.attr("data-storevalue", stones[3]);

//Click functions
//mind-stone click function
	$("#mind-stone").click(function(){
		var value1 = ($(this).attr("data-storevalue"));
		value1 = parseInt(value1);

		score += value1;
		$("#score").text(score);

	roundScore();

//check
console.log(value1);
	});

//power-stone click function
	$("#power-stone").click(function(){
		var value2 = ($(this).attr("data-storevalue"));
		value2 = parseInt(value2);

		score += value2;
		$("#score").text(score);

	roundScore();

//check
console.log(value2);
	});

//space-stone click function
	$("#space-stone").click(function(){
		var value3 = ($(this).attr("data-storevalue"));
		value3 = parseInt(value3);

		score += value3;
		$("#score").text(score);

	roundScore();

//check
console.log(value3);
	});	

	//time-stone click function
	$("#time-stone").click(function(){
		var value4 = ($(this).attr("data-storevalue"));
		value4 = parseInt(value4);

		score += value4;
		$("#score").text(score);

	roundScore();

//check
console.log(value4);
	});	


});