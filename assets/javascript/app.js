var correct = 0;
var wrong = 0;

function count() {

    if (chosen){
    	$("#choice2").is(':checked')
	    correct++;
    }
    if (chosen){
    	$("#choice6").is(':checked')
	    correct++;
    }
}

console.log(count);

function results() {

	if (true){	
		$('#display').html('<h3>Correct Answers: ' + correct + '</h3>');
		// $('#display').html('<h3>Incorrect Answers: ' + wrong = '</h3>');
		$('#questions').hide();
		$('#show-number').hide();
	}else if (false){
		// $('#display').html(correct);
		$('#display').html('<h3>Incorrect Answers: ' + wrong + '</h3>');
		$('#questions').hide();
		$('#show-number').hide();
	} 

}  


var number = 121;

function run() {
    counter = setInterval(decrement, 1000);
}

function decrement() {
    number--;
    $('#show-number').html("<h3>Time Remaining: " + number + " seconds</h3>");
    if (number === 0) {
        stop();
        alert('Time is up!');
    }
}

function stop() {
    clearInterval(counter);
}

run();   

function init() {
    decrement();
}

window.onload = init;
