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

$("#choice1").click(function() {});
