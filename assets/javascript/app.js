var correct = 0;
var wrong = 0;

// $('#choice2') = true;
// $('#choice6') = true;

function count() {

    if (choice === true){
    	// $("#choice2, choice6, ").is(':checked')
	    correct++;
    // }else () { 
    // wrong++;
    // }
}
}


function results() {

	if (true){	
		$('#display').html('<h3>Correct Answers: ' + correct + '</h3>');
		// $('#display').html('<h3>Incorrect Answers: ' + wrong + '</h3>');
		$('#questions').hide();
		$('#show-number').hide();
	}if (true) {
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
