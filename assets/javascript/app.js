var correct = 0;
var wrong = 0;

$("choice2").is(':checked');
$("choice6").is(':checked');

function results() {
	if (true){
		correct++;	
		$('#display').html(correct);
		// $('#display').html(wrong);
		$('#questions').hide();
		$('#show-number').hide();

	}
	if (false){
		wrong--;
		// $('#display').html(correct);
		$('#display').html(wrong);
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
