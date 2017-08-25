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

		//Generate random value for each stone
		for (i = 0; stones.length < 4; i++) {

			var stoneValue = Math.floor(Math.random()*12)+1;

			stones.push(stoneValue);
		}

		// //Add random value to each stone via id
		// var mindStoneValue = $("#mind-stone");
		// 	mindStoneValue.attr("data-storevalue", stones[0]);

		// var powerStoneValue = $("#power-stone");
		// 	powerStoneValue.attr("data-storevalue", stones[1]);

		// var spaceStoneValue = $("#space-stone");
		// 	spaceStoneValue.attr("data-storevalue", stones[2]);

		// var timeStoneValue = $("#time-stone");
		// 	timeStoneValue.attr("data-storevalue", stones[3]);
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
			$("#mind-stone").removeData();
			$("#power-stone").removeData();
			$("#space-stone").removeData();
			$("#time-stone").removeData();
			stones.length = 0; //empty array so loop can generate new numbers
			random(); //reset random numbers
	//check
	console.log(randomNumber);
	console.log(stones);			
		}	
		
		else if (score > randomNumber){
	//check
	console.log('you lose');			
			losses++;
			score = 0;
			$("#losses").html(losses);
			$("#mind-stone").removeData();
			$("#power-stone").removeData();
			$("#space-stone").removeData();
			$("#time-stone").removeData();
			stones.length = 0; //empty array so loop can generate new numbers
			random(); //reset random numbers

	//check
	console.log(randomNumber);
	console.log(stones);			
		}
	}	

	// - - - - - - - - - - - - - - - - - - - - //

	//TEST
	$("button").click(function(){
		var value;

		switch ( $("button").index(this)){
		case 0:
		$("#mind-stone").data("value1",stones[0]);
		value = $("#mind-stone").data("value1");
console.log(value);
		break;

		case 1:
		$("#power-stone").data("value2", stones[1]);
		value = $("#power-stone").data("value2");
console.log(value);
		break;

		case 2:
		$("#space-stone").data("value3", stones[2]);		
		value = $("#space-stone").data("value3");
console.log(value);		
		break;

		case 3:
		$("#time-stone").data("value4", stones[3]);				
		value = $("#time-stone").data("value4");
console.log(value);		
		break;
		}

	score += parseInt(value);
	$("#score").text(score);	
	roundScore();		

	});


	// - - - - - - - - - - - - - - - - - - - - //
	//mind-stone click function
	// $("#mind-stone").click(function(){
	// 	var value1 = ($(this).attr("data-storevalue"));
	// 	value1 = parseInt(value1);

	// 	score += value1;
	// 	$("#score").text(score);

	// roundScore();

	// });

	// //power-stone click function
	// $("#power-stone").click(function(){
	// 	var value2 = ($(this).attr("data-storevalue"));
	// 	value2 = parseInt(value2);

	// 	score += value2;
	// 	$("#score").text(score);

	// roundScore();

	// });

	// //space-stone click function
	// $("#space-stone").click(function(){
	// 	var value3 = ($(this).attr("data-storevalue"));
	// 	value3 = parseInt(value3);

	// 	score += value3;
	// 	$("#score").text(score);

	// roundScore();

	// });	

	// //time-stone click function
	// $("#time-stone").click(function(){
	// 	var value4 = ($(this).attr("data-storevalue"));
	// 	value4 = parseInt(value4);

	// 	score += value4;
	// 	$("#score").text(score);

	// roundScore();

	// });	

});